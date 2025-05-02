import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import NavigationBody from './NavigationBody';

describe('NavigationBody', () => {
  test('should render itens', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();

    render(
      <NavigationBody
        whichNavigationOver=""
        mouseEnterNavigation={fn1}
        mouseLeaveNavigation={fn2}
      />
    );

    const spans = screen.getAllByTestId('span-nav');
    expect(spans.length).toBe(10);

    const array = [
      'Feminino',
      'Calçados',
      'Lingerie',
      'Jeans',
      'Masculino',
      'Infantil',
      'Plus Size',
      'Acessórios',
      'Casa',
      'Oferta',
    ];

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      expect(spans[i].textContent?.trim()).toBe(element);
    }

    expect.assertions(11);
  });
});
