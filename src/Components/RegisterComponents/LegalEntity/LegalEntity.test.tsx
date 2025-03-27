import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import LegalEntity from './LegalEntity';

describe('LegalEntity', () => {
  test('should render label input span company-name', () => {
    render(<LegalEntity />);

    const label = screen.getByLabelText('Nome da empresa*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Informe Nome da sua empresa');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('Nome da empresa deve ter pelo menos 3 caracteres');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render label input span responsável', () => {
    render(<LegalEntity />);

    const label = screen.getByLabelText('Responsável*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Informe o Responsável');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('Responsável deve ter pelo menos 3 caracteres');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render label input span CNPJ', () => {
    render(<LegalEntity />);

    const label = screen.getByLabelText('CNPJ*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('00.000.000/0000-00');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('CNPJ inválido');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render label for UF', () => {
    render(<LegalEntity />);

    const labelUF = screen.getByLabelText('UF *');
    expect(labelUF).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render label for ICMS', () => {
    render(<LegalEntity />);

    const labelUF = screen.getByLabelText('Situação tributária (ICMS) *');
    expect(labelUF).toBeInTheDocument();

    const optionsICMS = screen.getAllByTestId('option-icms');
    expect(optionsICMS.length).toBe(3);

    expect(optionsICMS[0].textContent).toBe('ISENTO');
    expect(optionsICMS[1].textContent).toBe('Contribuinte de ICMS');
    expect(optionsICMS[2].textContent).toBe('Não contribuinte de ICMS');
    expect.assertions(5);
  });

  test('should render label input span state-registration', () => {
    render(<LegalEntity />);

    const label = screen.getByLabelText('Inscrição estadual*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('ISENTO');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('Inscrição estadual deve ter pelo menos 3 caracteres');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render label input span cell phone', () => {
    render(<LegalEntity />);

    const label = screen.getAllByLabelText('DDD*')[0];
    expect(label).toBeInTheDocument();

    const input = screen.getAllByPlaceholderText('( 00 )')[0];
    expect(input).toBeInTheDocument();

    const spanFirst = screen.getAllByText('Erro')[0];
    expect(spanFirst).toBeInTheDocument();

    const labelCellphone = screen.getByLabelText('Celular*');
    expect(labelCellphone).toBeInTheDocument();

    const inputCellphone = screen.getByPlaceholderText('00000 - 0000');
    expect(inputCellphone).toBeInTheDocument();

    const spanSecond = screen.getAllByText('Erro')[1];
    expect(spanSecond).toBeInTheDocument();

    expect.assertions(6);
  });

  test('should render label input span telephone', () => {
    render(<LegalEntity />);

    const label = screen.getAllByLabelText('DDD*')[1];
    expect(label).toBeInTheDocument();

    const input = screen.getAllByPlaceholderText('( 00 )')[1];
    expect(input).toBeInTheDocument();

    const span = screen.getAllByText('Erro')[2];
    expect(span).toBeInTheDocument();

    const labelTelephone = screen.getByLabelText('Telefone');
    expect(labelTelephone).toBeInTheDocument();

    const inputTelephone = screen.getByPlaceholderText('0000 - 0000');
    expect(inputTelephone).toBeInTheDocument();

    const spanSecond = screen.getAllByText('Erro')[3];
    expect(spanSecond).toBeInTheDocument();

    expect.assertions(6);
  });

  test('should render label input span email', () => {
    render(<LegalEntity />);

    const label = screen.getByLabelText('E-mail*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Informe o e-mail');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('Email deve ter (@gmail.com)');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render button and span text token', () => {
    render(<LegalEntity />);

    const button = screen.getByRole('button', { name: 'RECEBER TOKEN DE CADASTRO' });
    expect(button).toBeInTheDocument();

    const span = screen.getByText('O token será enviado por e-mail/SMS*');
    expect(span).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render label input span token', () => {
    render(<LegalEntity />);

    const label = screen.getByLabelText('Token*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Informe o seu token de cadastro');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('precisa ser informado um token');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render label input span svg password', () => {
    render(<LegalEntity />);

    const label = screen.getByLabelText('Senha *');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Insira a senha');
    expect(input).toBeInTheDocument();

    const span = screen.getByText("erro 'senha' deve ser igual 'confirmar Senha'");
    expect(span).toBeInTheDocument();

    const svgEyeOpen = screen.getAllByTestId('container-svg-eye-open')[0];
    expect(svgEyeOpen).toBeInTheDocument();

    const svgEyeClose = screen.getAllByTestId('container-svg-eye-close')[0];
    expect(svgEyeClose).toBeInTheDocument();

    expect.assertions(5);
  });

  test('should render label input span svg confirm password', () => {
    render(<LegalEntity />);

    const label = screen.getByLabelText('Confirmar Senha *');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Insiria a senha novamente');
    expect(input).toBeInTheDocument();

    const span = screen.getByText("erro 'confirmar senha' deve ser igual 'senha'");
    expect(span).toBeInTheDocument();

    const svgEyeOpen = screen.getAllByTestId('container-svg-eye-open')[1];
    expect(svgEyeOpen).toBeInTheDocument();

    const svgEyeClose = screen.getAllByTestId('container-svg-eye-close')[1];
    expect(svgEyeClose).toBeInTheDocument();

    expect.assertions(5);
  });

  test('should render span and header checkbox button', () => {
    render(<LegalEntity />);

    const header = screen.getByTestId('header-offers');
    expect(header.textContent).toBe('Ofertas');

    const span = screen.getByTestId('span-do-you-want-to-receive-a-newsletter');
    expect(span.textContent).toBe('Deseja receber um boletim com novidades e promoções da Marisa?');

    const checkbox = screen.getAllByRole('checkbox');
    expect(checkbox.length).toBe(2);

    const spanForEmail = screen.getByTestId('span-checkbox-for-email');
    expect(spanForEmail.textContent).toBe('Por e-mail');

    const spanForCellphone = screen.getByTestId('span-checkbox-for-cellphone');
    expect(spanForCellphone.textContent).toBe('Por celular');

    const button = screen.getByRole('button', { name: 'FINALIZAR CADASTRO' });
    expect(button).toBeInTheDocument();

    expect.assertions(6);
  });
});
