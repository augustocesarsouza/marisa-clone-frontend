import HeaderMain from '../../Components/HeaderComponents/HeaderMain/HeaderMain';
import HomeBodyMain from '../../Components/HomeBodyComponents/HomeBodyMain/HomeBodyMain';
import * as Styled from './styled';

const Home = () => {
  return (
    <Styled.ContainerMain>
      <HeaderMain></HeaderMain>
      <HomeBodyMain></HomeBodyMain>
    </Styled.ContainerMain>
  );
};

export default Home;
