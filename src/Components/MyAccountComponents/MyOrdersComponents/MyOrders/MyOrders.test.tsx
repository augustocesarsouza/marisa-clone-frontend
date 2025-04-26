import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyOrders from './MyOrders';

describe('MyOrders', () => {
  test("should render h1 you don't have any orders yet", () => {
    render(
      <MemoryRouter>
        <MyOrders />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { name: /VOCÊ AINDA NÃO POSSUI PEDIDOS!/i });
    expect(heading).toBeInTheDocument();

    const span = screen.getByText(
      /Para fazer um pedido basta navegar pela Loja Virtual Marisa ou utilizar a busca acima, e ao encontrar os produtos desejados, clique no botão "Comprar" se seguir os passos seguintes até a finalização de seu pedido./i
    );
    expect(span).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'CONTINUAR NAVEGANDO' });
    expect(button).toBeInTheDocument();

    expect.assertions(3);
  });
});
