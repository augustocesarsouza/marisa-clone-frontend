import { MemoryRouter } from 'react-router-dom';
import ModalInfoWhichAddressIsPrimary from './ModalInfoWhichAddressIsPrimary';
import { render, screen } from '@testing-library/react';
import { storeAddressMain } from '../ChangeAddressMainRedux/storeAddressMain';
import { Provider } from 'react-redux';

describe('ModalInfoWhichAddressIsPrimary', () => {
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

  test('should render span set up as address main', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    render(
      <Provider store={storeAddressMain}>
        <MemoryRouter>
          <ModalInfoWhichAddressIsPrimary
            address={address}
            user={userDTO}
            changeAddressMain={fn}
            changeShowModalSetAddressAsPrimary={fn2}
          />
        </MemoryRouter>
      </Provider>
    );

    const span = screen.getByText(/Definir Endereço Como Principal/i);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render svg x', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    const { container } = render(
      <Provider store={storeAddressMain}>
        <MemoryRouter>
          <ModalInfoWhichAddressIsPrimary
            address={address}
            user={userDTO}
            changeAddressMain={fn}
            changeShowModalSetAddressAsPrimary={fn2}
          />
        </MemoryRouter>
      </Provider>
    );

    const containerSvgX = container.querySelector('.container-svg-x') as HTMLDivElement;
    const svgX = containerSvgX.firstChild as SVGElement;
    expect(svgX).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span do you want to change your main address', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    render(
      <Provider store={storeAddressMain}>
        <MemoryRouter>
          <ModalInfoWhichAddressIsPrimary
            address={address}
            user={userDTO}
            changeAddressMain={fn}
            changeShowModalSetAddressAsPrimary={fn2}
          />
        </MemoryRouter>
      </Provider>
    );

    const span = screen.getByText(/Você deseja alterar seu endereço principal?/i);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span address type', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    const { container } = render(
      <Provider store={storeAddressMain}>
        <MemoryRouter>
          <ModalInfoWhichAddressIsPrimary
            address={address}
            user={userDTO}
            changeAddressMain={fn}
            changeShowModalSetAddressAsPrimary={fn2}
          />
        </MemoryRouter>
      </Provider>
    );

    const span = container.querySelector('.span-address-type') as HTMLDivElement;
    expect(span).toBeInTheDocument();
    expect(span.textContent).toBe(address.addressType);

    expect.assertions(2);
  });

  test('should render span recipient name', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    const { container } = render(
      <Provider store={storeAddressMain}>
        <MemoryRouter>
          <ModalInfoWhichAddressIsPrimary
            address={address}
            user={userDTO}
            changeAddressMain={fn}
            changeShowModalSetAddressAsPrimary={fn2}
          />
        </MemoryRouter>
      </Provider>
    );

    const span = container.querySelector('.span-recipient-name') as HTMLDivElement;
    expect(span).toBeInTheDocument();
    expect(span.textContent).toBe(`Destinatário:${address.recipientName}`);

    expect.assertions(2);
  });

  test('should render span cell phone', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    const { container } = render(
      <Provider store={storeAddressMain}>
        <MemoryRouter>
          <ModalInfoWhichAddressIsPrimary
            address={address}
            user={userDTO}
            changeAddressMain={fn}
            changeShowModalSetAddressAsPrimary={fn2}
          />
        </MemoryRouter>
      </Provider>
    );

    const span = container.querySelector('.span-cell-phone') as HTMLDivElement;
    expect(span).toBeInTheDocument();
    expect(span.textContent).toBe(`Celular: (67) 23232-3232`);

    expect.assertions(2);
  });

  test('should render span address description', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    const { container } = render(
      <Provider store={storeAddressMain}>
        <MemoryRouter>
          <ModalInfoWhichAddressIsPrimary
            address={address}
            user={userDTO}
            changeAddressMain={fn}
            changeShowModalSetAddressAsPrimary={fn2}
          />
        </MemoryRouter>
      </Provider>
    );

    const span = container.querySelector('.span-address-description') as HTMLDivElement;
    expect(span).toBeInTheDocument();
    expect(span.textContent).toBe(`Endereço: Rua Cajazeira, 112 - Jardim Aero Rancho`);

    expect.assertions(2);
  });

  test('should render span address location', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    const { container } = render(
      <Provider store={storeAddressMain}>
        <MemoryRouter>
          <ModalInfoWhichAddressIsPrimary
            address={address}
            user={userDTO}
            changeAddressMain={fn}
            changeShowModalSetAddressAsPrimary={fn2}
          />
        </MemoryRouter>
      </Provider>
    );

    const span = container.querySelector('.span-address-location') as HTMLDivElement;
    expect(span).toBeInTheDocument();
    expect(span.textContent).toBe(`Campo Grande - MS - 79083590`);

    expect.assertions(2);
  });

  test('should render button cancel', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    render(
      <Provider store={storeAddressMain}>
        <MemoryRouter>
          <ModalInfoWhichAddressIsPrimary
            address={address}
            user={userDTO}
            changeAddressMain={fn}
            changeShowModalSetAddressAsPrimary={fn2}
          />
        </MemoryRouter>
      </Provider>
    );

    const button = screen.getByRole('button', { name: /Cancelar/i });
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe(`Cancelar`);

    expect.assertions(2);
  });

  test('should render button confirm', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();

    render(
      <Provider store={storeAddressMain}>
        <MemoryRouter>
          <ModalInfoWhichAddressIsPrimary
            address={address}
            user={userDTO}
            changeAddressMain={fn}
            changeShowModalSetAddressAsPrimary={fn2}
          />
        </MemoryRouter>
      </Provider>
    );

    const button = screen.getByRole('button', { name: /Confirmar/i });
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe(`Confirmar`);

    expect.assertions(2);
  });
});
