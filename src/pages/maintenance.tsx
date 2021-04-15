import Icon from 'components/Icon';
import * as S from '../styles/maintenance';
const Maintenance = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleContainer>
          <S.TitleWrapper>
               <h1>We’re improving your Experience</h1>
          <p> We’ll be back up and running again shortly. Please check out our social channels for further update! </p>
          </S.TitleWrapper>
       
          <S.SocialIcons>
            <Icon
              name="twitter"
              alt="Twitter Logo"
              link="https://twitter.com/polkadex"
            />
            <Icon
              name="medium"
              alt="Medium Logo"
              link="https://polkadex.medium.com/"
            />
            <Icon
              name="telegram"
              alt="Telegram Logo"
              link="https://t.me/Polkadex"
            />
          </S.SocialIcons>
        </S.TitleContainer>
        <S.ImageContainer>
          <img src="/img/Maintenance.svg" alt="Maintenance illustration"/>
        </S.ImageContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default Maintenance