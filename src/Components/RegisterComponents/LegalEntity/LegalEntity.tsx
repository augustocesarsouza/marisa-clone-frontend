import { useLayoutEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import SvgEyeOpen from '../../Svg/SvgEyeOpen/SvgEyeOpen';
import SvgEyeClose from '../../Svg/SvgEyeClose/SvgEyeClose';
import Inputmask from 'inputmask';

const LegalEntity = () => {
  const inputCheckboxForEmail = useRef<HTMLInputElement>(null);
  const inputCheckboxForCellphone = useRef<HTMLInputElement>(null);
  const buttonCompleteRegistration = useRef<HTMLButtonElement>(null);

  const containerSvgEyeOpen = useRef<HTMLDivElement>(null);
  const containerSvgEyeClose = useRef<HTMLDivElement>(null);

  const inputCompanyName = useRef<HTMLInputElement>(null);
  const inputResponsible = useRef<HTMLInputElement>(null);
  const inputCnpj = useRef<HTMLInputElement>(null);
  const inputStateRegistration = useRef<HTMLInputElement>(null);
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
  const SpanErrorCompanyName = useRef<HTMLSpanElement>(null);
  const SpanErrorResponsible = useRef<HTMLSpanElement>(null);
  const SpanErrorCnpj = useRef<HTMLSpanElement>(null);
  const SpanErrorStateRegistration = useRef<HTMLSpanElement>(null);
  const SpanErrorDDDCellPhone = useRef<HTMLSpanElement>(null);
  const SpanErrorCellPhone = useRef<HTMLSpanElement>(null);
  const SpanErrorDDDTelephone = useRef<HTMLSpanElement>(null);
  const SpanErrorTelephone = useRef<HTMLSpanElement>(null);
  const SpanErrorEmail = useRef<HTMLSpanElement>(null);
  const SpanErrorToken = useRef<HTMLSpanElement>(null);

  const buttonReceiveTokenToRegister = useRef<HTMLButtonElement>(null);

  const SelectUfRef = useRef<HTMLSelectElement | null>(null);
  const SelectICMSRef = useRef<HTMLSelectElement | null>(null);

  const brazilianStates = [
    { label: 'Acre', value: 'AC' },
    { label: 'Alagoas', value: 'AL' },
    { label: 'Amapá', value: 'AP' },
    { label: 'Amazonas', value: 'AM' },
    { label: 'Bahia', value: 'BA' },
    { label: 'Ceará', value: 'CE' },
    { label: 'Distrito Federal', value: 'DF' },
    { label: 'Espírito Santo', value: 'ES' },
    { label: 'Goiás', value: 'GO' },
    { label: 'Maranhão', value: 'MA' },
    { label: 'Mato Grosso', value: 'MT' },
    { label: 'Mato Grosso do Sul', value: 'MS' },
    { label: 'Minas Gerais', value: 'MG' },
    { label: 'Pará', value: 'PA' },
    { label: 'Paraíba', value: 'PB' },
    { label: 'Paraná', value: 'PR' },
    { label: 'Pernambuco', value: 'PE' },
    { label: 'Piauí', value: 'PI' },
    { label: 'Rio de Janeiro', value: 'RJ' },
    { label: 'Rio Grande do Norte', value: 'RN' },
    { label: 'Rio Grande do Sul', value: 'RS' },
    { label: 'Rondônia', value: 'RO' },
    { label: 'Roraima', value: 'RR' },
    { label: 'Santa Catarina', value: 'SC' },
    { label: 'São Paulo', value: 'SP' },
    { label: 'Sergipe', value: 'SE' },
    { label: 'Tocantins', value: 'TO' },
  ];

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

    const maskConfigs = [
      { element: inputCnpj.current, mask: '99.999.999/9999-99', placeholder: '__.___.___/___-__' },
      { element: inputDDDCellPhone.current, mask: '99', placeholder: '__' },
      { element: inputDDDTelephone.current, mask: '99', placeholder: '__' },
      { element: inputCellPhone.current, mask: '99999-9999', placeholder: '_____-____' },
      { element: inputTelephone.current, mask: '9999-9999', placeholder: '____-____' },
      { element: inputToken.current, mask: '999999', placeholder: '' },
    ];

    // Aplica todas as máscaras usando a função genérica
    maskConfigs.forEach(({ element, mask, placeholder }) => {
      applyMask(element as HTMLInputElement, mask, placeholder);
    });
  }, []);

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

  const onClickCompleteRegistration = () => {
    // const inputCheckboxInner = inputCheckbox.current as HTMLInputElement;

    const inputCheckboxForEmailInner = inputCheckboxForEmail.current as HTMLInputElement;
    const inputCheckboxForCellphoneInner = inputCheckboxForCellphone.current as HTMLInputElement;

    if (inputCheckboxForEmailInner === null || inputCheckboxForCellphoneInner === null) return;
    if (!inputCheckboxForEmailInner.checked && !inputCheckboxForCellphoneInner.checked) return;

    const cellPhoneFull = `${inputDDDCellPhone.current?.value} ${inputCellPhone.current?.value}`;
    const cellTelephone = `${inputDDDTelephone.current?.value} ${inputTelephone.current?.value}`;

    const inputCompanyNameHere = inputCompanyName.current as HTMLInputElement;
    const inputResponsibleHere = inputResponsible.current as HTMLInputElement;
    const inputCnpjHere = inputCnpj.current as HTMLInputElement;
    const selectUfere = SelectUfRef.current as HTMLSelectElement;
    const selectICMSRefHere = SelectICMSRef.current as HTMLSelectElement;
    const inputStateRegistrationHere = inputStateRegistration.current as HTMLInputElement;
    const inputDDDCellPhoneHere = inputDDDCellPhone.current as HTMLInputElement;
    const inputCellPhoneHere = inputCellPhone.current as HTMLInputElement;
    const inputDDDTelephoneHere = inputDDDTelephone.current as HTMLInputElement;
    const inputTelephoneHere = inputTelephone.current as HTMLInputElement;
    const inputEmailHere = inputEmail.current as HTMLInputElement;
    const inputTokenHere = inputToken.current as HTMLInputElement;

    const valueValidateResponsible = validateResponsible(inputResponsibleHere.value);
    const cnpjError = validateCnpj(inputCnpjHere.value);
    const ufError = validateUf(selectUfere.value);
    const stateRegistrationValidate = validateStateRegistration(inputStateRegistrationHere.value);
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

    // SelectUfRef -> fazer validação do "UF" tem que ter selecionando pelo menos um se não é erro

    if (
      inputCompanyNameHere.value.length < 3 ||
      valueValidateResponsible ||
      cnpjError ||
      ufError ||
      dddCellPhoneIsError ||
      cellPhoneIsError ||
      dddTelephoneIsError ||
      telephoneIsError ||
      !emailIsValid ||
      tokenIsError ||
      passwordAndConfirmPassword ||
      stateRegistrationValidate
    ) {
      if (inputCompanyNameHere.value.length < 3) {
        const span = SpanErrorCompanyName.current as HTMLSpanElement;
        const input = inputCompanyName.current as HTMLInputElement;

        putErrorSpanAndInput(span, input);
      }

      if (valueValidateResponsible) {
        const span = SpanErrorResponsible.current as HTMLSpanElement;
        const input = inputResponsible.current as HTMLInputElement;

        putErrorSpanAndInput(span, input);
      }

      if (cnpjError) {
        const span = SpanErrorCnpj.current as HTMLSpanElement;
        const input = inputCnpj.current as HTMLInputElement;

        putErrorSpanAndInput(span, input);
      }

      if (ufError) {
        // const span = SpanErrorCnpj.current as HTMLSpanElement;
        const select = SelectUfRef.current as HTMLSelectElement;

        putErrorSpanAndInput(null, select);
      }

      if (stateRegistrationValidate) {
        const span = SpanErrorStateRegistration.current as HTMLSpanElement;
        const input = inputStateRegistration.current as HTMLInputElement;

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

    const obj = {
      companyName: inputCompanyNameHere.value,
      responsible: inputResponsibleHere.value,
      cnpj: inputCnpjHere.value,
      uf: selectUfere.value,
      icms: selectICMSRefHere.value,
      stateRegistration: inputStateRegistrationHere.value,
      cellPhone: cellPhoneFull,
      telephone: cellTelephone,
      email: inputEmailHere.value,
      token: inputTokenHere.value,
      password: password,
    };

    console.log(obj);
  };

  const onClickReceiveToken = () => {
    const emailInput = inputEmail.current as HTMLInputElement;
    const emailValue = emailInput.value;
    const emailIsValid = validateEmail(emailValue);
    if (!emailIsValid) return;

    console.log('send token email');
    // FAZER TEST
  };

  const onChangeInputCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    const span = SpanErrorCompanyName.current as HTMLSpanElement;

    if (inputValue.length < 3) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputResponsible = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    const valueValidateResponsible = validateResponsible(inputValue);

    const span = SpanErrorResponsible.current as HTMLSpanElement;

    if (valueValidateResponsible) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputCnpj = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    const cnpjValidate = validateCnpj(inputValue);

    const span = SpanErrorCnpj.current as HTMLSpanElement;

    if (cnpjValidate) {
      putErrorSpanAndInput(span, input);
    } else {
      withoutErrorSpanAndInput(span, input);
    }
  };

  const onChangeInputStateRegistration = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    const stateRegistrationValidate = validateStateRegistration(inputValue);

    const span = SpanErrorStateRegistration.current as HTMLSpanElement;

    if (stateRegistrationValidate) {
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

  const validateResponsible = (Responsible: string): boolean => {
    console.log(Responsible);

    const valueValidate = Responsible.length < 3;
    return valueValidate;
  };

  const validateCnpj = (value: string): boolean => {
    const inputReplace = value.replace(/[-_./]/g, '');

    const valueValidate = inputReplace.length < 14;
    return valueValidate;
  };

  const validateStateRegistration = (value: string): boolean => {
    const valueValidate = value.length < 3;
    return valueValidate;
  };

  const validateEmail = (value: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const verify = regex.test(value);
    return verify;
  };

  const validateUf = (value: string): boolean => {
    const valueValidate = value.length < 1;
    return valueValidate;
  };

  const putErrorSpanAndInput = (
    span: HTMLSpanElement | null,
    input: HTMLInputElement | HTMLSelectElement
  ) => {
    if (span) {
      span.style.display = 'block';
    }

    input.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
  };

  const withoutErrorSpanAndInput = (
    span: HTMLSpanElement | null,
    input: HTMLInputElement | HTMLSelectElement
  ) => {
    if (span) {
      span.style.display = 'none';
    }

    input.style.backgroundColor = '#fff';
  };

  const handleChangeForEmail = () => {
    const inputCheckboxForEmailInner = inputCheckboxForEmail.current as HTMLInputElement;
    const valueCheck = inputCheckboxForEmailInner.checked;

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

  const handleChangeForCellphone = () => {
    const inputCheckboxForCellphoneInner = inputCheckboxForCellphone.current as HTMLInputElement;
    const valueCheck = inputCheckboxForCellphoneInner.checked;

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

  const handleClickSelectUfRef = () => {
    const selectUf = SelectUfRef.current as HTMLSelectElement;
    const valueUf = selectUf.value;

    const errorUf = validateUf(valueUf);

    if (!errorUf) {
      withoutErrorSpanAndInput(null, selectUf);
    }

    console.log(errorUf);
  };

  return (
    <Styled.Container>
      <Styled.ContainerMainBodyOfRegister>
        <Styled.ContainerFirstRegister>
          <Styled.ContainerFirst>
            <Styled.ContainerLabelAndInput>
              <Styled.Label htmlFor="company-name">Nome da empresa*</Styled.Label>
              <Styled.Input
                type="text"
                id="company-name"
                placeholder="Informe Nome da sua empresa"
                ref={inputCompanyName}
                onChange={onChangeInputCompanyName}
              />
              <Styled.SpanError ref={SpanErrorCompanyName}>
                Nome da empresa deve ter pelo menos 3 caracteres
              </Styled.SpanError>
            </Styled.ContainerLabelAndInput>

            <Styled.ContainerLabelAndInput>
              <Styled.Label htmlFor="responsible">Responsável*</Styled.Label>
              <Styled.Input
                type="text"
                id="responsible"
                placeholder="Informe o Responsável"
                ref={inputResponsible}
                onChange={onChangeInputResponsible}
              />
              <Styled.SpanError ref={SpanErrorResponsible}>
                Responsável deve ter pelo menos 3 caracteres
              </Styled.SpanError>
            </Styled.ContainerLabelAndInput>

            <Styled.ContainerLabelAndInput>
              <Styled.Label htmlFor="cnpj">CNPJ*</Styled.Label>
              <Styled.Input
                type="text"
                id="cnpj"
                placeholder="00.000.000/0000-00"
                ref={inputCnpj}
                onChange={onChangeInputCnpj}
              />
              <Styled.SpanError ref={SpanErrorCnpj}>CNPJ inválido</Styled.SpanError>
            </Styled.ContainerLabelAndInput>

            <Styled.ContainerUfAndIcms>
              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="uf">UF *</Styled.Label>
                <Styled.Select id="uf" ref={SelectUfRef} onClick={() => handleClickSelectUfRef()}>
                  <Styled.Option></Styled.Option>
                  {brazilianStates &&
                    brazilianStates.map((el) => (
                      <Styled.Option key={el.value} value={el.value}>
                        {el.label}
                      </Styled.Option>
                    ))}
                </Styled.Select>
              </Styled.ContainerLabelAndInput>

              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="cnpj">Situação tributária (ICMS) *</Styled.Label>
                <Styled.SelectTaxSituation id="cnpj" ref={SelectICMSRef}>
                  <Styled.Option data-testid="option-icms">ISENTO</Styled.Option>
                  <Styled.Option data-testid="option-icms">Contribuinte de ICMS</Styled.Option>
                  <Styled.Option data-testid="option-icms">Não contribuinte de ICMS</Styled.Option>
                </Styled.SelectTaxSituation>
              </Styled.ContainerLabelAndInput>
            </Styled.ContainerUfAndIcms>

            <Styled.ContainerLabelAndInput>
              <Styled.Label htmlFor="state-registration">Inscrição estadual*</Styled.Label>
              <Styled.Input
                type="text"
                id="state-registration"
                placeholder="ISENTO"
                ref={inputStateRegistration}
                onChange={onChangeInputStateRegistration}
                autoComplete="new-password"
              />
              <Styled.SpanError ref={SpanErrorStateRegistration}>
                Inscrição estadual deve ter pelo menos 3 caracteres
              </Styled.SpanError>
            </Styled.ContainerLabelAndInput>
          </Styled.ContainerFirst>

          <Styled.ContainerSecond>
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
          </Styled.ContainerSecond>
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
        <Styled.ContainerOffers>
          <Styled.H1 data-testid="header-offers">Ofertas</Styled.H1>

          <Styled.ContainerAllCheckboxSpan>
            <Styled.Span data-testid="span-do-you-want-to-receive-a-newsletter">
              Deseja receber um boletim com novidades e promoções da Marisa?
            </Styled.Span>

            <Styled.ContainerAllCheckbox>
              <Styled.ContainerCheckboxIUnderstandAndAgree>
                <Styled.Input
                  type="checkbox"
                  ref={inputCheckboxForEmail}
                  onChange={handleChangeForEmail}
                />
                <Styled.Span data-testid="span-checkbox-for-email">Por e-mail</Styled.Span>
              </Styled.ContainerCheckboxIUnderstandAndAgree>

              <Styled.ContainerCheckboxIUnderstandAndAgree>
                <Styled.Input
                  type="checkbox"
                  ref={inputCheckboxForCellphone}
                  onChange={handleChangeForCellphone}
                />
                <Styled.Span data-testid="span-checkbox-for-cellphone">Por celular</Styled.Span>
              </Styled.ContainerCheckboxIUnderstandAndAgree>
            </Styled.ContainerAllCheckbox>
          </Styled.ContainerAllCheckboxSpan>
        </Styled.ContainerOffers>

        <Styled.Button ref={buttonCompleteRegistration} onClick={onClickCompleteRegistration}>
          FINALIZAR CADASTRO
        </Styled.Button>
      </Styled.ContainerCheckboxButtonCompleteRegistration>
    </Styled.Container>
  );
};

export default LegalEntity;
