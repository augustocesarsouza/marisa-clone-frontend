import { render, screen } from '@testing-library/react';
import { Product } from '../../../../Interfaces/Entity/Product';
import ProductDetailsAccordion from './ProductDetailsAccordion';
import { ProductAdditionalInfo } from '../../../../Interfaces/Entity/ProductAdditionalInfo';

describe('ProductDetailsAccordion', () => {
  const product: Product = {
    category: 'Moda Feminina',
    code: 86612407029,
    colors: ['black', 'brown', 'yellow'],
    discountPercentage: 31,
    id: 'f40975ac-31dc-45cd-b38f-2d6bfefa5ac9',
    imageUrl:
      'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/imgs-backend-frontend-marisa/backend/product/fzeneqaf8ml3e2pqjsmk',
    installmentPrice: 6.998,
    installmentTimesCreditCard: 3,
    installmentTimesMarisaCard: 5,
    price: 34.99,
    priceDiscounted: 24.143100000000004,
    quantityAvailable: 50,
    sizesAvailable: ['P', 'M', 'G', 'GG'],
    title: 'Blusa Feminina Básica Manga Curta Marisa',
    type: 'festival-de-blusas',
    createdAt: '',
    updatedAt: '',
  };

  const productAdditionalInfoList: ProductAdditionalInfo = {
    id: '',
    aboutProduct: [
      {
        items: ['Informações Adicionais:'],
        title:
          'Blusa feminina, modelo básica, confeccionada em malha viscose. Possui decote redondo canelado, manga curta, acabamento e costura no tom.',
      },
    ],
    imgsSecondary: [
      'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/imgs-backend-frontend-marisa/backend/product/fzeneqaf8ml3e2pqjsmk',
    ],
    composition: '100% viscose',
    shippingInformation: '',
    productId: '',
    product: null,
  };

  test('should render span about product', () => {
    render(
      <ProductDetailsAccordion
        product={product}
        productAdditionalInfoList={productAdditionalInfoList}
      />
    );

    const span = screen.getByText('Sobre o produto');
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render svg arrow', () => {
    render(
      <ProductDetailsAccordion
        product={product}
        productAdditionalInfoList={productAdditionalInfoList}
      />
    );

    const containerAboutTheProduct = screen.getByTestId('container-about-the-product');
    const arrowLeft = containerAboutTheProduct.lastChild as SVGElement;
    expect(arrowLeft).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render header product title', () => {
    render(
      <ProductDetailsAccordion
        product={product}
        productAdditionalInfoList={productAdditionalInfoList}
      />
    );

    const header = screen.getByText(`${product.title}`);
    expect(header).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render header productAdditionalInfo title', () => {
    render(
      <ProductDetailsAccordion
        product={product}
        productAdditionalInfoList={productAdditionalInfoList}
      />
    );

    const span = screen.getByText(`${productAdditionalInfoList.aboutProduct[0].title}`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render header productAdditionalInfo item first', () => {
    render(
      <ProductDetailsAccordion
        product={product}
        productAdditionalInfoList={productAdditionalInfoList}
      />
    );

    const span = screen.getByText(`${productAdditionalInfoList.aboutProduct[0].items[0]}`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span Composition', () => {
    render(
      <ProductDetailsAccordion
        product={product}
        productAdditionalInfoList={productAdditionalInfoList}
      />
    );

    const span = screen.getByText('Composição');
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render header composition', () => {
    render(
      <ProductDetailsAccordion
        product={product}
        productAdditionalInfoList={productAdditionalInfoList}
      />
    );

    const header = screen.getByText(`${productAdditionalInfoList.composition}`);
    expect(header).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render span shipping information', () => {
    render(
      <ProductDetailsAccordion
        product={product}
        productAdditionalInfoList={productAdditionalInfoList}
      />
    );

    const span = screen.getByText('Informações sobre o Frete');
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });
});
