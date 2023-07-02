import * as S from './styles';

export const AlertDiscord = () => {
  return (
    <S.Alert>
      <S.Official>
        <p>Official domain</p>
        <img src="/img/badge.svg" alt="Official polkadex website" />
      </S.Official>
      <S.Message>
        <S.MessageWrapper>
          <img src="/img/discordAlert.svg" alt="Discord logo with alert" />
          <S.MessageContainer>
            <h3>Please be aware</h3>
            <p>
              The{' '}
              <span>
                Polkadex Discord server has been temporarily compromised
              </span>{' '}
              and malignant actors are sharing misleading information and links
              in various channels. Please stay away from the Polkadex Discord
              and be sure{' '}
              <span>not to click any links until further notice</span>. Last but
              not least, let other Polkadexers know to keep them safe!
            </p>
          </S.MessageContainer>
        </S.MessageWrapper>
      </S.Message>
    </S.Alert>
  );
};
