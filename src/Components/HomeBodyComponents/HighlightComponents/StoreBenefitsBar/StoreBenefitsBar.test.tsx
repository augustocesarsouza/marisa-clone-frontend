import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StoreBenefitsBar from './StoreBenefitsBar';

describe('StoreBenefitsBar', () => {
  test('should render img-free-shipping and span', () => {
    render(
      <MemoryRouter>
        <StoreBenefitsBar />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-free-shipping');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746527597/imgs-backend-frontend-marisa/frontend/frete-gratis_gf3xzk.gif'
    );

    const span = screen.getByText(/Frete Grátis Brasil/i);
    expect(span).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render img-invoice-payment and span', () => {
    render(
      <MemoryRouter>
        <StoreBenefitsBar />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-invoice-payment');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746527602/imgs-backend-frontend-marisa/frontend/pagamento-fatura_ihtevu.gif'
    );

    const span = screen.getByText(/Pagamento de Fatura/i);
    expect(span).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render img-buy-website-exchange-in-store and span', () => {
    render(
      <MemoryRouter>
        <StoreBenefitsBar />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-buy-website-exchange-in-store');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746527606/imgs-backend-frontend-marisa/frontend/compra-na-loja-troca_suf4zo.gif'
    );

    const span = screen.getByText(/Compre no Site Troque na Loja/i);
    expect(span).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render img-interest-free and span', () => {
    render(
      <MemoryRouter>
        <StoreBenefitsBar />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-interest-free');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746527609/imgs-backend-frontend-marisa/frontend/cartao-sem-juros_q3kxnb.gif'
    );

    const span = screen.getByText(/Até 5x Sem Juros/i);
    expect(span).toBeInTheDocument();

    expect.assertions(2);
  });
});
