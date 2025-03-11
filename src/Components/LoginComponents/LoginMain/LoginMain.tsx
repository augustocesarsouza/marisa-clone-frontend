import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import * as Styled from './styled';
import FormLogin from '../FormLogin/FormLogin';

const LoginMain = () => {
  return (
    <Styled.Container>
      <HeaderFullMain></HeaderFullMain>

      <FormLogin></FormLogin>
    </Styled.Container>
  );
};

export default LoginMain;
