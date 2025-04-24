import { useEffect, useState } from 'react';
import * as Styled from './styled';
import { GetUserFromLocalStorage } from '../../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { User } from '../../../../Interfaces/Entity/User.';
import { useNavigate } from 'react-router-dom';
import userService from '../../../../Service/UserService/UserService';
import InfoAboutUser from '../InfoAboutUser/InfoAboutUser';
import { TokenExpiration } from '../../../../TokenValidation/TokenExpiration';

const MyData = () => {
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState('');
  const [onlyYearBirthDate, setOnlyYearBirthDate] = useState('');
  const [cpfString, setCpfString] = useState('');
  const [emailString, setEmailString] = useState('');
  const [telephoneString, setTelephoneString] = useState('');
  const [cellPhoneString, setCellPhoneString] = useState('');
  const nav = useNavigate();

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

    const getInfoUser = async (user: User) => {
      const userId = user.id as string;
      const token = user.token as string;

      const resp = await userService.getByIdInfoUser(userId, token);

      if (resp && resp.isSucess) {
        const user = resp.data as User;
        const userName = user.name as string;
        setUserName(userName);

        if (user.gender === 'f') {
          setGender('Feminino');
        } else if (user.gender === 'm') {
          setGender('Masculino');
        } else if (user.gender === 'n') {
          setGender('Não informar');
        }

        const date = user.birthDate;
        const onlyYearBirthDate = date?.split('T')[0].split('-')[0] as string;
        const onlyYearBirthDateString = `**/**/${onlyYearBirthDate}`;
        setOnlyYearBirthDate(onlyYearBirthDateString);

        const cpfUser = user.cpf as string;
        const cpf = cpfUser[cpfUser.length - 2] + cpfUser[cpfUser.length - 1];
        const cpfString = `***********${cpf}`;
        setCpfString(cpfString);

        const email = user.email as string;
        hideEmail(email);

        const telephoneUser = user.telephone as string;
        const telephone =
          telephoneUser[telephoneUser.length - 2] + telephoneUser[telephoneUser.length - 1];
        const telephoneString = `***********${telephone}`;
        setTelephoneString(telephoneString);

        const cellPhoneUser = user.cellPhone as string;
        const cellPhone =
          cellPhoneUser[cellPhoneUser.length - 2] + cellPhoneUser[cellPhoneUser.length - 1];
        const cellPhoneString = `***********${cellPhone}`;
        setCellPhoneString(cellPhoneString);
      }
    };

    if (user) {
      getInfoUser(user);
    }
  }, [nav]);

  const hideEmail = (email: string) => {
    const atIndex = email.indexOf('@');
    const localPart = email.substring(0, atIndex);
    const domain = email.substring(atIndex);

    const visiblePart = localPart.substring(0, 3);

    let hiddenPart = '';
    for (let i = 3; i < localPart.length; i++) {
      hiddenPart += '*';
    }

    setEmailString(`${visiblePart}${hiddenPart}${domain}`);
  };

  const onClickChangePassword = () => {
    nav('/my-account/update-password');
  };

  const onClickChangeEmail = () => {
    nav('/my-account/update-email');
  };

  const onClickChangeData = () => {
    nav('/my-account/update-profile');
  };

  return (
    <Styled.ContainerMain>
      <Styled.H1>Meu perfil</Styled.H1>

      <InfoAboutUser
        userName={userName}
        gender={gender}
        onlyYearBirthDate={onlyYearBirthDate}
        cpfString={cpfString}
        emailString={emailString}
        telephoneString={telephoneString}
        cellPhoneString={cellPhoneString}
      />

      <Styled.H2Agree>
        Li, compreendi e concordo com as <Styled.SpanLink>Condições Gerais</Styled.SpanLink>,
        inclusive com relação à proteção de dados pessoais, finalidades e hipóteses de tratamento de
        dados.: Sim
      </Styled.H2Agree>

      <Styled.ContainerButtons>
        <Styled.Button onClick={onClickChangePassword}>ALTERAR SENHA</Styled.Button>
        <Styled.Button onClick={onClickChangeEmail}>ATUALIZAR SEU E-MAIL</Styled.Button>
        <Styled.Button onClick={onClickChangeData}>ALTERAR DADOS</Styled.Button>
      </Styled.ContainerButtons>
    </Styled.ContainerMain>
  );
};

export default MyData;
