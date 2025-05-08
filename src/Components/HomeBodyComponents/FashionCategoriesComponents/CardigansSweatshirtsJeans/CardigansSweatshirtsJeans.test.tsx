import { render, screen } from '@testing-library/react';
import CardigansSweatshirtsJeans from './CardigansSweatshirtsJeans';
import { MemoryRouter } from 'react-router-dom';

describe('CardigansSweatshirtsJeans', () => {
  test('should render img-cardigans-and-sweaters', () => {
    render(
      <MemoryRouter>
        <CardigansSweatshirtsJeans />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-cardigans-and-sweaters');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746631024/imgs-backend-frontend-marisa/frontend/cardigans-e-sueteres_tufcp6.gif'
    );

    expect.assertions(1);
  });

  test('should render img-sweatshirts-and-sets', () => {
    render(
      <MemoryRouter>
        <CardigansSweatshirtsJeans />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-sweatshirts-and-sets');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746631024/imgs-backend-frontend-marisa/frontend/moletons-e-conjuntos_fturcu.gif'
    );

    expect.assertions(1);
  });

  test('should render img-jeans', () => {
    render(
      <MemoryRouter>
        <CardigansSweatshirtsJeans />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-jeans');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746631024/imgs-backend-frontend-marisa/frontend/jeans-30-off_hhx8cw.gif'
    );

    expect.assertions(1);
  });
});
