import { render, screen } from '@testing-library/react';
import QuantityProduct from './QuantityProduct';

describe('QuantityProduct', () => {
  test('should render span quantity', () => {
    render(<QuantityProduct />);

    const span = screen.getByText('Quantidade');
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });
});
