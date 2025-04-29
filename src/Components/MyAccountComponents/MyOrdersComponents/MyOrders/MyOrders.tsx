// import * as Styled from './styled';

import { useEffect } from 'react';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { useNavigate } from 'react-router-dom';
import { TokenExpiration } from '../../../TokenValidation/TokenExpiration';

const MyOrders = () => {
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
    <div className="max-w-[753px] flex flex-col items-center">
      <h1 className="font-semibold text-4xl !mt-[20px] !mb-[10px]">
        VOCÊ AINDA NÃO POSSUI PEDIDOS!
      </h1>
      <span className="text-center font-medium text-3xl !mb-[25px]">
        Para fazer um pedido basta navegar pela Loja Virtual Marisa ou utilizar a busca acima, e ao
        encontrar os produtos desejados, clique no botão "Comprar" se seguir os passos seguintes até
        a finalização de seu pedido.
      </span>

      <button className="bg-[#d3007d] text-white font-semibold w-[259px] h-[44px]">
        CONTINUAR NAVEGANDO
      </button>
    </div>
  );
};

export default MyOrders;
