import * as S from './styles';
import Props from './types';

const Title = ({
  tag = 'Tag Example',
  title = 'Title Example',
  highlight = 'Highlight Example',
  description = 'Description Example',
  position = 'left',
}: Props) => (
  <S.Wrapper position={position}>
    <span>{tag}</span>
    <h2>
      {title} <strong> {highlight} </strong>
    </h2>
    <p>{description}</p>
  </S.Wrapper>
);

export default Title;
