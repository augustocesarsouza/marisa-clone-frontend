import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import MyData from './MyData';
import { MemoryRouter } from 'react-router-dom';

describe('MyData', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() },
      writable: true,
    });
  });

  test('should render header my data', () => {
    render(
      <MemoryRouter>
        <MyData />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Meu perfil/i });
    expect(header).toBeInTheDocument();
  });

  test('should render header-2', () => {
    render(
      <MemoryRouter>
        <MyData />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', {
      name: /Li, compreendi e concordo com as Condições Gerais.*inclusive com relação à proteção de dados pessoais, finalidades e hipóteses de tratamento de dados.: Sim/i,
    });
    expect(header).toBeInTheDocument();
  });

  test('should render button change password', () => {
    render(
      <MemoryRouter>
        <MyData />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: /ALTERAR SENHA/i,
    });
    expect(button).toBeInTheDocument();
  });

  test('should render button update your email', () => {
    render(
      <MemoryRouter>
        <MyData />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: /ATUALIZAR SEU E-MAIL/i,
    });
    expect(button).toBeInTheDocument();
  });

  test('should render button change data', () => {
    render(
      <MemoryRouter>
        <MyData />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: /ALTERAR DADOS/i,
    });
    expect(button).toBeInTheDocument();
  });
});
