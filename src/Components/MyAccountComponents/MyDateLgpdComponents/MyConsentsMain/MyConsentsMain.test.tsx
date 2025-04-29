import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyConsentsMain from './MyConsentsMain';

describe('MyConsentsMain', () => {
  test('should render header', () => {
    render(
      <MemoryRouter>
        <MyConsentsMain />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Meus Consentimentos/i });
    expect(header).toBeInTheDocument();
  });

  test('should render span privacy and security', () => {
    render(
      <MemoryRouter>
        <MyConsentsMain />
      </MemoryRouter>
    );

    const span = screen.getByText(
      /Sua privacidade e segurança são prioridades, para melhor atender você, customize nosso contato/i
    );
    expect(span).toBeInTheDocument();
  });

  test('should render input checkbox', () => {
    const { container } = render(
      <MemoryRouter>
        <MyConsentsMain />
      </MemoryRouter>
    );

    const inputCheckbox = container.querySelector('.input-checkbox-offers-and-promotions');
    expect(inputCheckbox).toBeInTheDocument();
  });

  test('should render span receive offers and promotions', () => {
    render(
      <MemoryRouter>
        <MyConsentsMain />
      </MemoryRouter>
    );

    const span = screen.getByText(
      /Quero receber ofertas e promoções do Cartão Marisa, Via e-mail, SMS, Ligação ou Push/i
    );
    expect(span).toBeInTheDocument();
  });

  test('should render button save update', () => {
    render(
      <MemoryRouter>
        <MyConsentsMain />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /Salvar Atualização/i });
    expect(button).toBeInTheDocument();
  });
});
