import {DownloadButton} from 'components/DownloadButton';
import {AppleIcon, PlaymarketIcon} from 'components/Icons';

import * as S from './styles';

export const ComingSoon = () => {
  return (
    <S.Wrapper>
      <S.ButtonsWrapper>
        <DownloadButton title="App Store" icon={<AppleIcon />} />
        <DownloadButton title="Google play" icon={<PlaymarketIcon />} />
      </S.ButtonsWrapper>
      <S.ComingSoon>Coming soon on iPhone and Android devices</S.ComingSoon>
    </S.Wrapper>
  );
};
