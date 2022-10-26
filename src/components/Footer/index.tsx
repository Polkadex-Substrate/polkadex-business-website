import {Icon, Polkadex, ThemeSwitcher} from 'components';
import {IHomeTranslations} from 'translations';

import {Container} from '../Container/Container';
import * as S from './styles';

type Props = {
  full?: boolean;
} & Pick<IHomeTranslations, 'footer'>;

const Footer = ({
  rowLinks,
  copyright,
  bottomLinks,
  full = true,
}: Props['footer']) => (
  <Container>
    <S.Wrapper>
      <S.Row>
        {full && (
          <>
            <S.Col>
              <S.LogoWrapper>
                <Polkadex />
              </S.LogoWrapper>
              {/* <LanguageSelector /> */}
            </S.Col>
            <S.LinkWrapper>
              <S.Col>
                <div>
                  <h5>{rowLinks.polkadex.title}</h5>
                  <ul>
                    {rowLinks.polkadex.links.map((item, index) => (
                      <li key={index}>
                        <a href={`#${item.href}`}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>{rowLinks.community.title}</h5>
                  <ul>
                    {rowLinks.community.links.map((item, index) => (
                      <li key={index}>
                        <a href={item.href}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </S.Col>
              <S.Col>
                <div>
                  <h5>{rowLinks.resources.title}</h5>
                  <ul>
                    {rowLinks.resources.links.map((item, index) => (
                      <li key={index}>
                        <a href={item.href}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5>{rowLinks.products.title}</h5>
                  <ul>
                    {rowLinks.products.links.map((item, index) => (
                      <li key={index}>
                        <a href={item.href}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </S.Col>

              <S.Col>
                <div>
                  <h5>{rowLinks.company.title}</h5>
                  <ul>
                    {rowLinks.company.links.map((item, index) => (
                      <li key={index}>
                        <a href={item.href}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </S.Col>
              <S.Col />
            </S.LinkWrapper>
          </>
        )}
      </S.Row>
      <S.Row>
        <S.Col>
          <S.Copyright>{copyright}.</S.Copyright>
          <ul>
            {bottomLinks.map((item, index) => (
              <S.CopyRightsLinks key={index}>
                <a href={item.href}>{item.title}</a>
              </S.CopyRightsLinks>
            ))}
          </ul>
        </S.Col>
        <S.Col>
          <S.SocialWrapper>
            <Icon name="Twitter" link="https://twitter.com/polkadex" />
            <Icon name="Medium" link="https://polkadex.medium.com/" />
            <Icon name="Telegram" link="https://t.me/Polkadex" />
            <Icon
              name="Youtube"
              link="https://www.youtube.com/channel/UC6fXRDT4lLKlXG3gP0PP06Q"
            />
            <Icon
              name="LinkedIn"
              link="https://www.linkedin.com/company/69690544"
            />
            <Icon name="Reddit" link="https://www.reddit.com/r/polkadex" />
          </S.SocialWrapper>
          <ThemeSwitcher />
        </S.Col>
      </S.Row>
    </S.Wrapper>
  </Container>
);

export default Footer;
