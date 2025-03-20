import { render } from '@testing-library/react';
// import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import HeaderMyAccount from './HeaderMyAccount';

describe('HeaderMyAccount', () => {
  it('should render span receive news', () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderMyAccount />
      </MemoryRouter>
    );

    const header = container.querySelector('.header-my-account') as HTMLHeadingElement;
    expect(header.textContent?.trim()).toBe('Minha Conta');

    expect.assertions(1);
  });
});
