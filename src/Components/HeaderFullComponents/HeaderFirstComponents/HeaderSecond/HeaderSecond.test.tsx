import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import HeaderSecond from './HeaderSecond';

describe('BodyComponentsMain', () => {
  test('should render itens', () => {
    render(<HeaderSecond />);

    // const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });

    const img = screen.getByAltText('svg-marisa-logo');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741443432/imgs-backend-frontend-marisa/frontend/logo-marisa_gsegyb.svg'
    );

    const span1 = screen.getByText('Meus Pedidos');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Nossas Lojas');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText('Atendimento');
    expect(span3).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Cartões e Serviços' });
    expect(button).toBeInTheDocument();

    expect.assertions(5);
  });
});
