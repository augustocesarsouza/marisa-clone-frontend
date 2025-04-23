import { MemoryRouter } from 'react-router-dom';
import AddressDisplayedMain from './AddressDisplayedMain';
import { render, screen } from '@testing-library/react';

describe('AddressDisplayedMain', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  test('should render itens', () => {
    render(
      <MemoryRouter>
        <AddressDisplayedMain />
      </MemoryRouter>
    );

    const span = screen.getByText('Não há endereço cadastrado.');
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });
});
