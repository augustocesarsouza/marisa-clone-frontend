import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import MyPerfilMain from './MyPerfilMain';
import { ContextMyAccount } from '../../Contexts/ContextMyAccount';
import { User } from '../../../Interfaces/Entity/User.';

describe('MyPerfilMain', () => {
  test('should render header hello and name user', () => {
    const user: User = {
      id: '',
      name: 'Augusto Cesar',
      email: '',
      birthDate: '',
      cpf: '',
      gender: '',
      cellPhone: '',
      telephone: '',
      passwordHash: '',
      salt: '',
      userImage: '',
      token: '',
      tokenForCreation: 0,
      password: '',
      birthDateString: '',
    };
    const mockContextValue = {
      user: user,
    };

    render(
      <ContextMyAccount.Provider value={mockContextValue}>
        <MyPerfilMain />
      </ContextMyAccount.Provider>
    );

    const name = user.name?.split(' ')[0];

    const header = screen.getByTestId('header-hello-user');
    expect(header.textContent).toBe(`Olá, ${name}`);

    expect.assertions(1);
  });

  test('should render span welcome to your area', () => {
    render(<MyPerfilMain />);

    const span = screen.getByText(
      'Seja bem vindo a sua área. Nesse espaço você poderá editar e visualizar todas as informações relacionadas ao seu cadastro.'
    );
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render button change password', () => {
    render(<MyPerfilMain />);

    const button = screen.getByRole('button', { name: 'ALTERAR SENHA' });
    expect(button).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render button update your email', () => {
    render(<MyPerfilMain />);

    const button = screen.getByRole('button', { name: 'ATUALIZAR SEU E-MAIL' });
    expect(button).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render button change date', () => {
    render(<MyPerfilMain />);

    const button = screen.getByRole('button', { name: 'ALTERAR DADOS' });
    expect(button).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render header last orders', () => {
    render(<MyPerfilMain />);

    const header = screen.getByText('Últimos pedidos realizados na Marisa');
    expect(header).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render th number order', () => {
    render(<MyPerfilMain />);

    const th = screen.getByText('Nº do pedido');
    expect(th).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render th order date', () => {
    render(<MyPerfilMain />);

    const th = screen.getByText('Data do pedido');
    expect(th).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render th order value', () => {
    render(<MyPerfilMain />);

    const th = screen.getByText('Valor do pedido');
    expect(th).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render th payment method', () => {
    render(<MyPerfilMain />);

    const th = screen.getByText('Forma de pagamento');
    expect(th).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render th Status', () => {
    render(<MyPerfilMain />);

    const th = screen.getByText('Status');
    expect(th).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render th there are no orders', () => {
    render(<MyPerfilMain />);

    const th = screen.getByText('Não há pedidos.');
    expect(th).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render the title "Registered Addresses"', () => {
    render(<MyPerfilMain />);

    // Verifica se o título está presente
    const titleElement = screen.getByText('Endereços Cadastrados');
    expect(titleElement).toBeInTheDocument();
  });

  test('should render a button with text "there is no registered address"', () => {
    render(<MyPerfilMain />);

    const buttonElement = screen.getByRole('button', { name: /não há endereço cadastrado\./i });
    expect(buttonElement).toBeInTheDocument();
  });
});
