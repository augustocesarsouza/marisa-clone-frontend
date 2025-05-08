import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomepageMasculineChildishPlusSize from './HomepageMasculineChildishPlusSize';

describe('HomepageMasculineChildishPlusSize', () => {
  test('should render img-homepage-masculine', () => {
    render(
      <MemoryRouter>
        <HomepageMasculineChildishPlusSize />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-masculine');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746637864/imgs-backend-frontend-marisa/frontend/homepage-masculino_jeiutc.gif'
    );

    expect.assertions(1);
  });

  test('should render img-homepage-childish', () => {
    render(
      <MemoryRouter>
        <HomepageMasculineChildishPlusSize />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-childish');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746637864/imgs-backend-frontend-marisa/frontend/homepage-infantil_vaiiao.gif'
    );

    expect.assertions(1);
  });

  test('should render img-homepage-plus-size', () => {
    render(
      <MemoryRouter>
        <HomepageMasculineChildishPlusSize />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-plus-size');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746637864/imgs-backend-frontend-marisa/frontend/homepage-plus-size_zcelbj.gif'
    );

    expect.assertions(1);
  });
});
