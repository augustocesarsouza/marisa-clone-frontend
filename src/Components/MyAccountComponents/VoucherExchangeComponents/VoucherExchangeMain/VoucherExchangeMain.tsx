import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect } from 'react';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { TokenExpiration } from '../../../TokenValidation/TokenExpiration';

const VoucherExchangeMain = () => {
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
      <h1 className="text-4xl font-medium !mb-[20px]">Pendentes</h1>
      <h1 className="text-4xl font-medium !mb-[20px]">Reembolsos</h1>
      <h1 className="text-4xl font-medium">Vale Troca</h1>

      <div className="flex flex-col leading-6 !mb-[20px]">
        <p className="text-1xl font-bold !mt-[20px] !mb-[10px]">Vales-troca disponíveis</p>
        <span className="text-2xl font-medium !py-2 !px-4 bg-[#f1f1f1] leading-6">
          Caso não tenha o número do seu vale-troca, baixe nosso aplicativo e consulte o número.
        </span>
        <Styled.HideScrollArrows>
          <table className="min-w-[1024px]">
            <thead>
              <tr>
                <th className="text-left text-2xl font-medium w-auto !p-[14px]">
                  Código do vale troca
                </th>
                <th className="text-center text-2xl font-medium w-[33%] !p-[14px]">
                  Data de Validade
                </th>
                <th className="text-center text-2xl font-medium w-[33%] !p-[14px]">Valor</th>
              </tr>
            </thead>
          </table>
        </Styled.HideScrollArrows>
      </div>

      <div className="flex flex-col leading-6">
        <p className="text-1xl font-bold !mt-[20px] !mb-[10px]">Vales Troca Utilizados</p>
        <Styled.HideScrollArrows>
          <table className="min-w-[1024px]">
            <thead>
              <tr>
                <th className="text-left text-2xl font-medium w-auto !p-[14px]">
                  Código do vale troca
                </th>
                <th className="text-center text-2xl font-medium w-[33%] !p-[14px]">
                  Data de Validade
                </th>
                <th className="text-center text-2xl font-medium w-[33%] !p-[14px]">Valor</th>
              </tr>
            </thead>
          </table>
        </Styled.HideScrollArrows>
      </div>
    </div>
  );
};

export default VoucherExchangeMain;
