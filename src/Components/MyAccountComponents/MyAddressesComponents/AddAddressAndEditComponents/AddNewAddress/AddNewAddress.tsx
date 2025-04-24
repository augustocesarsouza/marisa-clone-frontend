import { useLocation } from 'react-router-dom';
import ModalFormAddress from '../ModalFormAddress/ModalFormAddress';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import { Address } from '../../../../Interfaces/Entity/Address';

const AddNewAddress = () => {
  const location = useLocation();
  const [addAddress, setAddAddress] = useState(true);
  const [addressUser, setAddressUser] = useState<Address | null>(null);

  useEffect(() => {
    if (location.pathname === '/my-account/add-address') {
      if (location.state === null) {
        setAddAddress(true);
      }
    }

    if (location.pathname === '/my-account/edit-address') {
      const address = location.state?.address;
      setAddressUser(address);
      setAddAddress(false);
    }
  }, [location]);

  return (
    <Styled.ContainerMain>
      {addAddress && <Styled.H1>Adicionar Novo Endereço</Styled.H1>}
      {!addAddress && <Styled.H1>Alterar Endereço</Styled.H1>}

      <ModalFormAddress addressUser={addressUser} />
    </Styled.ContainerMain>
  );
};

export default AddNewAddress;
