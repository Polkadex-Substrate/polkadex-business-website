import { Icon } from 'components/Icon';
import React, { useEffect, useState } from 'react';

import data from '../../data/crowdloan_distribution_rewards.json';
import * as S from './styles';

const CrowdloansRewardsPage = () => {
  const [didContribute, setDidContribute] = useState(false);
  const [valueContributed, setValueContributed] = useState('0');
  const [walletAddress, setWalletAddress] = useState('');
  const handleInput = (value) => {
    setWalletAddress(value);
  };
  useEffect(() => {
    setDidContribute(false);
    if (walletAddress) {
      const contribution = data.find((item) => item.Account === walletAddress);
      if (contribution) {
        setDidContribute(true);
        setValueContributed(contribution['DOT Contributed']);
      }
    }
  }, [walletAddress]);

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Center>
          <Icon name="Search" background="none" size="large" />
        </S.Center>
        <S.Input>
          <input
            type="search"
            placeholder="Search by wallet address"
            name=""
            id=""
            onChange={(e) => handleInput(e.target.value)}
          />
        </S.Input>
        <S.Paste>Paste</S.Paste>
      </S.InputWrapper>
      {walletAddress && didContribute && (
        <S.InfoWrapper>
          <h2> This wallet did contribute to Polkadex Crownalons 🎁</h2>
          <p>DOT Contributed</p>
          <p>{valueContributed}</p>
        </S.InfoWrapper>
      )}
      {walletAddress && !didContribute && (
        <S.InfoWrapper>
          <h2> Oops, this wallet didn’t contribute to Polkadex Crowndloans</h2>
          <p>Please try with another wallet</p>
        </S.InfoWrapper>
      )}
      {!walletAddress && (
        <S.InfoWrapper>
          <h2>Find out if your wallet has rewards waiting for you</h2>

          <p>
            A heartfelt thanks to the 3632 contributors who enabled Polkadex's
            remarkable victory in auction 16th with nearly 1 million DOT.{' '}
          </p>
        </S.InfoWrapper>
      )}
      <S.ListWrapper>
        <S.ListHeader>
          <p>Crowndloans contribute list</p>
          <S.Badge>3632 contributors</S.Badge>
        </S.ListHeader>
        <S.Table>
          <thead>
            <S.TableRow isOdd="false">
              <S.TableCell>Wallet</S.TableCell>
              <S.TableCell>DOT Contributed</S.TableCell>
            </S.TableRow>
          </thead>
          <tbody>
            {data.slice(1, 10).map((item, index) => (
              <S.TableRow key={item.Account} isOdd={index % 2 !== 0}>
                <S.TableCellUnder>{item.Account}</S.TableCellUnder>
                <S.TableCell>{item['DOT Contributed']}</S.TableCell>
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default CrowdloansRewardsPage;