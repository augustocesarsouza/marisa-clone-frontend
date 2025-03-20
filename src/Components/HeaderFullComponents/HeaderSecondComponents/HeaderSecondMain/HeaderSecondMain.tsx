import { useEffect, useState } from 'react';
import FirstHeaderBody from '../FirstHeaderBody/FirstHeaderBody';
import NavigationBody from '../NavigationBody/NavigationBody';
import * as Styled from './styled';
import { User } from '../../../Interfaces/Entity/User.';
import { useNavigate } from 'react-router-dom';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { ContextHome } from '../Contexts/ContextHome';

const HeaderSecondMain = () => {
  const [user, setUser] = useState<User | null>(null);
  const nav = useNavigate();

  useEffect(() => {
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

    if (user) {
      setUser(user);
    }
  }, [nav]);

  return (
    <ContextHome.Provider
      value={{
        user: user,
      }}>
      <Styled.ContainerMain>
        <FirstHeaderBody></FirstHeaderBody>

        <NavigationBody></NavigationBody>
      </Styled.ContainerMain>
    </ContextHome.Provider>
  );
};

export default HeaderSecondMain;
