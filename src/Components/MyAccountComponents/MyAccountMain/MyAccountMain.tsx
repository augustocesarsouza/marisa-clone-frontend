import * as Styled from './styled';
import { useEffect, useRef, useState } from 'react';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { User } from '../../Interfaces/Entity/User.';
import { GetUserFromLocalStorage } from '../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import HeaderMyAccount from '../HeaderMyAccount/HeaderMyAccount';
import { ContextMyAccount } from '../Contexts/ContextMyAccount';
import MyPerfilMain from '../MyPerfilMain/MyPerfilMain';
import { TokenExpiration } from '../../TokenValidation/TokenExpiration';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../MyAddressesComponents/AddressDisplayedComponents/ChangeAddressMainRedux/storeAddressMain';
import { changeValue } from '../MyAddressesComponents/AddressDisplayedComponents/ChangeAddressMainRedux/AddressMainSlice';

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

    if (objUser.isNullUserLocalStorage) {
      nav('/login');
      return;
    }

    if (objUser.user === null) {
      localStorage.removeItem('user');

      nav('/login');
      return;
    }

    const user = objUser.user;
    const token = user.token;

    if (token) {
      const valueExpiration = TokenExpiration(token);

      if (valueExpiration) {
        localStorage.removeItem('user');
        nav('/login');
      }
    }

    if (user) {
      setUser(user);
    }
  }, [location.pathname, nav]);

  const whichWasClickedNav = (which: string) => {
    setWhatShowUserClicked(which);
  };

  const addressMain = useSelector((state: RootState) => state.addressMain);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addressMain.changeAddressMain) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        dispatch(changeValue(false));
      }, 10000);
    }
  }, [addressMain, dispatch]);

  return (
    <ContextMyAccount.Provider
      value={{
        user: user,
      }}>
      <Styled.ContainerMain>
        <HeaderFullMain></HeaderFullMain>
        <Styled.ContainerBodyMain>
          <Styled.ContainerBody>
            {addressMain.changeAddressMain && (
              <div className="!pt-8 !pb-8 leading-6 !pr-10 !pl-10 !mt-5 !mb-5 bg-[#d9edf7] border-1 border-[#bce8f1]">
                <h1 className="text-[#31708f] font-semibold">
                  Seu endereço principal foi atualizado.
                </h1>
              </div>
            )}
            <HeaderMyAccount />

            {/* {!isMyAccount && (
              <Styled.SpanNav>
                Home {'>'} <Styled.SpanNavMain>{whatShowUserClicked}</Styled.SpanNavMain>
              </Styled.SpanNav>
            )} */}
            <Styled.SpanNav>
              Home {'>'} <Styled.SpanNavMain>{whatShowUserClicked}</Styled.SpanNavMain>
            </Styled.SpanNav>

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
