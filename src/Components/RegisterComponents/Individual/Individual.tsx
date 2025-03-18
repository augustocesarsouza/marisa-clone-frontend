import { useLayoutEffect, useRef, useState } from 'react';
import SvgEyeClose from '../../Svg/SvgEyeClose/SvgEyeClose';
import SvgEyeOpen from '../../Svg/SvgEyeOpen/SvgEyeOpen';
import * as Styled from './styled';
import Inputmask from 'inputmask';
// import { ICodeSendEmailUserDTO } from '../../Interfaces/DTOs/ICodeSendEmailUserDTO';
import { useNavigate } from 'react-router-dom';
// import { Url } from '../../../Utils/Url';
import userService from '../../Service/UserService/UserService';
import { User } from '../../Interfaces/Entity/User.';
import CryptoJS from 'crypto-js';

const Individual = () => {
  const inputCheckbox = useRef<HTMLInputElement>(null);
  const buttonCompleteRegistration = useRef<HTMLButtonElement>(null);

  const ContainerCheckboxFeminine = useRef<HTMLDivElement>(null);
  const ContainerCheckboxMasculine = useRef<HTMLDivElement>(null);
  const ContainerCheckboxDoNotInform = useRef<HTMLDivElement>(null);

  const containerSvgEyeOpen = useRef<HTMLDivElement>(null);
  const containerSvgEyeClose = useRef<HTMLDivElement>(null);

  const inputFullName = useRef<HTMLInputElement>(null);
  const inputBirthDate = useRef<HTMLInputElement>(null);
  const inputCpf = useRef<HTMLInputElement>(null);
  const inputCellPhone = useRef<HTMLInputElement>(null);
  const inputDDDCellPhone = useRef<HTMLInputElement>(null);
  const inputTelephone = useRef<HTMLInputElement>(null);
  const inputDDDTelephone = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputToken = useRef<HTMLInputElement>(null);
  const inputPasswordActual = useRef<HTMLInputElement>(null);
  const inputConfirmPassword = useRef<HTMLInputElement>(null);

  const SpanErrorFirst = useRef<HTMLSpanElement>(null);
  const SpanErrorSecond = useRef<HTMLSpanElement>(null);
  const SpanErrorNameComplete = useRef<HTMLSpanElement>(null);
  const SpanErrorBirthDate = useRef<HTMLSpanElement>(null);
  const SpanErrorCpf = useRef<HTMLSpanElement>(null);
  const SpanErrorDDDCellPhone = useRef<HTMLSpanElement>(null);
  const SpanErrorCellPhone = useRef<HTMLSpanElement>(null);
  const SpanErrorDDDTelephone = useRef<HTMLSpanElement>(null);
  const SpanErrorTelephone = useRef<HTMLSpanElement>(null);
  const SpanErrorEmail = useRef<HTMLSpanElement>(null);
  const SpanErrorToken = useRef<HTMLSpanElement>(null);

  const buttonReceiveTokenToRegister = useRef<HTMLButtonElement>(null);

  const [whichGender, setWhichGender] = useState('feminine');
  const [codeSendToEmailOrSms, setCodeSendToEmailOrSms] = useState(false);
  const [tokenIsWrongEmail, setTokenIsWrongEmail] = useState(false);
  const nav = useNavigate();

  useLayoutEffect(() => {
    const containerMasculine = ContainerCheckboxMasculine.current as HTMLDivElement;
    checkboxNotClicked(containerMasculine);

    const containerDoNotInform = ContainerCheckboxDoNotInform.current as HTMLDivElement;
    checkboxNotClicked(containerDoNotInform);

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

    const maskConfigs = [
      { element: inputBirthDate.current, mask: '99/99/9999', placeholder: '__/__/____' },
      { element: inputCpf.current, mask: '999.999.999-99', placeholder: '___.___.___-__' },
      { element: inputDDDCellPhone.current, mask: '99', placeholder: '__' },
      { element: inputDDDTelephone.current, mask: '99', placeholder: '__' },
      { element: inputCellPhone.current, mask: '99999-9999', placeholder: '_____-____' },
      { element: inputTelephone.current, mask: '9999-9999', placeholder: '____-____' },
    ];

    // Aplica todas as máscaras usando a função genérica
    maskConfigs.forEach(({ element, mask, placeholder }) => {
      applyMask(element as HTMLInputElement, mask, placeholder);
    });

    const token = inputToken.current as HTMLInputElement;

    new Inputmask({
      regex: '^[A-Za-z0-9]{6}$',
      placeholder: '',
      showMaskOnHover: false,
      showMaskOnFocus: false,
    }).mask(token);
  }, []);

  const onClickCheckboxGender = (container: HTMLDivElement | null, gender: string) => {
    setWhichGender(gender);

    const containerCheckFeminine = ContainerCheckboxFeminine.current as HTMLDivElement;
    const containerCheckMasculine = ContainerCheckboxMasculine.current as HTMLDivElement;
    const containerCheckDoNotInform = ContainerCheckboxDoNotInform.current as HTMLDivElement;

    checkboxNotClicked(containerCheckFeminine);
    checkboxNotClicked(containerCheckMasculine);
    checkboxNotClicked(containerCheckDoNotInform);

    if (container) {
      checkboxClicked(container);
    }
  };

  const checkboxNotClicked = (container: HTMLDivElement) => {
    const containerInner = container.firstChild as HTMLDivElement;
    container.style.borderColor = '#d6d5d5';
    container.style.background = '#fff';
    containerInner.style.backgroundColor = '#fff';
  };

  const checkboxClicked = (container: HTMLDivElement) => {
    const containerInner = container.firstChild as HTMLDivElement;
    container.style.borderColor = '#ffd1ec';
    container.style.background = '#ffd1ec';
    containerInner.style.backgroundColor = '#ec008c';
  };

  const onClickSvgEyePasswordActual = () => {
    const input = inputPasswordActual.current as HTMLInputElement;
    const containerSvgEyeOpenCurrent = containerSvgEyeOpen.current as HTMLDivElement;
    const containerSvgEyeCloseCurrent = containerSvgEyeClose.current as HTMLDivElement;

    if (input.type === 'text') {
      input.type = 'password';
      containerSvgEyeOpenCurrent.style.display = 'flex';
      containerSvgEyeCloseCurrent.style.display = 'none';
    } else if (input.type === 'password') {
      input.type = 'text';
      containerSvgEyeOpenCurrent.style.display = 'none';
      containerSvgEyeCloseCurrent.style.display = 'flex';
    }
  };

  const onClickSvgEyeConfirmPassword = () => {
    const input = inputConfirmPassword.current as HTMLInputElement;
    const containerSvgEyeOpenCurrent = containerSvgEyeOpen.current as HTMLDivElement;
    const containerSvgEyeCloseCurrent = containerSvgEyeClose.current as HTMLDivElement;

    if (input.type === 'text') {
      input.type = 'password';
      containerSvgEyeOpenCurrent.style.display = 'flex';
      containerSvgEyeCloseCurrent.style.display = 'none';
    } else if (input.type === 'password') {
      input.type = 'text';
      containerSvgEyeOpenCurrent.style.display = 'none';
      containerSvgEyeCloseCurrent.style.display = 'flex';
    }
  };

  const [password, setPassword] = useState('a');
  const [confirmPassword, setConfirmPassword] = useState('b');

  const onChangeInputPassword = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    setPassword(inputValue);

    if (SpanErrorFirst === null || SpanErrorSecond === null) return;
    const spanOne = SpanErrorFirst.current as HTMLSpanElement;
    const spanTwo = SpanErrorSecond.current as HTMLSpanElement;

    const inputPasswordActualInner = inputPasswordActual.current as HTMLInputElement;
    const inputConfirmPasswordInner = inputConfirmPassword.current as HTMLInputElement;

    if (inputValue === confirmPassword) {
      spanOne.style.display = 'none';
      spanTwo.style.display = 'none';

      inputPasswordActualInner.style.backgroundColor = '#fff';
      inputConfirmPasswordInner.style.backgroundColor = '#fff';
    } else {
      spanOne.style.display = 'block';
      spanTwo.style.display = 'block';

      inputPasswordActualInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
      inputConfirmPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    }
  };

  const onChangeInputConfirmPassword = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    setConfirmPassword(inputValue);

    if (SpanErrorFirst === null || SpanErrorSecond === null) return;
    const spanOne = SpanErrorFirst.current as HTMLSpanElement;
    const spanTwo = SpanErrorSecond.current as HTMLSpanElement;

    const inputPasswordActualInner = inputPasswordActual.current as HTMLInputElement;
    const inputConfirmPasswordInner = inputConfirmPassword.current as HTMLInputElement;

    if (inputValue === password) {
      spanOne.style.display = 'none';
      spanTwo.style.display = 'none';

      inputPasswordActualInner.style.backgroundColor = '#fff';
      inputConfirmPasswordInner.style.backgroundColor = '#fff';
    } else {
      spanOne.style.display = 'block';
      spanTwo.style.display = 'block';

      inputPasswordActualInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
      inputConfirmPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    }
  };

  const onClickCompleteRegistration = async () => {
    // const inputCheckboxInner = inputCheckbox.current as HTMLInputElement;

    const inputCheckboxInner = inputCheckbox.current as HTMLInputElement;

    if (inputCheckboxInner === null) return;
    if (!inputCheckboxInner.checked) return;

    const cellPhoneFull = `${inputDDDCellPhone.current?.value} ${inputCellPhone.current?.value}`;
    const cellTelephone = `${inputDDDTelephone.current?.value} ${inputTelephone.current?.value}`;

    const inputFullNameHere = inputFullName.current as HTMLInputElement;
    const inputBirthDateHere = inputBirthDate.current as HTMLInputElement;
    const inputCpfHere = inputCpf.current as HTMLInputElement;
    const inputDDDCellPhoneHere = inputDDDCellPhone.current as HTMLInputElement;
    const inputCellPhoneHere = inputCellPhone.current as HTMLInputElement;
    const inputDDDTelephoneHere = inputDDDTelephone.current as HTMLInputElement;
    const inputTelephoneHere = inputTelephone.current as HTMLInputElement;
    const inputEmailHere = inputEmail.current as HTMLInputElement;
    const inputTokenHere = inputToken.current as HTMLInputElement;

    const valueValidateBirthDate = validateBirthDate(inputBirthDateHere.value);
    const cpfError = validateCpf(inputCpfHere.value);
    const dddCellPhoneError = inputDDDCellPhoneHere.value.replace(/[-_.]/g, '');
    const cellPhoneError = inputCellPhoneHere.value.replace(/[-_.]/g, '');
    const dddTelephoneError = inputDDDTelephoneHere.value.replace(/[-_.]/g, '');
    const telephoneError = inputTelephoneHere.value.replace(/[-_.]/g, '');
    const emailIsValid = validateEmail(inputEmailHere.value);

    const dddCellPhoneIsError = dddCellPhoneError.length < 2;
    const cellPhoneIsError = cellPhoneError.length < 9;
    const dddTelephoneIsError = dddTelephoneError.length < 2;
    const telephoneIsError = telephoneError.length < 8;
    const tokenIsError = inputTokenHere.value.length < 1;
    const passwordAndConfirmPassword = !(password === confirmPassword);

    if (
      inputFullNameHere.value.length < 3 ||
      !valueValidateBirthDate ||
      cpfError ||
      dddCellPhoneIsError ||
      cellPhoneIsError ||
      dddTelephoneIsError ||
      telephoneIsError ||
      !emailIsValid ||
      tokenIsError ||
      passwordAndConfirmPassword
    ) {
      if (inputFullNameHere.value.length < 3) {
        const span = SpanErrorNameComplete.current as HTMLSpanElement;
        const input = inputFullName.current as HTMLInputElement;

        putErrorSpanAndInput(span, input);
      }

      if (!valueValidateBirthDate) {
        const span = SpanErrorBirthDate.current as HTMLSpanElement;
        const input = inputBirthDate.current as HTMLInputElement;

        putErrorSpanAndInput(span, input);
      }

      if (cpfError) {
        const span = SpanErrorCpf.current as HTMLSpanElement;
        const input = inputCpf.current as HTMLInputElement;

        putErrorSpanAndInput(span, input);
      }

      if (dddCellPhoneIsError) {
        const span1 = SpanErrorDDDCellPhone.current as HTMLSpanElement;
        const input1 = inputDDDCellPhone.current as HTMLInputElement;

        putErrorSpanAndInput(span1, input1);
      }

      if (cellPhoneIsError) {
        const span2 = SpanErrorCellPhone.current as HTMLSpanElement;
        const input2 = inputCellPhone.current as HTMLInputElement;

        putErrorSpanAndInput(span2, input2);
      }

      if (dddTelephoneIsError) {
        const span1 = SpanErrorDDDTelephone.current as HTMLSpanElement;
        const input1 = inputDDDTelephone.current as HTMLInputElement;

        putErrorSpanAndInput(span1, input1);
      }

      if (telephoneIsError) {
        const span2 = SpanErrorTelephone.current as HTMLSpanElement;
        const input2 = inputTelephone.current as HTMLInputElement;

        putErrorSpanAndInput(span2, input2);
      }

      if (!emailIsValid) {
        const span = SpanErrorEmail.current as HTMLSpanElement;
        const input = inputEmail.current as HTMLInputElement;

        putErrorSpanAndInput(span, input);
      }

      if (tokenIsError) {
        const span = SpanErrorToken.current as HTMLSpanElement;
        const input = inputToken.current as HTMLInputElement;

        putErrorSpanAndInput(span, input);
      }

      if (passwordAndConfirmPassword) {
        const spanOne = SpanErrorFirst.current as HTMLSpanElement;
        const inputPasswordActualInner = inputPasswordActual.current as HTMLInputElement;

        const spanTwo = SpanErrorSecond.current as HTMLSpanElement;
        const inputConfirmPasswordInner = inputConfirmPassword.current as HTMLInputElement;

        putErrorSpanAndInput(spanOne, inputPasswordActualInner);
        putErrorSpanAndInput(spanTwo, inputConfirmPasswordInner);
      }

      return;
    }

    let gender = '';

    if (whichGender === 'masculine') {
      gender += 'm';
    } else if (whichGender === 'feminine') {
      gender += 'f';
    } else if (whichGender === 'notInform') {
      gender += 'n';
    }

    let cpf = '';

    for (let i = 0; i < inputCpfHere.value.length; i++) {
      const element = inputCpfHere.value[i];
      if (!isNaN(Number(element))) {
        cpf += element;
      }
    }

    const obj: User = {
      name: inputFullNameHere.value,
      email: inputEmailHere.value,
      birthDateString: inputBirthDateHere.value,
      cellPhone: cellPhoneFull,
      cpf: cpf,
      gender: gender,
      telephone: cellTelephone,
      tokenForCreation: Number(inputTokenHere.value),
      password: password,
      userImage: '',
      id: null,
      birthDate: null,
      passwordHash: null,
      salt: null,
      token: null,
    };

    console.log(obj);

    const resp = await userService.createUser(obj);
    console.log(resp);

    if (resp && !resp.data.tokenIsValid) {
      setCodeSendToEmailOrSms(false);
      setTokenIsWrongEmail(true);
    }

    if (resp && resp.data.userDTO) {
      const secretKey = import.meta.env.VITE__APP_SECRET_KEY_USER;
      const userDTO = resp.data.userDTO;

      const encrypted = CryptoJS.AES.encrypt(JSON.stringify(userDTO), secretKey).toString();

      localStorage.setItem('user', encrypted);

      nav('/');
    }

    // CONTINUAR NA CRIAÇÃO E DEPOIS FAZER NAVEGAÇÃO PARA O "/"
  };

  const onClickReceiveToken = async () => {
    const emailInput = inputEmail.current as HTMLInputElement;
    const emailValue = emailInput.value;
    const emailIsValid = validateEmail(emailValue);
    if (!emailIsValid) return;

    const userDTO: User = {
      id: null,
      name: null,
      birthDate: null,
      cpf: null,
      gender: null,
      cellPhone: null,
      telephone: null,
      passwordHash: null,
      salt: null,
      userImage: null,
      email: emailValue,
      token: null,
      tokenForCreation: null,
      password: null,
      birthDateString: null,
    };

    const resp = await userService.SendCode(userDTO);

    if (resp !== null && resp.data.codeSendToEmailSuccessfully) {
      setCodeSendToEmailOrSms(true);
      setTokenIsWrongEmail(false);
    } else {
      // ERROR
    }

    // const res = await fetch(`${Url}/public/user/send-code-email`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userDTO),
    // });

    // if (res.ok) {
    //   const json = await res.json();
    //   const data: ICodeSendEmailUserDTO = json.data;

    //   return data;
    // }

    // if (res.status === 400) {
    //   //ERROR
    //   return null;
    // }

    // if (res.status === 403 || res.status === 401) {
    //   localStorage.removeItem('user');
    //   nav('/login');
    //   return null;
    // }

    // console.log('send token email');
  };

  const onChangeInputNameFull = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    const span = SpanErrorNameComplete.current as HTMLSpanElement;

    if (inputValue.length < 3) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputBirthDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    const valueValidateBirthDate = validateBirthDate(inputValue);

    const span = SpanErrorBirthDate.current as HTMLSpanElement;

    if (!valueValidateBirthDate) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputCpf = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    const cpfValidate = validateCpf(inputValue);

    const span = SpanErrorCpf.current as HTMLSpanElement;

    if (cpfValidate) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputDDDCellPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value.replace(/[-_.]/g, '');

    const span = SpanErrorDDDCellPhone.current as HTMLSpanElement;

    if (inputValue.length < 2) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputCellPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value.replace(/[-_.]/g, '');

    const span = SpanErrorCellPhone.current as HTMLSpanElement;

    if (inputValue.length < 9) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputDDDTelephone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value.replace(/[-_.]/g, '');

    const span = SpanErrorDDDTelephone.current as HTMLSpanElement;

    if (inputValue.length < 2) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputTelephone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value.replace(/[-_.]/g, '');

    const span = SpanErrorTelephone.current as HTMLSpanElement;

    if (inputValue.length < 8) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    const emailIsValid = validateEmail(inputValue);

    const span = SpanErrorEmail.current as HTMLSpanElement;
    const buttonToken = buttonReceiveTokenToRegister.current as HTMLButtonElement;

    if (!emailIsValid) {
      buttonToken.style.backgroundColor = 'rgb(172, 171, 171)';
      buttonToken.style.cursor = 'auto';
      putErrorSpanAndInput(span, input);
    } else {
      buttonToken.style.backgroundColor = '#ec008c';
      buttonToken.style.cursor = 'pointer';
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    const span = SpanErrorToken.current as HTMLSpanElement;

    if (inputValue.length < 1) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const validateBirthDate = (birthDate: string): boolean => {
    const regexBirthDate = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const value = regexBirthDate.test(birthDate);
    return value;
  };

  const validateCpf = (value: string): boolean => {
    const inputReplace = value.replace(/[-_.]/g, '');
    const valueValidate = inputReplace.length < 11;
    return valueValidate;
  };

  const validateEmail = (value: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const verify = regex.test(value);
    return verify;
  };

  const putErrorSpanAndInput = (span: HTMLSpanElement | null, input: HTMLInputElement) => {
    if (span) {
      span.style.display = 'block';
    }

    input.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
  };

  const withoutErrorSpanAndInput = (span: HTMLSpanElement, input: HTMLInputElement) => {
    input.style.backgroundColor = '#fff';
    span.style.display = 'none';
  };

  const handleChange = () => {
    const inputCheckboxInner = inputCheckbox.current as HTMLInputElement;
    const valueCheck = inputCheckboxInner.checked;

    const button = buttonCompleteRegistration.current as HTMLButtonElement;

    if (valueCheck) {
      button.style.backgroundColor = '#ec008c';
      button.style.color = '#fff';
      button.style.cursor = 'pointer';
    } else {
      button.style.backgroundColor = 'rgb(172, 171, 171)';
      button.style.color = '#fff';
      button.style.cursor = 'auto';
    }
  };

  return (
    <Styled.Container>
      <Styled.ContainerMainBodyOfRegister>
        <Styled.ContainerFirstRegister>
          <Styled.ContainerThird>
            <Styled.ContainerLabelAndInput>
              <Styled.Label htmlFor="name-full">Nome completo*</Styled.Label>
              <Styled.Input
                type="text"
                id="name-full"
                placeholder="Informe seu nome"
                ref={inputFullName}
                onChange={onChangeInputNameFull}
              />
              <Styled.SpanError ref={SpanErrorNameComplete}>
                Nome Completo deve ter pelo menos 3 caracteres
              </Styled.SpanError>
            </Styled.ContainerLabelAndInput>

            <Styled.ContainerBirthdateAndCpf>
              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="birth-date">Data de nascimento*</Styled.Label>
                <Styled.Input
                  type="text"
                  id="birth-date"
                  placeholder="00/00/0000"
                  ref={inputBirthDate}
                  onChange={onChangeInputBirthDate}
                />
                <Styled.SpanError ref={SpanErrorBirthDate}>
                  Data de nascimento inválida
                </Styled.SpanError>
              </Styled.ContainerLabelAndInput>

              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="cpf">CPF*</Styled.Label>
                <Styled.Input
                  type="text"
                  id="cpf"
                  placeholder="000.000.000-00"
                  ref={inputCpf}
                  onChange={onChangeInputCpf}
                />
                <Styled.SpanError ref={SpanErrorCpf}>CPF inválido</Styled.SpanError>
              </Styled.ContainerLabelAndInput>
            </Styled.ContainerBirthdateAndCpf>
          </Styled.ContainerThird>

          <Styled.ContainerFourth>
            <Styled.H1 data-testid="header-gender">Gênero*</Styled.H1>

            <Styled.ContainerAllGenders>
              <Styled.ContainerCheckboxMain
                onClick={() =>
                  onClickCheckboxGender(ContainerCheckboxFeminine.current, 'feminine')
                }>
                <Styled.ContainerCheckbox
                  ref={ContainerCheckboxFeminine}
                  data-testid="container-checkbox-feminine">
                  <Styled.Container></Styled.Container>
                </Styled.ContainerCheckbox>

                <Styled.Span>Feminino</Styled.Span>
              </Styled.ContainerCheckboxMain>

              <Styled.ContainerCheckboxMain
                onClick={() =>
                  onClickCheckboxGender(ContainerCheckboxMasculine.current, 'masculine')
                }>
                <Styled.ContainerCheckbox
                  ref={ContainerCheckboxMasculine}
                  data-testid="container-checkbox-masculine">
                  <Styled.Container></Styled.Container>
                </Styled.ContainerCheckbox>

                <Styled.Span>Masculino</Styled.Span>
              </Styled.ContainerCheckboxMain>

              <Styled.ContainerCheckboxMain
                onClick={() =>
                  onClickCheckboxGender(ContainerCheckboxDoNotInform.current, 'notInform')
                }>
                <Styled.ContainerCheckbox
                  ref={ContainerCheckboxDoNotInform}
                  data-testid="container-checkbox-not-inform">
                  <Styled.Container></Styled.Container>
                </Styled.ContainerCheckbox>

                <Styled.Span>Não informar</Styled.Span>
              </Styled.ContainerCheckboxMain>
            </Styled.ContainerAllGenders>
          </Styled.ContainerFourth>

          <Styled.ContainerFifth>
            <Styled.ContainerCellPhone>
              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="ddd-cell-phone">DDD*</Styled.Label>
                <Styled.Input
                  type="text"
                  id="ddd-cell-phone"
                  placeholder="( 00 )"
                  ref={inputDDDCellPhone}
                  onChange={onChangeInputDDDCellPhone}
                />
                <Styled.SpanError ref={SpanErrorDDDCellPhone}>Erro</Styled.SpanError>
              </Styled.ContainerLabelAndInput>
              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="cell-phone">Celular*</Styled.Label>
                <Styled.Input
                  type="text"
                  id="cell-phone"
                  placeholder="00000 - 0000"
                  ref={inputCellPhone}
                  onChange={onChangeInputCellPhone}
                />
                <Styled.SpanError ref={SpanErrorCellPhone}>Erro</Styled.SpanError>
              </Styled.ContainerLabelAndInput>
            </Styled.ContainerCellPhone>

            <Styled.ContainerTelephone>
              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="ddd-telephone">DDD*</Styled.Label>
                <Styled.Input
                  type="text"
                  id="ddd-telephone"
                  placeholder="( 00 )"
                  ref={inputDDDTelephone}
                  onChange={onChangeInputDDDTelephone}
                />
                <Styled.SpanError ref={SpanErrorDDDTelephone}>Erro</Styled.SpanError>
              </Styled.ContainerLabelAndInput>
              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="telephone">Telefone</Styled.Label>
                <Styled.Input
                  type="text"
                  id="telephone"
                  placeholder="0000 - 0000"
                  ref={inputTelephone}
                  onChange={onChangeInputTelephone}
                />
                <Styled.SpanError ref={SpanErrorTelephone}>Erro</Styled.SpanError>
              </Styled.ContainerLabelAndInput>
            </Styled.ContainerTelephone>
          </Styled.ContainerFifth>
        </Styled.ContainerFirstRegister>

        <Styled.ContainerSecondRegister>
          <Styled.ContainerLabelAndInput>
            <Styled.Label htmlFor="email">E-mail*</Styled.Label>
            <Styled.Input
              type="text"
              id="email"
              placeholder="Informe o e-mail"
              ref={inputEmail}
              onChange={onChangeInputEmail}
            />
            <Styled.SpanError ref={SpanErrorEmail}>Email deve ter (@gmail.com)</Styled.SpanError>
          </Styled.ContainerLabelAndInput>

          <Styled.ContainerButtonReceiveToken>
            <Styled.Button ref={buttonReceiveTokenToRegister} onClick={onClickReceiveToken}>
              RECEBER TOKEN DE CADASTRO
            </Styled.Button>
            <Styled.Span>O token será enviado por e-mail/SMS*</Styled.Span>
            {codeSendToEmailOrSms && (
              <Styled.SpanCodeSendEmailSms>
                Token Enviado para o e-mail/SMS* terá uma duração de 10 Min
              </Styled.SpanCodeSendEmailSms>
            )}

            {tokenIsWrongEmail && (
              <Styled.SpanTokenWrong>Token Digitado é invalido</Styled.SpanTokenWrong>
            )}
          </Styled.ContainerButtonReceiveToken>

          <Styled.ContainerLabelAndInput>
            <Styled.Label htmlFor="token">Token*</Styled.Label>
            <Styled.Input
              type="text"
              id="token"
              placeholder="Informe o seu token de cadastro"
              ref={inputToken}
              onChange={onChangeInputToken}
            />
            <Styled.SpanError ref={SpanErrorToken}>precisa ser informado um token</Styled.SpanError>
          </Styled.ContainerLabelAndInput>

          <Styled.ContainerLabelAndInput>
            <Styled.Label htmlFor="password">Senha *</Styled.Label>
            <Styled.ContainerInputAndEye>
              <Styled.Input
                type="password"
                id="password"
                placeholder="Insira a senha"
                ref={inputPasswordActual}
                autoComplete="new-password"
                onChange={onChangeInputPassword}
              />
              <Styled.ContainerSvgEyeOpen
                ref={containerSvgEyeOpen}
                onClick={onClickSvgEyePasswordActual}
                data-testid="container-svg-eye-open">
                <SvgEyeOpen></SvgEyeOpen>
              </Styled.ContainerSvgEyeOpen>
              <Styled.ContainerSvgEyeClose
                ref={containerSvgEyeClose}
                onClick={onClickSvgEyePasswordActual}
                data-testid="container-svg-eye-close">
                <SvgEyeClose></SvgEyeClose>
              </Styled.ContainerSvgEyeClose>
            </Styled.ContainerInputAndEye>

            <Styled.SpanError ref={SpanErrorFirst}>
              erro 'senha' deve ser igual 'confirmar Senha'
            </Styled.SpanError>
          </Styled.ContainerLabelAndInput>

          <Styled.ContainerLabelAndInput>
            <Styled.Label htmlFor="confirm-password">Confirmar Senha *</Styled.Label>
            <Styled.ContainerInputAndEye>
              <Styled.Input
                type="password"
                id="confirm-password"
                placeholder="Insiria a senha novamente"
                ref={inputConfirmPassword}
                onChange={onChangeInputConfirmPassword}
              />
              <Styled.ContainerSvgEyeOpen
                ref={containerSvgEyeOpen}
                onClick={onClickSvgEyeConfirmPassword}
                data-testid="container-svg-eye-open">
                <SvgEyeOpen></SvgEyeOpen>
              </Styled.ContainerSvgEyeOpen>
              <Styled.ContainerSvgEyeClose
                ref={containerSvgEyeClose}
                onClick={onClickSvgEyeConfirmPassword}
                data-testid="container-svg-eye-close">
                <SvgEyeClose></SvgEyeClose>
              </Styled.ContainerSvgEyeClose>
            </Styled.ContainerInputAndEye>

            <Styled.SpanError ref={SpanErrorSecond}>
              erro 'confirmar senha' deve ser igual 'senha'
            </Styled.SpanError>
          </Styled.ContainerLabelAndInput>
        </Styled.ContainerSecondRegister>
      </Styled.ContainerMainBodyOfRegister>

      <Styled.ContainerCheckboxButtonCompleteRegistration>
        <Styled.ContainerCheckboxIUnderstandAndAgree>
          <Styled.Input type="checkbox" ref={inputCheckbox} onChange={handleChange} />
          <Styled.Span data-testid="span-checkbox">
            Li, compreendi e concordo com as <Styled.SpanLink>Condições Gerais</Styled.SpanLink>,
            inclusive com relação à proteção de dados pessoais, finalidades e hipóteses de
            tratamento de dados.
          </Styled.Span>
        </Styled.ContainerCheckboxIUnderstandAndAgree>

        <Styled.Button ref={buttonCompleteRegistration} onClick={onClickCompleteRegistration}>
          FINALIZAR CADASTRO
        </Styled.Button>
      </Styled.ContainerCheckboxButtonCompleteRegistration>
    </Styled.Container>
  );
};

export default Individual;
