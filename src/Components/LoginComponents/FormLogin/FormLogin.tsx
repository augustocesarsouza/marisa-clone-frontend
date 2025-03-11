import { useRef, useState } from 'react';
import * as Styled from './styled';
import SvgEyeOpen from '../../Svg/SvgEyeOpen/SvgEyeOpen';
import SvgEyeClose from '../../Svg/SvgEyeClose/SvgEyeClose';

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
  };

  const onMouseLeaveButtonEnter = () => {
    const button = buttonEnter.current as HTMLButtonElement;

    button.style.opacity = '1';
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
    } else {
      button.style.backgroundColor = '#9f9e9e';
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
    } else {
      button.style.backgroundColor = '#9f9e9e';
    }
  };

  const onClickEnterButton = () => {
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

      const obj = {
        emailCpf,
        password,
      };

      console.log(obj);
    } else {
      console.log('error');
    }
  };

  return (
    <Styled.ContainerLoginMain>
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
            <Styled.Span>Crie sua conta</Styled.Span>
          </Styled.ContainerSpanYetNotHaveAccount>
        </Styled.Form>
      </Styled.ContainerLogin>
    </Styled.ContainerLoginMain>
  );
};

export default FormLogin;
