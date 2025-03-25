import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import QuantityNumberOfAttempts from './QuantityNumberOfAttempts';

describe('QuantityNumberOfAttempts', () => {
  test('should render span number of attempts', () => {
    const numberOfAttempts = 1;

    render(<QuantityNumberOfAttempts numberOfAttempts={numberOfAttempts} />);

    const span = screen.getByText(`${numberOfAttempts} de 3 tentativas para alterar senha`);
    expect(span).toBeInTheDocument();
  });
});
