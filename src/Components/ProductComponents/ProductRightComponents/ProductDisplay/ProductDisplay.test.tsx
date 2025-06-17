import { render, screen } from '@testing-library/react';
import ProductDisplay from './ProductDisplay';
import { MemoryRouter } from 'react-router-dom';
import { Product } from '../../../Interfaces/Entity/Product';

describe('ProductDisplay', () => {
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

  test('should render span value discount percentage', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const span = screen.getByText(`${product.discountPercentage}%`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render img url product', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const img = screen.getByAltText(`img-product-` + product.id);
    expect(img).toHaveAttribute('src', product.imageUrl);

    expect.assertions(1);
  });

  test('should render span title product', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const span = screen.getByText(`${product.title}`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render all stars', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const container = screen.getByTestId('my-div-all-stars');
    const allStars = container.querySelectorAll(':scope > *');
    expect(allStars.length).toBe(5);

    expect.assertions(1);
  });

  test('should render span quantity stars', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const span = screen.getByText('(0)');
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span price product', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const span = screen.getByText(`De: R$ ${product.price}`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span price discount', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const span = screen.getByTestId('span-price-discount');
    expect(span).toBeInTheDocument();
    expect(span.textContent).toBe('Por R$ 24,14');

    expect.assertions(2);
  });

  test('should render span installment times marisa card', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const span = screen.getByText(`${product.installmentTimesMarisaCard}x`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span R$', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const span = screen.getByText(`R$`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span price discount', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const span = screen.getByTestId('span-install-price');
    expect(span).toBeInTheDocument();
    expect(span.textContent).toBe('6,99');

    expect.assertions(2);
  });

  test('should render span no interest on the marisa card', () => {
    render(
      <MemoryRouter>
        <ProductDisplay product={product} />
      </MemoryRouter>
    );

    const span = screen.getByText(`sem juros no cartão marisa`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });
});
