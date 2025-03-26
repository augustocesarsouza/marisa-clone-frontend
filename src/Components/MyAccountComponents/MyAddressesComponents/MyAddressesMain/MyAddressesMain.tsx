import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';

const MyAddressesMain = () => {
  const nav = useNavigate();

  const onClickAddNewAddress = () => {
    nav('/my-account/add-address');
  };

  return (
    <Styled.ContainerMain>
      <Styled.H1>Meus Endereços</Styled.H1>

      <Styled.ButtonAddNewAddress onClick={onClickAddNewAddress}>
        Adicionar Novo Endereço
      </Styled.ButtonAddNewAddress>

      <Styled.Span>Não há endereço cadastrado.</Styled.Span>
    </Styled.ContainerMain>
  );
};

export default MyAddressesMain;
