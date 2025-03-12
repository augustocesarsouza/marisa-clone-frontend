import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  test('should render container departments h1 and spands', () => {
    render(<AboutUs />);

    const container = screen.getByTestId('container-departments');
    const h1 = container.getElementsByTagName('h1')[0] as HTMLHeadingElement;
    expect(h1.textContent?.trim()).toBe('Departamentos');

    const spans = container.getElementsByTagName('span');
    expect(spans.length).toBe(11);

    expect.assertions(2);
  });

  test('should render container institutional h1 and spands', () => {
    render(<AboutUs />);

    const container = screen.getByTestId('container-institutional');
    const h1 = container.getElementsByTagName('h1')[0] as HTMLHeadingElement;
    expect(h1.textContent?.trim()).toBe('Institucional');

    const spans = container.getElementsByTagName('span');
    expect(spans.length).toBe(13);

    expect.assertions(2);
  });

  test('should render container customer service h1 and spands', () => {
    render(<AboutUs />);

    const container = screen.getByTestId('container-customer-service');
    const h1 = container.getElementsByTagName('h1')[0] as HTMLHeadingElement;
    expect(h1.textContent?.trim()).toBe('Atendimento ao Cliente');

    const spans = container.getElementsByTagName('span');
    expect(spans.length).toBe(9);

    expect.assertions(2);
  });

  test('should render container wirk with us h1 and spands', () => {
    render(<AboutUs />);

    const container = screen.getByTestId('container-wirk-with-us');
    const h1 = container.getElementsByTagName('h1')[0] as HTMLHeadingElement;
    expect(h1.textContent?.trim()).toBe('Trabalhe Conosco');

    const spans = container.getElementsByTagName('span');
    expect(spans.length).toBe(2);

    expect.assertions(2);
  });

  test('should render container announcements h1 and spands', () => {
    render(<AboutUs />);

    const container = screen.getByTestId('container-announcements');
    const h1 = container.getElementsByTagName('h1')[0] as HTMLHeadingElement;
    expect(h1.textContent?.trim()).toBe('Comunicados');

    const spans = container.getElementsByTagName('span');
    expect(spans.length).toBe(1);

    expect.assertions(2);
  });

  test('should render header not found', () => {
    render(<AboutUs />);

    const heading = screen.getByRole('heading', { name: 'Não encontrou o que estava procurando?' });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent?.trim()).toBe('Não encontrou o que estava procurando?');

    expect.assertions(2);
  });

  test('should render img message', () => {
    render(<AboutUs />);

    const img = screen.getByAltText('img-message');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741706148/imgs-backend-frontend-marisa/frontend/ico_ajuda_dytfie.webp'
    );

    expect.assertions(1);
  });

  test('should render img location', () => {
    render(<AboutUs />);

    const img = screen.getByAltText('img-location');
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1741707471/imgs-backend-frontend-marisa/frontend/ico_localizacao_cinza_nfjrrk.webp'
    );

    expect.assertions(1);
  });

  test('should render container we can help text', () => {
    render(<AboutUs />);

    const container = screen.getByTestId('container-we-can-help');
    expect(container.textContent?.trim()).toBe('Podemos ajudar? Fale conosco.');

    expect.assertions(1);
  });

  test('should render container find the stores text', () => {
    render(<AboutUs />);

    const container = screen.getByTestId('container-find-the-stores');
    expect(container.textContent?.trim()).toBe('Encontre as lojas mais próximas.');

    expect.assertions(1);
  });
});
