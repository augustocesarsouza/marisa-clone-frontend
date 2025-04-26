import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';

describe('Navigation', () => {
  test('should render my profile ', () => {
    const fn = jest.fn();
    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Meu perfil/i });
    expect(header).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render span my data', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const span = screen.getByText('Meus dados');
    expect(span).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render span change data', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const span = screen.getByText('Alterar dados');
    expect(span).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render span change password', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const span = screen.getByText('Alterar Senha');
    expect(span).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render span update your email', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const span = screen.getByText('Atualizar Seu E-mail');
    expect(span).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render header addresses', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Endereços/i });
    expect(header).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render header order history', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Historico de pedidos/i });
    expect(header).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render header refund and exchange vouncher', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Reembolso e vale troca/i });
    expect(header).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render header returns', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Devoluções/i });
    expect(header).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render header LGPD information', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Informações LGPD/i });
    expect(header).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render span my data LGPD Information', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const span = screen.getByText('Meus Dados');
    expect(span).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render span My Consents LGPD Information', () => {
    const fn = jest.fn();

    const isMyAccount = false;

    render(
      <MemoryRouter>
        <Navigation whichWasClickedNav={fn} isMyAccount={isMyAccount} />
      </MemoryRouter>
    );

    const span = screen.getByText('Meus Consentimentos');
    expect(span).toBeInTheDocument();
    expect.assertions(1);
  });
});
