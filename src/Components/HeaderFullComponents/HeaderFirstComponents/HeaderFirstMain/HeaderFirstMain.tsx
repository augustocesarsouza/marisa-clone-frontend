import HeaderFirst from '../HeaderFirst/HeaderFirst';
import HeaderSecond from '../HeaderSecond/HeaderSecond';
import * as Styled from './styled';

const HeaderFirstMain = () => {
  return (
    <Styled.ContainerMain>
      <HeaderFirst></HeaderFirst>
      <HeaderSecond></HeaderSecond>
    </Styled.ContainerMain>
  );
};

export default HeaderFirstMain;
