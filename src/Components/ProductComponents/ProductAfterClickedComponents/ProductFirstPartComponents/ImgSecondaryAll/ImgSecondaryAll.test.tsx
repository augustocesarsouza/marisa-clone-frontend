import { render, screen } from '@testing-library/react';
import ImgSecondaryAll from './ImgSecondaryAll';

describe('ImgSecondaryAll', () => {
  const containerAllImgContainersRef = {
    current: [] as HTMLDivElement[],
  };

  const imgsSecondaryAll = ['img1.jpg', 'img2.jpg'];

  const setWhichImgIndex = jest.fn();

  const carouselCustom = {
    current: document.createElement('div') as HTMLDivElement,
  };

  test('should render all imgs secondary', () => {
    render(
      <ImgSecondaryAll
        imgsSecondaryAll={imgsSecondaryAll}
        containerAllImgContainersRef={containerAllImgContainersRef}
        setWhichImgIndex={setWhichImgIndex}
        carouselCustom={carouselCustom}
      />
    );

    const containerAllImgs = screen.getByTestId('container-all-imgs-secondary');
    const allImgs = containerAllImgs.childNodes;
    expect(allImgs.length).toBe(2);

    expect.assertions(1);
  });
});
