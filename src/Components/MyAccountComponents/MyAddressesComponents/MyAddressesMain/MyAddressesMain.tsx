import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { User } from '../../../Interfaces/Entity/User.';
import addressService, {
  ReturnErroCatch,
  ReturnGetAddressList,
} from '../../../Service/AddressService/AddressService';
import { Address } from '../../../Interfaces/Entity/Address';

const MyAddressesMain = () => {
  const nav = useNavigate();

  const onClickAddNewAddress = () => {
    nav('/my-account/add-address');
  };

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

    if (user) {
      getAllAddress(user);
    }
  }, [nav]);

  const [listAddresses, setListAddresses] = useState<Address[]>([]);

  const getAllAddress = async (user: User) => {
    const res = await addressService.getAllAddressUser(user);

    if (res.isSucess) {
      const data = res as ReturnGetAddressList;
      const listAddresses = data.data;
      console.log(listAddresses);

      setListAddresses(listAddresses);
    } else {
      const error = res as ReturnErroCatch;
      console.log(error);
    }
  };

  return (
    <Styled.ContainerMain>
      <Styled.H1>Meus Endereços</Styled.H1>

      <Styled.ButtonAddNewAddress onClick={onClickAddNewAddress}>
        Adicionar Novo Endereço
      </Styled.ButtonAddNewAddress>

      {listAddresses.length < 1 && <Styled.Span>Não há endereço cadastrado.</Styled.Span>}
    </Styled.ContainerMain>
  );
};

export default MyAddressesMain;
