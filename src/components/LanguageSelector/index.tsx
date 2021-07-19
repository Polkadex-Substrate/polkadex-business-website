import { Icon } from 'components/Icon';
import { useRouter } from 'next/router';

import * as S from './styles';

export const LanguageSelector = () => {
  const router = useRouter();
  return (
    <S.Wrapper>
      <Icon name="Translate" background="transparent" />
      <select
        onChange={(e) => router.push('/', '/', { locale: e.target.value })}
      >
        <option disabled>Choose your language</option>
        <option value="en-US">English</option>
        <option value="zh-CN">Chinese</option>
        <option value="es-ES">Spanish</option>
      </select>
    </S.Wrapper>
  );
};
