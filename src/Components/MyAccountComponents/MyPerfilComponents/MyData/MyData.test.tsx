import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import MyData from './MyData';

describe('MyData', () => {
  test('should render header my data ', () => {
    render(<MyData />);

    const header = screen.getByRole('heading', { name: /MyData/i });
    expect(header).toBeInTheDocument();
  });
});
