import { MemoryRouter } from 'react-router-dom';
import MyAddressesMain from './MyAddressesMain';
import { render, screen } from '@testing-library/react';

describe('MyAddressesMain', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  test('should render itens', () => {
    render(
      <MemoryRouter>
        <MyAddressesMain />
      </MemoryRouter>
    );

    const headingMyAddresses = screen.getByRole('heading', { name: 'Meus Endereços' });
    expect(headingMyAddresses).toBeInTheDocument();

    const buttonAddNewAddress = screen.getByRole('button', { name: 'Adicionar Novo Endereço' });
    expect(buttonAddNewAddress).toBeInTheDocument();

    expect.assertions(2);
  });
});
