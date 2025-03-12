import '@testing-library/jest-dom';
import Home from './Home';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('BodyComponentsMain', () => {
  test('should render itens', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect.assertions(0);
  });
});
