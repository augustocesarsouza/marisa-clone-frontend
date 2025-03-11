import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import FirstHeaderBody from './FirstHeaderBody';
import { MemoryRouter } from 'react-router-dom';

describe('FirstHeaderBody', () => {
  test('should render itens', () => {
    render(
      <MemoryRouter>
        <FirstHeaderBody />
      </MemoryRouter>
    );

    // const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });

    const img = screen.getByAltText('logo-home-body-marisa');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741443432/imgs-backend-frontend-marisa/frontend/logo-marisa_gsegyb.svg'
    );

    const input = screen.getByPlaceholderText(/O que você procura?/);
    expect(input).toBeInTheDocument();

    const loupaSvg = screen.getByTestId('container-svg-loupa');
    const svg = loupaSvg.firstChild as SVGElement;
    expect(svg).toBeInTheDocument();

    const img2 = screen.getByAltText('img-login-register');
    expect(img2).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741520954/imgs-backend-frontend-marisa/frontend/user-login_wicdjr.webp'
    );

    const span = screen.getByTestId('span-login-out');
    expect(span.textContent?.trim()).toBe('Entre ou cadastre-se');
    expect(span).toBeInTheDocument();

    const img3 = screen.getByAltText('img-purchase');
    expect(img3).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1741520934/imgs-backend-frontend-marisa/frontend/img-purchase_jfqphr.webp'
    );

    const spanPurchase = screen.getByTestId('span-quantity-purchase');
    expect(spanPurchase.textContent?.trim()).toBe('0');
    expect(spanPurchase).toBeInTheDocument();

    const containerSpans = screen.getByTestId('container-second-purchase');
    const spans = containerSpans.getElementsByTagName('span');
    expect(spans.length).toBe(2);

    expect.assertions(10);
  });
});
