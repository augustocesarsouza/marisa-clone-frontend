import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import Inputmask from 'inputmask';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { User } from '../../../Interfaces/Entity/User.';
import { TokenExpiration } from '../../../TokenValidation/TokenExpiration';
import { Address } from '../../../Interfaces/Entity/Address';
import SvgX from '../../../Svg/SvgX/SvgX';
import addressService, {
  ReturnErroCatch,
  ReturnGetAddress,
  ReturnSendCodeEmail,
  ReturnSendCodeEmailTwo,
  SendCodeEmailTwo,
} from '../../../Service/AddressService/AddressService';
import { UserConfirmCodeEmailDTO } from '../../../Interfaces/DTOs/UserConfirmCodeEmailDTO';

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

const AddNewAddress = () => {
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

  useLayoutEffect(() => {
    const applyMask = (
      element: HTMLInputElement | null,
      maskPattern: string,
      placeholder: string
    ) => {
      if (!element) return;
      const mask = new Inputmask({
        mask: maskPattern,
        placeholder,
        insertMode: true,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(element);
    };

    const inputCepHere = inputCep.current as HTMLInputElement;
    const inputNumberHomeHere = inputNumberHome.current as HTMLInputElement;

    const maskConfigs = [
      { element: inputCepHere, mask: '99999-999', placeholder: '_____-___' },
      { element: inputNumberHomeHere, mask: '999999', placeholder: '' },
    ];

    // Aplica todas as máscaras usando a função genérica
    maskConfigs.forEach(({ element, mask, placeholder }) => {
      applyMask(element as HTMLInputElement, mask, placeholder);
    });
  }, []);

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

  const [newValueUf, setNewValueUf] = useState('');
  const [errorCpf, setErrorCpf] = useState(true);

  const onChangeInputCep = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const cepInput = e.target;
    const valueCep = cepInput.value.replace(/[-_]/g, '');

    // verifyErrorCep();

    const cepIsValid = validateCep(valueCep);

    if (!cepIsValid) {
      const inputCepHere = inputCep.current as HTMLInputElement;
      const SpanErrorCepHere = SpanErrorCep.current as HTMLSpanElement;

      putErrorSpanAndInput(SpanErrorCepHere, inputCepHere);
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

        // const inputAddressHere = inputAddress.current as HTMLInputElement;

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

    verifyErrorNumberHome();
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
    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateTypeAddress = (value: string): boolean => {
    const valueValid = value !== 'Tipo de Endereço';
    return valueValid;
  };

  const validateRecipientName = (value: string): boolean => {
    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateCep = (value: string): boolean => {
    const valueValid = value.length > 7;
    return valueValid;
  };

  const validateAddress = (value: string): boolean => {
    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateNumberHome = (value: string): boolean => {
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
    const errorNickName = verifyErrorAddressNickname();

    const errorTypeAddress = verifyErrorSelectTypeAddress();

    const errorRecipientName = verifyErrorRecipientName();

    const errorCep = verifyErrorCep();

    const errorAddress = verifyErrorAddress();

    const errorNumberHome = verifyErrorNumberHome();

    const errorNeighborhood = verifyErrorNeighborhood();

    const errorCity = verifyErrorCity();

    const errorUf = verifyErrorUf();

    if (errorCpf) {
      const inputCepHere = inputCep.current as HTMLInputElement;
      const SpanErrorCepHere = SpanErrorCep.current as HTMLSpanElement;

      putErrorSpanAndInput(SpanErrorCepHere, inputCepHere);
    }

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

    if (!cepIsValid) {
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

  const [valueInputPhoneOne, setValueInputPhoneOne] = useState('-1');
  const [valueInputPhoneTwo, setValueInputPhoneTwo] = useState('-1');
  const [valueInputPhoneThree, setValueInputPhoneThree] = useState('-1');
  const [valueInputPhoneFour, setValueInputPhoneFour] = useState('-1');
  const [valueInputPhoneFive, setValueInputPhoneFive] = useState('-1');
  const [valueInputPhoneSix, setValueInputPhoneSix] = useState('-1');
  const [allInputs, setAllInputs] = useState<[] | NodeListOf<HTMLInputElement>>([]);
  const [alreadyTypePassword, setAlreadyTypePassword] = useState(false);

  const onChangeInputCreateAccount = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (Number.isNaN(Number(e.target.value))) return;

    if (index === 0) setValueInputPhoneOne(String(e.target.value));

    if (index === 1) setValueInputPhoneTwo(String(e.target.value));

    if (index === 2) setValueInputPhoneThree(String(e.target.value));

    if (index === 3) setValueInputPhoneFour(String(e.target.value));

    if (index === 4) setValueInputPhoneFive(String(e.target.value));

    if (index === 5) setValueInputPhoneSix(String(e.target.value));

    const input = e.target as HTMLInputElement;

    if (input.value.length === 1 && index < allInputs.length - 1) {
      allInputs[index + 1].focus();
    }

    setAlreadyTypePassword(true);
  };

  const onKeyDownCreateAccount = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const input = e.target as HTMLInputElement;

    if (e.code === 'Backspace' && index > 0) {
      if (input.value.length === 1) {
        // allInputs[index].value = '';

        if (index === 0) setValueInputPhoneOne('-1');

        if (index === 1) setValueInputPhoneTwo('-1');

        if (index === 2) setValueInputPhoneThree('-1');

        if (index === 3) setValueInputPhoneFour('-1');

        if (index === 4) setValueInputPhoneFive('-1');

        if (index === 5) setValueInputPhoneSix('-1');

        allInputs[index - 1].focus();
      } else {
        allInputs[index - 1].focus();
        allInputs[index - 1].value = '';
      }

      e.preventDefault();
    }
  };

  useEffect(() => {
    setAllInputs(document.querySelectorAll('.input-cel-phone') as NodeListOf<HTMLInputElement>);
  }, []);

  const onClickInputCreateAccount = () => {
    for (let i = 0; i < allInputs.length; i++) {
      const input = allInputs[i];

      if (Number(input.value) === 0) {
        input.focus();
        break;
      }
    }
  };

  const buttonRegisterMouseEnter = (buttonRegister: HTMLButtonElement) => {
    buttonRegister.style.backgroundColor = 'rgb(238, 92, 63)';
  };

  const buttonRegisterMouseLeave = (buttonRegister: HTMLButtonElement) => {
    buttonRegister.style.backgroundColor = 'rgb(238, 77, 45)';
  };

  const refButtonConfirmChange = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const buttonRegister = refButtonConfirmChange.current;

    const handleMouseEnter = () => buttonRegisterMouseEnter(refButtonConfirmChange.current!);
    const handleMouseLeave = () => buttonRegisterMouseLeave(refButtonConfirmChange.current!);

    if (buttonRegister === null) return;

    if (
      Number(valueInputPhoneOne) >= 0 &&
      Number(valueInputPhoneTwo) >= 0 &&
      Number(valueInputPhoneThree) >= 0 &&
      Number(valueInputPhoneFour) >= 0 &&
      Number(valueInputPhoneFive) >= 0 &&
      Number(valueInputPhoneSix) >= 0
    ) {
      buttonRegister.style.opacity = '1';
      buttonRegister.style.cursor = 'pointer';

      buttonRegister.addEventListener('mouseenter', handleMouseEnter);
      buttonRegister.addEventListener('mouseleave', handleMouseLeave);
    } else {
      if (alreadyTypePassword) {
        buttonRegister.style.opacity = '.7';
        buttonRegister.style.cursor = 'not-allowed';

        buttonRegister.removeEventListener('mouseenter', handleMouseEnter);
        buttonRegister.removeEventListener('mouseleave', handleMouseLeave);
      }
    }

    return () => {
      if (buttonRegister !== null) {
        buttonRegister.removeEventListener('mouseenter', handleMouseEnter);
        buttonRegister.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [
    valueInputPhoneOne,
    valueInputPhoneTwo,
    valueInputPhoneThree,
    valueInputPhoneFour,
    valueInputPhoneFive,
    valueInputPhoneSix,
    alreadyTypePassword,
  ]);

  const onClickConfirmChange = async () => {
    if (
      Number(valueInputPhoneOne) >= 0 &&
      Number(valueInputPhoneTwo) >= 0 &&
      Number(valueInputPhoneThree) >= 0 &&
      Number(valueInputPhoneFour) >= 0 &&
      Number(valueInputPhoneFive) >= 0 &&
      Number(valueInputPhoneSix) >= 0 &&
      user
    ) {
      if (user.id === null || user.email === null || user.token === null) return;

      const code = `${valueInputPhoneOne}${valueInputPhoneTwo}${valueInputPhoneThree}${valueInputPhoneFour}${valueInputPhoneFive}${valueInputPhoneSix}`;

      const objSendCode: UserConfirmCodeEmailDTO = {
        code: code,
        userId: user.id,
        email: user.email,
        correctCode: false,
      };

      const codeSend = await addressService.verifyCodeSendToEmail(objSendCode, user.token);

      if (codeSend.isSucess) {
        const resp = codeSend as ReturnSendCodeEmail;
        const data = resp.data;

        const correctCode = data.correctCode;
        console.log(data);

        if (correctCode && objAddress) {
          const token = user.token as string;
          const resp = await addressService.createUser(objAddress, token);

          if (resp.isSucess) {
            const respSucessfully = resp as ReturnGetAddress;
            const data = respSucessfully.data;
            console.log(data);

            if (data) {
              // tudo feito aqui redirecionar usuario exibindo o address
            }
          } else {
            const respError = resp as ReturnErroCatch;
            console.log(respError);
          }
        } else {
          // error code email tem que tratar aqui
        }
      }
    }
  };

  const onClickResendCode = () => {};

  const onClickExitModal = () => {
    setCodeSendEmail(false);
  };

  return (
    <>
      <Styled.ContainerMain>
        <Styled.H1>Adicionar Novo Endereço</Styled.H1>

        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="address-nickname">
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

        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="type-of-address">
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

        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="recipient-name">
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

        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="cep">
            cep<span className="text-[red] text-2xl">*</span>
          </Styled.Label>
          <Styled.ContainerInputCep>
            <Styled.Input
              id="cep"
              placeholder="cep"
              ref={inputCep}
              onChange={onChangeInputCep}
              className="bg-[#eee]"
            />
            <Styled.Span onClick={onClickSendCep}>Não sei o meu CEP</Styled.Span>
          </Styled.ContainerInputCep>
          <Styled.SpanError ref={SpanErrorCep}>CEP inválido</Styled.SpanError>
        </Styled.ContainerLabelAndInput>

        <Styled.ContainerLabelAndInput>
          <div className="flex items-center">
            <label className="text-xl font-medium uppercase" htmlFor="complement">
              endereço
            </label>
            <span className="text-[red] text-2xl">*</span>
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
          <Styled.ContainerLabelAndInput>
            <div className="flex items-center">
              <label className="text-xl font-medium uppercase" htmlFor="number-home">
                número
              </label>
              <span className="text-[red] text-2xl">*</span>
            </div>
            <Styled.ContainerInput>
              <Styled.Input
                id="number-home"
                placeholder="número"
                ref={inputNumberHome}
                onChange={onChangeInputNumberHome}
              />
            </Styled.ContainerInput>
            <Styled.SpanError ref={SpanErrorNumberHome}>Informe número</Styled.SpanError>
          </Styled.ContainerLabelAndInput>

          <Styled.ContainerLabelAndInput>
            <div className="flex items-center">
              <label className="text-xl font-medium uppercase" htmlFor="complement">
                complemento
              </label>
              <span className="text-[#ffffff00] text-2xl">*</span>
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

          <Styled.ContainerLabelAndInput>
            <div className="flex items-center">
              <label className="text-xl font-medium uppercase" htmlFor="number-home">
                bairro
              </label>
              <span className="text-[red] text-2xl">*</span>
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
          <Styled.ContainerLabelAndInput>
            <div className="flex items-center">
              <label className="text-xl font-medium uppercase" htmlFor="number-home">
                cidade
              </label>
              <span className="text-[red] text-2xl">*</span>
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

          <Styled.ContainerLabelAndInput>
            <div className="flex items-center">
              <label className="text-xl font-medium uppercase" htmlFor="number-home">
                uf
              </label>
              <span className="text-[red] text-2xl">*</span>
            </div>
            <Styled.Select id="uf" ref={SelectUfRef}>
              {newValueUf.length <= 0 && (
                <Styled.Option data-testid="option-uf" ref={optionUf}>
                  UF
                </Styled.Option>
              )}
              {newValueUf.length > 0 && (
                <Styled.Option data-testid="option-uf" ref={optionUf}>
                  {newValueUf}
                </Styled.Option>
              )}
            </Styled.Select>
            <Styled.SpanError ref={SpanErrorUf}>Informe UF</Styled.SpanError>
          </Styled.ContainerLabelAndInput>
        </Styled.ContainerCityAndUf>

        <Styled.ContainerLabelAndInput>
          <label className="text-xl font-medium uppercase" htmlFor="reference-point">
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
          <Styled.Span>
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
      </Styled.ContainerMain>
      {codeSendEmail && (
        <div className="fixed left-[0px] top-[0px] w-full h-full bg-[#0000006e] flex justify-center !pt-15">
          <div className="flex flex-col items-end w-[320px] h-[373px] bg-[white] border border-black !p-2">
            <Styled.ContainerExitSvg onClick={onClickExitModal}>
              <SvgX />
            </Styled.ContainerExitSvg>
            <div className="flex items-center flex-col justify-around !px-5 !pb-5 h-full">
              <span className="text-2xl font-semibold text-center">
                Para salvar seus dados com segurança, confirme o token enviado por sms no celular de
                cadastro ou e-mail. {user?.email}
              </span>

              <div className="flex items-center flex-col w-[250px]">
                <div className="flex justify-between mt-[50px] mr-0 mb-[10px] ml-0 w-full">
                  <Styled.InputCelphone
                    className="input-cel-phone"
                    type="text"
                    maxLength={1}
                    placeholder="·"
                    autoComplete="off"
                    value={Number(valueInputPhoneOne) < 0 ? '' : valueInputPhoneOne}
                    onClick={() => onClickInputCreateAccount()}
                    onChange={(e) => onChangeInputCreateAccount(e, 0)}
                    onKeyDown={(e) => onKeyDownCreateAccount(e, 0)}
                  />
                  <Styled.InputCelphone
                    className="input-cel-phone"
                    type="text"
                    maxLength={1}
                    placeholder="·"
                    autoComplete="off"
                    value={Number(valueInputPhoneTwo) < 0 ? '' : valueInputPhoneTwo}
                    onClick={() => onClickInputCreateAccount()}
                    onChange={(e) => onChangeInputCreateAccount(e, 1)}
                    onKeyDown={(e) => onKeyDownCreateAccount(e, 1)}
                  />
                  <Styled.InputCelphone
                    className="input-cel-phone"
                    type="text"
                    maxLength={1}
                    placeholder="·"
                    autoComplete="off"
                    value={Number(valueInputPhoneThree) < 0 ? '' : valueInputPhoneThree}
                    onClick={() => onClickInputCreateAccount()}
                    onChange={(e) => onChangeInputCreateAccount(e, 2)}
                    onKeyDown={(e) => onKeyDownCreateAccount(e, 2)}
                  />
                  <Styled.InputCelphone
                    className="input-cel-phone"
                    type="text"
                    maxLength={1}
                    placeholder="·"
                    autoComplete="off"
                    value={Number(valueInputPhoneFour) < 0 ? '' : valueInputPhoneFour}
                    onClick={() => onClickInputCreateAccount()}
                    onChange={(e) => onChangeInputCreateAccount(e, 3)}
                    onKeyDown={(e) => onKeyDownCreateAccount(e, 3)}
                  />
                  <Styled.InputCelphone
                    className="input-cel-phone"
                    type="text"
                    maxLength={1}
                    placeholder="·"
                    autoComplete="off"
                    value={Number(valueInputPhoneFive) < 0 ? '' : valueInputPhoneFive}
                    onClick={() => onClickInputCreateAccount()}
                    onChange={(e) => onChangeInputCreateAccount(e, 4)}
                    onKeyDown={(e) => onKeyDownCreateAccount(e, 4)}
                  />
                  <Styled.InputCelphone
                    className="input-cel-phone"
                    type="text"
                    maxLength={1}
                    placeholder="·"
                    autoComplete="off"
                    value={Number(valueInputPhoneSix) < 0 ? '' : valueInputPhoneSix}
                    onClick={() => onClickInputCreateAccount()}
                    onChange={(e) => onChangeInputCreateAccount(e, 5)}
                    onKeyDown={(e) => onKeyDownCreateAccount(e, 5)}
                  />
                </div>
              </div>

              <Styled.ContainerDidNotReceiveTheCodeAndButtonNext>
                <Styled.ContainerDidNotReceiveTheCode>
                  <Styled.Span>Não recebeu o código?</Styled.Span>
                  <Styled.Span>
                    <Styled.Button onClick={() => onClickResendCode()}>Reenviar</Styled.Button>
                  </Styled.Span>
                </Styled.ContainerDidNotReceiveTheCode>

                <Styled.ContainerButtonNext>
                  <Styled.Button
                    ref={refButtonConfirmChange}
                    onClick={() => onClickConfirmChange()}>
                    CONFIRMAR ALTERAÇÃO
                  </Styled.Button>
                </Styled.ContainerButtonNext>
              </Styled.ContainerDidNotReceiveTheCodeAndButtonNext>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewAddress;
