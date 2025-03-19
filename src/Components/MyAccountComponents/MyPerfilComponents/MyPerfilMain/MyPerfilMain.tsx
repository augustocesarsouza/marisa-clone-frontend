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

      <Styled.ContainerSpanAndButton>
        <Styled.Span>
          Seja bem vindo a sua área. Nesse espaço você poderá editar e visualizar todas as
          informações relacionadas ao seu cadastro.
        </Styled.Span>
        <Styled.ContainerButtons>
          <Styled.Button>ALTERAR SENHA</Styled.Button>
          <Styled.Button>ATUALIZAR SEU E-MAIL</Styled.Button>
          <Styled.Button>ALTERAR DADOS</Styled.Button>
        </Styled.ContainerButtons>
      </Styled.ContainerSpanAndButton>

      <Styled.ContainerOrders>
        <Styled.H1>Últimos pedidos realizados na Marisa</Styled.H1>
        <Styled.Table>
          <Styled.Thead>
            <Styled.Tr>
              <Styled.Th>Nº do pedido</Styled.Th>
              <Styled.Th>Data do pedido</Styled.Th>
              <Styled.Th>Valor do pedido</Styled.Th>
              <Styled.Th>Forma de pagamento</Styled.Th>
              <Styled.Th>Status</Styled.Th>
            </Styled.Tr>
          </Styled.Thead>

          <Styled.Tbody>
            <Styled.Tr>
              <Styled.Td>Não há pedidos.</Styled.Td>
            </Styled.Tr>
          </Styled.Tbody>
          {/* <Styled.Tbody>
            <Styled.Tr>
              <Styled.Td>#102345</Styled.Td>
              <Styled.Td>05/03/2024</Styled.Td>
              <Styled.Td>R$ 199,90</Styled.Td>
              <Styled.Td>Cartão de Crédito</Styled.Td>
              <Styled.Td>Enviado</Styled.Td>
            </Styled.Tr>
          </Styled.Tbody> */}
        </Styled.Table>
      </Styled.ContainerOrders>

      <Styled.ContainerRegisteredAddresses>
        <Styled.H1>Endereços Cadastrados</Styled.H1>

        <Styled.Button>Não há endereço cadastrado.</Styled.Button>
      </Styled.ContainerRegisteredAddresses>
    </Styled.ContainerMainPerfil>
  );
};

export default MyPerfilMain;
