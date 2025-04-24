import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import CodeSendEmailModal from './CodeSendEmailModal';
import { Address } from '../../../../Interfaces/Entity/Address';
import { User } from '../../../../Interfaces/Entity/User.';

describe('CodeSendEmailModal', () => {
  test('should render svg span-which-email-was-send', () => {
    const fn = jest.fn();

    const addressMockFirst: Address = {
      id: '38c3760d-ce42-41a0-b33b-92da4a8f5c26',
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

    const addressMockSecond: Address = {
      id: '43958e6c-cfd3-43e3-b061-392e24b4e92f',
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

    const user: User = {
      id: 'user-id',
      name: 'Augusto',
      email: 'augusto@gmail.com',
      birthDate: '',
      cpf: '',
      gender: '',
      cellPhone: '',
      telephone: '',
      passwordHash: '',
      salt: '',
      userImage: '',
      token: '',
      tokenForCreation: 0,
      password: '',
      birthDateString: '',
    };

    const { container } = render(
      <MemoryRouter>
        <CodeSendEmailModal
          user={user}
          objAddress={addressMockFirst}
          addressUser={addressMockSecond}
          changeCodeSendEmailModal={fn}
        />
      </MemoryRouter>
    );

    const containerSvgExist = container.querySelector('.container-svg-exit') as HTMLDivElement;
    const svg = containerSvgExist.firstChild as SVGElement;
    expect(svg).toBeInTheDocument();

    const span = container.querySelector('.span-which-email-was-send');
    expect(span).toBeInTheDocument();
    expect(span?.textContent).toBe(
      `Para salvar seus dados com segurança, confirme o token enviado por sms no celular de cadastro ou e-mail. ${user.email}`
    );

    const containerAllCellPhoneInput = container.querySelectorAll('.input-cel-phone');
    expect(containerAllCellPhoneInput.length).toBe(6);

    const spanQuantityOfAttempts = container.querySelector('.span-quantity-of-attempts');
    expect(spanQuantityOfAttempts).toBeInTheDocument();

    const spanDoNotReceiveCode = screen.getByText(/Não recebeu o código?/i);
    expect(spanDoNotReceiveCode).toBeInTheDocument();

    const buttonReceive = screen.getByRole('button', { name: /Reenviar/i });
    expect(buttonReceive).toBeInTheDocument();

    const buttonConfirmChange = screen.getByRole('button', { name: /CONFIRMAR ALTERAÇÃO/i });
    expect(buttonConfirmChange).toBeInTheDocument();

    expect.assertions(8);
  });

  test('should render all inputs cell phone', () => {
    const fn = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <CodeSendEmailModal
          user={null}
          objAddress={null}
          addressUser={null}
          changeCodeSendEmailModal={fn}
        />
      </MemoryRouter>
    );

    const containerAllCellPhoneInput = container.querySelectorAll('.input-cel-phone');
    expect(containerAllCellPhoneInput.length).toBe(6);

    expect.assertions(1);
  });

  test('should render span quantity of attempts', () => {
    const fn = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <CodeSendEmailModal
          user={null}
          objAddress={null}
          addressUser={null}
          changeCodeSendEmailModal={fn}
        />
      </MemoryRouter>
    );

    const spanQuantityOfAttempts = container.querySelector('.span-quantity-of-attempts');
    expect(spanQuantityOfAttempts).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span do not receive code', () => {
    const fn = jest.fn();

    render(
      <MemoryRouter>
        <CodeSendEmailModal
          user={null}
          objAddress={null}
          addressUser={null}
          changeCodeSendEmailModal={fn}
        />
      </MemoryRouter>
    );

    const spanDoNotReceiveCode = screen.getByText(/Não recebeu o código?/i);
    expect(spanDoNotReceiveCode).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render button receive', () => {
    const fn = jest.fn();

    render(
      <MemoryRouter>
        <CodeSendEmailModal
          user={null}
          objAddress={null}
          addressUser={null}
          changeCodeSendEmailModal={fn}
        />
      </MemoryRouter>
    );

    const buttonReceive = screen.getByRole('button', { name: /Reenviar/i });
    expect(buttonReceive).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render button conmfirm change', () => {
    const fn = jest.fn();

    render(
      <MemoryRouter>
        <CodeSendEmailModal
          user={null}
          objAddress={null}
          addressUser={null}
          changeCodeSendEmailModal={fn}
        />
      </MemoryRouter>
    );

    const buttonConfirmChange = screen.getByRole('button', { name: /CONFIRMAR ALTERAÇÃO/i });
    expect(buttonConfirmChange).toBeInTheDocument();

    expect.assertions(1);
  });
});
