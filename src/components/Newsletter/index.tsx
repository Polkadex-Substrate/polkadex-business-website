import axios from 'axios';
import { FormButton } from 'components/Button';
import { useState } from 'react';

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

<<<<<<< Updated upstream
  const hcaptchaRef = useRef(null);

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        email: '',
      });
    } else {
      setStatus({
        ...status,
        info: { error: true, msg },
      });
    }
  };

=======
>>>>>>> Stashed changes
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    try {
      await axios({
        method: 'POST',
        url: 'https://formspree.io/f/xdoyknbg',
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

  return (
    <S.Wrapper id="newsletter">
      <S.Container>
        <h3>Subscribe to the newsletter</h3>
        <p>Hear about Polkadex updates and events !</p>
        <form onSubmit={handleOnSubmit}>
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
