import { useAnimation } from 'hooks';
import React, { ReactNode } from 'react';

import { fakeData } from './fakeData';
import * as S from './styles';

export const Table = () => {
  const animationProps = useAnimation({ duration: 0.5 });

  return (
    <S.Wrapper className="latestRewards" {...animationProps}>
      <h2>Recent transactions</h2>
      <S.Table id="customers">
        <S.Heading>
          <div>
            <HeaderCell>Account ID</HeaderCell>
            <HeaderCell>Para ID</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Block Number</HeaderCell>
          </div>
        </S.Heading>
        <S.Body>
          {fakeData.map((item, index) => (
            <div key={index}>
              <span>{item.AccountID}</span>
              <span>
                <a target="_blank" href="/">
                  {item.ParaID}
                </a>
              </span>
              <span>{item.Amount}</span>
              <span>{item.Blocknum}</span>
            </div>
          ))}
        </S.Body>
      </S.Table>
      <S.Actions>
        <span>Show last</span>
        <div>
          5 transactions
          <svg
            width="14"
            height="7"
            viewBox="0 0 14 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M6.58752 6.58752L0.995806 0.995806C0.628329 0.628329 0.888592 0 1.40828 0L12.5917 0C13.1114 0 13.3717 0.628328 13.0042 0.995806L7.41248 6.58752C7.18467 6.81533 6.81533 6.81533 6.58752 6.58752Z"
              fill="#A8ADB7"
            />
          </svg>
        </div>
      </S.Actions>
    </S.Wrapper>
  );
};

export default function HeaderCell({ children }: { children: ReactNode }) {
  return (
    <span>
      {children}
      <svg
        width="9"
        height="12"
        viewBox="0 0 9 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M4.91262 1.16262L8.00423 4.25423C8.37169 4.62169 8.11144 5.25 7.59177 5.25L1.40855 5.25C0.888876 5.25 0.628622 4.62169 0.996086 4.25423L4.0877 1.16262C4.31549 0.934824 4.68482 0.934824 4.91262 1.16262Z"
          fill="#A8ADB7"
        />
        <path
          opacity="0.5"
          d="M4.08738 10.8374L0.995771 7.74577C0.628307 7.37831 0.888559 6.75 1.40823 6.75L7.59145 6.75C8.11112 6.75 8.37138 7.37831 8.00391 7.74577L4.9123 10.8374C4.68451 11.0652 4.31518 11.0652 4.08738 10.8374Z"
          fill="#A8ADB7"
        />
      </svg>
    </span>
  );
}
