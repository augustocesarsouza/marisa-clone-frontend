import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomepageMarisaIntimate from './HomepageMarisaIntimate';

describe('HomepageMarisaIntimate', () => {
  test('should render img-homepage-marisa-intimate', () => {
    render(
      <MemoryRouter>
        <HomepageMarisaIntimate />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-marisa-intimate');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746638613/imgs-backend-frontend-marisa/frontend/marisa-intima_pgvfah.gif'
    );

    expect.assertions(1);
  });
});
