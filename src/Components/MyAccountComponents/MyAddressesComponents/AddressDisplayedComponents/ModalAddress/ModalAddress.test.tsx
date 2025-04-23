import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ModalAddress from './ModalAddress';

describe('ModalAddress', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  test('should render itens', () => {
    const userDTO = {
      id: 'c72e398f-2c39-454c-8cd6-340618c43e9e',
      cellPhone: '67 23232-3232',
      cpf: '32232323322',
      gender: 'm',
      name: 'Augusto Cesar Souza Santana',
      email: null,
      birthDate: null,
      telephone: null,
      passwordHash: null,
      salt: null,
      userImage: null,
      token: null,
      tokenForCreation: null,
      password: null,
      birthDateString: null,
    };

    const address = {
      id: 'f64ad96d-a219-4f7f-b804-4f6e6ee24ab9',
      addressNickname: 'sdasd',
      addressType: 'RESIDENCIAL',
      recipientName: 'Augusto Cesar Souza Santana',
      zipCode: '79083-590',
      street: 'Rua Cajazeira',
      number: 112,
      complement: '',
      neighborhood: 'Jardim Aero Rancho',
      city: 'Campo Grande',
      state: 'Mato Grosso do Sul',
      referencePoint: 'Augusto Cesar Souza Santana',
      mainAddress: true,
      userId: '822a69e9-9231-4dfd-a1e2-30cefa3710bd',
      userDTO: userDTO,
    };

    const fn = jest.fn();
    const fn2 = jest.fn();

    render(
      <MemoryRouter>
        <ModalAddress
          address={address}
          changeArrayAddresses={fn}
          changeArrayAddressesMain={fn2}
          user={userDTO}
          quantityAddresses={2}
        />
      </MemoryRouter>
    );

    const span = screen.getByText(/Endereço Principal/i);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });
});
