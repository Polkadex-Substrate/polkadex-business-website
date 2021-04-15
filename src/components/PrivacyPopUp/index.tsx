import { FormButton } from 'components/Button';

import * as S from './styles';
import Props from './types';

const PrivacyPopUp = ({
  description = 'Privacy Description',
  link,
  action,
  visible,
}: Props) => (
  <S.Wrapper visible={visible}>
    <div>
      <p>
        {description}
        <a href={link}>Privacy Policy</a>
      </p>
    </div>
    <FormButton icon="doubleArrowRight" content="Close" action={action} />
  </S.Wrapper>
);

export default PrivacyPopUp;
