import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import FormLogin from './FormLogin';
import { MemoryRouter } from 'react-router-dom';

describe('FormLogin', () => {
  test('should render itens', () => {
    render(
      <MemoryRouter>
        <FormLogin />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { name: 'Faça seu Login' });
    expect(heading).not.toBeNull();

    const label = screen.getByText('E-mail ou CPF*');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'input-email-or-cpf');

    const inputEmailCpf = screen.getByPlaceholderText(/Informe e-mail ou CPF/);
    expect(inputEmailCpf).toBeInTheDocument();

    const labelPassword = screen.getByText('Senha *');
    expect(labelPassword).toBeInTheDocument();
    expect(labelPassword).toHaveAttribute('for', 'input-password');

    const inputPassword = screen.getByPlaceholderText(/Informe senha/);
    expect(inputPassword).toBeInTheDocument();

    const containerSvgEyeOpen = screen.getByTestId('container-svg-eye-open');
    expect(containerSvgEyeOpen).toBeInTheDocument();

    const svgEyeOpen = containerSvgEyeOpen.firstChild as SVGElement;
    expect(svgEyeOpen).toBeInTheDocument();

    const containerSvgEyeClose = screen.getByTestId('container-svg-eye-close');
    expect(containerSvgEyeClose).toBeInTheDocument();

    const svgEyeClose = containerSvgEyeClose.firstChild as SVGElement;
    expect(svgEyeClose).toBeInTheDocument();

    const spanForgotYourPassword = screen.getByText(/Esqueceu sua senha?/);
    expect(spanForgotYourPassword).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'ENTRAR' });
    expect(button).toBeInTheDocument();

    const spanFirstYetNotHaveAccount = screen.getByText(/Ainda não tem um cadastro?/);
    expect(spanFirstYetNotHaveAccount).toBeInTheDocument();

    const spanSecondYetNotHaveAccount = screen.getByText(/Ainda não tem um cadastro?/);
    expect(spanSecondYetNotHaveAccount).toBeInTheDocument();

    expect.assertions(15);
  });
});
