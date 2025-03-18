import * as Styled from './styled';
import { useEffect, useState } from 'react';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import { GetUserFromLocalStorage } from '../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const MyAccountMain = () => {
  const nav = useNavigate();
  const [showUserName, setShowUserName] = useState<string | null>(null);

  useEffect(() => {
    const objUser = GetUserFromLocalStorage();

    const user = objUser.user;

    if (user) {
      const userName = user.name;
      const nameArray = userName?.split(' ');

      if (nameArray) {
        const showUserName = nameArray[0];
        setShowUserName(showUserName);
      }
    }
  }, [nav]);

  return (
    <Styled.ContainerMain>
      <HeaderFullMain></HeaderFullMain>
      <Styled.ContainerBodyMain>
        <Styled.ContainerBody>
          <Styled.H1>Minha Conta</Styled.H1>

          <Styled.ContainerMyAccountNavigation>
            <Navigation />
            <Styled.ContainerWelcome>
              <Styled.H1>Olá, {showUserName}</Styled.H1>
            </Styled.ContainerWelcome>
          </Styled.ContainerMyAccountNavigation>
        </Styled.ContainerBody>
      </Styled.ContainerBodyMain>
      <FooterMain></FooterMain>
    </Styled.ContainerMain>
  );
};

export default MyAccountMain;
