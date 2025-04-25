import { useNavigate } from 'react-router-dom';
import { Address } from '../../../../Interfaces/Entity/Address';
import { User } from '../../../../Interfaces/Entity/User.';
import addressService, {
  ReturnErroCatch,
  ReturnGetAddress,
} from '../../../../Service/AddressService/AddressService';
import SvgX from '../../../../Svg/SvgX/SvgX';
import * as Styled from './srtyled';
import { FunctionGetUfState } from '../../../../Util/FunctionGetUfState/FunctionGetUfState';
import { useDispatch } from 'react-redux';
import { changeValue } from '../ChangeAddressMainRedux/AddressMainSlice';

interface ModalInfoWhichAddressIsPrimaryProps {
  address: Address;
  user: User | null;
  changeAddressMain: (address: Address) => void;
  changeShowModalSetAddressAsPrimary: (value: boolean) => void;
}

const ModalInfoWhichAddressIsPrimary = ({
  address,
  user,
  changeAddressMain,
  changeShowModalSetAddressAsPrimary,
}: ModalInfoWhichAddressIsPrimaryProps) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const onClickModalSetAddressAsPrimary = () => {
    changeShowModalSetAddressAsPrimary(false);
    document.body.style.overflow = 'auto';
  };

  const onClickSaveAddressAsPrimary = async () => {
    const addressData: Address = {
      id: address.id,
      addressNickname: null,
      addressType: null,
      recipientName: null,
      zipCode: null,
      street: null,
      number: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null,
      referencePoint: null,
      mainAddress: null,
      userId: null,
      userDTO: null,
    };

    if (user === null) return;

    const resp = await addressService.updateAddressPrimary(addressData, user);

    if (resp.isSucess) {
      const data = resp as ReturnGetAddress;
      const addressData = data.data;

      changeShowModalSetAddressAsPrimary(false);
      document.body.style.overflow = 'auto';
      dispatch(changeValue(true));

      changeAddressMain(addressData);
    } else {
      const error = resp as ReturnErroCatch;
      console.error(error);

      localStorage.removeItem('user');
      nav('/login');
    }
  };

  const formatCellPhone = (cellPhone: string | null | undefined): string => {
    if (cellPhone) {
      const cleanCellPhone = cellPhone.trim();

      const parts = cleanCellPhone.split(' ');

      if (parts.length === 2) {
        const ddd = parts[0];
        const number = parts[1];
        const formatted = `Celular: (${ddd}) ${number}`;
        return formatted;
      }

      return `Celular: ${cellPhone}`;
    }

    return '';
  };

  const formatAddress = (el: Address): string => {
    if (el) {
      const street = el.street;
      const number = el.number;
      const neighborhood = el.neighborhood;

      return `Endereço: ${street}, ${number} - ${neighborhood}`;
    }

    return '';
  };

  const formatLocation = (el: Address) => {
    if (!el) return '';

    if (!el.state || !el.city) return '';

    // const sigla = statesMap[el.state];
    const sigla = FunctionGetUfState(el.state);

    return `${el.city} - ${sigla} - ${el.zipCode?.replace('-', '')}`;
  };

  return (
    <div className="fixed left-0 top-0 w-full h-full flex justify-center bg-[#00000075]">
      <div className="bg-[white] min-w-[600px] min-h-[348px] w-fit h-fit !mt-[25px] flex flex-col">
        <div className="flex items-center justify-between !p-8 border-b-1 border-[#00000038]">
          <h1 className="text-2xl font-semibold">Definir Endereço Como Principal</h1>
          <Styled.ContainerSvgX
            onClick={onClickModalSetAddressAsPrimary}
            className="container-svg-x">
            <SvgX />
          </Styled.ContainerSvgX>
        </div>

        <div className="flex flex-col !p-10 gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium">Você deseja alterar seu endereço principal?</h1>
            <span className="text-3xl font-medium span-address-type">{address.addressType}</span>
            <span className="text-3xl font-medium span-recipient-name">
              Destinatário:{address.recipientName}
            </span>
            <span className="text-3xl font-medium span-cell-phone">
              {formatCellPhone(address.userDTO?.cellPhone)}
            </span>
            <span className="text-3xl font-medium span-address-description">
              {formatAddress(address)}
            </span>
            <span className="text-3xl font-medium span-address-location">
              {formatLocation(address)}
            </span>
          </div>

          <div className="flex gap-10 justify-between">
            <Styled.ButtonAddNewAddress $whichButton={0} onClick={onClickModalSetAddressAsPrimary}>
              Cancelar
            </Styled.ButtonAddNewAddress>
            <Styled.ButtonAddNewAddress $whichButton={1} onClick={onClickSaveAddressAsPrimary}>
              Confirmar
            </Styled.ButtonAddNewAddress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfoWhichAddressIsPrimary;
