import AboutUs from '../AboutUs/AboutUs';
import ExclusiveOffersAndSocialShare from '../ExclusiveOffersAndSocialShare/ExclusiveOffersAndSocialShare';
import * as Styled from './styled';

const FooterMain = () => {
  return (
    <Styled.ContainerMain>
      <ExclusiveOffersAndSocialShare></ExclusiveOffersAndSocialShare>
      <AboutUs></AboutUs>
    </Styled.ContainerMain>
  );
};

export default FooterMain;
