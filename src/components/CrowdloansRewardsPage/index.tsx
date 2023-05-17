import { Icon } from 'components/Icon';
import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';

import * as S from './styles';

const CrowdloansRewardsPage = () => {
  const [csvData, setCsvData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        '../../data/crowdloan_distribution_rewards.csv',
      );

      const reader = response.body.getReader();

      const result = await reader.read();

      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);

      const { data } = Papa.parse(csv, { header: true });
      // setCsvData(data);
      setLoading(false);
      console.log(data, 'data');
    };

    fetchData();
  }, []);

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
          />
        </S.Input>
        <S.Paste>Paste</S.Paste>
      </S.InputWrapper>
      <S.InfoWrapper>
        <h2>Find out if your wallet has rewards waiting for you</h2>
        <p>
          A heartfelt thanks to the 3632 contributors who enabled Polkadex's
          remarkable victory in auction 16th with nearly 1 million DOT.{' '}
        </p>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default CrowdloansRewardsPage;
