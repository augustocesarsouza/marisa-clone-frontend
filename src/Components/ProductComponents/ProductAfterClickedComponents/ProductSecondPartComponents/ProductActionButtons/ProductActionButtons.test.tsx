import { render, screen } from '@testing-library/react';
import ProductActionButtons from './ProductActionButtons';

describe('ProductActionButtons', () => {
  test('should render button add to bag', () => {
    render(<ProductActionButtons />);

    const button = screen.getByRole('button', { name: /ADICIONAR À SACOLA/i });
    expect(button).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render button buy now', () => {
    render(<ProductActionButtons />);

    const button = screen.getByRole('button', { name: /COMPRAR AGORA/i });
    expect(button).toBeInTheDocument();

    expect.assertions(1);
  });
});
