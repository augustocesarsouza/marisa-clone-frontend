import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../../Interfaces/Entity/User.';
import { Address } from '../../../../Interfaces/Entity/Address';
import { GetUserFromLocalStorage } from '../../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { TokenExpiration } from '../../../../TokenValidation/TokenExpiration';
import addressService, {
  ReturnErroCatch,
  ReturnSendCodeEmailTwo,
  SendCodeEmailTwo,
} from '../../../../Service/AddressService/AddressService';
import * as Styled from './styled';
import CodeSendEmailModal from '../CodeSendEmailModal/CodeSendEmailModal';

interface Cep {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  estado: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  regiao: string;
  siafi: string;
  uf: string;
  unidade: string;
}

interface ObjErrorCep {
  erro: string;
}

interface ModalFormAddressProps {
  addressUser: Address | null;
}

const ModalFormAddress = ({ addressUser }: ModalFormAddressProps) => {
  const nav = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  const buttonCancelRef = useRef<HTMLButtonElement>(null);
  const buttonSaveRef = useRef<HTMLButtonElement>(null);

  const inputAddressNickname = useRef<HTMLInputElement>(null);
  const SelectTypeAddressRef = useRef<HTMLSelectElement | null>(null);
  const inputRecipientName = useRef<HTMLInputElement>(null);
  const inputCep = useRef<HTMLInputElement>(null);
  const inputAddress = useRef<HTMLInputElement>(null);
  const inputNumberHome = useRef<HTMLInputElement>(null);
  const inputComplement = useRef<HTMLInputElement>(null);
  const inputNeighborhood = useRef<HTMLInputElement>(null);
  const inputCity = useRef<HTMLInputElement>(null);
  const SelectUfRef = useRef<HTMLSelectElement | null>(null);
  const inputReferencePoint = useRef<HTMLInputElement>(null);

  const optionUf = useRef<HTMLOptionElement>(null);

  const SpanErrorAddressNickname = useRef<HTMLSpanElement>(null);
  const SpanErrorTypeAddress = useRef<HTMLSpanElement>(null);
  const SpanErrorRecipientName = useRef<HTMLSpanElement>(null);
  const SpanErrorCep = useRef<HTMLSpanElement>(null);
  const SpanErrorAddress = useRef<HTMLSpanElement>(null);
  const SpanErrorNumberHome = useRef<HTMLSpanElement>(null);
  const SpanErrorComplement = useRef<HTMLSpanElement>(null);
  const SpanErrorNeighborhood = useRef<HTMLSpanElement>(null);
  const SpanErrorCity = useRef<HTMLSpanElement>(null);
  const SpanErrorUf = useRef<HTMLSpanElement>(null);

  const [codeSendEmail, setCodeSendEmail] = useState(false);
  const [objAddress, setObjAddress] = useState<Address | null>(null);

  const [selectedType, setSelectedType] = useState('Tipo de Endereço');
  const [newValueUf, setNewValueUf] = useState('');
  const [cepValue, setCepValue] = useState('');
  const [valueNumberHome, setValueNumberHome] = useState('');

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
      setUser(user);

      const token = user.token;

      if (token) {
        const valueExpiration = TokenExpiration(token);

        if (valueExpiration) {
          localStorage.removeItem('user');
          nav('/login');
        }
      }
    }
  }, [nav]);

  useEffect(() => {
    if (addressUser) {
      const inputAddressNicknameHere = inputAddressNickname.current as HTMLInputElement;
      inputAddressNicknameHere.value = addressUser.addressNickname ?? '';

      const selectTypeAddressHere = SelectTypeAddressRef.current as HTMLSelectElement;
      selectTypeAddressHere.value = addressUser.addressType ?? '';
      setSelectedType(addressUser.addressType ?? '');

      const inputRecipientNameHere = inputRecipientName.current as HTMLInputElement;
      inputRecipientNameHere.value = addressUser.recipientName ?? '';

      setCepValue(addressUser.zipCode ?? '');

      const inputAddressHere = inputAddress.current as HTMLInputElement;
      inputAddressHere.style.color = '#929292';
      inputAddressHere.style.backgroundColor = '#eee';
      inputAddressHere.readOnly = true;
      inputAddressHere.value = addressUser.street ?? '';

      const number = addressUser.number ? addressUser.number.toString() : '';
      const inputNumberHomeHere = inputNumberHome.current as HTMLInputElement;
      inputNumberHomeHere.value = number;
      setValueNumberHome(number);

      const inputComplementHere = inputComplement.current as HTMLInputElement;
      inputComplementHere.value = addressUser.complement ?? '';

      const inputNeighborhoodHere = inputNeighborhood.current as HTMLInputElement;
      inputNeighborhoodHere.value = addressUser.neighborhood ?? '';

      const inputCityHere = inputCity.current as HTMLInputElement;
      inputCityHere.value = addressUser.city ?? '';

      inputCityHere.style.color = '#929292';
      inputCityHere.style.backgroundColor = '#eee';
      inputCityHere.readOnly = true;

      // console.log(addressUser.state);
      // const sigla = FunctionGetUfState(addressUser.state ?? '');
      setNewValueUf(addressUser.state ?? '');

      const selectUfRefHere = SelectUfRef.current as HTMLSelectElement;
      selectUfRefHere.style.color = '#929292';
      selectUfRefHere.style.backgroundColor = '#eee';
      selectUfRefHere.disabled = true;
      selectUfRefHere.style.cursor = 'not-allowed';
    }
  }, [addressUser]);

  const onChangeInputAddressNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorAddressNickname();
  };

  const handleClickSelectTypeAddressRef = () => {
    verifyErrorSelectTypeAddress();
  };

  const onChangeInputRecipientName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorRecipientName();
  };

  const [errorCpf, setErrorCpf] = useState(false);

  const onChangeInputCep = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const cepInput = e.target;

    let value = cepInput.value;

    value = value.replace(/\D/g, '');

    if (value.length > 8) {
      value = value.slice(0, 8);
    }

    if (value.length > 5) {
      value = `${value.substring(0, 5)}-${value.substring(5)}`;
    }

    setCepValue(value);

    const valueCep = value.replace(/[-_]/g, '');

    const cepIsValid = validateCep(value);

    if (!cepIsValid) {
      const inputCepHere = inputCep.current as HTMLInputElement;
      const SpanErrorCepHere = SpanErrorCep.current as HTMLSpanElement;

      putErrorSpanAndInput(SpanErrorCepHere, inputCepHere);
      return;
    }

    if (valueCep.length > 7) {
      const resultCep: Cep | ObjErrorCep = await consultaCEP(valueCep);

      if ('erro' in resultCep && resultCep.erro === 'true') {
        const inputCepHere = inputCep.current as HTMLInputElement;
        const SpanErrorCepHere = SpanErrorCep.current as HTMLSpanElement;

        putErrorSpanAndInput(SpanErrorCepHere, inputCepHere);
        setErrorCpf(true);
        return;
      }

      if (!('erro' in resultCep)) {
        const cep: Cep | undefined = resultCep;
        const inputCepHere = inputCep.current as HTMLInputElement;
        const SpanErrorCepHere = SpanErrorCep.current as HTMLSpanElement;

        setErrorCpf(false);

        withoutErrorSpanAndInput(SpanErrorCepHere, inputCepHere);

        if (cep) {
          const SpanErrorAddressHere = SpanErrorAddress.current as HTMLSpanElement;

          const inputAddressHere = inputAddress.current as HTMLInputElement;
          inputAddressHere.style.color = '#929292';
          inputAddressHere.style.backgroundColor = '#eee';
          inputAddressHere.readOnly = true;
          inputAddressHere.value = cep.logradouro;

          inputAddressHere.style.borderColor = 'rgba(0, 0, 0, 0.27)';
          withoutErrorSpanAndInput(SpanErrorAddressHere, null);

          const inputNeighborhoodHere = inputNeighborhood.current as HTMLInputElement;
          inputNeighborhoodHere.style.color = '#929292';
          inputNeighborhoodHere.style.backgroundColor = '#eee';
          inputNeighborhoodHere.readOnly = true;
          inputNeighborhoodHere.value = cep.bairro;

          const SpanErrorNeighborhoodHere = SpanErrorNeighborhood.current as HTMLSpanElement;

          inputNeighborhoodHere.style.borderColor = 'rgba(0, 0, 0, 0.27)';
          withoutErrorSpanAndInput(SpanErrorNeighborhoodHere, null);

          const inputCityHere = inputCity.current as HTMLInputElement;
          inputCityHere.style.color = '#929292';
          inputCityHere.style.backgroundColor = '#eee';
          inputCityHere.readOnly = true;
          inputCityHere.value = cep.localidade;

          const SpanErrorCityHere = SpanErrorCity.current as HTMLSpanElement;

          inputCityHere.style.borderColor = 'rgba(0, 0, 0, 0.27)';
          withoutErrorSpanAndInput(SpanErrorCityHere, null);

          const selectUfRefHere = SelectUfRef.current as HTMLSelectElement;
          selectUfRefHere.style.color = '#929292';
          selectUfRefHere.style.backgroundColor = '#eee';
          selectUfRefHere.disabled = true;
          selectUfRefHere.style.cursor = 'not-allowed';

          const SpanErrorUfHere = SpanErrorUf.current as HTMLSpanElement;

          selectUfRefHere.style.borderColor = 'rgba(0, 0, 0, 0.27)';
          withoutErrorSpanAndInput(SpanErrorUfHere, null);

          setNewValueUf(cep.estado);
        }
      }
    }

    // verifyErrorCep();
  };

  const consultaCEP = async (cep: string) => {
    if (cep === null || cep === undefined) return;

    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const json = await res.json();

        return json;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  };

  const onChangeInputAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorAddress();
  };

  const onChangeInputNumberHome = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const inputNumberHomeHere = e.target as HTMLInputElement;
    let value = inputNumberHomeHere.value;

    value = value.replace(/\D/g, '');

    if (value.length > 6) {
      value = value.slice(0, 6);
    }

    setValueNumberHome(value);

    if (value !== '') {
      verifyErrorNumberHome();
    }
  };

  const onChangeInputComplement = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const onChangeInputNeighborhood = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorNeighborhood();
  };

  const onChangeInputCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorCity();
  };

  const onChangeInputReferencePoint = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const validateAddressNickname = (value: string): boolean => {
    if (!value) return false;

    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateTypeAddress = (value: string): boolean => {
    if (!value) return false;

    const valueValid = value !== 'Tipo de Endereço';
    return valueValid;
  };

  const validateRecipientName = (value: string): boolean => {
    if (!value) return false;

    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateCep = (value: string): boolean => {
    if (!value) return false;

    const valueValid = value.length > 7;
    return valueValid;
  };

  const validateAddress = (value: string): boolean => {
    if (!value) return false;

    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateNumberHome = (value: string): boolean => {
    if (!value) return false;

    value = value.replace(/\D/g, '');

    if (value.length <= 0) {
      value = 'a';
    }

    const numberValue = Number(value);

    const valueValid = !isNaN(numberValue);
    return valueValid;
  };

  const validateNeighborhood = (value: string): boolean => {
    const valueValid = value.length > 2;
    return valueValid;
  };

  const validateCity = (value: string): boolean => {
    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateUf = (value: string): boolean => {
    const valueValid = value !== 'UF';
    return valueValid;
  };

  const putErrorSpanAndInput = (
    span: HTMLSpanElement | null,
    input: HTMLInputElement | HTMLSelectElement
  ) => {
    if (span) {
      span.style.display = 'block';
    }

    input.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    input.style.border = '1px solid red';
  };

  const withoutErrorSpanAndInput = (
    span: HTMLSpanElement | null,
    input: HTMLInputElement | HTMLSelectElement | null
  ) => {
    if (span) {
      span.style.display = 'none';
    }

    if (input) {
      input.style.backgroundColor = '#fff';
      input.style.border = '1px solid rgba(0, 0, 0, 0.27)';
    }
  };

  const onClickCancel = () => {
    nav('/my-account/address-book');
  };

  const onClickSave = async () => {
    // fazer test aqui no front e depois deploy
    // tem que fazer deploy porque no front nao está mostrando o address para edit e nem para deletar
    const errorNickName = verifyErrorAddressNickname();

    const errorTypeAddress = verifyErrorSelectTypeAddress();

    const errorRecipientName = verifyErrorRecipientName();

    const errorCep = verifyErrorCep();

    const errorAddress = verifyErrorAddress();

    const errorNumberHome = verifyErrorNumberHome();

    const errorNeighborhood = verifyErrorNeighborhood();

    const errorCity = verifyErrorCity();

    const errorUf = verifyErrorUf();

    if (
      !errorNickName ||
      !errorTypeAddress ||
      !errorRecipientName ||
      !errorCep ||
      !errorAddress ||
      !errorNumberHome ||
      !errorNeighborhood ||
      !errorCity ||
      !errorUf ||
      errorCpf
    ) {
      // ERROR
    }

    if (
      errorNickName &&
      errorTypeAddress &&
      errorRecipientName &&
      errorCep &&
      errorAddress &&
      errorNumberHome &&
      errorNeighborhood &&
      errorCity &&
      errorUf &&
      !errorCpf &&
      user
    ) {
      const inputAddressNicknameHere = inputAddressNickname.current as HTMLInputElement;
      const SelectTypeAddressRefHere = SelectTypeAddressRef.current as HTMLSelectElement;
      const inputRecipientNameHere = inputRecipientName.current as HTMLInputElement;
      const inputCepHere = inputCep.current as HTMLInputElement;
      const inputAddressHere = inputAddress.current as HTMLInputElement;
      const inputNumberHomeHere = inputNumberHome.current as HTMLInputElement;
      const inputComplementHere = inputComplement.current as HTMLInputElement;
      const inputNeighborhoodHere = inputNeighborhood.current as HTMLInputElement;
      const inputCityHere = inputCity.current as HTMLInputElement;
      const SelectUfRefHere = SelectUfRef.current as HTMLSelectElement;
      const inputReferencePointHere = inputReferencePoint.current as HTMLInputElement;

      const objAddress: Address = {
        addressNickname: inputAddressNicknameHere.value,
        addressType: SelectTypeAddressRefHere.value,
        recipientName: inputRecipientNameHere.value,
        zipCode: inputCepHere.value,
        street: inputAddressHere.value,
        number: Number(inputNumberHomeHere.value),
        complement: inputComplementHere.value,
        neighborhood: inputNeighborhoodHere.value,
        city: inputCityHere.value,
        state: SelectUfRefHere.value,
        referencePoint: inputReferencePointHere.value,
        userId: user.id,
        mainAddress: false,
        id: null,
        userDTO: null,
      };

      setObjAddress(objAddress);

      if (user.token) {
        const respSend = await addressService.sendCodeEmail(user, user.token);

        if (respSend.isSucess) {
          const resp = respSend as ReturnSendCodeEmailTwo;
          const data = resp.data as SendCodeEmailTwo;

          if (data.codeSendToEmailSuccessfully) {
            setCodeSendEmail(true);
          }
        } else {
          const respError = respSend as ReturnErroCatch;
          console.log(respError);
        }
      }
    }
  };

  const verifyErrorAddressNickname = (): boolean => {
    const inputAddressNicknameHere = inputAddressNickname.current as HTMLInputElement;
    const valueInputAddressNickname = inputAddressNicknameHere.value;

    const addressNicknameIsValid = validateAddressNickname(valueInputAddressNickname);
    const spanErrorAddressNicknameHere = SpanErrorAddressNickname.current as HTMLSpanElement;

    if (!addressNicknameIsValid) {
      putErrorSpanAndInput(spanErrorAddressNicknameHere, inputAddressNicknameHere);
    } else {
      withoutErrorSpanAndInput(spanErrorAddressNicknameHere, inputAddressNicknameHere);
    }

    return addressNicknameIsValid;
  };

  const verifyErrorSelectTypeAddress = (): boolean => {
    const selectTypeAddress = SelectTypeAddressRef.current as HTMLSelectElement;
    const valueTypeAddress = selectTypeAddress.value;

    const errorTypeAddress = validateTypeAddress(valueTypeAddress);
    const spanErrorTypeAddressHere = SpanErrorTypeAddress.current as HTMLSpanElement;

    if (!errorTypeAddress) {
      putErrorSpanAndInput(spanErrorTypeAddressHere, selectTypeAddress);
    } else {
      withoutErrorSpanAndInput(spanErrorTypeAddressHere, selectTypeAddress);
    }

    return errorTypeAddress;
  };

  const verifyErrorRecipientName = (): boolean => {
    const inputRecipientNameHere = inputRecipientName.current as HTMLInputElement;
    const valueRecipientName = inputRecipientNameHere.value;

    const addressRecipientName = validateRecipientName(valueRecipientName);
    const spanErrorRecipientNameHere = SpanErrorRecipientName.current as HTMLSpanElement;

    if (!addressRecipientName) {
      putErrorSpanAndInput(spanErrorRecipientNameHere, inputRecipientNameHere);
    } else {
      withoutErrorSpanAndInput(spanErrorRecipientNameHere, inputRecipientNameHere);
    }

    return addressRecipientName;
  };

  const verifyErrorCep = (): boolean => {
    const inputCepHere = inputCep.current as HTMLInputElement;
    const valueCepHere = inputCepHere.value.replace(/[-_]/g, '');

    const cepIsValid = validateCep(valueCepHere);
    const SpanErrorCepHere = SpanErrorCep.current as HTMLSpanElement;

    if (!cepIsValid || errorCpf) {
      putErrorSpanAndInput(SpanErrorCepHere, inputCepHere);
    } else {
      withoutErrorSpanAndInput(SpanErrorCepHere, inputCepHere);
    }

    return cepIsValid;
  };

  const verifyErrorAddress = (): boolean => {
    const inputAddressHere = inputAddress.current as HTMLInputElement;

    const valueInputAddress = inputAddressHere.value;

    const addressIsValid = validateAddress(valueInputAddress);
    const spanErrorAddressHere = SpanErrorAddress.current as HTMLSpanElement;

    if (!addressIsValid) {
      putErrorSpanAndInput(spanErrorAddressHere, inputAddressHere);
    } else {
      spanErrorAddressHere.style.display = 'none';
      inputAddressHere.style.backgroundColor = '#eee';
      inputAddressHere.style.border = '1px solid rgba(0, 0, 0, 0.27)';
    }

    return addressIsValid;
  };

  const verifyErrorNumberHome = (): boolean => {
    const inputNumberHomeHere = inputNumberHome.current as HTMLInputElement;
    const valueInputNumberHome = inputNumberHomeHere.value;

    const NumberHomeIsValid = validateNumberHome(valueInputNumberHome);
    const spanErrorNumberHomeHere = SpanErrorNumberHome.current as HTMLSpanElement;

    if (!NumberHomeIsValid) {
      putErrorSpanAndInput(spanErrorNumberHomeHere, inputNumberHomeHere);
    } else {
      withoutErrorSpanAndInput(spanErrorNumberHomeHere, inputNumberHomeHere);
    }

    return NumberHomeIsValid;
  };

  const verifyErrorNeighborhood = (): boolean => {
    const inputNeighborhoodHere = inputNeighborhood.current as HTMLInputElement;
    const valueInputNeighborhood = inputNeighborhoodHere.value;

    const NeighborhoodIsValid = validateNeighborhood(valueInputNeighborhood);
    const spanErrorNeighborhoodHere = SpanErrorNeighborhood.current as HTMLSpanElement;

    if (!NeighborhoodIsValid) {
      putErrorSpanAndInput(spanErrorNeighborhoodHere, inputNeighborhoodHere);
    } else {
      spanErrorNeighborhoodHere.style.display = 'none';
      inputNeighborhoodHere.style.backgroundColor = '#eee';
      inputNeighborhoodHere.style.border = '1px solid rgba(0, 0, 0, 0.27)';
    }

    return NeighborhoodIsValid;
  };

  const verifyErrorCity = (): boolean => {
    const inputCityHere = inputCity.current as HTMLInputElement;
    const valueInputCity = inputCityHere.value;

    const CityIsValid = validateCity(valueInputCity);
    const spanErrorCityHere = SpanErrorCity.current as HTMLSpanElement;

    if (!CityIsValid) {
      putErrorSpanAndInput(spanErrorCityHere, inputCityHere);
    } else {
      spanErrorCityHere.style.display = 'none';
      inputCityHere.style.backgroundColor = '#eee';
      inputCityHere.style.border = '1px solid rgba(0, 0, 0, 0.27)';
    }

    return CityIsValid;
  };

  const verifyErrorUf = (): boolean => {
    const selectRef = SelectUfRef.current as HTMLSelectElement;
    const valueInputUf = selectRef.value;

    const ufIsValid = validateUf(valueInputUf);
    const spanErrorUfHere = SpanErrorUf.current as HTMLSpanElement;

    if (!ufIsValid) {
      putErrorSpanAndInput(spanErrorUfHere, selectRef);
    } else {
      spanErrorUfHere.style.display = 'none';
      selectRef.style.backgroundColor = '#eee';
      selectRef.style.border = '1px solid rgba(0, 0, 0, 0.27)';
    }

    return ufIsValid;
  };

  const onClickSendCep = () => {
    window.open('https://buscacepinter.correios.com.br/app/endereco/index.php', '_blank');
  };

  const changeCodeSendEmailModal = (value: boolean) => {
    setCodeSendEmail(value);
  };

  return (
    <div className="flex flex-col">
      <Styled.ContainerLabelAndInput $indexContainer={0}>
        <Styled.Label htmlFor="address-nickname" className="label-address-nickname">
          Apelido do Endereço<span className="text-[red] text-2xl">*</span>
        </Styled.Label>
        <Styled.ContainerInput>
          <Styled.Input
            id="address-nickname"
            placeholder="apelido do endereço. Ex.: casa da mãe"
            ref={inputAddressNickname}
            onChange={onChangeInputAddressNickname}
          />
        </Styled.ContainerInput>
        <Styled.SpanError ref={SpanErrorAddressNickname}>
          Informe Apelido do Endereço
        </Styled.SpanError>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerLabelAndInput $indexContainer={1}>
        <Styled.Label htmlFor="type-of-address" className="label-type-of-address">
          Tipo de Endereço<span className="text-[red] text-2xl">*</span>
        </Styled.Label>
        <Styled.Select
          id="type-of-address"
          ref={SelectTypeAddressRef}
          onClick={() => handleClickSelectTypeAddressRef()}
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}>
          <Styled.Option data-testid="option-type-address" disabled>
            Tipo de Endereço
          </Styled.Option>
          <Styled.Option data-testid="option-type-address-residential" value="RESIDENCIAL">
            Residencial
          </Styled.Option>
          <Styled.Option data-testid="option-type-address-commercial" value="COMERCIAL">
            Comercial
          </Styled.Option>
        </Styled.Select>
        <Styled.SpanError ref={SpanErrorTypeAddress}>Informe Tipo de Endereço</Styled.SpanError>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerLabelAndInput $indexContainer={3}>
        <Styled.Label htmlFor="recipient-name" className="label-recipient-name">
          nome do destinatário<span className="text-[red] text-2xl">*</span>
        </Styled.Label>
        <Styled.ContainerInput>
          <Styled.Input
            id="recipient-name"
            placeholder="nome do destinatário"
            ref={inputRecipientName}
            onChange={onChangeInputRecipientName}
          />
        </Styled.ContainerInput>
        <Styled.SpanError ref={SpanErrorRecipientName}>
          Informe nome do destinatário
        </Styled.SpanError>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerLabelAndInput $indexContainer={4}>
        <Styled.Label htmlFor="cep" className="label-cep">
          cep<span className="text-[red] text-2xl">*</span>
        </Styled.Label>
        <Styled.ContainerInputCep>
          <Styled.Input
            id="cep"
            placeholder="cep"
            ref={inputCep}
            value={cepValue}
            onChange={onChangeInputCep}
          />
          <Styled.Span onClick={onClickSendCep}>Não sei o meu CEP</Styled.Span>
        </Styled.ContainerInputCep>
        <Styled.SpanError ref={SpanErrorCep}>CEP inválido</Styled.SpanError>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerLabelAndInput $indexContainer={5}>
        <div className="flex items-center">
          <label className="text-xl font-medium uppercase label-address" htmlFor="complement">
            endereço
          </label>
          <span className="text-[red] text-2xl number-asterisk-first">*</span>
        </div>
        <Styled.ContainerInput>
          <Styled.Input
            id="address"
            placeholder="endereço"
            ref={inputAddress}
            onChange={onChangeInputAddress}
          />
        </Styled.ContainerInput>
        <Styled.SpanError ref={SpanErrorAddress}>Informe endereço</Styled.SpanError>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerNumberComplementNeighborhood>
        <Styled.ContainerLabelAndInput $indexContainer={6}>
          <div className="flex items-center">
            <label className="text-xl font-medium uppercase label-number" htmlFor="number-home">
              número
            </label>
            <span className="text-[red] text-2xl number-asterisk-second">*</span>
          </div>
          <Styled.ContainerInput>
            <Styled.Input
              id="number-home"
              type="text"
              placeholder="número"
              ref={inputNumberHome}
              value={valueNumberHome}
              onChange={onChangeInputNumberHome}
            />
          </Styled.ContainerInput>
          <Styled.SpanError ref={SpanErrorNumberHome}>Informe número</Styled.SpanError>
        </Styled.ContainerLabelAndInput>

        <Styled.ContainerLabelAndInput $indexContainer={7}>
          <div className="flex items-center">
            <label className="text-xl font-medium uppercase label-complement" htmlFor="complement">
              complemento
            </label>
            <span className="text-[#ffffff00] text-2xl number-asterisk-third">*</span>
          </div>

          <Styled.ContainerInput>
            <Styled.Input
              id="complement"
              placeholder="complemento"
              ref={inputComplement}
              onChange={onChangeInputComplement}
            />
          </Styled.ContainerInput>
          <Styled.SpanError ref={SpanErrorComplement}>Informe número</Styled.SpanError>
        </Styled.ContainerLabelAndInput>

        <Styled.ContainerLabelAndInput $indexContainer={8}>
          <div className="flex items-center">
            <label
              className="text-xl font-medium uppercase label-neighborhood"
              htmlFor="neighborhood">
              bairro
            </label>
            <span className="text-[red] text-2xl number-asterisk-fourth">*</span>
          </div>
          <Styled.ContainerInput>
            <Styled.Input
              id="neighborhood"
              placeholder="bairro"
              ref={inputNeighborhood}
              onChange={onChangeInputNeighborhood}
            />
          </Styled.ContainerInput>
          <Styled.SpanError ref={SpanErrorNeighborhood}>
            O bairro deve ter no mínimo 3 caracteres
          </Styled.SpanError>
        </Styled.ContainerLabelAndInput>
      </Styled.ContainerNumberComplementNeighborhood>

      <Styled.ContainerCityAndUf>
        <Styled.ContainerLabelAndInput $indexContainer={9}>
          <div className="flex items-center">
            <label className="text-xl font-medium uppercase label-city" htmlFor="cidade">
              cidade
            </label>
            <span className="text-[red] text-2xl number-asterisk-fifth">*</span>
          </div>
          <Styled.ContainerInput>
            <Styled.Input
              id="city"
              placeholder="cidade"
              ref={inputCity}
              onChange={onChangeInputCity}
            />
          </Styled.ContainerInput>
          <Styled.SpanError ref={SpanErrorCity}>Informe cidade</Styled.SpanError>
        </Styled.ContainerLabelAndInput>

        <Styled.ContainerLabelAndInput $indexContainer={10}>
          <div className="flex items-center">
            <label className="text-xl font-medium uppercase label-uf" htmlFor="uf">
              uf
            </label>
            <span className="text-[red] text-2xl number-asterisk-sixth">*</span>
          </div>
          <Styled.Select id="uf" ref={SelectUfRef}>
            {newValueUf.length <= 0 && (
              <Styled.Option className="option-uf" ref={optionUf}>
                UF
              </Styled.Option>
            )}
            {newValueUf.length > 0 && (
              <Styled.Option className="option-uf" ref={optionUf}>
                {newValueUf}
              </Styled.Option>
            )}
          </Styled.Select>
          <Styled.SpanError ref={SpanErrorUf}>Informe UF</Styled.SpanError>
        </Styled.ContainerLabelAndInput>
      </Styled.ContainerCityAndUf>

      <Styled.ContainerLabelAndInput $indexContainer={11}>
        <label
          className="text-xl font-medium uppercase label-reference-point"
          htmlFor="reference-point">
          ponto de referência
        </label>
        <Styled.ContainerInput>
          <Styled.Input
            id="reference-point"
            placeholder="ponto de referência"
            ref={inputReferencePoint}
            onChange={onChangeInputReferencePoint}
          />
        </Styled.ContainerInput>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerCheckboxButtonCompleteRegistration>
        <Styled.Span className="span-marked-fields-are-requires">
          <span className="text-[red] text-2xl">*</span> Campos marcados são obrigatórios
        </Styled.Span>

        <Styled.ContainerButtonCancelAndSave>
          <Styled.Button ref={buttonCancelRef} onClick={onClickCancel}>
            Cancelar
          </Styled.Button>
          <Styled.Button ref={buttonSaveRef} onClick={onClickSave}>
            Salvar
          </Styled.Button>
        </Styled.ContainerButtonCancelAndSave>
      </Styled.ContainerCheckboxButtonCompleteRegistration>

      {codeSendEmail && user && objAddress && (
        <CodeSendEmailModal
          user={user}
          objAddress={objAddress}
          addressUser={addressUser}
          changeCodeSendEmailModal={changeCodeSendEmailModal}
        />
      )}
    </div>
  );
};

export default ModalFormAddress;
