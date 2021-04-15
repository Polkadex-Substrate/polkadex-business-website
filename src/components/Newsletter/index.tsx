import axios from 'axios';
import { FormButton } from 'components/Button';
import { useState } from 'react';

import * as S from './styles';

// type ResponseServer = {
//   ok: boolean;
//   msg: string;
// };

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
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mrgolonn',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <S.Wrapper>
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
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </S.Container>
    </S.Wrapper>
  );
};

export default Newsletter;
