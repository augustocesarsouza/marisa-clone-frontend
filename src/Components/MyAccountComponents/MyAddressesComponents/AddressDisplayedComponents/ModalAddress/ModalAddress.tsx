import { Address } from '../../../../Interfaces/Entity/Address';
import { User } from '../../../../Interfaces/Entity/User.';
import addressService, {
  ReturnGetAddress,
} from '../../../../Service/AddressService/AddressService';
import * as Styled from './styled';

interface ModalAddressProps {
  address: Address;
  changeArrayAddresses: (address: Address) => void;
  changeArrayAddressesMain: (itemDeleted: Address, newAddressMain: Address) => void;
  user: User | null;
}

const ModalAddress = ({
  address,
  changeArrayAddressesMain,
  changeArrayAddresses,
  user,
}: ModalAddressProps) => {
  const formatName = (name: string | null): string => {
    if (name) {
      const nameAlright = `Destinatário:${name}`;

      return nameAlright;
    }

    return '';
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

    const statesMap: { [key: string]: string } = {
      Acre: 'AC',
      Alagoas: 'AL',
      Amapá: 'AP',
      Amazonas: 'AM',
      Bahia: 'BA',
      Ceará: 'CE',
      'Distrito Federal': 'DF',
      'Espírito Santo': 'ES',
      Goiás: 'GO',
      Maranhão: 'MA',
      'Mato Grosso': 'MT',
      'Mato Grosso do Sul': 'MS',
      'Minas Gerais': 'MG',
      Pará: 'PA',
      Paraíba: 'PB',
      Paraná: 'PR',
      Pernambuco: 'PE',
      Piauí: 'PI',
      'Rio de Janeiro': 'RJ',
      'Rio Grande do Norte': 'RN',
      'Rio Grande do Sul': 'RS',
      Rondônia: 'RO',
      Roraima: 'RR',
      'Santa Catarina': 'SC',
      'São Paulo': 'SP',
      Sergipe: 'SE',
      Tocantins: 'TO',
    };

    const sigla = statesMap[el.state];

    return `${el.city} - ${sigla} - ${el.zipCode?.replace('-', '')}`;
  };

  const onClickRemoveAddress = async (el: Address) => {
    if (!user || !el.id) return;

    const addressDelete = await addressService.deleteAddress(el.id, user);

    if (addressDelete.isSucess) {
      const dataReturn = addressDelete as ReturnGetAddress;
      const data = dataReturn.data;

      if (data.mainAddress) {
        changeArrayAddressesMain(el, data);
      } else {
        changeArrayAddresses(data);
      }
    } else {
      const error = addressDelete as ReturnGetAddress;
      console.error(error);
    }
  };

  return (
    <Styled.ContainerMain $changeValueJustifyContent={address.mainAddress ?? false}>
      {address.mainAddress && address.mainAddress && (
        <span className="text-2xl font-medium !mb-[10px]">Endereço Principal</span>
      )}

      <div className="flex flex-col">
        <div className="!mb-[10px] leading-6 flex flex-col gap-0 items-start">
          <div className="flex items-center leading-6">
            <span className="text-2xl font-semibold !mr-[10px]">RESIDENCIAL</span>
            <button className="text-xl font-semibold text-[#ec008c] border-b border-[#ec008c] leading-6 cursor-pointer">
              editar
            </button>
          </div>
          <button
            className="text-xl font-semibold text-[#ec008c] border-b border-[#ec008c] leading-6 cursor-pointer"
            onClick={() => onClickRemoveAddress(address)}>
            remover
          </button>
        </div>

        <div className="flex flex-col gap-[2px]">
          <span className="break-words text-black text-[13px] font-medium leading-6">
            {formatName(address.recipientName)}
          </span>
          <span className="break-words text-black text-[13px] font-medium leading-6">
            Celular: {formatCellPhone(address.userDTO?.cellPhone)}
          </span>
          <span className="break-words text-black text-[13px] font-medium leading-6">
            {formatAddress(address)}
          </span>
          <span className="break-words text-black text-[13px] font-medium leading-6">
            {formatLocation(address)}
          </span>
        </div>
      </div>

      {!address.mainAddress && (
        <div className="flex leading-7 border border-[#000000]">
          <button className="text-[#000000] text-2xl font-medium">
            Definir como endereço principal
          </button>
        </div>
      )}
    </Styled.ContainerMain>
  );
};

export default ModalAddress;
