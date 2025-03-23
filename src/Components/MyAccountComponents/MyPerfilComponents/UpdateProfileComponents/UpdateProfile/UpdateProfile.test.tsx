import { MemoryRouter } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('UpdateProfile', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() },
      writable: true,
    });
  });

  test('should render header change data', () => {
    render(
      <MemoryRouter>
        <UpdateProfile />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Alterar Dados Pessoais/i });
    expect(header).toBeInTheDocument();
  });

  test('should render label input span name full', () => {
    render(
      <MemoryRouter>
        <UpdateProfile />
      </MemoryRouter>
    );

    const label = screen.getByLabelText('Nome Completo*');
    expect(label).not.toBeNull();

    const input = screen.getByPlaceholderText('Informe seu nome');
    expect(input).not.toBeNull();

    const span = screen.getByText('Nome Completo deve ter pelo menos 3 caracteres');
    expect(span).not.toBeNull();

    expect.assertions(3);
  });

  test('should render gender all container checkbox and span', () => {
    render(
      <MemoryRouter>
        <UpdateProfile />
      </MemoryRouter>
    );

    const headerGender = screen.getByTestId('header-gender');
    expect(headerGender).not.toBeNull();

    const containerCheckboxFeminine = screen.getByTestId('container-checkbox-feminine');
    expect(containerCheckboxFeminine).not.toBeNull();

    const spanFeminine = screen.getByText('Feminino');
    expect(spanFeminine).not.toBeNull();

    const containerCheckboxMasculine = screen.getByTestId('container-checkbox-masculine');
    expect(containerCheckboxMasculine).not.toBeNull();

    const spanMasculine = screen.getByText('Masculino');
    expect(spanMasculine).not.toBeNull();

    const containerCheckboxNotInform = screen.getByTestId('container-checkbox-not-inform');
    expect(containerCheckboxNotInform).not.toBeNull();

    const spanNotInform = screen.getByText('Não informar');
    expect(spanNotInform).not.toBeNull();

    expect.assertions(7);
  });

  test('should render label input span birth date', () => {
    render(
      <MemoryRouter>
        <UpdateProfile />
      </MemoryRouter>
    );

    const label = screen.getByLabelText('Data de Nascimento*');
    expect(label).not.toBeNull();

    const input = screen.getByPlaceholderText('00/00/0000');
    expect(input).not.toBeNull();

    const span = screen.getByText('Informe a Data de Nascimento');
    expect(span).not.toBeNull();

    expect.assertions(3);
  });

  test('should render label input span cpf', () => {
    render(
      <MemoryRouter>
        <UpdateProfile />
      </MemoryRouter>
    );

    const label = screen.getByLabelText('CPF');
    expect(label).not.toBeNull();

    const input = screen.getByPlaceholderText('000.000.000-00');
    expect(input).not.toBeNull();

    expect.assertions(2);
  });

  test('should render label input span cell phone', () => {
    render(
      <MemoryRouter>
        <UpdateProfile />
      </MemoryRouter>
    );

    const label = screen.getAllByLabelText('DDD*')[0];
    expect(label).not.toBeNull();

    const input = screen.getAllByPlaceholderText('( 00 )')[0];
    expect(input).not.toBeNull();

    const spanFirst = screen.getAllByText('Erro')[0];
    expect(spanFirst).not.toBeNull();

    const labelCellphone = screen.getByLabelText('Celular*');
    expect(labelCellphone).not.toBeNull();

    const inputCellphone = screen.getByPlaceholderText('00000 - 0000');
    expect(inputCellphone).not.toBeNull();

    const spanSecond = screen.getAllByText('Erro')[1];
    expect(spanSecond).not.toBeNull();

    expect.assertions(6);
  });

  test('should render label input span telephone', () => {
    render(
      <MemoryRouter>
        <UpdateProfile />
      </MemoryRouter>
    );

    const label = screen.getAllByLabelText('DDD*')[1];
    expect(label).not.toBeNull();

    const input = screen.getAllByPlaceholderText('( 00 )')[1];
    expect(input).not.toBeNull();

    const span = screen.getAllByText('Erro')[2];
    expect(span).not.toBeNull();

    const labelTelephone = screen.getByLabelText('Telefone');
    expect(labelTelephone).not.toBeNull();

    const inputTelephone = screen.getByPlaceholderText('0000 - 0000');
    expect(inputTelephone).not.toBeNull();

    const spanSecond = screen.getAllByText('Erro')[3];
    expect(spanSecond).not.toBeNull();

    expect.assertions(6);
  });

  test('should render checkbox complete registration', () => {
    render(
      <MemoryRouter>
        <UpdateProfile />
      </MemoryRouter>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeNull();

    const span = screen.getByTestId('span-checkbox');
    expect(span.textContent?.trim()).toBe(
      'Li, compreendi e concordo com as Condições Gerais, inclusive com relação à proteção de dados pessoais, finalidades e hipóteses de tratamento de dados.'
    );

    const button = screen.getByRole('button', { name: 'SALVAR ATUALIZAÇÕES' });
    expect(button).not.toBeNull();

    expect.assertions(3);
  });
});
