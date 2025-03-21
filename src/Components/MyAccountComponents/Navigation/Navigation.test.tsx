import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';

describe('Navigation', () => {
  test('should render my profile ', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Meu perfil/i });
    expect(header).toBeInTheDocument();
  });

  test('should render span my data', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const span = screen.getByText('Meus dados');
    expect(span).toBeInTheDocument();
  });

  test('should render span change data', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const span = screen.getByText('Alterar dados');
    expect(span).toBeInTheDocument();
  });

  test('should render span change password', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const span = screen.getByText('Alterar Senha');
    expect(span).toBeInTheDocument();
  });

  test('should render span update your email', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const span = screen.getByText('Atualizar Seu E-mail');
    expect(span).toBeInTheDocument();
  });

  test('should render header addresses', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Endereços/i });
    expect(header).toBeInTheDocument();
  });

  test('should render header order history', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Historico de pedidos/i });
    expect(header).toBeInTheDocument();
  });

  test('should render header refund and exchange vouncher', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Reembolso e vale troca/i });
    expect(header).toBeInTheDocument();
  });

  test('should render header returns', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Devoluções/i });
    expect(header).toBeInTheDocument();
  });

  test('should render header LGPD information', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Informações LGPD/i });
    expect(header).toBeInTheDocument();
  });

  test('should render span my data LGPD Information', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const span = screen.getByText('Meus Dados');
    expect(span).toBeInTheDocument();
  });

  test('should render span My Consents LGPD Information', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const span = screen.getByText('Meus Consentimentos');
    expect(span).toBeInTheDocument();
  });
});
