import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomepageBasicBlousesCharactersWholeFamilyLittleFinds from './HomepageBasicBlousesCharactersWholeFamilyLittleFinds';

describe('HomepageBasicBlousesCharactersWholeFamilyLittleFinds', () => {
  test('should render img-homepage-basic-blouses-t-shirts', () => {
    render(
      <MemoryRouter>
        <HomepageBasicBlousesCharactersWholeFamilyLittleFinds />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-basic-blouses-t-shirts');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746639533/imgs-backend-frontend-marisa/frontend/blusas-basicas-camisetas_kpz8pg.gif'
    );

    expect.assertions(1);
  });

  test('should render img-homepage-characters-for-the-whole-family', () => {
    render(
      <MemoryRouter>
        <HomepageBasicBlousesCharactersWholeFamilyLittleFinds />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-characters-for-the-whole-family');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746639531/imgs-backend-frontend-marisa/frontend/personagens-para-toda-familia_ilenpd.gif'
    );

    expect.assertions(1);
  });

  test('should render img-homepage-little-finds', () => {
    render(
      <MemoryRouter>
        <HomepageBasicBlousesCharactersWholeFamilyLittleFinds />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-little-finds');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746639532/imgs-backend-frontend-marisa/frontend/achadinhos_hjiqyq.gif'
    );

    expect.assertions(1);
  });
});
