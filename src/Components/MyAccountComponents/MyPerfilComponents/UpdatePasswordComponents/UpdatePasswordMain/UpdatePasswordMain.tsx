import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import SvgEyeOpen from '../../../../Svg/SvgEyeOpen/SvgEyeOpen';
import SvgEyeClose from '../../../../Svg/SvgEyeClose/SvgEyeClose';
import { useNavigate } from 'react-router-dom';
import { GetUserFromLocalStorage } from '../../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { User } from '../../../../Interfaces/Entity/User.';
import { ChangePasswordUser } from '../../../../Interfaces/DTOs/ChangePasswordUser';
import userService from '../../../../Service/UserService/UserService';
import { ChangePasswordUserReturnDTO } from '../../../../Interfaces/DTOs/ChangePasswordUserReturnDTO';

const UpdatePasswordMain = () => {
  const nav = useNavigate();
  const inputCurrentPassword = useRef<HTMLInputElement>(null);
  const inputNewPassword = useRef<HTMLInputElement>(null);
  const inputConfirmNewPassword = useRef<HTMLInputElement>(null);

  const SpanErrorCurrentPassword = useRef<HTMLSpanElement>(null);
  const SpanErrorPasswordIncorrect = useRef<HTMLSpanElement>(null);
  const SpanErrorNewPassword = useRef<HTMLSpanElement>(null);
  const SpanErrorConfirmNewPassword = useRef<HTMLSpanElement>(null);

  const containerSvgEyeOpenCurrentPassword = useRef<HTMLDivElement>(null);
  const containerSvgEyeCloseCurrentPassword = useRef<HTMLDivElement>(null);

  const containerSvgEyeOpenNewPassword = useRef<HTMLDivElement>(null);
  const containerSvgEyeCloseNewPassword = useRef<HTMLDivElement>(null);

  const containerSvgEyeOpenConfirmNewPassword = useRef<HTMLDivElement>(null);
  const containerSvgEyeCloseConfirmNewPassword = useRef<HTMLDivElement>(null);

  const [currentPassword, setCurrentPassword] = useState('c');
  const [newPassword, setNewPassword] = useState('n');
  const [confirmNewPassword, setConfirmNewPassword] = useState('c');

  const [passwordChangedSuccessfully, setPasswordChangedSuccessfully] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [changePasswordUserReturnDTO, setChangePasswordUserReturnDTO] =
    useState<ChangePasswordUserReturnDTO | null>(null);

  useEffect(() => {
    const objUser = GetUserFromLocalStorage();

    if (objUser.isNullUserLocalStorage) {
      localStorage.removeItem('user');
      nav('/login');
      window.location.reload();
      return;
    }

    const user = objUser.user;
    setUser(user);
  }, [nav]);

  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (timeRemaining === null || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime !== null ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  useLayoutEffect(() => {
    const spanErrorConfirmNewPasswordHere = SpanErrorPasswordIncorrect.current as HTMLSpanElement;
    spanErrorConfirmNewPasswordHere.style.display = 'none';
  }, []);

  const onChangeInputCurrentPassword = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    setCurrentPassword(inputValue);

    if (SpanErrorCurrentPassword === null) return;
    const spanTwo = SpanErrorCurrentPassword.current as HTMLSpanElement;
    const spanPasswordIncorrect = SpanErrorPasswordIncorrect.current as HTMLSpanElement;

    const isValidInputCurrentPassword = validateCurrentPassword(inputValue);

    if (isValidInputCurrentPassword) {
      // spanTwo.style.display = 'none';
      spanTwo.style.color = 'transparent';
      spanPasswordIncorrect.style.color = 'transparent';

      input.style.backgroundColor = '#fff';
    } else {
      spanTwo.style.display = 'block';
      spanPasswordIncorrect.style.display = 'none';
      spanTwo.style.color = 'red';

      input.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    }

    const spanErrorConfirmNewPasswordHere = SpanErrorPasswordIncorrect.current as HTMLSpanElement;
    spanErrorConfirmNewPasswordHere.style.color = 'transparent';
  };

  const validateCurrentPassword = (inputValue: string) => {
    return inputValue.length > 5;
  };

  const onChangeInputNewPassword = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    setNewPassword(inputValue);

    if (SpanErrorNewPassword === null) return;
    const span = SpanErrorNewPassword.current as HTMLSpanElement;

    const inputNewPasswordInner = inputNewPassword.current as HTMLInputElement;
    const isValidInputNewPassword = validateNewPassword(inputValue);

    if (isValidInputNewPassword) {
      span.style.display = 'none';
      span.style.color = 'transparent';

      inputNewPasswordInner.style.backgroundColor = '#fff';
    } else {
      span.style.display = 'block';
      span.style.color = 'red';

      inputNewPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    }
  };

  const validateNewPassword = (inputValue: string) => {
    return inputValue.length > 5;
  };

  const onChangeInputConfirmNewPassword = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    setConfirmNewPassword(inputValue);

    if (SpanErrorConfirmNewPassword === null) return;
    const span = SpanErrorConfirmNewPassword.current as HTMLSpanElement;

    const inputConfirmNewPasswordInner = inputConfirmNewPassword.current as HTMLInputElement;
    const isValidInputNewPassword = validateConfirmNewPassword(newPassword, inputValue);

    if (isValidInputNewPassword) {
      span.style.display = 'none';
      span.style.color = 'transparent';

      inputConfirmNewPasswordInner.style.backgroundColor = '#fff';
    } else {
      span.style.display = 'block';
      span.style.color = 'red';

      inputConfirmNewPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    }
  };

  const validateConfirmNewPassword = (
    inputNewPasswordValue: string,
    inputConfirmNewPasswordValue: string
  ) => {
    return inputNewPasswordValue === inputConfirmNewPasswordValue;
  };

  const onClickSvgEyeCurrentPassword = () => {
    const input = inputCurrentPassword.current as HTMLInputElement;
    const containerSvgEyeOpen = containerSvgEyeOpenCurrentPassword.current as HTMLDivElement;
    const containerSvgEyeClose = containerSvgEyeCloseCurrentPassword.current as HTMLDivElement;

    if (input.type === 'text') {
      input.type = 'password';
      containerSvgEyeOpen.style.display = 'flex';
      containerSvgEyeClose.style.display = 'none';
    } else if (input.type === 'password') {
      input.type = 'text';
      containerSvgEyeOpen.style.display = 'none';
      containerSvgEyeClose.style.display = 'flex';
    }
  };

  const onClickSvgEyeNewPassword = () => {
    const input = inputNewPassword.current as HTMLInputElement;
    const containerSvgEyeOpen = containerSvgEyeOpenNewPassword.current as HTMLDivElement;
    const containerSvgEyeClose = containerSvgEyeCloseNewPassword.current as HTMLDivElement;

    if (input.type === 'text') {
      input.type = 'password';
      containerSvgEyeOpen.style.display = 'flex';
      containerSvgEyeClose.style.display = 'none';
    } else if (input.type === 'password') {
      input.type = 'text';
      containerSvgEyeOpen.style.display = 'none';
      containerSvgEyeClose.style.display = 'flex';
    }
  };

  const onClickSvgEyeConfirmNewPassword = () => {
    const input = inputConfirmNewPassword.current as HTMLInputElement;
    const containerSvgEyeOpen = containerSvgEyeOpenConfirmNewPassword.current as HTMLDivElement;
    const containerSvgEyeClose = containerSvgEyeOpenConfirmNewPassword.current as HTMLDivElement;

    if (input.type === 'text') {
      input.type = 'password';
      containerSvgEyeOpen.style.display = 'flex';
      containerSvgEyeClose.style.display = 'none';
    } else if (input.type === 'password') {
      input.type = 'text';
      containerSvgEyeOpen.style.display = 'none';
      containerSvgEyeClose.style.display = 'flex';
    }
  };

  const onClickCancel = () => {
    nav('/my-account');
  };

  const onClickChangePassword = async () => {
    const inputCurrentPasswordInner = inputCurrentPassword.current as HTMLInputElement;
    const inputValue = inputCurrentPasswordInner.value;

    const spanErrorCurrentPasswordHere = SpanErrorCurrentPassword.current as HTMLSpanElement;
    const isValidInputCurrentPassword = validateCurrentPassword(inputValue);

    if (isValidInputCurrentPassword) {
      spanErrorCurrentPasswordHere.style.display = 'none';
      spanErrorCurrentPasswordHere.style.color = 'transparent';

      inputCurrentPasswordInner.style.backgroundColor = '#fff';
    } else {
      spanErrorCurrentPasswordHere.style.display = 'block';
      spanErrorCurrentPasswordHere.style.color = 'red';

      inputCurrentPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    }

    const inputNewPasswordInner = inputNewPassword.current as HTMLInputElement;
    const inputNewPasswordValue = inputNewPasswordInner.value;

    const spanErrorNewPasswordHere = SpanErrorNewPassword.current as HTMLSpanElement;
    const isValidInputNewPassword = validateNewPassword(inputNewPasswordValue);

    if (isValidInputNewPassword) {
      spanErrorNewPasswordHere.style.display = 'none';
      spanErrorNewPasswordHere.style.color = 'transparent';

      inputNewPasswordInner.style.backgroundColor = '#fff';
    } else {
      spanErrorNewPasswordHere.style.display = 'block';
      spanErrorNewPasswordHere.style.color = 'red';

      inputNewPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    }

    const inputConfirmNewPasswordInner = inputConfirmNewPassword.current as HTMLInputElement;

    const spanErrorConfirmNewPasswordHere = SpanErrorConfirmNewPassword.current as HTMLSpanElement;
    const isValidInputConfirmNewPassword = validateConfirmNewPassword(
      newPassword,
      confirmNewPassword
    );

    if (isValidInputConfirmNewPassword) {
      spanErrorConfirmNewPasswordHere.style.display = 'none';
      spanErrorConfirmNewPasswordHere.style.color = 'transparent';

      inputConfirmNewPasswordInner.style.backgroundColor = '#fff';
    } else {
      spanErrorConfirmNewPasswordHere.style.display = 'block';
      spanErrorConfirmNewPasswordHere.style.color = 'red';

      inputConfirmNewPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    }

    if (isValidInputCurrentPassword && isValidInputNewPassword && isValidInputConfirmNewPassword) {
      if (user === null) return;

      const userId = user.id as string;
      const token = user.token as string;

      const obj: ChangePasswordUser = {
        userId: userId,
        currentPassword: currentPassword,
        confirmNewPassword: confirmNewPassword,
      };

      const resp = await userService.updateChangePasswordUser(obj, token);

      if (resp === null) return;

      const data = resp.data;
      setChangePasswordUserReturnDTO(data);
      console.log(data);

      if (data.passwordIsCorrect) {
        setPasswordChangedSuccessfully(true);
      } else {
        const spanErrorConfirmNewPasswordHere =
          SpanErrorPasswordIncorrect.current as HTMLSpanElement;

        spanErrorConfirmNewPasswordHere.style.display = 'block';
        spanErrorConfirmNewPasswordHere.style.color = '#c53131';
      }

      if (!data.passwordIsCorrect) {
        // Extrai os segundos de "00:00:49.5900854"
        const time = data.timeRemaining as number;
        const timeParts = time.toString().split(':');
        const seconds = parseInt(timeParts[1]) * 60 + parseInt(timeParts[2].split('.')[0]);

        setTimeRemaining(seconds);
      }

      if (data.numberOfAttempts > 3) {
        setChangePasswordUserReturnDTO(null);
      }
    }
  };

  return (
    <Styled.ContainerMain>
      <Styled.H1>Alterar Senha</Styled.H1>

      {passwordChangedSuccessfully && (
        <Styled.ContainerChangedSuccessfully>
          <Styled.H1>Senha alterada com sucesso</Styled.H1>
        </Styled.ContainerChangedSuccessfully>
      )}

      {timeRemaining !== null && timeRemaining > 0 && (
        <Styled.ContainerCountdown>
          Tente novamente em {timeRemaining} segundos
        </Styled.ContainerCountdown>
      )}

      {changePasswordUserReturnDTO && (
        <Styled.ContainerNumberOfAttempts>
          {changePasswordUserReturnDTO.numberOfAttempts} de 3 tentativas para alterar senha
        </Styled.ContainerNumberOfAttempts>
      )}

      <Styled.ContainerPasswordAll>
        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="current-password">Senha Atual *</Styled.Label>
          <Styled.ContainerInputAndEye>
            <Styled.Input
              type="password"
              id="current-password"
              placeholder="Senha Atual"
              autoComplete="new-password"
              ref={inputCurrentPassword}
              onChange={onChangeInputCurrentPassword}
            />
            <Styled.ContainerSvgEyeOpen
              ref={containerSvgEyeOpenCurrentPassword}
              onClick={onClickSvgEyeCurrentPassword}
              data-testid="container-svg-eye-open">
              <SvgEyeOpen></SvgEyeOpen>
            </Styled.ContainerSvgEyeOpen>
            <Styled.ContainerSvgEyeClose
              ref={containerSvgEyeCloseCurrentPassword}
              onClick={onClickSvgEyeCurrentPassword}
              data-testid="container-svg-eye-close">
              <SvgEyeClose></SvgEyeClose>
            </Styled.ContainerSvgEyeClose>
          </Styled.ContainerInputAndEye>

          <Styled.SpanError ref={SpanErrorCurrentPassword}>
            Informe sua senha atual
          </Styled.SpanError>
          <Styled.SpanError ref={SpanErrorPasswordIncorrect}>Senha Incorreta</Styled.SpanError>
        </Styled.ContainerLabelAndInput>

        <Styled.ContainerNewPasswordAndConfirmNewPassword>
          <Styled.ContainerLabelAndInput>
            <Styled.Label htmlFor="new-password">Nova Senha *</Styled.Label>
            <Styled.ContainerInputAndEye>
              <Styled.Input
                type="password"
                id="new-password"
                placeholder="Senha Atual"
                ref={inputNewPassword}
                onChange={onChangeInputNewPassword}
              />
              <Styled.ContainerSvgEyeOpen
                ref={containerSvgEyeOpenNewPassword}
                onClick={onClickSvgEyeNewPassword}
                data-testid="container-svg-eye-open">
                <SvgEyeOpen></SvgEyeOpen>
              </Styled.ContainerSvgEyeOpen>
              <Styled.ContainerSvgEyeClose
                ref={containerSvgEyeCloseNewPassword}
                onClick={onClickSvgEyeNewPassword}
                data-testid="container-svg-eye-close">
                <SvgEyeClose></SvgEyeClose>
              </Styled.ContainerSvgEyeClose>
            </Styled.ContainerInputAndEye>
            <Styled.Span>A senha deve ter no mí­nimo 6 caracteres</Styled.Span>
            <Styled.SpanError ref={SpanErrorNewPassword}>Informe a nova senha</Styled.SpanError>
          </Styled.ContainerLabelAndInput>

          <Styled.ContainerLabelAndInput>
            <Styled.Label htmlFor="confirm-new-password">Confirme a Nova Senha *</Styled.Label>
            <Styled.ContainerInputAndEye>
              <Styled.Input
                type="password"
                id="confirm-new-password"
                placeholder="Senha Atual"
                ref={inputConfirmNewPassword}
                onChange={onChangeInputConfirmNewPassword}
              />
              <Styled.ContainerSvgEyeOpen
                ref={containerSvgEyeOpenConfirmNewPassword}
                onClick={onClickSvgEyeConfirmNewPassword}
                data-testid="container-svg-eye-open">
                <SvgEyeOpen></SvgEyeOpen>
              </Styled.ContainerSvgEyeOpen>
              <Styled.ContainerSvgEyeClose
                ref={containerSvgEyeCloseConfirmNewPassword}
                onClick={onClickSvgEyeConfirmNewPassword}
                data-testid="container-svg-eye-close">
                <SvgEyeClose></SvgEyeClose>
              </Styled.ContainerSvgEyeClose>
            </Styled.ContainerInputAndEye>
            <Styled.SpanError ref={SpanErrorConfirmNewPassword}>
              Confirme a Nova Senha Deve ser igual a Nova Senha
            </Styled.SpanError>
          </Styled.ContainerLabelAndInput>
        </Styled.ContainerNewPasswordAndConfirmNewPassword>

        <Styled.ContainerSpanWarningAndButton>
          <Styled.Span>* Campos marcados são obrigatórios</Styled.Span>

          <Styled.ContainerButtons>
            <Styled.Button onClick={onClickCancel}>CANCELAR</Styled.Button>
            <Styled.Button onClick={onClickChangePassword}>ALTERAR SENHA</Styled.Button>
          </Styled.ContainerButtons>
        </Styled.ContainerSpanWarningAndButton>
      </Styled.ContainerPasswordAll>
    </Styled.ContainerMain>
  );
};

export default UpdatePasswordMain;
