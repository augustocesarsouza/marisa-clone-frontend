import { render, screen } from '@testing-library/react';
import ProductColors from './ProductColors';

describe('ProductColors', () => {
  const colors = ['black', 'brown', 'yellow'];

  test('should render span marisa code product', () => {
    render(<ProductColors colors={colors} />);

    const span = screen.getByText(`Escolha a cor: ${colors[0]}`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render all colors product', () => {
    render(<ProductColors colors={colors} />);

    const container = screen.getByTestId('container-all-colors');
    const allStars = container.querySelectorAll(':scope > *');
    expect(allStars.length).toBe(colors.length);

    expect.assertions(1);
  });
});
