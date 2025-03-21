import { useRef, useState } from 'react';
import * as Styled from './styled';
import SvgEyeOpen from '../../Svg/SvgEyeOpen/SvgEyeOpen';
import SvgEyeClose from '../../Svg/SvgEyeClose/SvgEyeClose';
import { useNavigate } from 'react-router-dom';
import userService from '../../Service/UserService/UserService';
import SvgX from '../../Svg/SvgX/SvgX';
import CryptoJS from 'crypto-js';

const FormLogin = () => {
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputEmailOrCpf = useRef<HTMLInputElement>(null);

  const containerSvgEyeOpen = useRef<HTMLDivElement>(null);
  const containerSvgEyeClose = useRef<HTMLDivElement>(null);

  const spanErrorEmailCpf = useRef<HTMLSpanElement>(null);
  const spanErrorPassword = useRef<HTMLSpanElement>(null);

  const buttonEnter = useRef<HTMLButtonElement>(null);
  const ContainerSpanForgotYourPassword = useRef<HTMLDivElement>(null);

  const [errorInputEmailCpf, setErrorInputEmailCpf] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [passwordIsWrong, setPasswordIsWrong] = useState(false);

  const nav = useNavigate();

  const onClickSvgEye = () => {
    const input = inputPassword.current as HTMLInputElement;
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

  const onMouseEnterButtonEnter = () => {
    const button = buttonEnter.current as HTMLButtonElement;

    button.style.opacity = '0.8';
    // button.style.cursor = 'not-allowed';
  };

  const onMouseLeaveButtonEnter = () => {
    const button = buttonEnter.current as HTMLButtonElement;

    button.style.opacity = '1';
    // button.style.cursor = 'pointer';
  };

  const onChangeInputEmailCpf = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    let valueErrorEmailCpf = false;

    const spanErrorFirst = spanErrorEmailCpf.current as HTMLInputElement;
    const inputEmailOrCpfCurrent = inputEmailOrCpf.current as HTMLInputElement;

    if (input.value.length < 1) {
      setErrorInputEmailCpf(false);
      valueErrorEmailCpf = false;

      spanErrorFirst.style.color = 'red';
      inputEmailOrCpfCurrent.style.backgroundColor = 'rgb(197 49 49 / 20%)';
    } else {
      setErrorInputEmailCpf(true);
      valueErrorEmailCpf = true;

      spanErrorFirst.style.color = 'transparent';
      inputEmailOrCpfCurrent.style.backgroundColor = '#fff';
    }

    const button = buttonEnter.current as HTMLButtonElement;

    if (valueErrorEmailCpf && errorPassword) {
      button.style.backgroundColor = '#ec008c';
      button.style.cursor = 'pointer';
    } else {
      button.style.backgroundColor = '#9f9e9e';
      button.style.cursor = 'not-allowed';
    }
  };

  const onChangeInputPassword = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    let valueErrorPassword = false;

    const spanErrorSecond = spanErrorPassword.current as HTMLInputElement;
    const inputPasswordCurrent = inputPassword.current as HTMLInputElement;
    const containerSpanForgot = ContainerSpanForgotYourPassword.current as HTMLDivElement;

    if (input.value.length < 1) {
      setErrorPassword(false);
      valueErrorPassword = false;

      containerSpanForgot.style.marginTop = '20px';
      spanErrorSecond.style.color = 'red';
      inputPasswordCurrent.style.backgroundColor = 'rgb(197 49 49 / 20%)';
    } else {
      setErrorPassword(true);
      valueErrorPassword = true;

      containerSpanForgot.style.marginTop = '10px';
      spanErrorSecond.style.color = 'transparent';
      inputPasswordCurrent.style.backgroundColor = '#fff';
    }

    const button = buttonEnter.current as HTMLButtonElement;

    if (valueErrorPassword && errorInputEmailCpf) {
      button.style.backgroundColor = '#ec008c';
      button.style.cursor = 'pointer';
    } else {
      button.style.backgroundColor = '#9f9e9e';
      button.style.cursor = 'not-allowed';
    }
  };

  const onClickEnterButton = async () => {
    const inputEmailOrCpfCurrent = inputEmailOrCpf.current as HTMLInputElement;
    const inputPasswordCurrent = inputPassword.current as HTMLInputElement;

    const spanErrorFirst = spanErrorEmailCpf.current as HTMLInputElement;
    const spanErrorSecond = spanErrorPassword.current as HTMLInputElement;

    if (errorInputEmailCpf) {
      spanErrorFirst.style.color = 'transparent';
    } else {
      spanErrorFirst.style.color = 'red';
      inputEmailOrCpfCurrent.style.backgroundColor = 'rgb(197 49 49 / 20%)';
    }

    if (errorPassword) {
      spanErrorSecond.style.color = 'transparent';
    } else {
      spanErrorSecond.style.color = 'red';
      inputPasswordCurrent.style.backgroundColor = 'rgb(197 49 49 / 20%)';
    }

    if (errorInputEmailCpf && errorPassword) {
      const emailCpf = inputEmailOrCpfCurrent.value;
      const password = inputPasswordCurrent.value;

      const resp = await userService.login(emailCpf, password);

      if (resp === null) return;

      const passwordIsCorrect = resp.data.passwordIsCorrect;

      if (!passwordIsCorrect) {
        setPasswordIsWrong(true);
      }
      // ver se vai redirecionar quando loggin estiver certo
      if (passwordIsCorrect) {
        setPasswordIsWrong(false);
        const secretKey = import.meta.env.VITE__APP_SECRET_KEY_USER;
        const userDTO = resp.data.userDTO;

        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(userDTO), secretKey).toString();

        localStorage.setItem('user', encrypted);

        nav('/my-account', { state: { from: window.location.pathname } });
      }
    } else {
      console.log('error');
    }
  };

  const onClickCreateAccount = () => {
    if (typeof window === 'undefined') return;
    nav('/register');
    window.location.reload();
  };

  const onClickExit = () => {
    setPasswordIsWrong(false);
  };

  return (
    <Styled.ContainerLoginMain>
      {passwordIsWrong && (
        <Styled.ContainerSpanErrorX>
          <Styled.SpanEmailOrPasswordInvalid>
            E-mail ou senha inválidos
          </Styled.SpanEmailOrPasswordInvalid>
          <Styled.ContainerSvgX onClick={onClickExit}>
            <SvgX />
          </Styled.ContainerSvgX>
        </Styled.ContainerSpanErrorX>
      )}
      <Styled.ContainerLogin>
        <Styled.H1>Faça seu Login</Styled.H1>

        <Styled.Form>
          <Styled.ContainerLabelInput>
            <Styled.Label htmlFor="input-email-or-cpf">E-mail ou CPF*</Styled.Label>
            <Styled.Input
              type="text"
              id="input-email-or-cpf"
              placeholder="Informe e-mail ou CPF"
              ref={inputEmailOrCpf}
              onChange={onChangeInputEmailCpf}
              autoComplete="on"
            />
            <Styled.SpanError ref={spanErrorEmailCpf}>Informe E-mail ou CPF</Styled.SpanError>
          </Styled.ContainerLabelInput>
          <Styled.ContainerLabelInput>
            <Styled.Label htmlFor="input-email-or-cpf">Senha *</Styled.Label>
            <Styled.Input
              type="password"
              id="input-email-or-cpf"
              placeholder="Informe senha"
              ref={inputPassword}
              onChange={onChangeInputPassword}
              autoComplete="new-password"
            />
            <Styled.SpanError ref={spanErrorPassword}>Informe Senha</Styled.SpanError>
            <Styled.ContainerSvgEyeOpen
              ref={containerSvgEyeOpen}
              onClick={onClickSvgEye}
              data-testid="container-svg-eye-open">
              <SvgEyeOpen></SvgEyeOpen>
            </Styled.ContainerSvgEyeOpen>
            <Styled.ContainerSvgEyeClose
              ref={containerSvgEyeClose}
              onClick={onClickSvgEye}
              data-testid="container-svg-eye-close">
              <SvgEyeClose></SvgEyeClose>
            </Styled.ContainerSvgEyeClose>
          </Styled.ContainerLabelInput>
          <Styled.ContainerSpanForgotYourPassword ref={ContainerSpanForgotYourPassword}>
            <Styled.Span>Esqueceu sua senha?</Styled.Span>
          </Styled.ContainerSpanForgotYourPassword>

          <Styled.ButtonEnter
            type="button"
            ref={buttonEnter}
            onClick={onClickEnterButton}
            onMouseEnter={onMouseEnterButtonEnter}
            onMouseLeave={onMouseLeaveButtonEnter}>
            ENTRAR
          </Styled.ButtonEnter>

          <Styled.ContainerSpanYetNotHaveAccount>
            <Styled.Span>Ainda não tem um cadastro?</Styled.Span>
            <Styled.Span onClick={onClickCreateAccount}>Crie sua conta</Styled.Span>
          </Styled.ContainerSpanYetNotHaveAccount>
        </Styled.Form>
      </Styled.ContainerLogin>
    </Styled.ContainerLoginMain>
  );
};

export default FormLogin;
