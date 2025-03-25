import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import PasswordChangedSuccessfully from './PasswordChangedSuccessfully';

describe('PasswordChangedSuccessfully', () => {
  test('should render header password changed successfully', () => {
    const passwordChangedSuccessfully = true;

    render(
      <PasswordChangedSuccessfully passwordChangedSuccessfully={passwordChangedSuccessfully} />
    );

    const header = screen.getByRole('heading', { name: /Senha alterada com sucesso/i });
    expect(header).toBeInTheDocument();
  });
});
