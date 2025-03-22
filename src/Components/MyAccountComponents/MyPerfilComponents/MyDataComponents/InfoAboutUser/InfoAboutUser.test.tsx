import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import InfoAboutUser from './InfoAboutUser';

describe('InfoAboutUser', () => {
  test('should render header name full and name user span', () => {
    const userName = 'Augusto Cesar';

    render(
      <InfoAboutUser
        userName={userName}
        gender=""
        onlyYearBirthDate=""
        cpfString=""
        emailString=""
        telephoneString=""
        cellPhoneString=""
      />
    );

    const header = screen.getByRole('heading', { name: /Nome Completo:/i });
    expect(header).toBeInTheDocument();

    const span = screen.getByText(userName);
    expect(span).toBeInTheDocument();
  });

  test('should render header and gender gender', () => {
    const genderUser = 'gender123';

    render(
      <InfoAboutUser
        userName=""
        gender={genderUser}
        onlyYearBirthDate=""
        cpfString=""
        emailString=""
        telephoneString=""
        cellPhoneString=""
      />
    );

    const header = screen.getByRole('heading', { name: /GÊNERO:/i });
    expect(header).toBeInTheDocument();

    const span = screen.getByText(genderUser);
    expect(span).toBeInTheDocument();
  });

  test('should render header and span birthdate', () => {
    const onlyYearBirthDate = 'onlyYearBirthDate123';

    render(
      <InfoAboutUser
        userName=""
        gender=""
        onlyYearBirthDate={onlyYearBirthDate}
        cpfString=""
        emailString=""
        telephoneString=""
        cellPhoneString=""
      />
    );

    const header = screen.getByRole('heading', { name: /Data de Nascimento:/i });
    expect(header).toBeInTheDocument();

    const span = screen.getByText(onlyYearBirthDate);
    expect(span).toBeInTheDocument();
  });

  test('should render header and span cpf', () => {
    const cpfString = 'cpfString123';

    render(
      <InfoAboutUser
        userName=""
        gender=""
        onlyYearBirthDate=""
        cpfString={cpfString}
        emailString=""
        telephoneString=""
        cellPhoneString=""
      />
    );

    const header = screen.getByRole('heading', { name: /CPF:/i });
    expect(header).toBeInTheDocument();

    const span = screen.getByText(cpfString);
    expect(span).toBeInTheDocument();
  });

  test('should render header and span email', () => {
    const emailString = 'emailString123';

    render(
      <InfoAboutUser
        userName=""
        gender=""
        onlyYearBirthDate=""
        cpfString=""
        emailString={emailString}
        telephoneString=""
        cellPhoneString=""
      />
    );

    const header = screen.getByRole('heading', { name: /E-mail:/i });
    expect(header).toBeInTheDocument();

    const span = screen.getByText(emailString);
    expect(span).toBeInTheDocument();
  });

  test('should render header and span telephone', () => {
    const telephoneString = 'telephoneString123';

    render(
      <InfoAboutUser
        userName=""
        gender=""
        onlyYearBirthDate=""
        cpfString=""
        emailString=""
        telephoneString={telephoneString}
        cellPhoneString=""
      />
    );

    const header = screen.getByRole('heading', { name: /Telefone:/i });
    expect(header).toBeInTheDocument();

    const span = screen.getByText(telephoneString);
    expect(span).toBeInTheDocument();
  });

  test('should render header and span cell-phone', () => {
    const cellPhoneString = 'cellPhoneString123';

    render(
      <InfoAboutUser
        userName=""
        gender=""
        onlyYearBirthDate=""
        cpfString=""
        emailString=""
        telephoneString=""
        cellPhoneString={cellPhoneString}
      />
    );

    const header = screen.getByRole('heading', { name: /Celular:/i });
    expect(header).toBeInTheDocument();

    const span = screen.getByText(cellPhoneString);
    expect(span).toBeInTheDocument();
  });
});
