import * as Icons from 'components/Icons';

import * as S from './styles';

export const Vision = () => {
  return (
    <S.Wrapper id="vision">
      <S.Container>
        <S.ImgHero>
          <Icons.PolkadexVision />
        </S.ImgHero>
        <S.Aside>
          <h2>Reinventing the things</h2>
          <p>
            Facing the complexity and bureaucracy of today&apos;s centralized
            exchanges and giving people back control over their assets might
            seem like an absurd idea, right? But it is exactly in this scenario
            that the Polkadex was born. We fight this through simple and
            transparent products and experiences: a fully decentralized
            exchange. In a nutshell, we are a technology company that builds
            innovative products.
          </p>
          <S.Flex>
            <S.Button href="https://polkadex.trade" target="_blank">
              About Polkadex
            </S.Button>
          </S.Flex>
        </S.Aside>
      </S.Container>
      <S.Pillars>
        <h3>Our Pillars</h3>
        <S.PillarsWrapper>
          <S.PillarsCard>
            <img src="/img/pillarsTechnology.svg" alt="isometric rocket" />
            <span>Technology</span>
            <p>
              We develop our own technology by exploring functional languages
              and open source projects.
            </p>
          </S.PillarsCard>
          <S.PillarsCard>
            <img src="/img/pillarsInnovation.svg" alt="isometric exchange" />
            <span>Innovation</span>
            <p>
              We test ideas and learn fast, using models and making decisions
              based on data.
            </p>
          </S.PillarsCard>
          <S.PillarsCard>
            <img
              src="/img/pillarsExperience.svg"
              alt="isometric desktop and mobile"
            />
            <span>Best Experience</span>
            <p>
              We question all the complexity of similar but used products to
              always offer the best experience.
            </p>
          </S.PillarsCard>
        </S.PillarsWrapper>
      </S.Pillars>
    </S.Wrapper>
  );
};
