import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import ExclusiveOffersAndSocialShare from './ExclusiveOffersAndSocialShare';

describe('ExclusiveOffersAndSocialShare', () => {
  test('should render span receive news', () => {
    render(<ExclusiveOffersAndSocialShare />);

    const span = screen.getByText(/Receba novidades e ofertas com preços exclusivos:/);
    expect(span.textContent?.trim()).toBe('Receba novidades e ofertas com preços exclusivos:');
    expect(span).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render button register', () => {
    render(<ExclusiveOffersAndSocialShare />);

    const button = screen.getByRole('button', { name: 'CADASTRE-SE AQUI' });
    expect(button).toBeInTheDocument();
    expect(button.textContent?.trim()).toBe('CADASTRE-SE AQUI');

    expect.assertions(2);
  });

  test('should render span Enjoy and share', () => {
    render(<ExclusiveOffersAndSocialShare />);

    const spanSecond = screen.getByText(/Aproveite e compartilhe a Marisa nas Redes Sociais/);
    expect(spanSecond.textContent?.trim()).toBe(
      'Aproveite e compartilhe a Marisa nas Redes Sociais'
    );
    expect(spanSecond).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render svg all svgs social media', () => {
    render(<ExclusiveOffersAndSocialShare />);

    const container = screen.getByTestId('container-social-media');
    const allSvg = container.getElementsByTagName('svg');
    expect(allSvg.length).toBe(5);

    expect.assertions(1);
  });
});
