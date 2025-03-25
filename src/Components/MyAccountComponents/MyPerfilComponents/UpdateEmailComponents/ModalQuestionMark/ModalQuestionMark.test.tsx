import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import ModalQuestionMark from './ModalQuestionMark';

describe('ModalQuestionMark', () => {
  test('should render span main', () => {
    render(
      <MemoryRouter>
        <ModalQuestionMark />
      </MemoryRouter>
    );

    const span = screen.getByText(
      'Para alterar o e-mail cadastrado, por favor, entre em contato com o nosso SAC pelo número (11) 3383-7222.'
    );
    expect(span).toBeInTheDocument();
  });
});
