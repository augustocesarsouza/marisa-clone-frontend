import { render, screen } from '@testing-library/react';
import ProductImageGallery from './ProductImageGallery';
import { Product } from '../../../../Interfaces/Entity/Product';
import { User } from '../../../../Interfaces/Entity/User.';

describe('ProductImageGallery', () => {
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

  const user: User = {
    id: '',
    name: '',
    email: '',
    birthDate: null,
    cpf: null,
    gender: null,
    cellPhone: null,
    telephone: null,
    passwordHash: null,
    salt: null,
    userImage: null,
    token: null,
    tokenForCreation: null,
    password: null,
    birthDateString: null,
  };

  const containerAllImgContainersRef = {
    current: [] as HTMLDivElement[],
  };

  const imgsSecondaryAll = ['img1.jpg', 'img2.jpg'];

  const setWhichImgIndex = jest.fn();

  const carouselCustom = {
    current: document.createElement('div') as HTMLDivElement,
  };

  test('should render span discount percentage', () => {
    render(
      <ProductImageGallery
        product={product}
        user={user}
        containerAllImgContainersRef={containerAllImgContainersRef}
        imgsSecondaryAll={imgsSecondaryAll}
        setWhichImgIndex={setWhichImgIndex}
        carouselCustom={carouselCustom}
      />
    );

    const span = screen.getByText(`-${product.discountPercentage}%`);
    expect(span).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render svg arrow left', () => {
    render(
      <ProductImageGallery
        product={product}
        user={user}
        containerAllImgContainersRef={containerAllImgContainersRef}
        imgsSecondaryAll={imgsSecondaryAll}
        setWhichImgIndex={setWhichImgIndex}
        carouselCustom={carouselCustom}
      />
    );

    const containerArrowLeft = screen.getByTestId('container-svg-arrow-left');
    const arrowLeft = containerArrowLeft.firstChild as SVGElement;
    expect(arrowLeft).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render all imgs container', () => {
    render(
      <ProductImageGallery
        product={product}
        user={user}
        containerAllImgContainersRef={containerAllImgContainersRef}
        imgsSecondaryAll={imgsSecondaryAll}
        setWhichImgIndex={setWhichImgIndex}
        carouselCustom={carouselCustom}
      />
    );

    const containerAllImgs = screen.getByTestId('container-all-imgs-product');
    const allImgs = containerAllImgs.childNodes;
    expect(allImgs.length).toBe(2);

    expect.assertions(1);
  });

  test('should render svg arrow right', () => {
    render(
      <ProductImageGallery
        product={product}
        user={user}
        containerAllImgContainersRef={containerAllImgContainersRef}
        imgsSecondaryAll={imgsSecondaryAll}
        setWhichImgIndex={setWhichImgIndex}
        carouselCustom={carouselCustom}
      />
    );

    const containerArrowRight = screen.getByTestId('container-svg-arrow-right');
    const arrowRight = containerArrowRight.firstChild as SVGElement;
    expect(arrowRight).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render svg heart', () => {
    render(
      <ProductImageGallery
        product={product}
        user={user}
        containerAllImgContainersRef={containerAllImgContainersRef}
        imgsSecondaryAll={imgsSecondaryAll}
        setWhichImgIndex={setWhichImgIndex}
        carouselCustom={carouselCustom}
      />
    );

    const containerSvgHeart = screen.getByTestId('container-svg-heart');
    const svgHeart = containerSvgHeart.firstChild as SVGElement;
    expect(svgHeart).toBeInTheDocument();

    expect.assertions(1);
  });

  test('should render svg magnifying glass', () => {
    render(
      <ProductImageGallery
        product={product}
        user={user}
        containerAllImgContainersRef={containerAllImgContainersRef}
        imgsSecondaryAll={imgsSecondaryAll}
        setWhichImgIndex={setWhichImgIndex}
        carouselCustom={carouselCustom}
      />
    );

    const containerSvgMagnifyingGlass = screen.getByTestId('container-svg-magnifying-glass');
    const svgMagnifyingGlass = containerSvgMagnifyingGlass.firstChild as SVGElement;
    expect(svgMagnifyingGlass).toBeInTheDocument();

    expect.assertions(1);
  });
});
