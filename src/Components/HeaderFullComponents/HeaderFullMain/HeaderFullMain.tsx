import HeaderFirstMain from '../HeaderFirstComponents/HeaderFirstMain/HeaderFirstMain';
import HeaderSecondMain from '../HeaderSecondComponents/HeaderSecondMain/HeaderSecondMain';
import * as Styled from './styled';

const HeaderFullMain = () => {
  return (
    <Styled.ContainerMain>
      <HeaderFirstMain></HeaderFirstMain>
      <HeaderSecondMain></HeaderSecondMain>
    </Styled.ContainerMain>
  );
};

export default HeaderFullMain;
