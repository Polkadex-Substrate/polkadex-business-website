import { PrimaryButton } from 'components/Button';
import { SingleArrowBottom } from 'components/Icons';
import { Dropdown } from 'components/v2/Dropdown';
import { SubstrateAccount, useWallets } from 'hooks';
import { useEffect, useMemo, useState } from 'react';

import * as S from './styles';

type Data = {
  totalRewards?: number;
  claimableRewards?: number;
  claimedRewards?: number;
};
export const Hero = () => {
  const [state, setState] = useState<Data>({});
  const [selectedWallet, setSelectedWallet] = useState<SubstrateAccount>();
  const { wallets } = useWallets();

  const hasData = useMemo(() => !!Object.keys(state)?.length, [state]);
  const hasSelectedWallet = useMemo(
    () => !!Object.keys(selectedWallet || {})?.length,
    [selectedWallet],
  );

  const shortWallet = useMemo(
    () =>
      `${selectedWallet?.substrateAddress.slice(
        0,
        12,
      )}...${selectedWallet?.substrateAddress.slice(
        selectedWallet?.substrateAddress.length - 12,
      )}`,
    [selectedWallet],
  );

  useEffect(() => {
    if (hasSelectedWallet) {
      // ... Fetch data...
      const randomN = Math.random() * 1000;
      setState({
        totalRewards: randomN,
        claimableRewards: randomN,
        claimedRewards: 0,
      });
    }
  }, [hasSelectedWallet]);

  return (
    <S.Wrapper>
      <S.Box>
        <S.Container>
          <img src="/img/rewardsHero.svg" alt="Reward box illustration" />
          <S.Logo>
            <PolkadexRewardsLogo />
          </S.Logo>
          <h1>Time to Claim your PDEX rewards</h1>
          <h2>
            If you participated in the Polkadot Crowdloan and helped us secure a
            parachain slot, you may have pending rewards.
          </h2>
        </S.Container>
      </S.Box>
      <S.Content>
        {!!hasData && (
          <S.Information>
            <h3>Your PDEX distribution details</h3>
            <div>
              <S.InformationContainer>
                <div>
                  <span>{state?.totalRewards?.toFixed(2)} PDEX</span>
                  <p>Total rewards</p>
                </div>
                <div>
                  <span>{state?.claimableRewards?.toFixed(2)} PDEX</span>
                  <p>Claimable rewards</p>
                </div>
                <div>
                  <span>{state?.claimedRewards?.toFixed(2)} PDEX</span>
                  <p>Claimed rewards</p>
                </div>
              </S.InformationContainer>
            </div>
          </S.Information>
        )}
        <S.Wallet>
          <Dropdown>
            <Dropdown.Trigger>
              <S.DropdownHeader>
                <div>
                  <span>
                    {hasSelectedWallet
                      ? selectedWallet.name
                      : 'Select your wallet'}
                  </span>
                  {!!hasSelectedWallet && <p>{shortWallet}</p>}
                </div>

                <SingleArrowBottom />
              </S.DropdownHeader>
            </Dropdown.Trigger>
            <Dropdown.Menu fill="secondaryBackgroundSolid">
              {wallets.map((v, i) => {
                const shortAddress = v?.substrateAddress
                  ? `${v?.substrateAddress.slice(
                      0,
                      4,
                    )}..${v?.substrateAddress.slice(
                      v?.substrateAddress.length - 4,
                    )}`
                  : '0x000000';
                return (
                  <Dropdown.Item
                    key={i}
                    onAction={() => setSelectedWallet(wallets[i])}
                  >
                    {v.name} <S.Span> • {shortAddress}</S.Span>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <PrimaryButton content="Claim" />
        </S.Wallet>
      </S.Content>
      <div />
    </S.Wrapper>
  );
};

const PolkadexRewardsLogo = () => (
  <svg
    width="254"
    height="23"
    viewBox="0 0 254 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.45462 10.6762V4.72107H7.65221C9.67638 4.72107 10.9085 5.86516 10.9085 7.71331C10.9085 9.50279 9.67638 10.6762 7.65221 10.6762H4.45462ZM8.15092 14.1672C12.2579 14.1672 14.9861 11.4683 14.9861 7.68397C14.9861 3.929 12.2579 1.20078 8.15092 1.20078H0.376953V21.9998H4.42528V14.1672H8.15092Z"
      fill="white"
    />
    <path
      d="M23.4406 18.8902C21.5337 18.8902 19.7736 17.4821 19.7736 14.7832C19.7736 12.055 21.5337 10.6762 23.4406 10.6762C25.3474 10.6762 27.1075 12.055 27.1075 14.7832C27.1075 17.5114 25.3474 18.8902 23.4406 18.8902ZM23.4406 7.1266C19.1282 7.1266 15.8719 10.3242 15.8719 14.7832C15.8719 19.2129 19.1282 22.4398 23.4406 22.4398C27.7529 22.4398 31.0092 19.2129 31.0092 14.7832C31.0092 10.3242 27.7529 7.1266 23.4406 7.1266Z"
      fill="white"
    />
    <path d="M37.9906 21.9998V0.760742H34.089V21.9998H37.9906Z" fill="white" />
    <path
      d="M56.1609 7.56663H51.0565L46.0694 12.9351V0.760742H42.1678V21.9998H46.0694V18.1862L47.6829 16.4847L51.4965 21.9998H56.2782L50.3818 13.6391L56.1609 7.56663Z"
      fill="white"
    />
    <path
      d="M57.3307 18.0688C57.3307 20.3277 59.2082 22.4105 62.2884 22.4105C64.4299 22.4105 65.8087 21.4131 66.5421 20.269C66.5421 20.8264 66.6008 21.6184 66.6888 21.9998H70.2677C70.1797 21.5011 70.0917 20.4744 70.0917 19.7116V12.6124C70.0917 9.70814 68.3902 7.1266 63.8139 7.1266C59.9415 7.1266 57.8587 9.62013 57.624 11.879L61.0856 12.6124C61.203 11.3509 62.1417 10.2655 63.8432 10.2655C65.486 10.2655 66.2781 11.1163 66.2781 12.143C66.2781 12.6417 66.014 13.0524 65.1926 13.1698L61.643 13.6978C59.2375 14.0498 57.3307 15.4873 57.3307 18.0688ZM63.1098 19.5063C61.8484 19.5063 61.2323 18.6849 61.2323 17.8341C61.2323 16.7194 62.0244 16.162 63.0218 16.0153L66.2781 15.5166V16.162C66.2781 18.7142 64.7526 19.5063 63.1098 19.5063Z"
      fill="white"
    />
    <path
      d="M87.7257 0.760742H83.8827V9.00408C83.472 8.24135 82.2986 7.2146 79.805 7.2146C75.7274 7.2146 72.8818 10.5295 72.8818 14.7539C72.8818 19.1249 75.8154 22.3518 79.9224 22.3518C81.8585 22.3518 83.3253 21.4718 83.9707 20.3277C83.9707 21.0024 84.0587 21.7065 84.1174 21.9998H87.843C87.7844 21.4131 87.7257 20.357 87.7257 19.3889V0.760742ZM76.8128 14.7539C76.8128 12.1723 78.3969 10.7056 80.3918 10.7056C82.3866 10.7056 83.9414 12.143 83.9414 14.7245C83.9414 17.3354 82.3866 18.8609 80.3918 18.8609C78.3383 18.8609 76.8128 17.3354 76.8128 14.7539Z"
      fill="white"
    />
    <path
      d="M94.8038 13.1404C94.8919 11.8203 96.0066 10.2949 98.0308 10.2949C100.26 10.2949 101.199 11.703 101.258 13.1404H94.8038ZM101.639 16.8954C101.17 18.1862 100.172 19.0956 98.3535 19.0956C96.4173 19.0956 94.8039 17.7168 94.7158 15.81H105.042C105.042 15.7513 105.101 15.1646 105.101 14.6072C105.101 9.97216 102.431 7.1266 97.9721 7.1266C94.2758 7.1266 90.8729 10.1188 90.8729 14.7245C90.8729 19.5943 94.3638 22.4398 98.3241 22.4398C101.874 22.4398 104.162 20.357 104.895 17.8635L101.639 16.8954Z"
      fill="white"
    />
    <path
      d="M106.213 21.9998H110.614C111.112 21.2077 113.048 18.3622 113.576 17.5701L116.598 21.9998H121.174L115.953 14.6365L120.998 7.56663H116.569L113.723 11.8496C113.224 11.0576 111.347 8.3587 110.848 7.56663H106.213L111.347 14.7539L106.213 21.9998Z"
      fill="white"
    />
    <path
      d="M141.366 21.9998H145.884L141.425 13.4924C144.153 12.7004 145.854 10.5002 145.854 7.59597C145.854 3.98767 143.273 1.20078 139.225 1.20078H131.099V21.9998H135.176V13.9912H137.288L141.366 21.9998ZM135.176 10.5002V4.72107H138.462C140.515 4.72107 141.718 5.86516 141.718 7.6253C141.718 9.32678 140.515 10.5002 138.462 10.5002H135.176Z"
      fill="white"
    />
    <path
      d="M151.585 13.1404C151.673 11.8203 152.787 10.2949 154.811 10.2949C157.041 10.2949 157.98 11.703 158.038 13.1404H151.585ZM158.42 16.8954C157.95 18.1862 156.953 19.0956 155.134 19.0956C153.198 19.0956 151.585 17.7168 151.497 15.81H161.823C161.823 15.7513 161.881 15.1646 161.881 14.6072C161.881 9.97216 159.212 7.1266 154.753 7.1266C151.056 7.1266 147.654 10.1188 147.654 14.7245C147.654 19.5943 151.144 22.4398 155.105 22.4398C158.654 22.4398 160.943 20.357 161.676 17.8635L158.42 16.8954Z"
      fill="white"
    />
    <path
      d="M172.909 7.56663L169.77 16.8367L167.101 7.56663H162.994L167.6 21.9998H171.56L174.875 12.143L178.248 21.9998H182.15L186.668 7.56663H182.795L180.126 16.8661L177.016 7.56663H172.909Z"
      fill="white"
    />
    <path
      d="M188.167 18.0688C188.167 20.3277 190.044 22.4105 193.125 22.4105C195.266 22.4105 196.645 21.4131 197.378 20.269C197.378 20.8264 197.437 21.6184 197.525 21.9998H201.104C201.016 21.5011 200.928 20.4744 200.928 19.7116V12.6124C200.928 9.70814 199.226 7.1266 194.65 7.1266C190.778 7.1266 188.695 9.62013 188.46 11.879L191.922 12.6124C192.039 11.3509 192.978 10.2655 194.679 10.2655C196.322 10.2655 197.114 11.1163 197.114 12.143C197.114 12.6417 196.85 13.0524 196.029 13.1698L192.479 13.6978C190.074 14.0498 188.167 15.4873 188.167 18.0688ZM193.946 19.5063C192.685 19.5063 192.069 18.6849 192.069 17.8341C192.069 16.7194 192.861 16.162 193.858 16.0153L197.114 15.5166V16.162C197.114 18.7142 195.589 19.5063 193.946 19.5063Z"
      fill="white"
    />
    <path
      d="M213.661 7.50796C213.368 7.47862 213.075 7.44929 212.752 7.44929C211.52 7.44929 209.525 7.80132 208.645 9.70814V7.56663H204.861V21.9998H208.762V15.3993C208.762 12.2897 210.493 11.3216 212.488 11.3216C212.84 11.3216 213.221 11.3509 213.661 11.4389V7.50796Z"
      fill="white"
    />
    <path
      d="M230.021 0.760742H226.178V9.00408C225.767 8.24135 224.594 7.2146 222.101 7.2146C218.023 7.2146 215.177 10.5295 215.177 14.7539C215.177 19.1249 218.111 22.3518 222.218 22.3518C224.154 22.3518 225.621 21.4718 226.266 20.3277C226.266 21.0024 226.354 21.7065 226.413 21.9998H230.139C230.08 21.4131 230.021 20.357 230.021 19.3889V0.760742ZM219.108 14.7539C219.108 12.1723 220.692 10.7056 222.687 10.7056C224.682 10.7056 226.237 12.143 226.237 14.7245C226.237 17.3354 224.682 18.8609 222.687 18.8609C220.634 18.8609 219.108 17.3354 219.108 14.7539Z"
      fill="white"
    />
    <path
      d="M233.022 17.9808C233.198 19.6236 234.694 22.4398 239.035 22.4398C242.82 22.4398 244.639 20.0343 244.639 17.6875C244.639 15.5753 243.201 13.8445 240.356 13.2578L238.302 12.8177C237.51 12.671 236.982 12.231 236.982 11.527C236.982 10.7056 237.803 10.0895 238.83 10.0895C240.473 10.0895 241.089 11.1749 241.206 12.0257L244.463 11.2923C244.287 9.73748 242.908 7.1266 238.801 7.1266C235.691 7.1266 233.403 9.2681 233.403 11.8496C233.403 13.8738 234.664 15.5459 237.451 16.162L239.358 16.602C240.473 16.8367 240.913 17.3648 240.913 18.0102C240.913 18.7729 240.297 19.4476 239.006 19.4476C237.305 19.4476 236.454 18.3915 236.366 17.2474L233.022 17.9808Z"
      fill="white"
    />
    <path
      d="M247.877 19.5358C247.877 21.0025 249.08 22.2053 250.547 22.2053C252.043 22.2053 253.245 21.0025 253.245 19.5358C253.245 18.069 252.043 16.8662 250.547 16.8662C249.08 16.8662 247.877 18.069 247.877 19.5358Z"
      fill="#E6007A"
    />
  </svg>
);