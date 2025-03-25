import { MemoryRouter } from 'react-router-dom';
import UpdatePasswordMain from './UpdatePasswordMain';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('UpdatePasswordMain', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() },
      writable: true,
    });
  });

  test('should render header change password', () => {
    render(
      <MemoryRouter>
        <UpdatePasswordMain />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Alterar Senha/i });
    expect(header).toBeInTheDocument();
  });

  test('should render label input and svgs eyes current password', () => {
    render(
      <MemoryRouter>
        <UpdatePasswordMain />
      </MemoryRouter>
    );

    const label = screen.getAllByLabelText(/Senha Atual \*/i)[0];
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Senha Atual');
    expect(input).toBeInTheDocument();

    const eyeOpenIcon = screen.getByTestId('container-current-password-svg-eye-open');
    const eyeCloseIcon = screen.getByTestId('container-current-password-svg-eye-close');

    expect(eyeOpenIcon).toBeInTheDocument();
    expect(eyeCloseIcon).toBeInTheDocument();
  });

  test('should render label input and svgs eyes new password', () => {
    render(
      <MemoryRouter>
        <UpdatePasswordMain />
      </MemoryRouter>
    );

    const label = screen.getAllByLabelText(/Nova Senha \*/i)[0];
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Nova Senha');
    expect(input).toBeInTheDocument();

    const eyeOpenIcon = screen.getByTestId('container-new-password-svg-eye-open');
    const eyeCloseIcon = screen.getByTestId('container-new-password-svg-eye-close');

    expect(eyeOpenIcon).toBeInTheDocument();
    expect(eyeCloseIcon).toBeInTheDocument();
  });

  test('should render label input and svgs eyes confirm new password', () => {
    render(
      <MemoryRouter>
        <UpdatePasswordMain />
      </MemoryRouter>
    );

    const label = screen.getAllByLabelText(/Confirme a Nova Senha \*/i)[0];
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Confirme a Nova Senha');
    expect(input).toBeInTheDocument();

    const eyeOpenIcon = screen.getByTestId('container-confirm-new-password-svg-eye-open');
    const eyeCloseIcon = screen.getByTestId('container-confirm-new-password-svg-eye-close');

    expect(eyeOpenIcon).toBeInTheDocument();
    expect(eyeCloseIcon).toBeInTheDocument();
  });

  test('should render span marked fields are required', () => {
    render(
      <MemoryRouter>
        <UpdatePasswordMain />
      </MemoryRouter>
    );

    const span = screen.getByText('* Campos marcados são obrigatórios');
    expect(span).toBeInTheDocument();
  });

  test('should render all button both cancel and change password', () => {
    render(
      <MemoryRouter>
        <UpdatePasswordMain />
      </MemoryRouter>
    );

    const buttonCancel = screen.getByRole('button', { name: /CANCELAR/i });
    expect(buttonCancel).toBeInTheDocument();

    const buttonChangePassword = screen.getByRole('button', { name: /ALTERAR SENHA/i });
    expect(buttonChangePassword).toBeInTheDocument();
  });
});
