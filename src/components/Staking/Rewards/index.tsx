import { PrimaryButton } from 'components/Button';
import * as Icons from 'components/Icons';

import * as S from './styles';

export const Rewards = ({ apy, apyValidator }) => {
  return (
    <S.Wrapper id="rewards">
      <S.Title>
        <S.TitleWrapper>
          <h2>How does it work? </h2>
          <p>
            As a proof of stake (PoS) blockchain, the Polkadex network
            incentivizes token holders to secure the network via PDEX staking.
          </p>
        </S.TitleWrapper>
        <S.TitleContainer>
          <p>
            <strong>Nominators</strong> delegate their PDEX to{' '}
            <strong>validators</strong> who run the network on devices
            distributed around the world. <strong>Validators</strong>, who keep
            the network running and ensure it remains secure, earn daily PDEX
            rewards and they distribute them proportionately among their
            respective <strong>nominators</strong>.
          </p>
        </S.TitleContainer>
      </S.Title>
      <S.Container>
        <VerticalLineWithDetails />
        <S.ContainerWrapper>
          <S.ContainerBox>
            <S.Nominator>
              <S.NominatorHeader>
                <S.NominatorHeaderWrapperWhite>
                  <S.NominatorIconWhite>
                    <Icons.Validate />
                  </S.NominatorIconWhite>
                  <span>Easier</span>
                </S.NominatorHeaderWrapperWhite>
                <S.Tag>Great rewards</S.Tag>
              </S.NominatorHeader>
              <S.NominatorBody>
                Become a Nominator by delegating your PDEX
              </S.NominatorBody>
              <S.NominatorFooter>
                <h3>Benefits</h3>
                <S.NominatorFooterWrapper>
                  <S.NominatorFooterCard>
                    <div>
                      <Icons.Checked />
                    </div>
                    <p>
                      APY <strong>{apy}</strong>
                    </p>
                  </S.NominatorFooterCard>
                  <S.NominatorFooterCard>
                    <div>
                      <Icons.Checked />
                    </div>
                    <p>The easiest way to get daily PDEX rewards</p>
                  </S.NominatorFooterCard>
                  <S.NominatorFooterCard>
                    <div>
                      <Icons.Checked />
                    </div>
                    <p>Choose a set of validators you trust</p>
                  </S.NominatorFooterCard>
                  <S.NominatorFooterCard>
                    <div>
                      <Icons.Checked />
                    </div>
                    <p>Get daily rewards paid out by your validator</p>
                  </S.NominatorFooterCard>
                  <PrimaryButton
                    content="Learn how to stake PDEX as nominator"
                    href="#howtostake"
                  />
                </S.NominatorFooterWrapper>
              </S.NominatorFooter>
            </S.Nominator>
            <S.Validator>
              <S.ValidatorWrapper>
                <S.NominatorHeader>
                  <S.NominatorHeaderWrapper>
                    <S.NominatorIconBlack>
                      <Icons.Nominate />
                    </S.NominatorIconBlack>
                    <span>Advanced</span>
                  </S.NominatorHeaderWrapper>
                  <S.Tag>Max rewards</S.Tag>
                </S.NominatorHeader>
                <S.NominatorBody>Become a Validator</S.NominatorBody>
                <S.ValidatorFooter>
                  <S.ValidatorCard>
                    <h3>Benefits</h3>
                    <S.ValidatorFooterWrapper>
                      <S.NominatorFooterCard>
                        <div>
                          <Icons.Checked />
                        </div>
                        <p>
                          Average APY <strong>{apyValidator}</strong>
                        </p>
                      </S.NominatorFooterCard>
                      <S.NominatorFooterCard>
                        <div>
                          <Icons.Checked />
                        </div>
                        <p>Maximize your rewards</p>
                      </S.NominatorFooterCard>
                      <S.NominatorFooterCard>
                        <div>
                          <Icons.Checked />
                        </div>
                        <p>Run a validator node</p>
                      </S.NominatorFooterCard>
                      <S.NominatorFooterCard>
                        <div>
                          <Icons.Checked />
                        </div>
                        <p>Get nominations</p>
                      </S.NominatorFooterCard>
                      <S.NominatorFooterCard>
                        <div>
                          <Icons.Checked />
                        </div>
                        <p>Charge commissions from your nominators</p>
                      </S.NominatorFooterCard>
                      <PrimaryButton
                        target="_blank"
                        content="Run a Validator Node"
                        href="https://github.com/Polkadex-Substrate/Polkadex/blob/mainnet-release/docs/run-a-validator.md"
                      />
                    </S.ValidatorFooterWrapper>
                  </S.ValidatorCard>
                  <S.ValidatorCard>
                    <h3>How to run a validator node? </h3>
                    <S.ValidateLinks>
                      <S.ValidateLinksCard
                        target="_blank"
                        href="https://github.com/Polkadex-Substrate/Polkadex/blob/main-net-runtime/docs/run-a-validator.md"
                      >
                        <Icons.ArrowRight />
                        <p>
                          Set up and run your own validator node with our
                          detailed guide
                        </p>
                      </S.ValidateLinksCard>
                      <S.ValidateLinksCard
                        target="_blank"
                        href="https://youtu.be/cjsUhh8XgXs "
                      >
                        <Icons.ArrowRight />
                        <p>
                          Let OnFinality do all the heavy lifting and take the
                          stress out of running your own validator node(s)
                        </p>
                      </S.ValidateLinksCard>
                    </S.ValidateLinks>
                  </S.ValidatorCard>
                </S.ValidatorFooter>
              </S.ValidatorWrapper>
            </S.Validator>
          </S.ContainerBox>
        </S.ContainerWrapper>
        <VerticalLine />
      </S.Container>
    </S.Wrapper>
  );
};

const VerticalLineWithDetails = () => (
  <svg
    width="1512"
    height="228"
    viewBox="0 0 1512 228"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginBottom: '-0.5rem' }}
  >
    <path d="M1512 228V51L0 228H1512Z" fill="#8BA1BE" fillOpacity="0.1" />
    <path d="M1465.5 57V0L1198 27.5V87.5L1465.5 57Z" fill="#E6007A" />
    <path
      opacity="0.24"
      d="M1281 78.8671V44L1122 60.5318V96.7914L1281 78.8671Z"
      fill="#E6007A"
    />
  </svg>
);
const VerticalLine = () => (
  <svg
    width="1512"
    height="177"
    viewBox="0 0 1512 177"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.54738e-05 -7.11481e-05L0 177L1512 6.10352e-05L1.54738e-05 -7.11481e-05Z"
      fill="#8BA1BE"
      fillOpacity="0.1"
    />
  </svg>
);
