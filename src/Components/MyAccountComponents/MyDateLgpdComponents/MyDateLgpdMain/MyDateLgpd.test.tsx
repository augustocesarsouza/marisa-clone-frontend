import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyDateLgpd from './MyDateLgpd';

describe('MyDateLgpd', () => {
  test('should render header and span', () => {
    const { container } = render(
      <MemoryRouter>
        <MyDateLgpd />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /MEUS DADOS/i });
    expect(header).toBeInTheDocument();

    const spanExplaining = container.querySelector('.span-text-explaining-about-deleting-data');
    expect(spanExplaining).toBeInTheDocument();
    expect(spanExplaining?.textContent).toBe(
      'Quer excluir seus Dados?   De acordo com a legislação, a exclusão dos dados pessoais só pode ser realizada se não houver compras nos últimos 5 anos ou faturas do cartão Mbank nos últimos 10 anos.   A Lei Geral de Proteção de Dados (LGPD)permite a retenção de dados para esse fim, conforme o Art. 7º, inciso II.   Durante esse período, não será possível excluir totalmente seus dados.   Para prosseguir com a solicitação, pedimos que envie uma selfie segurando seu RG/CPF para o e-mail: encarregado.dados@marisa.com.br'
    );

    expect.assertions(3);
  });
});
