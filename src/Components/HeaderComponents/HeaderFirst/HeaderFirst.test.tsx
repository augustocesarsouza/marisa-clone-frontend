import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import HeaderFirst from './HeaderFirst';

describe('BodyComponentsMain', () => {
  test('should render itens', () => {
    render(<HeaderFirst />);

    // const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });

    const img = screen.getByAltText('img-main');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741430437/imgs-backend-frontend-marisa/frontend/header-img_sjwxyk.gif'
    );

    expect.assertions(1);
  });
});
