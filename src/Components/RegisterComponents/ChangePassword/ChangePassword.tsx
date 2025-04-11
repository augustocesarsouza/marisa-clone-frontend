import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import * as Styled from './styled';
import SvgEyeOpen from '../../Svg/SvgEyeOpen/SvgEyeOpen';
import SvgEyeClose from '../../Svg/SvgEyeClose/SvgEyeClose';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';

interface PayloadToken {
  Email: string;
  userID: string;
  exp: number;
}

const ChangePassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const nav = useNavigate();

  useEffect(() => {
    // console.log('Token recebido na URL:', token);
    const tokenHere =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImF1Z3VzdG9jZXNhcnNhbnRhbmE5MEBnbWFpbC5jb20iLCJ1c2VySUQiOiJjNzJlMzk4Zi0yYzM5LTQ1NGMtOGNkNi0zNDA2MThjNDNlOWUiLCJleHAiOjE3NDQxMjcyNjZ9.WMthGHBL4-T5Ec0Z2oBxpR-SzQxcfvw5p5y4T-dStp4';

    const payload = jwtDecode<PayloadToken>(tokenHere);

    // console.log(payload.Email);
    // console.log(payload.exp);

    const now = Date.now() / 1000;
    if (payload.exp < now) {
      // se estiver expirado - avisa usuario que expirou e redireciona ele para login e fala que ele tem que confirmar no email dnv
      console.log('Token expirado');
    } else {
      console.log('Token nao expirado');
    }
  }, [token]);

  const inputCurrentPassword = useRef<HTMLInputElement>(null);
  const inputNewPassword = useRef<HTMLInputElement>(null);

  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('c');
  const [newPassword, setNewPassword] = useState('n');

  const SpanErrorCurrentPassword = useRef<HTMLSpanElement>(null);
  const SpanErrorPasswordIncorrect = useRef<HTMLSpanElement>(null);
  const SpanErrorNewPassword = useRef<HTMLSpanElement>(null);

  const containerSvgEyeOpenCurrentPassword = useRef<HTMLDivElement>(null);
  const containerSvgEyeCloseCurrentPassword = useRef<HTMLDivElement>(null);

  const containerSvgEyeOpenNewPassword = useRef<HTMLDivElement>(null);
  const containerSvgEyeCloseNewPassword = useRef<HTMLDivElement>(null);

  const onChangeInputCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onChangeInputNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onClickSvgEyeCurrentPassword = () => {
    setIsCurrentPasswordVisible((prev) => !prev);

    const input = inputCurrentPassword.current as HTMLInputElement;
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
    setIsNewPasswordVisible((prev) => !prev);

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

  const onClickChangePassword = async () => {
    const obj = {
      currentPassword,
      newPassword,
    };
    console.log(obj);
  };

  return (
    <div>
      <HeaderFullMain></HeaderFullMain>
      <Styled.ContainerMain>
        <Styled.ContainerChildrenMain>
          <Styled.H1>Alterar Senha</Styled.H1>
          <Styled.ContainerPasswordAll>
            <Styled.ContainerLabelAndInput>
              <Styled.Label htmlFor="current-password">Senha Atual *</Styled.Label>
              <Styled.ContainerInputAndEye>
                <Styled.Input
                  type={isCurrentPasswordVisible ? 'text' : 'password'}
                  id="current-password"
                  placeholder="Senha Atual"
                  autoComplete="new-password"
                  ref={inputCurrentPassword}
                  onChange={onChangeInputCurrentPassword}
                />
                <Styled.ContainerSvgEyeOpen
                  ref={containerSvgEyeOpenCurrentPassword}
                  onClick={onClickSvgEyeCurrentPassword}
                  data-testid="container-current-password-svg-eye-open">
                  <SvgEyeOpen></SvgEyeOpen>
                </Styled.ContainerSvgEyeOpen>
                <Styled.ContainerSvgEyeClose
                  ref={containerSvgEyeCloseCurrentPassword}
                  onClick={onClickSvgEyeCurrentPassword}
                  data-testid="container-current-password-svg-eye-close">
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
                    type={isNewPasswordVisible ? 'text' : 'password'}
                    id="new-password"
                    placeholder="Nova Senha"
                    ref={inputNewPassword}
                    onChange={onChangeInputNewPassword}
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
                <Styled.Span>A senha deve ter no mí­nimo 6 caracteres</Styled.Span>
                <Styled.SpanError ref={SpanErrorNewPassword}>Informe a nova senha</Styled.SpanError>
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
      <FooterMain></FooterMain>
    </div>
  );
};

export default ChangePassword;
