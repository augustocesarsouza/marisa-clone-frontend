import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MoreOffersAndJustArrived from './MoreOffersAndJustArrived';

describe('MoreOffersAndJustArrived', () => {
  test('should render img-homepage-just-arrived', () => {
    const { container } = render(
      <MemoryRouter>
        <MoreOffersAndJustArrived />
      </MemoryRouter>
    );

    const header = container.querySelector('.header-more-offers-just-arrived');
    expect(header?.textContent).toBe('mais ofertas');

    const img = screen.getByAltText('img-homepage-just-arrived');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746639312/imgs-backend-frontend-marisa/frontend/acabou-de-chegar_qr6dli.gif'
    );

    expect.assertions(2);
  });
});
