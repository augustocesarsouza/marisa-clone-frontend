import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import AddressDisplayedMain from '../AddressDisplayedComponents/AddressDisplayedMain/AddressDisplayedMain';
import { useEffect } from 'react';
const MyAddressesMain = () => {
  const nav = useNavigate();

  const onClickAddNewAddress = () => {
    nav('/my-account/add-address');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Styled.ContainerMain>
      <Styled.H1>Meus Endereços</Styled.H1>

      <Styled.ButtonAddNewAddress onClick={onClickAddNewAddress}>
        Adicionar Novo Endereço
      </Styled.ButtonAddNewAddress>

      <AddressDisplayedMain />
    </Styled.ContainerMain>
  );
};

export default MyAddressesMain;
