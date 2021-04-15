import HCaptcha from '@hcaptcha/react-hcaptcha';
import axios from 'axios';
import { FormButton } from 'components/Button';
import { useRef, useState } from 'react';

import * as S from './styles';

type Status = {
  submitted: boolean;
  submitting: boolean;
  info: { error: boolean; msg: null | string };
};

const Newsletter = () => {
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: '',
  });

  const hcaptchaRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Execute the hCaptcha when the form is submitted
    hcaptchaRef.current.execute();
  };

  const onHCaptchaChange = async (captchaCode: string) => {
    if (!captchaCode) {
      setStatus({
        ...status,
        info: { error: true, msg: 'Captcha Empty' },
      });
      return;
    }
    try {
      await axios({
        url: '/api/register',
        method: 'POST',
        data: {
          email: inputs.email,
          captcha: captchaCode,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

      await axios({
        method: 'POST',
        url: `https://formspree.io/f/${process.env.FORMSPREE}`,
        data: inputs,
      });

      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: 'Thank you, now you are on our list.',
        },
      });
      setInputs({ email: '' });
    } catch (error) {
      setStatus({
        ...status,
        info: { error: true, msg: error.message },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <h3>Subscribe to the newsletter</h3>
        <p>Hear about Polkadex updates and events !</p>{' '}
        <HCaptcha
          id="test"
          ref={hcaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
          onVerify={onHCaptchaChange}
          size="invisible"
          theme="dark"
        />
        <form onSubmit={handleSubmit}>
          <S.FormWrapper>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="button-addon2"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />

            <FormButton content="Subscribe" icon="send" type="submit" />
          </S.FormWrapper>
        </form>
        {status.info.error && (
          <S.MessageBox>
            <p> Error: {status.info.msg} </p>
          </S.MessageBox>
        )}
        {!status.info.error && status.info.msg && (
          <S.MessageBox>
            <p> {status.info.msg} </p>
          </S.MessageBox>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Newsletter;
