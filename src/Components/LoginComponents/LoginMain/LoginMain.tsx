import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import * as Styled from './styled';
import FormLogin from '../FormLogin/FormLogin';
import ExclusiveOffersAndSocialShare from '../ExclusiveOffersAndSocialShare/ExclusiveOffersAndSocialShare';

const LoginMain = () => {
  return (
    <Styled.Container>
      <HeaderFullMain></HeaderFullMain>

      <FormLogin></FormLogin>
      <ExclusiveOffersAndSocialShare></ExclusiveOffersAndSocialShare>
    </Styled.Container>
  );
};

export default LoginMain;
