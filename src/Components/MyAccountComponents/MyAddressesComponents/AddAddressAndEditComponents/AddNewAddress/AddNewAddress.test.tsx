import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AddNewAddress from './AddNewAddress';
import { Address } from '../../../../Interfaces/Entity/Address';

describe('AddNewAddress', () => {
  test('should render header add new address', () => {
    render(
      <MemoryRouter>
        <AddNewAddress />
      </MemoryRouter>
    );

    const header = screen.getByText(/Adicionar Novo Endereço/i);
    expect(header).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render header add new address', () => {
    const addressMock: Address = {
      id: '',
      street: 'Rua Teste',
      city: 'Cidade Teste',
      state: 'Estado',
      zipCode: '00000-000',
      addressNickname: '',
      addressType: '',
      recipientName: '',
      number: 0,
      complement: '',
      neighborhood: '',
      referencePoint: '',
      mainAddress: false,
      userId: '',
      userDTO: null,
    };

    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: '/my-account/edit-address',
            state: { address: addressMock },
          },
        ]}>
        <AddNewAddress />
      </MemoryRouter>
    );

    const header = screen.getByText(/Alterar Endereço/i);
    expect(header).toBeInTheDocument();

    expect.assertions(1);
  });
});
