import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import TimeRemaining from './TimeRemaining';

describe('TimeRemaining', () => {
  test('should render span try again in a few seconds', () => {
    const timeRemaining = 1;

    render(<TimeRemaining timeRemaining={timeRemaining} />);

    const span = screen.getByText(`Tente novamente em ${timeRemaining} segundos`);
    expect(span).toBeInTheDocument();
  });
});
