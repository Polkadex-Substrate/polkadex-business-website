import { PrimaryButton, SecondaryButton } from 'components/Button';
import { ComingSoon } from 'components/ComingSoon';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import React, { useCallback, useEffect, useState } from 'react';
import {
  HomeTranslations,
  IHomeTranslations,
  IOrderbookTranslations,
} from 'translations';

import * as S from './styles';

type Props = Pick<IOrderbookTranslations, 'promo'>;

const { header }: IHomeTranslations = HomeTranslations['en-US'];

export const Promo = ({
  title,
  subtitle,
  advantage,
  disadvantage,
  button,
  learn,
  polkadex,
  available,
}: Props['promo']) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <img src="/img/heroMockup1.png" alt="Orderbook mockup" />
          <h1>The CEXiest DEX in DeFi</h1>
          <p>The best of centralized exchanges</p>
          <ul>
            <li>
              <span>+</span>
              The best of decentralized exchanges
            </li>
            <li>
              <span>-</span>
              The disadvantages of both
            </li>
            <li>
              <span>=</span>
              <strong>Polkadex Orderbook</strong>
            </li>
          </ul>
          <S.Actions>
            <PrimaryButton
              content="Trade now"
              href="http://orderbook.polkadex.trade"
              target="_blank"
            />
            <SecondaryButton
              content="Learn more"
              icon="ArrowRight"
              href="https://docs.polkadex.trade"
              target="_blank"
            />
          </S.Actions>
          <S.Available>
            <small>Available on</small>
            <ComingSoon />
          </S.Available>
        </S.Box>
        <div />
      </S.Container>
    </S.Wrapper>
  );
};
