import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VoucherExchangeMain from './VoucherExchangeMain';

describe('VoucherExchangeMain', () => {
  test('should render heading pending', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Pendentes/i });
    expect(header).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render heading refunds', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Reembolsos/i });
    expect(header).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render heading exchange voucher', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Vale Troca/i });
    expect(header).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render span exchange vouchers available', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const span = screen.getByText(/Vales-troca disponíveis/i);
    expect(span).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render span warning exchange vouchers', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const span = screen.getByText(
      /Caso não tenha o número do seu vale-troca, baixe nosso aplicativo e consulte o número./i
    );
    expect(span).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render th Exchange vouchers available TH code exchange vouchers', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const th = screen.getAllByText(/Código do vale troca/i)[0];
    expect(th).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render th Exchange vouchers available TH Expiration Date', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const th = screen.getAllByText(/Data de Validade/i)[0];
    expect(th).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render th Exchange vouchers available TH Value', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const th = screen.getAllByText(/Valor/i)[0];
    expect(th).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render Exchange Vouchers Used TH code exchange vouchers', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const th = screen.getAllByText(/Código do vale troca/i)[1];
    expect(th).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render Exchange Vouchers Used TH Expiration Date', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const th = screen.getAllByText(/Data de Validade/i)[1];
    expect(th).toBeInTheDocument();
    expect.assertions(1);
  });

  test('should render Exchange Vouchers Used TH Value', () => {
    render(
      <MemoryRouter>
        <VoucherExchangeMain />
      </MemoryRouter>
    );

    const th = screen.getAllByText(/Valor/i)[1];
    expect(th).toBeInTheDocument();
    expect.assertions(1);
  });
});
