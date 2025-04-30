import { useEffect, useState } from 'react';
import FirstHeaderBody from '../FirstHeaderBody/FirstHeaderBody';
import NavigationBody from '../NavigationBody/NavigationBody';
import * as Styled from './styled';
import { User } from '../../../Interfaces/Entity/User.';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { ContextHome } from '../Contexts/ContextHome';
import { TokenExpiration } from '../../../TokenValidation/TokenExpiration';

const HeaderSecondMain = () => {
  const [user, setUser] = useState<User | null>(null);
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/login' || pathname === '/register' || pathname === '/change-password')
      return;

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

  const [whichNavigation, setWhichNavigation] = useState('');

  const [mouseLeaveNavigationBoolean, setMouseLeaveNavigationBoolean] = useState(false);
  const [mouseEnterContainerMainModal, setMouseEnterContainerMainModal] = useState(false);

  const mouseEnterNavigation = (name: string) => {
    setWhichNavigation(name);
    setMouseLeaveNavigationBoolean(false);
  };

  const mouseLeaveNavigation = () => {
    setMouseLeaveNavigationBoolean(true);
    setMouseEnterContainerMainModal(false);
  };

  useEffect(() => {
    if (!mouseEnterContainerMainModal) {
      setWhichNavigation(whichNavigation);

      if (mouseLeaveNavigationBoolean) {
        setWhichNavigation('VAZIO');
      }
    }
  }, [mouseEnterContainerMainModal, whichNavigation, mouseLeaveNavigationBoolean]);

  useEffect(() => {
    console.log(whichNavigation);
  }, [whichNavigation]);

  const onMouseEnterContainerMainModal = () => {
    setMouseEnterContainerMainModal(true);
    setMouseLeaveNavigationBoolean(false);
  };

  const onMouseLeaveContainerMainModal = () => {
    setMouseEnterContainerMainModal(false);
    setWhichNavigation('VAZIO');
  };

  return (
    <ContextHome.Provider
      value={{
        user: user,
      }}>
      <Styled.ContainerMain>
        <FirstHeaderBody></FirstHeaderBody>

        <NavigationBody
          mouseEnterNavigation={mouseEnterNavigation}
          mouseLeaveNavigation={mouseLeaveNavigation}
        />

        <Styled.ContainerModalFloating
          className="flex w-[1050px] h-[644px] absolute top-[155px] bg-[#ff00002e]"
          onMouseEnter={onMouseEnterContainerMainModal}
          onMouseLeave={onMouseLeaveContainerMainModal}>
          <h1>Feminino</h1>
        </Styled.ContainerModalFloating>

        {whichNavigation === 'feminino' && (
          <Styled.ContainerModalFloating
            className="flex w-[1050px] h-[644px] absolute top-[155px] bg-[#ff00002e]"
            onMouseEnter={onMouseEnterContainerMainModal}
            onMouseLeave={onMouseLeaveContainerMainModal}>
            <h1>Feminino</h1>
          </Styled.ContainerModalFloating>
        )}

        {whichNavigation === 'calcado' && (
          <Styled.ContainerModalFloating
            className="flex w-[1050px] h-[644px] absolute top-[155px] bg-[#ff00002e]"
            onMouseEnter={onMouseEnterContainerMainModal}
            onMouseLeave={onMouseLeaveContainerMainModal}>
            <h1>Calçados</h1>
          </Styled.ContainerModalFloating>
        )}
      </Styled.ContainerMain>
    </ContextHome.Provider>
  );
};

export default HeaderSecondMain;
