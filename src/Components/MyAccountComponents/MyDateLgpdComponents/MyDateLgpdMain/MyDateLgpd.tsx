// import * as Styled from './styled';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { TokenExpiration } from '../../../TokenValidation/TokenExpiration';

const MyDateLgpd = () => {
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
    const token = user.token;

    if (token) {
      const valueExpiration = TokenExpiration(token);

      if (valueExpiration) {
        localStorage.removeItem('user');
        nav('/login');
      }
    }
  }, [nav]);

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-4xl font-medium">MEUS DADOS</h1>
    </div>
  );
};

export default MyDateLgpd;
