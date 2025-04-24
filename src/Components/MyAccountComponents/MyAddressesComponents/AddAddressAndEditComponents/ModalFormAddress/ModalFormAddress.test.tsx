import ModalFormAddress from './ModalFormAddress';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('ModalFormAddress', () => {
  test('should render all prop address-nickname', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-address-nickname');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/apelido do endereço. Ex.: casa da mãe/i);
    expect(input).toBeInTheDocument();

    const errorSpan = screen.getByText(/Informe Apelido do Endereço/i);
    expect(errorSpan).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render all prop type-of-address', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-type-of-address');
    expect(label).toBeInTheDocument();

    const optionDefault = screen.getByTestId('option-type-address');
    expect(optionDefault).toHaveTextContent('Tipo de Endereço');

    const optionResidential = screen.getByTestId('option-type-address-residential');
    expect(optionResidential).toHaveTextContent('Residencial');

    const optionCommercial = screen.getByTestId('option-type-address-commercial');
    expect(optionCommercial).toHaveTextContent('Comercial');

    const errorSpan = screen.getByText(/Informe Tipo de Endereço/i);
    expect(errorSpan).toBeInTheDocument();

    expect.assertions(5);
  });

  test('should render all prop recipient-name', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-recipient-name');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/nome do destinatário/i);
    expect(input).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render all prop cep', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-cep');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/cep/i);
    expect(input).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render all prop address', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-address');
    expect(label).toBeInTheDocument();

    const spanAsteriskFirst = container.querySelector('.number-asterisk-first');
    expect(spanAsteriskFirst).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/número/i);
    expect(input).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render all prop number', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-number');
    expect(label).toBeInTheDocument();

    const spanAsteriskFirst = container.querySelector('.number-asterisk-second');
    expect(spanAsteriskFirst).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/número/i);
    expect(input).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render all prop complement', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-complement');
    expect(label).toBeInTheDocument();

    const spanAsteriskFirst = container.querySelector('.number-asterisk-third');
    expect(spanAsteriskFirst).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/complemento/i);
    expect(input).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render all prop neighborhood', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-neighborhood');
    expect(label).toBeInTheDocument();

    const spanAsteriskFirst = container.querySelector('.number-asterisk-fourth');
    expect(spanAsteriskFirst).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/bairro/i);
    expect(input).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render all prop city', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-city');
    expect(label).toBeInTheDocument();

    const spanAsteriskFirst = container.querySelector('.number-asterisk-fifth');
    expect(spanAsteriskFirst).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/cidade/i);
    expect(input).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render all prop uf', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-uf');
    expect(label).toBeInTheDocument();

    const spanAsteriskFirst = container.querySelector('.number-asterisk-sixth');
    expect(spanAsteriskFirst).toBeInTheDocument();

    const optionUf = container.querySelector('.option-uf');
    expect(optionUf).toBeInTheDocument();

    expect.assertions(3);
  });

  test('should render all prop reference-point', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const label = container.querySelector('.label-reference-point');
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/ponto de referência/i);
    expect(input).toBeInTheDocument();

    expect.assertions(2);
  });

  test('should render span field requires', () => {
    const { container } = render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const span = container.querySelector('.span-marked-fields-are-requires');
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render Cancel and Save buttons', () => {
    render(
      <MemoryRouter>
        <ModalFormAddress addressUser={null} />
      </MemoryRouter>
    );

    const cancelButton = screen.getByText('Cancelar');
    expect(cancelButton).toBeInTheDocument();

    const saveButton = screen.getByText('Salvar');
    expect(saveButton).toBeInTheDocument();
  });
});
