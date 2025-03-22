import * as Styled from './styled';

interface InfoAboutUserProps {
  userName: string;
  gender: string;
  onlyYearBirthDate: string;
  cpfString: string;
  emailString: string;
  telephoneString: string;
  cellPhoneString: string;
}

const InfoAboutUser = ({
  userName,
  gender,
  onlyYearBirthDate,
  cpfString,
  emailString,
  telephoneString,
  cellPhoneString,
}: InfoAboutUserProps) => {
  return (
    <Styled.ContainerInfoAboutUser>
      <Styled.ContainerInfoUser>
        <Styled.H1>Nome Completo:</Styled.H1>
        <Styled.Span>{userName}</Styled.Span>
      </Styled.ContainerInfoUser>
      <Styled.ContainerInfoUser>
        <Styled.H1>GÊNERO:</Styled.H1>
        <Styled.Span>{gender}</Styled.Span>
      </Styled.ContainerInfoUser>
      <Styled.ContainerInfoUser>
        <Styled.H1>Data de Nascimento:</Styled.H1>
        <Styled.Span>{onlyYearBirthDate}</Styled.Span>
      </Styled.ContainerInfoUser>
      <Styled.ContainerInfoUser>
        <Styled.H1>CPF:</Styled.H1>
        <Styled.Span>{cpfString}</Styled.Span>
      </Styled.ContainerInfoUser>
      <Styled.ContainerInfoUser>
        <Styled.H1>E-mail:</Styled.H1>
        <Styled.Span>{emailString}</Styled.Span>
      </Styled.ContainerInfoUser>
      <Styled.ContainerInfoUser>
        <Styled.H1>Telefone:</Styled.H1>
        <Styled.Span>{telephoneString}</Styled.Span>
      </Styled.ContainerInfoUser>
      <Styled.ContainerInfoUser>
        <Styled.H1>Celular:</Styled.H1>
        <Styled.Span>{cellPhoneString}</Styled.Span>
      </Styled.ContainerInfoUser>
    </Styled.ContainerInfoAboutUser>
  );
};

export default InfoAboutUser;
