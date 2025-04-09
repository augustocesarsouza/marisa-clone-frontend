import { useRef, useState } from 'react';
import * as Styled from './styled';
import SvgEyeOpen from '../../Svg/SvgEyeOpen/SvgEyeOpen';
import SvgEyeClose from '../../Svg/SvgEyeClose/SvgEyeClose';
import { useNavigate } from 'react-router-dom';
import userService from '../../Service/UserService/UserService';
import SvgX from '../../Svg/SvgX/SvgX';
import CryptoJS from 'crypto-js';
import SvgEmail from '../../Svg/SvgEmail/SvgEmail';

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

  const refButtonSend = useRef<HTMLButtonElement>(null);
  const refInputEmail = useRef<HTMLInputElement>(null);
  const refContainerInputEmail = useRef<HTMLDivElement>(null);
  const refContainerChildredModal = useRef<HTMLDivElement>(null);

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
        console.log(userDTO.token);

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

  const [showModalForgotPassword, setShowModalForgotPassword] = useState(false);
  const [errorEmailUser, setErrorEmailUser] = useState(false);

  const onClickForgotPassword = () => {
    document.body.style.overflow = 'hidden';

    setShowModalForgotPassword(true);
  };

  const onClickModalForgotPassword = () => {
    document.body.style.overflow = 'auto';

    setShowModalForgotPassword(false);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;

    const value = input.value;
    const buttonSend = refButtonSend.current as HTMLButtonElement;
    const containerInput = refContainerInputEmail.current as HTMLInputElement;

    if (value.length > 0) {
      buttonSend.style.backgroundColor = '#ec008c';
    } else {
      buttonSend.style.backgroundColor = '#9f9e9e';
    }

    if (value.includes('@gmail')) {
      setErrorEmailUser(false);
      containerInput.style.borderColor = '#bdbdbd';
    }
  };

  const onMouseEnterButtonSend = () => {
    const input = refInputEmail.current as HTMLInputElement;
    const value = input.value;

    if (value.length > 0) {
      const buttonSend = refButtonSend.current as HTMLButtonElement;
      buttonSend.style.opacity = '0.8';
    }
  };

  const onMouseLeaveButtonSend = () => {
    const input = refInputEmail.current as HTMLInputElement;
    const value = input.value;

    if (value.length > 0) {
      const buttonSend = refButtonSend.current as HTMLButtonElement;
      buttonSend.style.opacity = '1';
    }
  };

  const [emailUser, setEmailUser] = useState('');

  const [showFillEmailToSendToken, setShowFillEmailToSendToken] = useState(true);
  const [showCircleLoading, setShowCircleLoading] = useState(false);
  const [showThatEmailIsIncorrect, setShowThatEmailIsIncorrect] = useState(false);
  const [showThatWasSentToken, setShowThatWasSentToken] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onClickButtonSend = async () => {
    const input = refInputEmail.current as HTMLInputElement;
    const containerInput = refContainerInputEmail.current as HTMLInputElement;
    const containerChildredModal = refContainerChildredModal.current as HTMLDivElement;
    const value = input.value;

    let canSendTokenEmail = false;

    if (value.length > 0 && !value.includes('@gmail')) {
      containerInput.style.borderColor = '#c53131';

      setErrorEmailUser(true);
      canSendTokenEmail = false;
    }

    if (value.length > 0 && value.includes('@gmail')) {
      canSendTokenEmail = true;
    }

    if (canSendTokenEmail) {
      setShowCircleLoading(true);

      setEmailUser(value);
      const resultSend = await userService.SendTokenChangePassword(value);

      if (resultSend === null) return;

      const data = resultSend.data;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (!data.tokenSentEmail) {
          containerChildredModal.style.height = '122px';

          setShowCircleLoading(false);
          setShowFillEmailToSendToken(false);

          setShowThatEmailIsIncorrect(true);
          containerInput.style.borderColor = '#c53131';
          setErrorEmailUser(true);
        }

        if (data.tokenSentEmail) {
          containerChildredModal.style.height = '140px';

          setShowFillEmailToSendToken(false);
          setShowCircleLoading(false);
          setShowThatEmailIsIncorrect(false);
          setShowThatWasSentToken(true);
        }
      }, 1000);
    }
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
            <Styled.Span onClick={onClickForgotPassword}>Esqueceu sua senha?</Styled.Span>
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

      {showModalForgotPassword && (
        <Styled.ModalForgotPassword>
          <Styled.ContainerChildredModal ref={refContainerChildredModal}>
            <Styled.ContainerHeaderModalForgotPassword>
              <Styled.H1>Esqueceu sua senha? Não se preocupe.</Styled.H1>
              <Styled.ContainerSvgCloseModal onClick={onClickModalForgotPassword}>
                <SvgX />
              </Styled.ContainerSvgCloseModal>
            </Styled.ContainerHeaderModalForgotPassword>

            {showFillEmailToSendToken && (
              <Styled.ContainerSpanAndInputEmail>
                <Styled.ContainerSpansInfoForgotPassword>
                  <Styled.Span>
                    Informe o e-mail cadastrado que enviaremos as instruções para redefinir sua
                    senha.
                  </Styled.Span>
                  <Styled.Span>
                    Se não tiver acesso a esse email, entre em contato com nosso{' '}
                    <Styled.SpanSac>SAC (11) 3383-7222</Styled.SpanSac> ou acesse o nosso{' '}
                    <Styled.SpanSacHighlight>FAQ</Styled.SpanSacHighlight> para demais dúvidas.
                  </Styled.Span>
                </Styled.ContainerSpansInfoForgotPassword>
                <Styled.ContainerInputUserAndButtonMain>
                  <Styled.ContainerInputUserAndButton>
                    <Styled.ContainerInputEmail ref={refContainerInputEmail}>
                      <Styled.Input
                        placeholder="Digite aqui seu e-mail"
                        ref={refInputEmail}
                        onChange={onChangeEmail}
                      />
                      <SvgEmail />
                    </Styled.ContainerInputEmail>

                    <Styled.Button
                      ref={refButtonSend}
                      onMouseEnter={onMouseEnterButtonSend}
                      onMouseLeave={onMouseLeaveButtonSend}
                      onClick={onClickButtonSend}>
                      {!showCircleLoading && <Styled.Span>Enviar</Styled.Span>}
                      {showCircleLoading && <Styled.SpanCircleLoading />}
                    </Styled.Button>
                  </Styled.ContainerInputUserAndButton>

                  {errorEmailUser && (
                    <Styled.SpanErrorEmailChangePassword>
                      Por favor, informe um e-mail válido.
                    </Styled.SpanErrorEmailChangePassword>
                  )}
                </Styled.ContainerInputUserAndButtonMain>
              </Styled.ContainerSpanAndInputEmail>
            )}

            {showThatEmailIsIncorrect && (
              <Styled.ContainerEmailIsIncorrect>
                <Styled.Span>
                  {`Endereço de E-mail "${emailUser}" não encontrado. Favor preencher novamente.`}
                </Styled.Span>
              </Styled.ContainerEmailIsIncorrect>
            )}

            {showThatWasSentToken && (
              <Styled.ContainerEmailIsCorrect>
                <Styled.Span>
                  {`Em alguns minutos, enviaremos um e-mail para o endereço "${emailUser}" com um link para que altere sua senha.`}
                </Styled.Span>
              </Styled.ContainerEmailIsCorrect>
            )}
          </Styled.ContainerChildredModal>
        </Styled.ModalForgotPassword>
      )}
    </Styled.ContainerLoginMain>
  );
};

export default FormLogin;
