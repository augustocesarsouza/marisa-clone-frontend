import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BrowseByCategoryMain from './BrowseByCategoryMain';

describe('BrowseByCategoryMain', () => {
  test('should render header', () => {
    const { container } = render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const header = container.querySelector('.header-browse');
    expect(header?.textContent).toBe('Navegue Por Categoria');

    expect.assertions(1);
  });

  test('should render img-everything-off', () => {
    render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-everything-off');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746615755/imgs-backend-frontend-marisa/frontend/imgs-browse-by-category/first_ltuykn.gif'
    );

    expect.assertions(1);
  });

  test('should render img-femine', () => {
    render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-femine');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746615757/imgs-backend-frontend-marisa/frontend/imgs-browse-by-category/second_pgoikm.gif'
    );

    expect.assertions(1);
  });

  test('should render img-footwear', () => {
    render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-footwear');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746615760/imgs-backend-frontend-marisa/frontend/imgs-browse-by-category/third_ysncgr.gif'
    );

    expect.assertions(1);
  });

  test('should render img-childish', () => {
    render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-childish');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746615761/imgs-backend-frontend-marisa/frontend/imgs-browse-by-category/fourth_ipqgoo.gif'
    );

    expect.assertions(1);
  });

  test('should render img-lingerie', () => {
    render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-lingerie');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746615763/imgs-backend-frontend-marisa/frontend/imgs-browse-by-category/fifth_h6wtia.gif'
    );

    expect.assertions(1);
  });

  test('should render img-pajamas', () => {
    render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-pajamas');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746615765/imgs-backend-frontend-marisa/frontend/imgs-browse-by-category/sixth_uziopa.gif'
    );

    expect.assertions(1);
  });

  test('should render img-plus-size', () => {
    render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-plus-size');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746615755/imgs-backend-frontend-marisa/frontend/imgs-browse-by-category/first_ltuykn.gif'
    );

    expect.assertions(1);
  });

  test('should render img-masculine', () => {
    render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-masculine');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746615769/imgs-backend-frontend-marisa/frontend/imgs-browse-by-category/eighth_wyzd4y.gif'
    );

    expect.assertions(1);
  });

  test('should render img-accessories', () => {
    render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-accessories');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746615770/imgs-backend-frontend-marisa/frontend/imgs-browse-by-category/ninth_t05lac.gif'
    );

    expect.assertions(1);
  });

  test('should render img-home', () => {
    render(
      <MemoryRouter>
        <BrowseByCategoryMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-home');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746615772/imgs-backend-frontend-marisa/frontend/imgs-browse-by-category/tenth_gjrhwu.gif'
    );

    expect.assertions(1);
  });
});
