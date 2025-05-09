import FooterMain from '../../Components/FooterMainComponents/FooterMain/FooterMain';
import HeaderFullMain from '../../Components/HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import HomeBodyMain from '../../Components/HomeBodyComponents/HomeBodyMain/HomeBodyMain';
import * as Styled from './styled';

const Home = () => {
  return (
    <Styled.ContainerMain className="">
      <HeaderFullMain></HeaderFullMain>
      <HomeBodyMain></HomeBodyMain>
      <FooterMain></FooterMain>
    </Styled.ContainerMain>
  );
};

export default Home;
