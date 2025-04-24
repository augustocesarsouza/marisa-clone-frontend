import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ModalAddress from './ModalAddress';

describe('ModalAddress', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

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

  test('should render span address main', () => {
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

  test('should render span address type', () => {
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

    const span = screen.getByText(address.addressType);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render button edit address', () => {
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

    const span = screen.getByRole('button', { name: /editar/i });
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render button delete address', () => {
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

    const span = screen.getByRole('button', { name: /remover/i });
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span recipent name', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    const { container } = render(
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

    const span = container.querySelector('.span-recipent-name');
    expect(span).toBeInTheDocument();
    expect(span?.textContent).toBe('Destinatário:Augusto Cesar Souza Santana');

    expect.assertions(2);
  });

  test('should render span cell phone', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    const { container } = render(
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

    const span = container.querySelector('.span-cell-phone');
    expect(span).toBeInTheDocument();
    expect(span?.textContent).toBe('Celular: (67) 23232-3232');

    expect.assertions(2);
  });

  test('should render span address home user', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    const { container } = render(
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

    const span = container.querySelector('.span-address-home-user');
    expect(span).toBeInTheDocument();
    expect(span?.textContent).toBe('Endereço: Rua Cajazeira, 112 - Jardim Aero Rancho');

    expect.assertions(2);
  });

  test('should render span uf address', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    const { container } = render(
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

    const span = container.querySelector('.span-address-uf');
    expect(span).toBeInTheDocument();
    expect(span?.textContent).toBe('Campo Grande - MS - 79083590');

    expect.assertions(2);
  });

  test('should render button set as primary address', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    address.mainAddress = false;

    const { container } = render(
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

    const button = container.querySelector('.button-set-as-primary-address');
    expect(button).toBeInTheDocument();
    expect(button?.textContent).toBe('Definir como endereço principal');

    expect.assertions(2);
  });
});
