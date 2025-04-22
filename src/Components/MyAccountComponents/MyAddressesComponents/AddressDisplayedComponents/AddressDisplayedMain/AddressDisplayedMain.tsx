import { useEffect, useState } from 'react';
import { Address } from '../../../../Interfaces/Entity/Address';
import { User } from '../../../../Interfaces/Entity/User.';
import { GetUserFromLocalStorage } from '../../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { useNavigate } from 'react-router-dom';
import { TokenExpiration } from '../../../../TokenValidation/TokenExpiration';
import addressService, {
  ReturnErroCatch,
  ReturnGetAddressList,
} from '../../../../Service/AddressService/AddressService';
import ModalAddress from '../ModalAddress/ModalAddress';

const AddressDisplayedMain = () => {
  const nav = useNavigate();
  const [listAddresses, setListAddresses] = useState<Address[]>([]);

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

    if (user) {
      getAllAddress(user);
    }
  }, [nav]);

  const getAllAddress = async (user: User) => {
    const res = await addressService.getAllAddressUser(user);

    if (res.isSucess) {
      const data = res as ReturnGetAddressList;
      const listAddresses = data.data;
      console.log(listAddresses);

      setListAddresses(listAddresses);
    } else {
      const error = res as ReturnErroCatch;
      console.error(error);

      localStorage.removeItem('user');
      nav('/login');
    }
  };

  return (
    <div className="flex gap-1">
      {listAddresses.length < 1 && (
        <span className="text-xl font-semibold">Não há endereço cadastrado.</span>
      )}

      {listAddresses.length > 0 &&
        listAddresses.map((el) => <ModalAddress address={el} key={el.id} />)}
    </div>
  );
};

export default AddressDisplayedMain;
