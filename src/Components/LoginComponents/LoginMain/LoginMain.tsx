import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import * as Styled from './styled';
import FormLogin from '../FormLogin/FormLogin';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import ExclusiveOffersAndSocialShare from '../../FooterMainComponents/ExclusiveOffersAndSocialShare/ExclusiveOffersAndSocialShare';

const LoginMain = () => {
  const location = useLocation();
  const nav = useNavigate();

  const [passwordChangeSuccessfully, setPasswordChangeSuccessfully] = useState(false);

  useEffect(() => {
    const state = location.state;
    console.log(state);

    if (state) {
      if (state.changePassword) {
        setPasswordChangeSuccessfully(true);

        nav('.', { replace: true, state: { ...state, changePassword: false } });
      }
    }
  }, [location.state, nav]);

  return (
    <Styled.Container>
      <HeaderFullMain></HeaderFullMain>
      {passwordChangeSuccessfully && (
        <Styled.ContainerSpanPasswordChangeSuccessfullyMain>
          <Styled.ContainerSpanPasswordChangeSuccessfully>
            <Styled.Span>Sucesso! Você agora pode logar usando sua nova senha.</Styled.Span>
          </Styled.ContainerSpanPasswordChangeSuccessfully>
        </Styled.ContainerSpanPasswordChangeSuccessfullyMain>
      )}
      <FormLogin></FormLogin>

      <FooterMain></FooterMain>
    </Styled.Container>
  );
};

export default LoginMain;
