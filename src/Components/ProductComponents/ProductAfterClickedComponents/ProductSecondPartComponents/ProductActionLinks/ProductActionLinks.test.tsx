import { render, screen } from '@testing-library/react';
import ProductActionLinks from './ProductActionLinks';

describe('ProductActionLinks', () => {
  test('should render span Provador Virtual and SvgChanging', () => {
    render(<ProductActionLinks />);

    const span = screen.getByText('Provador Virtual');
    expect(span).toBeInTheDocument();

    const containerSvg = screen.getByTestId('container-svg-changing');
    const svg = containerSvg.firstChild as SVGElement;
    expect(svg).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render span Tabela de Medidas and SvgChanging', () => {
    render(<ProductActionLinks />);

    const span = screen.getByText('Tabela de Medidas');
    expect(span).toBeInTheDocument();

    const containerSvg = screen.getByTestId('container-svg-table');
    const svg = containerSvg.firstChild as SVGElement;
    expect(svg).toBeInTheDocument();

    expect.assertions(2);
  });
});
