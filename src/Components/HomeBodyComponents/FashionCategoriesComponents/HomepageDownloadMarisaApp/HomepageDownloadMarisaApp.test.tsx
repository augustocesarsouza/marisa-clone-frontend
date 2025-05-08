import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomepageDownloadMarisaApp from './HomepageDownloadMarisaApp';

describe('HomepageDownloadMarisaApp', () => {
  test('should render img-homepage-download-marisa-app', () => {
    render(
      <MemoryRouter>
        <HomepageDownloadMarisaApp />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-homepage-download-marisa-app');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746639723/imgs-backend-frontend-marisa/frontend/baixe-app-marisa_nkuxur.gif'
    );

    expect.assertions(1);
  });
});
