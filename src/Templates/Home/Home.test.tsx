import '@testing-library/jest-dom';
import Home from './Home';
import { render } from '@testing-library/react';

describe('BodyComponentsMain', () => {
  test('should render itens', () => {
    render(<Home />);

    expect.assertions(0);
  });
});
