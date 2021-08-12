import { Icon, Logo, ThemeSwitcher } from 'components';
import { LanguageSelector } from 'components/LanguageSelector';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'footer'>;

const Footer = ({ rowLinks, copyright, bottomLinks }: Props['footer']) => (
  <S.Wrapper>
    <S.Row>
      <S.Col>
        <Logo />
        {/* <LanguageSelector /> */}
      </S.Col>
      <S.Col>
        <div>
          <h5>{rowLinks.polkadex.title}</h5>
          <ul>
            {rowLinks.polkadex.links.map((item) => (
              <li>
                <a href={`#${item.href}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>{rowLinks.community.title}</h5>
          <ul>
            {rowLinks.community.links.map((item) => (
              <li>
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
            {rowLinks.resources.links.map((item) => (
              <li>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>{rowLinks.products.title}</h5>
          <ul>
            {rowLinks.products.links.map((item) => (
              <li>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </S.Col>
      <S.Col />
    </S.Row>
    <S.Row>
      <S.Col>
        <span>{copyright}.</span>
        <ul>
          {bottomLinks.map((item) => (
            <li>
              <a href={item.href}>{item.title}</a>
            </li>
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
        {/* <ThemeSwitcher /> */}
      </S.Col>
    </S.Row>
  </S.Wrapper>
);

export default Footer;
