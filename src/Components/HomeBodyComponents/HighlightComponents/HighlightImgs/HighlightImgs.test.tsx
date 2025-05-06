import { render, screen } from '@testing-library/react';
import HighlightImgs from './HighlightImgs';
import { MemoryRouter } from 'react-router-dom';

describe('HighlightImgs', () => {
  test('should render img-free-shiping', () => {
    render(
      <MemoryRouter>
        <HighlightImgs />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-free-shiping');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746447792/imgs-backend-frontend-marisa/frontend/Faixa-20241217-FRETE-GRATIS-BRASIL-249-Desktop_ikgbhv.gif'
    );

    expect.assertions(1);
  });

  test('should render img-arrow-left', () => {
    render(
      <MemoryRouter>
        <HighlightImgs />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-arrow-left');
    expect(img).toHaveAttribute(
      'src',
      'https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/img/arrow-left-white.svg'
    );

    expect.assertions(1);
  });

  test('should render img-arrow-right', () => {
    render(
      <MemoryRouter>
        <HighlightImgs />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-arrow-right');
    expect(img).toHaveAttribute(
      'src',
      'https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/img/arrow-right-white.svg'
    );

    expect.assertions(1);
  });

  test('should render all imgs', () => {
    const { container } = render(
      <MemoryRouter>
        <HighlightImgs />
      </MemoryRouter>
    );

    const containerImgs = container.querySelector(
      '.container-all-imgs-highlight'
    ) as HTMLDivElement;
    const imgs = containerImgs.getElementsByTagName('img');

    expect(imgs.length).toBe(5);

    expect.assertions(1);
  });

  test('should render all divs', () => {
    const { container } = render(
      <MemoryRouter>
        <HighlightImgs />
      </MemoryRouter>
    );

    const containerDivs = container.querySelector(
      '.container-quantity-imgs-balls'
    ) as HTMLDivElement;
    const divsBall = containerDivs.getElementsByTagName('div');

    expect(divsBall.length).toBe(5);

    expect.assertions(1);
  });
});
