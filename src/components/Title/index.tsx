import * as S from './styles';
import Props from './types';

const Title = ({
  tag = 'Tag Example',
  title = 'Title Example',
  highlight = 'Highlight Example',
  description,
  position = 'left',
  headingAs: Heading = 'h2',
}: Props) => (
  <S.Wrapper position={position}>
    <span>{tag}</span>
    <Heading>
      {title} <strong> {highlight} </strong>
    </Heading>
    {!!description && <p>{description}.</p>}
  </S.Wrapper>
);

export default Title;
