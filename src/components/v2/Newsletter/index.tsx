import axios from 'axios';
import * as Icons from 'components/Icons';
import { useAnimation } from 'hooks';
import { useState } from 'react';

import * as S from './styles';

type Status = {
  submitted: boolean;
  submitting: boolean;
  info: { error: boolean; msg: null | string };
};

export const Newsletter = ({
  title = 'Stay in the loop',
  description = 'Subscribe to the Polkadex newsletter',
}) => {
  const animationProps = useAnimation({ duration: 0.5 });
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: '',
  });

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
        url: 'https://formspree.io/f/mrgolonn',
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
    <S.Wrapper {...animationProps}>
      <S.Container>
        <S.ImageWrapper>
          <Icons.Airplane />
        </S.ImageWrapper>
        <S.Title>
          <h2>{title}</h2>
          <p>{description}</p>
        </S.Title>
        <form onSubmit={handleOnSubmit}>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            aria-describedby="button-addon2"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
          <button type="submit">Subscribe</button>
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
