import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LingerieEverydayAndForGiftingBelts from './LingerieEverydayAndForGiftingBelts';

describe('LingerieEverydayAndForGiftingBelts', () => {
  test('should render img-homepage-lingerie-everyday', () => {
    render(
      <MemoryRouter>
        <LingerieEverydayAndForGiftingBelts />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-lingerie-everyday');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746638744/imgs-backend-frontend-marisa/frontend/lingerie-dia-a-dia_fpqe0l.gif'
    );

    expect.assertions(1);
  });

  test('should render img-homepage-lingerie-for-gifting', () => {
    render(
      <MemoryRouter>
        <LingerieEverydayAndForGiftingBelts />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-lingerie-for-gifting');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746638744/imgs-backend-frontend-marisa/frontend/lingerie-para-presentear_a1zqnm.gif'
    );

    expect.assertions(1);
  });

  test('should render img-homepage-belts-and-shapers', () => {
    render(
      <MemoryRouter>
        <LingerieEverydayAndForGiftingBelts />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-belts-and-shapers');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746638745/imgs-backend-frontend-marisa/frontend/cintas-e-modeladoras_j4bz3e.gif'
    );

    expect.assertions(1);
  });
});
