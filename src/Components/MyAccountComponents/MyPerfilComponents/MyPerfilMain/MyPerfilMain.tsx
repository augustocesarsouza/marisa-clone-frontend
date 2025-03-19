import { useEffect, useState } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';

const MyPerfilMain = () => {
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
    <Styled.ContainerMainPerfil>
      <Styled.H1>Olá, {showUserName}</Styled.H1>
    </Styled.ContainerMainPerfil>
  );
};

export default MyPerfilMain;
