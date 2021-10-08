import axios from 'axios';
import { FormButton } from 'components/Button';
import { ThemingContext } from 'context';
import { useTheming } from 'hooks';
import { useContext, useState } from 'react';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Status = {
  submitted: boolean;
  submitting: boolean;
  info: { error: boolean; msg: null | string };
};
type Props = Pick<IHomeTranslations, 'newsletter'>;

const Newsletter = ({
  title,
  description,
  formPlaceholder,
  formButton,
}: Props['newsletter']) => {
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
  const { theme } = useContext(ThemingContext);

  return (
    <S.Wrapper id="newsletter" isDark={theme.value.title === 'dark'}>
      <S.Container>
        <h3>{title}</h3>
        <p>{description}</p>
        <form onSubmit={handleOnSubmit}>
          <S.FormWrapper>
            <input
              id="email"
              type="email"
              placeholder={formPlaceholder}
              aria-label={formPlaceholder}
              aria-describedby="button-addon2"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <FormButton content={formButton} icon="Send" type="submit" />
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
