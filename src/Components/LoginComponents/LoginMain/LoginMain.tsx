import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import * as Styled from './styled';
import FormLogin from '../FormLogin/FormLogin';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
// import ExclusiveOffersAndSocialShare from '../../FooterMainComponents/ExclusiveOffersAndSocialShare/ExclusiveOffersAndSocialShare';

const LoginMain = () => {
  return (
    <Styled.Container>
      <HeaderFullMain></HeaderFullMain>

      <FormLogin></FormLogin>

      <FooterMain></FooterMain>
    </Styled.Container>
  );
};

export default LoginMain;
