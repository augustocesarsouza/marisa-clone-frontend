import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Individual from './Individual';

describe('Individual', () => {
  test('should render label input span name full', () => {
    render(<Individual whichTypePersonalWasClicked="" />);

    const label = screen.getByLabelText('Nome completo*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Informe seu nome');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('Nome Completo deve ter pelo menos 3 caracteres');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render label input span birth date', () => {
    render(<Individual whichTypePersonalWasClicked="" />);

    const label = screen.getByLabelText('Data de nascimento*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('00/00/0000');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('Data de nascimento inválida');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render label input span cpf', () => {
    render(<Individual whichTypePersonalWasClicked="" />);

    const label = screen.getByLabelText('CPF*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('000.000.000-00');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('CPF inválido');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render gender all container checkbox and span', () => {
    render(<Individual whichTypePersonalWasClicked="" />);

    const headerGender = screen.getByTestId('header-gender');
    expect(headerGender).toBeInTheDocument();

    const containerCheckboxFeminine = screen.getByTestId('container-checkbox-feminine');
    expect(containerCheckboxFeminine).toBeInTheDocument();

    const spanFeminine = screen.getByText('Feminino');
    expect(spanFeminine).toBeInTheDocument();

    const containerCheckboxMasculine = screen.getByTestId('container-checkbox-masculine');
    expect(containerCheckboxMasculine).toBeInTheDocument();

    const spanMasculine = screen.getByText('Masculino');
    expect(spanMasculine).toBeInTheDocument();

    const containerCheckboxNotInform = screen.getByTestId('container-checkbox-not-inform');
    expect(containerCheckboxNotInform).toBeInTheDocument();

    const spanNotInform = screen.getByText('Não informar');
    expect(spanNotInform).toBeInTheDocument();

    expect.assertions(7);
  });

  test('should render label input span cell phone', () => {
    render(<Individual whichTypePersonalWasClicked="" />);

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
    render(<Individual whichTypePersonalWasClicked="" />);

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
    render(<Individual whichTypePersonalWasClicked="" />);

    const label = screen.getByLabelText('E-mail*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Informe o e-mail');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('Email deve ter (@gmail.com)');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render button and span text token', () => {
    render(<Individual whichTypePersonalWasClicked="" />);

    const button = screen.getByRole('button', { name: 'RECEBER TOKEN DE CADASTRO' });
    expect(button).toBeInTheDocument();

    const span = screen.getByText('O token será enviado por e-mail/SMS*');
    expect(span).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render label input span token', () => {
    render(<Individual whichTypePersonalWasClicked="" />);

    const label = screen.getByLabelText('Token*');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Informe o seu token de cadastro');
    expect(input).toBeInTheDocument();

    const span = screen.getByText('precisa ser informado um token');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render label input span svg password', () => {
    render(<Individual whichTypePersonalWasClicked="" />);

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
    render(<Individual whichTypePersonalWasClicked="" />);

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

  test('should render checkbox complete registration', () => {
    render(<Individual whichTypePersonalWasClicked="" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    const span = screen.getByTestId('span-checkbox');
    expect(span.textContent?.trim()).toBe(
      'Li, compreendi e concordo com as Condições Gerais, inclusive com relação à proteção de dados pessoais, finalidades e hipóteses de tratamento de dados.'
    );

    const button = screen.getByRole('button', { name: 'FINALIZAR CADASTRO' });
    expect(button).toBeInTheDocument();

    expect.assertions(3);
  });
});
