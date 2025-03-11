import AboutUs from '../AboutUs/AboutUs';
import ExclusiveOffersAndSocialShare from '../ExclusiveOffersAndSocialShare/ExclusiveOffersAndSocialShare';
import SecuritySealsPaymentMethods from '../SecuritySealsPaymentMethods/SecuritySealsPaymentMethods';
import * as Styled from './styled';

const FooterMain = () => {
  return (
    <Styled.ContainerMain>
      <ExclusiveOffersAndSocialShare></ExclusiveOffersAndSocialShare>
      <AboutUs></AboutUs>
      <SecuritySealsPaymentMethods></SecuritySealsPaymentMethods>
    </Styled.ContainerMain>
  );
};

export default FooterMain;
