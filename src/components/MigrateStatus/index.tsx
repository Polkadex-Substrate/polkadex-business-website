import { Icon } from 'components';

import * as S from './styles';

export const MigrateStatus = ({
  status = false,
  title = '',
  tx = '',
  isMainnet = false,
}) => {
  const isActive = status ? 'Checked' : 'Waiting';
  const selectColor = status ? 'green' : 'orange';
  const shortUrl = tx ? `${tx.slice(0, 7)}...${tx.slice(tx.length - 7)}` : '';
  return (
    <S.Wrapper
      isActive={status || title === 'Failed'}
      background={title === 'Failed' ? 'primary' : selectColor}
    >
      <Icon name={title === 'Failed' ? 'Close' : isActive} />
      <p>
        {title}
        {tx && (
          <a
            target="_blank"
            href={`https://${isMainnet ? '' : 'ropsten.'}etherscan.io/tx/${tx}`}
            rel="noreferrer"
          >
            ({shortUrl})
          </a>
        )}
      </p>
    </S.Wrapper>
  );
};
