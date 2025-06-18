import { render, screen } from '@testing-library/react';
import ProductSizes from './ProductSizes';

describe('ProductSizes', () => {
  const sizesAvailable = ['P', 'M', 'G', 'GG'];

  test('should render span choose your variation ', () => {
    render(<ProductSizes sizesAvailable={sizesAvailable} />);

    const span = screen.getByTestId('span-choose-variation');
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render all sizes product', () => {
    render(<ProductSizes sizesAvailable={sizesAvailable} />);

    const container = screen.getByTestId('container-all-szies');
    const allSizes = container.querySelectorAll(':scope > *');
    expect(allSizes.length).toBe(sizesAvailable.length);

    expect.assertions(1);
  });
});
