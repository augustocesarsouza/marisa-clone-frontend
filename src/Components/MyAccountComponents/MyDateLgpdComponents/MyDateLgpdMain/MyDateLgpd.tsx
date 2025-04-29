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
    <div className="max-w-[753px] flex flex-col">
      <h1 className="text-4xl font-medium !mb-20">MEUS DADOS</h1>

      <div className="border border-[red] rounded-md leading-6 !p-8">
        <span className="text-xl font-medium span-text-explaining-about-deleting-data">
          Quer excluir seus Dados? <br /> <br /> De acordo com a legislação, a exclusão dos dados
          pessoais só pode ser realizada se não houver compras nos últimos 5 anos ou faturas do
          cartão Mbank nos últimos 10 anos. <br /> <br /> A{' '}
          <b>Lei Geral de Proteção de Dados (LGPD)</b>
          permite a retenção de dados para esse fim, conforme o <b>
            Art. 7º, inciso II.
          </b> <br /> <br /> Durante esse período, não será possível excluir totalmente seus dados.{' '}
          <br /> <br /> Para prosseguir com a solicitação, pedimos que envie uma{' '}
          <b>selfie segurando seu RG/CPF</b> para o e-mail:{' '}
          <a
            className="text-[#ec008c] font-semibold"
            href="mailto:encarregado.dados@marisa.com.br"
            target="_blank">
            encarregado.dados@marisa.com.br
          </a>
        </span>
      </div>
    </div>
  );
};

export default MyDateLgpd;
