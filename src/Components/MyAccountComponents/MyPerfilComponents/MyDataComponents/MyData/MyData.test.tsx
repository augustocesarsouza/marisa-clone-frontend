import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import MyData from './MyData';
import { MemoryRouter } from 'react-router-dom';

describe('MyData', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() },
      writable: true,
    });
  });

  test('should render header my data', () => {
    render(
      <MemoryRouter>
        <MyData />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Meu perfil/i });
    expect(header).toBeInTheDocument();
  });
});
