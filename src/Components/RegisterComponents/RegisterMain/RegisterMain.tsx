import { useLayoutEffect, useRef, useState } from 'react';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import * as Styled from './styled';
import SvgEyeOpen from '../../Svg/SvgEyeOpen/SvgEyeOpen';
import SvgEyeClose from '../../Svg/SvgEyeClose/SvgEyeClose';
import Inputmask from 'inputmask';

const RegisterMain = () => {
  const ContainerCheckboxFirst = useRef<HTMLDivElement>(null);
  const ContainerCheckboxSecond = useRef<HTMLDivElement>(null);

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
  const inputCheckbox = useRef<HTMLInputElement>(null);

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

  const buttonCompleteRegistration = useRef<HTMLButtonElement>(null);

  const [canSendToCreate, setCanSendToCreate] = useState(false);

  const [whichTypePersonalWasClicked, setWhichTypePersonalWasClicked] = useState('individual');
  const [whichGender, setWhichGender] = useState('feminine');

  useLayoutEffect(() => {
    const containerSecond = ContainerCheckboxSecond.current as HTMLDivElement;
    checkboxNotClicked(containerSecond);

    const containerMasculine = ContainerCheckboxMasculine.current as HTMLDivElement;
    checkboxNotClicked(containerMasculine);

    const containerDoNotInform = ContainerCheckboxDoNotInform.current as HTMLDivElement;
    checkboxNotClicked(containerDoNotInform);

    const inputBirthdate = inputBirthDate.current as HTMLInputElement;

    if (inputBirthdate) {
      const mask = new Inputmask({
        mask: '99/99/9999',
        placeholder: '__/__/___',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputBirthdate);
    }

    const inputCpfMask = inputCpf.current as HTMLInputElement;

    if (inputCpfMask) {
      const mask = new Inputmask({
        mask: '999.999.999-99',
        placeholder: '___.___.___-__',
        insertMode: true,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputCpfMask);
    }

    const inputDDDCellPhoneMask = inputDDDCellPhone.current as HTMLInputElement;

    if (inputDDDCellPhoneMask) {
      const mask = new Inputmask({
        mask: '99',
        placeholder: '__',
        insertMode: true,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputDDDCellPhoneMask);
    }

    const inputDDDTelephoneMask = inputDDDTelephone.current as HTMLInputElement;

    if (inputDDDTelephoneMask) {
      const mask = new Inputmask({
        mask: '99',
        placeholder: '__',
        insertMode: true,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputDDDTelephoneMask);
    }

    const inputCellPhoneMask = inputCellPhone.current as HTMLInputElement;

    if (inputCellPhoneMask) {
      const mask = new Inputmask({
        mask: '99999-9999',
        placeholder: '_____-____',
        insertMode: true,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputCellPhoneMask);
    }

    const inputTelephoneMask = inputTelephone.current as HTMLInputElement;

    if (inputTelephoneMask) {
      const mask = new Inputmask({
        mask: '9999-9999',
        placeholder: '____-____',
        insertMode: true,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputTelephoneMask);
    }
  }, []);

  const onClickIndividual = () => {
    const containerFirst = ContainerCheckboxFirst.current as HTMLDivElement;
    checkboxClicked(containerFirst);

    const containerSecond = ContainerCheckboxSecond.current as HTMLDivElement;
    checkboxNotClicked(containerSecond);

    setWhichTypePersonalWasClicked('individual');
  };

  const onClickLegalEntity = () => {
    const containerFirst = ContainerCheckboxFirst.current as HTMLDivElement;
    checkboxNotClicked(containerFirst);

    const containerSecond = ContainerCheckboxSecond.current as HTMLDivElement;
    checkboxClicked(containerSecond);

    setWhichTypePersonalWasClicked('legalEntity');
  };

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

  const [passwordIsEqualToTheConfirmPassword, setPasswordIsEqualToTheConfirmPassword] =
    useState(false);

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
      setPasswordIsEqualToTheConfirmPassword(true);
    } else {
      spanOne.style.display = 'block';
      spanTwo.style.display = 'block';

      inputPasswordActualInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
      inputConfirmPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
      setPasswordIsEqualToTheConfirmPassword(false);
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
      setPasswordIsEqualToTheConfirmPassword(true);
    } else {
      spanOne.style.display = 'block';
      spanTwo.style.display = 'block';

      inputPasswordActualInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
      inputConfirmPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
      setPasswordIsEqualToTheConfirmPassword(false);
    }
  };

  const onClickCompleteRegistration = () => {
    // if (!canSendToCreate) return;

    // if (!passwordIsEqualToTheConfirmPassword) return;

    const inputCheckboxInner = inputCheckbox.current as HTMLInputElement;

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

      // colocar o erro agora em qual input estiver erro e coloca o erro dos spans
      return;
    }

    const obj = {
      typePersonal: whichTypePersonalWasClicked,
      name: inputFullNameHere.value,
      birthdate: inputBirthDate.current?.value,
      cpf: inputCpf.current?.value,
      gender: whichGender,
      cellphone: cellPhoneFull,
      telephone: cellTelephone,
      email: inputEmail.current?.value,
      token: inputToken.current?.value,
      password: inputPasswordActual.current?.value,
    };

    console.log(obj);
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

    if (!emailIsValid) {
      putErrorSpanAndInput(span, input);
    } else {
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

  return (
    <Styled.ContainerMain>
      <HeaderFullMain></HeaderFullMain>

      <Styled.ContainerRegiserMain>
        <Styled.ContainerRegiser>
          <Styled.ContainerFirst>
            <Styled.H1>Quer se cadastrar?</Styled.H1>
            <Styled.Span>Por favor preencha os campos abaixo, vai ser rapidinho</Styled.Span>
          </Styled.ContainerFirst>

          <Styled.ContainerMainBodyOfRegister>
            <Styled.ContainerFirstRegister>
              <Styled.ContainerSecond>
                <Styled.ContainerCheckboxMain onClick={onClickIndividual}>
                  <Styled.ContainerCheckbox ref={ContainerCheckboxFirst}>
                    <Styled.Container></Styled.Container>
                  </Styled.ContainerCheckbox>

                  <Styled.Span>Pessoa Fí­sica</Styled.Span>
                </Styled.ContainerCheckboxMain>
                <Styled.ContainerCheckboxMain onClick={onClickLegalEntity}>
                  <Styled.ContainerCheckbox ref={ContainerCheckboxSecond}>
                    <Styled.Container></Styled.Container>
                  </Styled.ContainerCheckbox>

                  <Styled.Span>Pessoa Jurí­dica</Styled.Span>
                </Styled.ContainerCheckboxMain>
              </Styled.ContainerSecond>

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
                <Styled.H1>Gênero*</Styled.H1>

                <Styled.ContainerAllGenders>
                  <Styled.ContainerCheckboxMain
                    onClick={() =>
                      onClickCheckboxGender(ContainerCheckboxFeminine.current, 'feminine')
                    }>
                    <Styled.ContainerCheckbox ref={ContainerCheckboxFeminine}>
                      <Styled.Container></Styled.Container>
                    </Styled.ContainerCheckbox>

                    <Styled.Span>Feminino</Styled.Span>
                  </Styled.ContainerCheckboxMain>

                  <Styled.ContainerCheckboxMain
                    onClick={() =>
                      onClickCheckboxGender(ContainerCheckboxMasculine.current, 'masculine')
                    }>
                    <Styled.ContainerCheckbox ref={ContainerCheckboxMasculine}>
                      <Styled.Container></Styled.Container>
                    </Styled.ContainerCheckbox>

                    <Styled.Span>Masculino</Styled.Span>
                  </Styled.ContainerCheckboxMain>

                  <Styled.ContainerCheckboxMain
                    onClick={() =>
                      onClickCheckboxGender(ContainerCheckboxDoNotInform.current, 'notInform')
                    }>
                    <Styled.ContainerCheckbox ref={ContainerCheckboxDoNotInform}>
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
                <Styled.Label htmlFor="ddd-telephone">E-mail*</Styled.Label>
                <Styled.Input
                  type="text"
                  id="ddd-telephone"
                  placeholder="Informe o e-mail"
                  ref={inputEmail}
                  onChange={onChangeInputEmail}
                />
                <Styled.SpanError ref={SpanErrorEmail}>
                  Email deve ter (@gmail.com)
                </Styled.SpanError>
              </Styled.ContainerLabelAndInput>

              <Styled.ContainerButtonReceiveToken>
                <Styled.Button>RECEBER TOKEN DE CADASTRO</Styled.Button>
                <Styled.Span>O token será enviado por e-mail/SMS*</Styled.Span>
              </Styled.ContainerButtonReceiveToken>

              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="ddd-telephone">Token*</Styled.Label>
                <Styled.Input
                  type="text"
                  id="ddd-telephone"
                  placeholder="Informe o seu token de cadastro"
                  ref={inputToken}
                  onChange={onChangeInputToken}
                />
                <Styled.SpanError ref={SpanErrorToken}>
                  precisa ser informado um token
                </Styled.SpanError>
              </Styled.ContainerLabelAndInput>

              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="ddd-telephone">Senha *</Styled.Label>
                <Styled.ContainerInputAndEye>
                  <Styled.Input
                    type="password"
                    id="ddd-telephone"
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
                <Styled.Label htmlFor="ddd-telephone">Confirmar Senha *</Styled.Label>
                <Styled.ContainerInputAndEye>
                  <Styled.Input
                    type="password"
                    id="ddd-telephone"
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
              <Styled.Span>
                Li, compreendi e concordo com as <Styled.SpanLink>Condições Gerais</Styled.SpanLink>
                , inclusive com relação à proteção de dados pessoais, finalidades e hipóteses de
                tratamento de dados.
              </Styled.Span>
            </Styled.ContainerCheckboxIUnderstandAndAgree>

            <Styled.Button ref={buttonCompleteRegistration} onClick={onClickCompleteRegistration}>
              FINALIZAR CADASTRO
            </Styled.Button>
          </Styled.ContainerCheckboxButtonCompleteRegistration>
        </Styled.ContainerRegiser>
      </Styled.ContainerRegiserMain>

      <FooterMain></FooterMain>
    </Styled.ContainerMain>
  );
};

export default RegisterMain;
