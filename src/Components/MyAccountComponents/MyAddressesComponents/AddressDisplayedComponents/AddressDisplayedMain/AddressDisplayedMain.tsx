import { useCallback, useEffect, useState } from 'react';
import { Address } from '../../../../Interfaces/Entity/Address';
import { User } from '../../../../Interfaces/Entity/User.';
import { GetUserFromLocalStorage } from '../../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { useNavigate } from 'react-router-dom';
import { TokenExpiration } from '../../../../TokenValidation/TokenExpiration';
import addressService, {
  ReturnGetAddressList,
} from '../../../../Service/AddressService/AddressService';
import ModalAddress from '../ModalAddress/ModalAddress';
import { ReturnErroCatch } from '../../../../Service/UserService/UserService';

const AddressDisplayedMain = () => {
  const nav = useNavigate();
  const [listAddresses, setListAddresses] = useState<Address[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const getAllAddress = useCallback(
    async (user: User) => {
      const res = await addressService.getAllAddressUser(user);

      if (res.isSucess) {
        const data = res as ReturnGetAddressList;
        const listAddresses = data.data;

        const newArray: Address[] = [];

        listAddresses.forEach((el) => {
          if (el.mainAddress === true) {
            newArray.unshift(el);
          } else {
            newArray.push(el);
          }
        });

        setListAddresses(newArray);
      } else {
        const error = res as ReturnErroCatch;
        console.error(error);

        localStorage.removeItem('user');
        nav('/login');
      }
    },
    [nav]
  );

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
      setUser(user);
      getAllAddress(user);
    }
  }, [getAllAddress, nav]);

  const changeArrayAddresses = (newAddress: Address) => {
    setListAddresses((prev) => {
      const newList = [...prev];

      const filterArray = newList.filter((el) => el.id !== newAddress.id);
      return filterArray;
    });
  };

  const changeArrayAddressesMain = (itemDeleted: Address, newAddressMain: Address) => {
    setListAddresses((prev) => {
      const newList = prev
        .filter((el) => el.id !== itemDeleted.id)
        .map((el) => {
          if (el.id === newAddressMain.id) {
            return { ...el, mainAddress: true };
          }
          return el;
        });

      return newList;
    });
  };

  const changeAddressMain = (address: Address) => {
    setListAddresses((prev) => {
      const newList = prev
        .map((el) => {
          if (el.mainAddress === true) {
            return { ...el, mainAddress: false };
          }

          if (el.id === address.id) {
            return { ...el, mainAddress: true };
          }

          return el;
        })
        .sort((a, b) => (b.mainAddress ? 1 : 0) - (a.mainAddress ? 1 : 0));

      return newList;
    });
  };

  return (
    <div className="flex gap-1">
      {listAddresses.length < 1 && (
        <span className="text-xl font-semibold">Não há endereço cadastrado.</span>
      )}

      {listAddresses.length > 0 &&
        listAddresses.map((el) => (
          <ModalAddress
            address={el}
            key={el.id}
            changeArrayAddresses={changeArrayAddresses}
            changeArrayAddressesMain={changeArrayAddressesMain}
            user={user}
            quantityAddresses={listAddresses.length}
            changeAddressMain={changeAddressMain}
          />
        ))}
    </div>
  );
};

export default AddressDisplayedMain;
