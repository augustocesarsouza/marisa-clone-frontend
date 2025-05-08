import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WinterShoesAndCompleteYourLook from './WinterShoesAndCompleteYourLook';

describe('WinterShoesAndCompleteYourLook', () => {
  test('should render img-homepage-winter-shoes', () => {
    render(
      <MemoryRouter>
        <WinterShoesAndCompleteYourLook />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-winter-shoes');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746638445/imgs-backend-frontend-marisa/frontend/calcados-de-inverno_uj6yml.gif'
    );

    expect.assertions(1);
  });

  test('should render img-homepage-complete-your-look', () => {
    render(
      <MemoryRouter>
        <WinterShoesAndCompleteYourLook />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-complete-your-look');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746638444/imgs-backend-frontend-marisa/frontend/complete-seu-look_tkiuqw.gif'
    );

    expect.assertions(1);
  });
});
