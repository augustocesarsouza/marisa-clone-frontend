import HeaderFullMain from '../../Components/HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import HomeBodyMain from '../../Components/HomeBodyComponents/HomeBodyMain/HomeBodyMain';
import * as Styled from './styled';

const Home = () => {
  return (
    <Styled.ContainerMain className="">
      <HeaderFullMain></HeaderFullMain>
      <HomeBodyMain></HomeBodyMain>
    </Styled.ContainerMain>
  );
};

export default Home;
