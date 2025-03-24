import * as Styled from './styled';
import { useEffect, useState } from 'react';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { User } from '../../Interfaces/Entity/User.';
import { GetUserFromLocalStorage } from '../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import HeaderMyAccount from '../HeaderMyAccount/HeaderMyAccount';
import { ContextMyAccount } from '../Contexts/ContextMyAccount';
import MyPerfilMain from '../MyPerfilMain/MyPerfilMain';

const MyAccountMain = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [isMyAccount, setIsMyAccount] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [whatShowUserClicked, setWhatShowUserClicked] = useState('MEU PERFIL');

  useEffect(() => {
    const pathname = location.pathname;
    // TENTAR FAZER OS TEST todos os que tem isso "test.tsx"

    if (pathname !== '/my-account') {
      setIsMyAccount(false);
    } else {
      setIsMyAccount(true);
    }

    const objUser = GetUserFromLocalStorage();

    const user = objUser.user;

    if (user) {
      setUser(user);
    }
  }, [location.pathname, nav]);

  const whichWasClickedNav = (which: string) => {
    setWhatShowUserClicked(which);
  };

  return (
    <ContextMyAccount.Provider
      value={{
        user: user,
      }}>
      <Styled.ContainerMain>
        <HeaderFullMain></HeaderFullMain>
        <Styled.ContainerBodyMain>
          <Styled.ContainerBody>
            <HeaderMyAccount />

            {!isMyAccount && (
              <Styled.SpanNav>
                Home {'>'} <Styled.SpanNavMain>{whatShowUserClicked}</Styled.SpanNavMain>
              </Styled.SpanNav>
            )}

            <Styled.ContainerMyAccountNavigation>
              <Navigation whichWasClickedNav={whichWasClickedNav} isMyAccount={isMyAccount} />

              {isMyAccount && <MyPerfilMain />}
              {!isMyAccount && <Outlet />}
            </Styled.ContainerMyAccountNavigation>
          </Styled.ContainerBody>
        </Styled.ContainerBodyMain>
        <FooterMain></FooterMain>
      </Styled.ContainerMain>
    </ContextMyAccount.Provider>
  );
};

export default MyAccountMain;
