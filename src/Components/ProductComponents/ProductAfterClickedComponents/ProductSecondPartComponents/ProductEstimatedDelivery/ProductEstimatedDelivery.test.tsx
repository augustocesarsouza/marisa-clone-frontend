import { render, screen } from '@testing-library/react';
import ProductEstimatedDelivery from './ProductEstimatedDelivery';

describe('ProductEstimatedDelivery', () => {
  test('should render header Previsão de entrega', () => {
    render(<ProductEstimatedDelivery />);

    const header = screen.getByRole('heading', { name: /Previsão de entrega/i });
    expect(header).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render input cep', () => {
    render(<ProductEstimatedDelivery />);

    const input = screen.getByTestId('input-cep');
    expect(input).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render svg arrow', () => {
    render(<ProductEstimatedDelivery />);

    const container = screen.getByTestId('container-svg-arrow');
    const svg = container.firstChild as SVGElement;
    expect(svg).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span prices, deadlines and types of delivery', () => {
    render(<ProductEstimatedDelivery />);

    const span = screen.getByText(
      'Os preços, prazos e tipos de entrega são apenas para este produto em consulta.'
    );
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });
});
