import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as Styled from './styled';
import { jwtDecode } from 'jwt-decode';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import SvgEyeOpen from '../../Svg/SvgEyeOpen/SvgEyeOpen';
import SvgEyeClose from '../../Svg/SvgEyeClose/SvgEyeClose';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import userService from '../../Service/UserService/UserService';
import { PayloadToken } from '../../Interfaces/Others/PayloadToken';

const ChangePassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const nav = useNavigate();
  const [userId, setUserId] = useState('');
  const [expiredToken, setExpiredToken] = useState(true);
  const [countSeconds, setCountSeconds] = useState(10);

  useEffect(() => {
    let timer = null;
    let timerSetTimeoutTokenNull = null;

    if (!token) {
      timerSetTimeoutTokenNull = setInterval(() => {
        nav('/login', { state: { changePassword: false } });
        return;
      });
    }

    if (token) {
      const payload = jwtDecode<PayloadToken>(token);
      setUserId(payload.userID);

      const now = Date.now() / 1000;
      if (payload.exp < now) {
        setExpiredToken(true);

        timer = setInterval(() => {
          setCountSeconds((prev) => {
            const value = prev - 1;

            if (value < 0) {
              setTimeout(() => {
                nav('/login', { state: { changePassword: false } });
              }, 0);

              return 0;
            }

            return value;
          });
        }, 1000);
      }
    }

    if (timer) {
      return () => clearInterval(timer);
    }

    if (timerSetTimeoutTokenNull) {
      return () => clearInterval(timerSetTimeoutTokenNull);
    }
  }, [nav, token]);

  const inputNewPassword = useRef<HTMLInputElement>(null);
  const inputConfirmNewPassword = useRef<HTMLInputElement>(null);

  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
  const [isConfirmNewPasswordVisible, setIsConfirmNewPasswordVisible] = useState(false);

  const [newPassword, setNewPassword] = useState('c');
  const [confirmNewPassword, setConfirmNewPassword] = useState('n');

  const SpanErrorNewPassword = useRef<HTMLSpanElement>(null);
  const SpanErrorConfirmNewPassword = useRef<HTMLSpanElement>(null);

  const containerSvgEyeOpenCurrentPassword = useRef<HTMLDivElement>(null);
  const containerSvgEyeCloseCurrentPassword = useRef<HTMLDivElement>(null);

  const containerSvgEyeOpenNewPassword = useRef<HTMLDivElement>(null);
  const containerSvgEyeCloseNewPassword = useRef<HTMLDivElement>(null);

  const onChangeInputNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    setNewPassword(inputValue);

    if (SpanErrorNewPassword === null) return;
    const spanNewPassword = SpanErrorNewPassword.current as HTMLSpanElement;
    const isValidInputCurrentPassword = validateNewPassword(inputValue);

    if (isValidInputCurrentPassword) {
      spanNewPassword.style.color = 'transparent';
      input.style.backgroundColor = '#fff';
    } else {
      spanNewPassword.style.color = 'red';
      input.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    }

    const inputConfirmNewPasswordHere = inputConfirmNewPassword.current as HTMLInputElement;
    const inputValueConfirmNewPassword = inputConfirmNewPasswordHere.value;

    const isValidInputConfirmNewPassword = validateConfirmNewPassword(inputValueConfirmNewPassword);
    const spanErrorConfirmNewPasswordHere = SpanErrorConfirmNewPassword.current as HTMLSpanElement;

    if (isValidInputConfirmNewPassword) {
      inputConfirmNewPasswordHere.style.backgroundColor = '#fff';
      spanErrorConfirmNewPasswordHere.style.color = 'transparent';
    } else {
      inputConfirmNewPasswordHere.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
      spanErrorConfirmNewPasswordHere.style.color = 'red';
    }
  };

  const onChangeInputConfirmNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;

    setConfirmNewPassword(inputValue);

    if (SpanErrorConfirmNewPassword === null) return;
    const span = SpanErrorConfirmNewPassword.current as HTMLSpanElement;

    const isValidInputConfirmNewPassword = validateConfirmNewPassword(inputValue);

    if (isValidInputConfirmNewPassword) {
      input.style.backgroundColor = '#fff';
      span.style.color = 'transparent';
    } else {
      span.style.color = 'red';
      input.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    }
  };

  const validateConfirmNewPassword = (inputValueConfirmNewPassword: string) => {
    const input = inputNewPassword.current as HTMLInputElement;
    const inputValueNewPassword = input.value;
    return inputValueConfirmNewPassword === inputValueNewPassword;
  };

  const onClickSvgEyeCurrentPassword = () => {
    setIsCurrentPasswordVisible((prev) => !prev);

    const input = inputConfirmNewPassword.current as HTMLInputElement;
    const containerSvgEyeOpen = containerSvgEyeOpenCurrentPassword.current as HTMLDivElement;
    const containerSvgEyeClose = containerSvgEyeCloseCurrentPassword.current as HTMLDivElement;

    if (input.type === 'text') {
      containerSvgEyeOpen.style.display = 'flex';
      containerSvgEyeClose.style.display = 'none';
    } else if (input.type === 'password') {
      containerSvgEyeOpen.style.display = 'none';
      containerSvgEyeClose.style.display = 'flex';
    }
  };

  const onClickSvgEyeNewPassword = () => {
    setIsConfirmNewPasswordVisible((prev) => !prev);

    const input = inputNewPassword.current as HTMLInputElement;
    const containerSvgEyeOpen = containerSvgEyeOpenNewPassword.current as HTMLDivElement;
    const containerSvgEyeClose = containerSvgEyeCloseNewPassword.current as HTMLDivElement;

    if (input.type === 'text') {
      containerSvgEyeOpen.style.display = 'flex';
      containerSvgEyeClose.style.display = 'none';
    } else if (input.type === 'password') {
      containerSvgEyeOpen.style.display = 'none';
      containerSvgEyeClose.style.display = 'flex';
    }
  };

  const onClickCancel = () => {
    nav('/my-account');
  };

  const validateNewPassword = (inputValue: string) => {
    return inputValue.length > 5;
  };

  const onClickChangePassword = async () => {
    const inputNewPasswordInner = inputNewPassword.current as HTMLInputElement;
    const inputValueNewPassword = inputNewPasswordInner.value;

    const spanErrorNewPasswordHere = SpanErrorNewPassword.current as HTMLSpanElement;

    const isValidInputNewPassword = validateNewPassword(inputValueNewPassword);

    let canSendChangePasswordNewPassword = false;
    let canSendChangePasswordConfirmNewPassword = false;

    if (isValidInputNewPassword) {
      spanErrorNewPasswordHere.style.color = 'transparent';
      inputNewPasswordInner.style.backgroundColor = '#fff';
      canSendChangePasswordNewPassword = true;
    } else {
      spanErrorNewPasswordHere.style.color = 'red';
      inputNewPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
      canSendChangePasswordNewPassword = false;
    }

    const inputConfirmNewPasswordInner = inputConfirmNewPassword.current as HTMLInputElement;
    const spanErrorConfirmNewPasswordHere = SpanErrorConfirmNewPassword.current as HTMLSpanElement;

    if (newPassword === confirmNewPassword) {
      inputConfirmNewPasswordInner.style.backgroundColor = '#fff';
      spanErrorConfirmNewPasswordHere.style.color = 'transparent';
      canSendChangePasswordConfirmNewPassword = true;
    } else {
      spanErrorConfirmNewPasswordHere.style.color = 'red';
      inputConfirmNewPasswordInner.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
      canSendChangePasswordConfirmNewPassword = false;
    }

    if (canSendChangePasswordNewPassword && canSendChangePasswordConfirmNewPassword) {
      const obj = {
        newPassword,
        userId,
      };

      const resp = await userService.updateChangePasswordUserToken(obj);

      if (resp === null) return;

      if (resp.isSucess) {
        nav('/login', { state: { changePassword: true } });
      }
    } else {
      console.log('nao pode');
    }
  };

  return (
    <div>
      <HeaderFullMain></HeaderFullMain>
      <Styled.ContainerMain>
        <Styled.ContainerChildrenMain>
          <Styled.H1>Alterar Senha</Styled.H1>
          <Styled.ContainerPasswordAll>
            <Styled.ContainerLabelAndInput>
              <Styled.Label htmlFor="new-password">Nova Senha *</Styled.Label>
              <Styled.ContainerInputAndEye>
                <Styled.Input
                  type={isCurrentPasswordVisible ? 'text' : 'password'}
                  id="new-password"
                  placeholder="Nova Senha"
                  autoComplete="new-password"
                  ref={inputNewPassword}
                  onChange={onChangeInputNewPassword}
                />
                <Styled.ContainerSvgEyeOpen
                  ref={containerSvgEyeOpenCurrentPassword}
                  onClick={onClickSvgEyeCurrentPassword}
                  data-testid="container-new-password-svg-eye-open">
                  <SvgEyeOpen></SvgEyeOpen>
                </Styled.ContainerSvgEyeOpen>
                <Styled.ContainerSvgEyeClose
                  ref={containerSvgEyeCloseCurrentPassword}
                  onClick={onClickSvgEyeCurrentPassword}
                  data-testid="container-new-password-svg-eye-close">
                  <SvgEyeClose></SvgEyeClose>
                </Styled.ContainerSvgEyeClose>
              </Styled.ContainerInputAndEye>

              <Styled.SpanError ref={SpanErrorNewPassword}>
                A senha deve ter no mí­nimo 6 caracteres
              </Styled.SpanError>
            </Styled.ContainerLabelAndInput>

            <Styled.ContainerNewPasswordAndConfirmNewPassword>
              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="new-password">Confirme a Nova Senha *</Styled.Label>
                <Styled.ContainerInputAndEye>
                  <Styled.Input
                    type={isConfirmNewPasswordVisible ? 'text' : 'password'}
                    id="new-password"
                    placeholder="Confirme a Nova Senha"
                    ref={inputConfirmNewPassword}
                    onChange={onChangeInputConfirmNewPassword}
                  />
                  <Styled.ContainerSvgEyeOpen
                    ref={containerSvgEyeOpenNewPassword}
                    onClick={onClickSvgEyeNewPassword}
                    data-testid="container-new-password-svg-eye-open">
                    <SvgEyeOpen></SvgEyeOpen>
                  </Styled.ContainerSvgEyeOpen>
                  <Styled.ContainerSvgEyeClose
                    ref={containerSvgEyeCloseNewPassword}
                    onClick={onClickSvgEyeNewPassword}
                    data-testid="container-new-password-svg-eye-close">
                    <SvgEyeClose></SvgEyeClose>
                  </Styled.ContainerSvgEyeClose>
                </Styled.ContainerInputAndEye>
                <Styled.SpanError ref={SpanErrorConfirmNewPassword}>
                  "Confirme a Nova Senha" deve ser igual a "Nova Senha"
                </Styled.SpanError>
              </Styled.ContainerLabelAndInput>
            </Styled.ContainerNewPasswordAndConfirmNewPassword>

            <Styled.ContainerSpanWarningAndButton>
              <Styled.ContainerButtons>
                <Styled.Button onClick={onClickCancel}>CANCELAR</Styled.Button>
                <Styled.Button onClick={onClickChangePassword}>ALTERAR SENHA</Styled.Button>
              </Styled.ContainerButtons>
            </Styled.ContainerSpanWarningAndButton>
          </Styled.ContainerPasswordAll>
        </Styled.ContainerChildrenMain>
      </Styled.ContainerMain>

      {expiredToken && (
        <Styled.ContainerExpiredTokenMain>
          <Styled.ContainerExpiredTokenChildren>
            <Styled.H1>Seu Token Expirou</Styled.H1>
            <Styled.Span>Você sera redirecionado para login em {countSeconds}s</Styled.Span>
          </Styled.ContainerExpiredTokenChildren>
        </Styled.ContainerExpiredTokenMain>
      )}
      <FooterMain></FooterMain>
    </div>
  );
};

export default ChangePassword;
