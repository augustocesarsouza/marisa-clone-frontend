import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { GetUserFromLocalStorage } from '../../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import ModalQuestionMark from '../ModalQuestionMark/ModalQuestionMark';
import { TokenExpiration } from '../../../../TokenValidation/TokenExpiration';

const UpdateEmailMain = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');

  const inputEmail = useRef<HTMLInputElement>(null);

  useEffect(() => {
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

    if (user && user.email) {
      const emailHere = user.email;
      const email = maskEmail(emailHere);
      setEmail(email);
    }
  }, [nav]);

  const maskEmail = (email: string): string => {
    const [username, domain] = email.split('@');
    if (username.length <= 4) return `${username}@${domain}`;

    const visibleEnd = Math.min(14, Math.max(4, Math.ceil(username.length / 2)));
    const hiddenPart = '*'.repeat(username.length - (1 + visibleEnd));

    return `${username[0]}${hiddenPart}${username.slice(-visibleEnd)}@${domain}`;
  };

  const onChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const input = e.target as HTMLInputElement;
    const inputValue = input.value;
    console.log(inputValue);
  };

  const [questionMarkClicked, setQuestionMarkClicked] = useState(false);

  const onClickQuestionMark = () => {
    setQuestionMarkClicked((prev) => !prev);
  };

  return (
    <Styled.ContainerMain>
      <Styled.H1>Alterar E-mail do Cadastro</Styled.H1>

      <Styled.ContainerLabelAndInput>
        <Styled.Label htmlFor="registered-email">E-mail cadastrado *</Styled.Label>
        <Styled.ContainerInputAndQuestionMark>
          <Styled.ContainerInputAndEye>
            <Styled.Input
              id="registered-email"
              placeholder={email}
              ref={inputEmail}
              onChange={onChangeInputEmail}
            />
          </Styled.ContainerInputAndEye>

          <Styled.ContainerImgQuestionMark onClick={onClickQuestionMark}>
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1742914067/imgs-backend-frontend-marisa/frontend/question_mark_gzk71i.webp"
              alt="img-question-mark"
            />
          </Styled.ContainerImgQuestionMark>
        </Styled.ContainerInputAndQuestionMark>
      </Styled.ContainerLabelAndInput>

      {questionMarkClicked && <ModalQuestionMark />}
    </Styled.ContainerMain>
  );
};

export default UpdateEmailMain;
