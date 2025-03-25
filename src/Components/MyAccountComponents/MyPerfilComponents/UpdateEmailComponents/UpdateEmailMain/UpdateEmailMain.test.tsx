import { MemoryRouter } from 'react-router-dom';
import UpdateEmailMain from './UpdateEmailMain';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('UpdateEmailMain', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() },
      writable: true,
    });
  });

  test('should render header change email', () => {
    render(
      <MemoryRouter>
        <UpdateEmailMain />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /Alterar E-mail do Cadastro/i });
    expect(header).toBeInTheDocument();
  });

  test('should render label input email', () => {
    render(
      <MemoryRouter>
        <UpdateEmailMain />
      </MemoryRouter>
    );

    const label = screen.getAllByLabelText(/E-mail cadastrado \*/i)[0];
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText('');
    expect(input).toBeInTheDocument();
  });

  test('should render img message', () => {
    render(
      <MemoryRouter>
        <UpdateEmailMain />
      </MemoryRouter>
    );

    const img = screen.getByAltText('img-question-mark');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1742914067/imgs-backend-frontend-marisa/frontend/question_mark_gzk71i.webp'
    );

    expect.assertions(1);
  });
});
