import { useRef } from 'react';
// import * as Styled from './styled';

interface ImgSecondaryAllProps {
  imgsSecondaryAll: string[];
  containerAllImgContainersRef: React.RefObject<HTMLDivElement[]>;
  setWhichImgIndex: React.Dispatch<React.SetStateAction<number>>;
  carouselCustom: React.RefObject<HTMLDivElement | null>;
}

const ImgSecondaryAll = ({
  imgsSecondaryAll,
  containerAllImgContainersRef,
  setWhichImgIndex,
  carouselCustom,
}: ImgSecondaryAllProps) => {
  const isScrollingRef = useRef(false);

  const onClickContainerImg = (index: number) => {
    if (!isScrollingRef.current) {
      isScrollingRef.current = true;

      setWhichImgIndex(index);

      const arrayContainer = containerAllImgContainersRef.current;

      arrayContainer.forEach((el) => {
        el.style.borderBottom = 'none';
      });

      const container = arrayContainer[index];
      container.style.borderBottom = '3px solid #ec008c';

      const scrollElement = carouselCustom.current as HTMLDivElement;
      const itemWidth = 630;
      const targetScrollLeft = index * itemWidth;

      const distance = targetScrollLeft - scrollElement.scrollLeft;

      smoothScrollBy(scrollElement, distance, 500, () => {
        isScrollingRef.current = false;
      });
    }
  };

  function smoothScrollBy(
    element: HTMLDivElement,
    distance: number,
    duration = 500,
    callback?: () => void
  ) {
    if (!element) return;

    const start = element.scrollLeft;
    const startTime = performance.now();

    function animate(time: number) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      element.scrollLeft = start + distance * easeInOutQuad(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Animação terminou
        if (callback) callback();
      }
    }

    function easeInOutQuad(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animate);
  }

  return (
    <div className="flex gap-[7px] !mb-[18px]" data-testid="container-all-imgs-secondary">
      {imgsSecondaryAll.length > 0 &&
        imgsSecondaryAll.map((el, i) => (
          <div
            className={`w-[97px] cursor-pointer inline-block outline-none ${i === 0 ? 'border-b-3 border-[#ec008c]' : ''}`}
            onClick={() => onClickContainerImg(i)}
            ref={(ref) => {
              if (ref) {
                containerAllImgContainersRef.current[i] = ref;
              }
            }}
            key={i}>
            <img className="block w-full h-full" src={el} alt="img-secondary" />
          </div>
        ))}
    </div>
  );
};

export default ImgSecondaryAll;
