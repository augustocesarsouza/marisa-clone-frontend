import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import SecuritySealsPaymentMethods from './SecuritySealsPaymentMethods';

describe('SecuritySealsPaymentMethods', () => {
  test('should render img lock', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-lock');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741713532/imgs-backend-frontend-marisa/frontend/lock_te7w3c.webp'
    );

    expect.assertions(1);
  });

  test('should render span seals security', () => {
    render(<SecuritySealsPaymentMethods />);

    const span = screen.getByText(/Selos de segurança/);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render img em avaliação', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-em-avaliação');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741775886/imgs-backend-frontend-marisa/frontend/SecuritySeals/em-avaliacao_ezh1yo.png'
    );

    expect.assertions(1);
  });

  test('should render img clear sale', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-clear-sale');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741775894/imgs-backend-frontend-marisa/frontend/SecuritySeals/clear-sale_lc5bmg.webp'
    );

    expect.assertions(1);
  });

  test('should render img camara enet', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-camara-enet');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741775890/imgs-backend-frontend-marisa/frontend/SecuritySeals/carara-e-net_ouja9x.webp'
    );

    expect.assertions(1);
  });

  test('should render img verisgn secured', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-verisign-secured');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741775904/imgs-backend-frontend-marisa/frontend/SecuritySeals/verisign-secured_c69pa2.webp'
    );

    expect.assertions(1);
  });

  test('should render img internet segura', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-internet-segura');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741775899/imgs-backend-frontend-marisa/frontend/SecuritySeals/internet-segura_xrvz4u.webp'
    );

    expect.assertions(1);
  });

  test('should render img loja confiavel', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-loja-confiavel');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741775901/imgs-backend-frontend-marisa/frontend/SecuritySeals/loja-confiavel_desezu.png'
    );

    expect.assertions(1);
  });

  test('should render img payment methods', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-payment-methods');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741713721/imgs-backend-frontend-marisa/frontend/payment-methods_r1pikl.webp'
    );

    expect.assertions(1);
  });

  test('should render span payment methods', () => {
    render(<SecuritySealsPaymentMethods />);

    const span = screen.getByText(/Formas de pagamento/);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render img payment method empty', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-payment-method-empty');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741776426/imgs-backend-frontend-marisa/frontend/PaymentMethods/icon-without-nothing_dlr46p.webp'
    );

    expect.assertions(1);
  });

  test('should render img payment method american express', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-payment-method-american-express');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741776414/imgs-backend-frontend-marisa/frontend/PaymentMethods/american-express_zh8krt.webp'
    );

    expect.assertions(1);
  });

  test('should render img payment method hipercard', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-payment-method-hipercard');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741776423/imgs-backend-frontend-marisa/frontend/PaymentMethods/hipercard_kxg6i7.webp'
    );

    expect.assertions(1);
  });

  test('should render img payment method diners club', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-payment-method-diners-club');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741776418/imgs-backend-frontend-marisa/frontend/PaymentMethods/diners-icon_kvc21j.webp'
    );

    expect.assertions(1);
  });

  test('should render img payment method master card', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-payment-method-master-card');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741776428/imgs-backend-frontend-marisa/frontend/PaymentMethods/mastercard-icon_rcx4a1.webp'
    );

    expect.assertions(1);
  });

  test('should render img payment method visa', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-payment-method-visa');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741776430/imgs-backend-frontend-marisa/frontend/PaymentMethods/visa-icon_zga3q9.webp'
    );

    expect.assertions(1);
  });

  test('should render img payment method elo', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-payment-method-elo');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741776420/imgs-backend-frontend-marisa/frontend/PaymentMethods/elo-icon_zwzhuh.webp'
    );

    expect.assertions(1);
  });

  test('should render img payment method boleto', () => {
    render(<SecuritySealsPaymentMethods />);

    const img = screen.getByAltText('img-payment-method-boleto');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741776415/imgs-backend-frontend-marisa/frontend/PaymentMethods/boleto-icon_d8pxup.webp'
    );

    expect.assertions(1);
  });
});
