import HeaderFirst from '../HeaderFirst/HeaderFirst';
import HeaderSecond from '../HeaderSecond/HeaderSecond';
import * as Styled from './styled';

const HeaderFirstMain = () => {
  return (
    <Styled.ContainerMain className="bg-black">
      <HeaderFirst></HeaderFirst>
      <HeaderSecond></HeaderSecond>
    </Styled.ContainerMain>
  );
};

export default HeaderFirstMain;
