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
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <ul>
            <li>
              <span>+</span>
              {advantage}
            </li>
            <li>
              <span>-</span>
              {disadvantage}
            </li>
            <li>
              <span>=</span>
              <strong>{polkadex}</strong>
            </li>
          </ul>
          <S.Actions>
            <PrimaryButton
              content={button}
              href="https://orderbook.polkadex.trade"
              target="_blank"
            />
            <SecondaryButton
              content={learn}
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
