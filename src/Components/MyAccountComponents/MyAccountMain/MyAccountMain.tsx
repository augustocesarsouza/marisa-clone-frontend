import * as Styled from './styled';
import { useEffect, useState } from 'react';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import { GetUserFromLocalStorage } from '../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MyPerfilMain from '../MyPerfilComponents/MyPerfilMain/MyPerfilMain';

const MyAccountMain = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [isMyAccount, setIsMyAccount] = useState(true);

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname !== '/my-account') {
      setIsMyAccount(false);
    }

    const objUser = GetUserFromLocalStorage();

    const user = objUser.user;

    if (user) {
      // console.log(user);
    }
  }, [location.pathname, nav]);

  return (
    <Styled.ContainerMain>
      <HeaderFullMain></HeaderFullMain>
      <Styled.ContainerBodyMain>
        <Styled.ContainerBody>
          <Styled.H1>Minha Conta</Styled.H1>

          <Styled.ContainerMyAccountNavigation>
            <Navigation />

            {isMyAccount && <MyPerfilMain />}
            {!isMyAccount && <Outlet />}
          </Styled.ContainerMyAccountNavigation>
        </Styled.ContainerBody>
      </Styled.ContainerBodyMain>
      <FooterMain></FooterMain>
    </Styled.ContainerMain>
  );
};

export default MyAccountMain;
