import { MemoryRouter } from 'react-router-dom';
import ProductAfterClickedMain from './ProductAfterClicked';
import { render, screen } from '@testing-library/react';
import { Product } from '../../../Interfaces/Entity/Product';

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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: product,
  }),
}));

describe('ProductAfterClicked', () => {
  test('should render header string name nav', () => {
    render(
      <MemoryRouter>
        <ProductAfterClickedMain />
      </MemoryRouter>
    );

    const header = screen.getByTestId('header-string-name-nav');
    expect(header).toBeInTheDocument();
    expect(header.textContent).toBe('Blusa > Blusa Feminina Básica');

    expect.assertions(2);
  });
});
