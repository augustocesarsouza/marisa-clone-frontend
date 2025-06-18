import { render, screen } from '@testing-library/react';
import ProductMainInfo from './ProductMainInfo';
import { Product } from '../../../../Interfaces/Entity/Product';

describe('ProductMainInfo', () => {
  const product: Product = {
    category: 'Moda Feminina',
    code: 86612407029,
    colors: ['black', 'brown', 'yellow'],
    discountPercentage: 31,
    id: 'f40975ac-31dc-45cd-b38f-2d6bfefa5ac9',
    imageUrl:
      'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/imgs-backend-frontend-marisa/backend/product/fzeneqaf8ml3e2pqjsmk',
    installmentPrice: 6.998,
    installmentTimesCreditCard: 3,
    installmentTimesMarisaCard: 5,
    price: 34.99,
    priceDiscounted: 24.143100000000004,
    quantityAvailable: 50,
    sizesAvailable: ['P', 'M', 'G', 'GG'],
    title: 'Blusa Feminina Básica Manga Curta Marisa',
    type: 'festival-de-blusas',
    createdAt: '',
    updatedAt: '',
  };

  test('should render span marisa code product', () => {
    render(<ProductMainInfo product={product} />);

    const span = screen.getByText(`MARISA ${product.code}`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render all stars', () => {
    render(<ProductMainInfo product={product} />);

    const container = screen.getByTestId('container-stars-svg');
    const allStars = container.querySelectorAll(':scope > *');
    expect(allStars.length).toBe(5);

    expect.assertions(1);
  });

  test('should render span assessment', () => {
    render(<ProductMainInfo product={product} />);

    const span = screen.getByText(`1 avaliação`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span price product', () => {
    render(<ProductMainInfo product={product} />);

    const span = screen.getByText(`R$ ${product.price}`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span price discounted', () => {
    render(<ProductMainInfo product={product} />);

    const span = screen.getByTestId('span-price-discounted');
    expect(span.textContent).toBe('R$ 24,14');

    expect.assertions(1);
  });

  test('should render span installment times marisa card and R$', () => {
    render(<ProductMainInfo product={product} />);

    const span = screen.getByText(`${product.installmentTimesMarisaCard}x`);
    expect(span).toBeInTheDocument();

    const spanReal = screen.getByText(`R$`);
    expect(spanReal).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render span installment price', () => {
    render(<ProductMainInfo product={product} />);

    const span = screen.getByTestId('span-installment-price');
    expect(span.textContent).toBe('6,99');

    expect.assertions(1);
  });

  test('should render span no interest on the marisa card', () => {
    render(<ProductMainInfo product={product} />);

    const span = screen.getByText('sem juros no cartão marisa');
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render button see installment methods', () => {
    render(<ProductMainInfo product={product} />);

    const button = screen.getByRole('button', { name: /VER AS FORMAS DE PARCELAMENTO/i });
    expect(button.textContent).toBe('VER AS FORMAS DE PARCELAMENTO');
    expect(button).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render span Sold and Delivered', () => {
    render(<ProductMainInfo product={product} />);

    const span = screen.getByText('Vendido e entregue por: Lojas Marisa');
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });
});
