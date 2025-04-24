import { useLayoutEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import Inputmask from 'inputmask';
import { User } from '../../../../Interfaces/Entity/User.';
import { useNavigate } from 'react-router-dom';
import { GetUserFromLocalStorage } from '../../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import userService from '../../../../Service/UserService/UserService';
import { TokenExpiration } from '../../../../TokenValidation/TokenExpiration';

const UpdateProfile = () => {
  const [user, setUser] = useState<User | null>(null);

  const inputCheckbox = useRef<HTMLInputElement>(null);

  const ContainerCheckboxFeminine = useRef<HTMLDivElement>(null);
  const ContainerCheckboxMasculine = useRef<HTMLDivElement>(null);
  const ContainerCheckboxDoNotInform = useRef<HTMLDivElement>(null);

  const inputFullName = useRef<HTMLInputElement>(null);
  const inputBirthDate = useRef<HTMLInputElement>(null);
  const inputCpf = useRef<HTMLInputElement>(null);
  const inputCellPhone = useRef<HTMLInputElement>(null);
  const inputDDDCellPhone = useRef<HTMLInputElement>(null);
  const inputTelephone = useRef<HTMLInputElement>(null);
  const inputDDDTelephone = useRef<HTMLInputElement>(null);

  const SpanErrorNameComplete = useRef<HTMLSpanElement>(null);
  const SpanErrorBirthDate = useRef<HTMLSpanElement>(null);
  const SpanErrorDDDCellPhone = useRef<HTMLSpanElement>(null);
  const SpanErrorCellPhone = useRef<HTMLSpanElement>(null);
  const SpanErrorDDDTelephone = useRef<HTMLSpanElement>(null);
  const SpanErrorTelephone = useRef<HTMLSpanElement>(null);

  const [whichGender, setWhichGender] = useState('feminine');
  const nav = useNavigate();

  useLayoutEffect(() => {
    const containerFeminine = ContainerCheckboxFeminine.current as HTMLDivElement;
    checkboxNotClicked(containerFeminine);

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

    const inputCpfHere = inputCpf.current as HTMLInputElement;
    inputCpfHere.style.cursor = 'default';
    inputCpfHere.style.pointerEvents = 'none';
    inputCpfHere.style.color = '#929292';
    inputCpfHere.style.backgroundColor = '#eee';

    const inputBirthDateHere = inputBirthDate.current as HTMLInputElement;
    const inputDDDCellPhoneHere = inputDDDCellPhone.current as HTMLInputElement;
    const inputCellPhoneHere = inputCellPhone.current as HTMLInputElement;
    const inputDDDTelephoneHere = inputDDDTelephone.current as HTMLInputElement;
    const inputTelephoneHere = inputTelephone.current as HTMLInputElement;

    const maskConfigs = [
      { element: inputBirthDateHere, mask: '99/99/9999', placeholder: '__/__/____' },
      { element: inputCpfHere, mask: '999.999.999-99', placeholder: '___.___.___-__' },
      { element: inputDDDCellPhoneHere, mask: '99', placeholder: '__' },
      { element: inputDDDTelephoneHere, mask: '99', placeholder: '__' },
      { element: inputCellPhoneHere, mask: '99999-9999', placeholder: '_____-____' },
      { element: inputTelephoneHere, mask: '9999-9999', placeholder: '____-____' },
    ];

    // Aplica todas as máscaras usando a função genérica
    maskConfigs.forEach(({ element, mask, placeholder }) => {
      applyMask(element as HTMLInputElement, mask, placeholder);
    });

    const objUser = GetUserFromLocalStorage();

    if (objUser.isNullUserLocalStorage) {
      localStorage.removeItem('user');
      nav('/login');
      window.location.reload();
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

    setUser(user);

    const getInfoToUpdateProfile = async (user: User) => {
      const userId = user.id as string;
      const token = user.token as string;

      const resp = await userService.getInfoToUpdateProfile(userId, token);

      if (resp && resp.isSucess) {
        const user = resp.data as User;

        const userName = user.name as string;

        const inputName = inputFullName.current as HTMLInputElement;
        inputName.value = userName;

        if (user.gender === 'f') {
          const containerBoxFeminine = ContainerCheckboxFeminine.current as HTMLDivElement;

          checkboxClicked(containerBoxFeminine);
        } else if (user.gender === 'm') {
          const containerBoxMasculine = ContainerCheckboxMasculine.current as HTMLDivElement;
          checkboxClicked(containerBoxMasculine);
        } else if (user.gender === 'n') {
          const containerBoxNotInform = ContainerCheckboxDoNotInform.current as HTMLDivElement;
          checkboxClicked(containerBoxNotInform);
        }

        const inputCpfInner = inputCpf.current as HTMLInputElement;
        inputCpfInner.value = user.cpf as string;

        const ddCellPhoneUser = user.cellPhone as string;
        const cellPhoneDD = ddCellPhoneUser.split(' ')[0];
        const cellPhone = ddCellPhoneUser.split(' ')[1];

        inputDDDCellPhoneHere.value = `${cellPhoneDD}`;
        inputCellPhoneHere.value = `${cellPhone}`;

        const telephoneUser = user.telephone as string;
        const telephoneSplit = telephoneUser.split(' ');
        const telephoneDD = telephoneSplit[0];
        const telephone = telephoneSplit[1];

        inputDDDTelephoneHere.value = `${telephoneDD}`;
        inputTelephoneHere.value = `${telephone}`;

        const birthDateUser = user.birthDate as string;
        const birthDateSplit = birthDateUser.split('T')[0];
        const birthDateYearMonthDay = birthDateSplit.split('-');
        const birthDate = `${birthDateYearMonthDay[2]}/${birthDateYearMonthDay[1]}/${birthDateYearMonthDay[0]}`;

        inputBirthDateHere.value = birthDate;
      }
    };

    if (user) {
      getInfoToUpdateProfile(user);
    }
  }, [nav]);

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

    const span = SpanErrorBirthDate.current as HTMLSpanElement;

    if (inputValue.length < 3) {
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
    console.log(inputValue);
  };

  const onChangeInputTelephone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value.replace(/[-_.]/g, '');
    console.log(inputValue);
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

  const buttonSaveUpdates = useRef<HTMLButtonElement>(null);

  const handleChange = () => {
    const inputCheckboxInner = inputCheckbox.current as HTMLInputElement;
    const valueCheck = inputCheckboxInner.checked;

    const button = buttonSaveUpdates.current as HTMLButtonElement;

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

  const onClickSaveUpdates = async () => {
    const inputCheckboxInner = inputCheckbox.current as HTMLInputElement;

    if (inputCheckboxInner === null) return;
    if (!inputCheckboxInner.checked) return;

    const cellPhoneFull = `${inputDDDCellPhone.current?.value} ${inputCellPhone.current?.value}`;
    const cellTelephone = `${inputDDDTelephone.current?.value} ${inputTelephone.current?.value}`;

    const inputFullNameHere = inputFullName.current as HTMLInputElement;
    const inputBirthDateHere = inputBirthDate.current as HTMLInputElement;
    const inputDDDCellPhoneHere = inputDDDCellPhone.current as HTMLInputElement;
    const inputCellPhoneHere = inputCellPhone.current as HTMLInputElement;

    const nameFullError = inputFullNameHere.value.length < 3;
    const valueValidateBirthDate = validateBirthDate(inputBirthDateHere.value);
    const dddCellPhoneError = inputDDDCellPhoneHere.value.replace(/[-_.]/g, '');
    const cellPhoneError = inputCellPhoneHere.value.replace(/[-_.]/g, '');

    const dddCellPhoneIsError = dddCellPhoneError.length < 2;
    const cellPhoneIsError = cellPhoneError.length < 9;

    if (nameFullError || !valueValidateBirthDate || dddCellPhoneIsError || cellPhoneIsError) {
      if (nameFullError) {
        const span = SpanErrorNameComplete.current as HTMLSpanElement;
        const input = inputFullName.current as HTMLInputElement;

        putErrorSpanAndInput(span, input);
      }

      if (!valueValidateBirthDate) {
        const span = SpanErrorBirthDate.current as HTMLSpanElement;
        const input = inputBirthDate.current as HTMLInputElement;

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
    if (user === null) return;

    const userId = user.id as string;

    const obj: User = {
      name: inputFullNameHere.value,
      birthDateString: inputBirthDateHere.value,
      cellPhone: cellPhoneFull,
      cpf: null,
      gender: gender,
      telephone: cellTelephone,
      userImage: '',
      id: userId,
      birthDate: null,
      passwordHash: null,
      salt: null,
      token: null,
      email: null,
      tokenForCreation: null,
      password: null,
    };

    const token = user.token as string;

    const resp = await userService.updateUser(obj, token);

    if (resp?.isSucess && resp.data) {
      nav('/my-account/profile');
    }
  };

  return (
    <Styled.ContainerMain>
      <Styled.H1UpdateProfile>Alterar Dados Pessoais</Styled.H1UpdateProfile>

      <Styled.ContainerLabelAndInput>
        <Styled.Label htmlFor="name-full">Nome Completo*</Styled.Label>
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

      <Styled.ContainerGenderAndBirthDate>
        <Styled.ContainerAllGendersMain>
          <Styled.H1 data-testid="header-gender">Gênero*</Styled.H1>
          <Styled.ContainerAllGenders>
            <Styled.ContainerCheckboxMain
              onClick={() => onClickCheckboxGender(ContainerCheckboxFeminine.current, 'feminine')}>
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
        </Styled.ContainerAllGendersMain>

        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="birth-date">Data de Nascimento*</Styled.Label>
          <Styled.Input
            type="text"
            id="birth-date"
            placeholder="00/00/0000"
            ref={inputBirthDate}
            onChange={onChangeInputBirthDate}
          />
          <Styled.SpanError ref={SpanErrorBirthDate}>Informe a Data de Nascimento</Styled.SpanError>
        </Styled.ContainerLabelAndInput>
      </Styled.ContainerGenderAndBirthDate>

      <Styled.ContainerLabelAndInput>
        <Styled.Label htmlFor="cpf">CPF</Styled.Label>
        <Styled.Input type="text" id="cpf" placeholder="000.000.000-00" ref={inputCpf} />
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerTelephoneAndCelphone>
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
            <Styled.Label htmlFor="ddd-telephone">DDD</Styled.Label>
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
      </Styled.ContainerTelephoneAndCelphone>

      <Styled.ContainerCheckboxButtonCompleteRegistration>
        <Styled.ContainerCheckboxIUnderstandAndAgree>
          <Styled.Input type="checkbox" ref={inputCheckbox} onChange={handleChange} />
          <Styled.Span data-testid="span-checkbox">
            Li, compreendi e concordo com as <Styled.SpanLink>Condições Gerais</Styled.SpanLink>,
            inclusive com relação à proteção de dados pessoais, finalidades e hipóteses de
            tratamento de dados.
          </Styled.Span>
        </Styled.ContainerCheckboxIUnderstandAndAgree>

        <Styled.Span>* Campos marcados são obrigatórios</Styled.Span>

        <Styled.Button ref={buttonSaveUpdates} onClick={onClickSaveUpdates}>
          SALVAR ATUALIZAÇÕES
        </Styled.Button>
      </Styled.ContainerCheckboxButtonCompleteRegistration>
    </Styled.ContainerMain>
  );
};

export default UpdateProfile;
