import HeaderFirst from '../HeaderFirst/HeaderFirst';
import HeaderSecond from '../HeaderSecond/HeaderSecond';
import * as Styled from './styled';

const HeaderMain = () => {
  return (
    <Styled.ContainerMain>
      <HeaderFirst></HeaderFirst>
      <HeaderSecond></HeaderSecond>
    </Styled.ContainerMain>
  );
};

export default HeaderMain;
