// import * as Styled from './styled';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

interface objsHighlight {
  src: string;
  alt: string;
}

const HighlightImgs = () => {
  const containerOverflowImgsRef = useRef<HTMLDivElement | null>(null);

  const containerArrowLeftRef = useRef<HTMLDivElement | null>(null);
  const containerArrowRightRef = useRef<HTMLDivElement | null>(null);

  const [arrayImgHighlight, setArrayImgHighlight] = useState<objsHighlight[]>([]);

  const containerAllBallRef = useRef<HTMLDivElement[]>([]);
  const lastValueIndexRef = useRef(0);

  useEffect(() => {
    const aarrayObjetos: objsHighlight[] = [];

    const obj1: objsHighlight = {
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746448744/imgs-backend-frontend-marisa/frontend/FIRST_xqnnml.gif',
      alt: 'first-img-highlight',
    };

    const obj2: objsHighlight = {
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746448691/imgs-backend-frontend-marisa/frontend/SECOND_pmmi5w.gif',
      alt: 'second-img-highlight',
    };

    const obj3: objsHighlight = {
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746448827/imgs-backend-frontend-marisa/frontend/THIRD_cuwjsv.gif',
      alt: 'third-img-highlight',
    };

    const obj4: objsHighlight = {
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746449116/imgs-backend-frontend-marisa/frontend/FOURTH_lcqj4f.gif',
      alt: 'fourth-img-highlight',
    };

    const obj5: objsHighlight = {
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746449180/imgs-backend-frontend-marisa/frontend/FIFTH_raw0sa.gif',
      alt: 'fifth-img-highlight',
    };

    aarrayObjetos.push(obj1, obj2, obj3, obj4, obj5);
    setArrayImgHighlight(aarrayObjetos);
  }, []);

  useEffect(() => {
    const scrollElement = containerOverflowImgsRef.current as HTMLDivElement;

    const handleResize = () => {
      const img = scrollElement.querySelector('img');
      if (!img) return;
      const imgWidth = img.clientWidth;

      // Centraliza novamente na imagem correta
      scrollElement.scrollTo({
        left: imgWidth * lastValueIndexRef.current,
        behavior: 'auto',
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const putSetIntervalToPassImgBall = () => {
    timeoutRef.current = setInterval(async () => {
      let value = lastValueIndexRef.current + 1;

      if (value > 4) {
        value = 0;
      }

      await onClickContainerBall(value);
    }, 5000);
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      const array = containerAllBallRef.current;

      array.map((el) => {
        el.style.backgroundColor = '#CFCFCF';
      });

      const obj = array[0];

      if (obj) {
        obj.style.backgroundColor = '#ec008c';
      }
    }, 10);

    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }

    putSetIntervalToPassImgBall();
  }, [putSetIntervalToPassImgBall]);

  const isAnimatingRef = useRef(false);
  const isAnimatingBallRef = useRef(false);

  const onClickContainerBall = useCallback(
    async (i: number) => {
      if (isAnimatingBallRef.current) return;

      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }

      putSetIntervalToPassImgBall();

      isAnimatingBallRef.current = true;

      const scrollElement = containerOverflowImgsRef.current as HTMLDivElement;
      const array = containerAllBallRef.current;

      array.map((el) => {
        el.style.backgroundColor = '#CFCFCF';
      });

      const obj = array[i];
      if (obj) {
        obj.style.backgroundColor = '#ec008c';
      }

      const value = Math.abs(i - lastValueIndexRef.current);
      const valueQuantityWidth = scrollElement.clientWidth * value;

      if (i > lastValueIndexRef.current) {
        await animateScrollBy(scrollElement, valueQuantityWidth, 404);
      } else {
        await animateScrollBy(scrollElement, -valueQuantityWidth, 404);
      }

      lastValueIndexRef.current = i;
      isAnimatingBallRef.current = false;
    },
    [putSetIntervalToPassImgBall] // adicione as dependências aqui se houver
  );

  const activeScrollRightLeft = useCallback(() => {
    const scrollElement = containerOverflowImgsRef.current as HTMLDivElement;
    const containerArrowLeft = containerArrowLeftRef.current as HTMLDivElement;
    const containerArrowRight = containerArrowRightRef.current as HTMLDivElement;

    const scrollLeft = async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      await onClickContainerBall(lastValueIndexRef.current - 1);

      isAnimatingRef.current = false;
    };

    const scrollRight = async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      await onClickContainerBall(lastValueIndexRef.current + 1);

      isAnimatingRef.current = false;
    };

    const updateArrowsVisibility = () => {
      if (scrollElement) {
        const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
        containerArrowLeft.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';

        containerArrowRight.style.display =
          scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
      }
    };

    containerArrowLeft.addEventListener('click', scrollLeft);
    containerArrowRight.addEventListener('click', scrollRight);
    scrollElement.addEventListener('scroll', updateArrowsVisibility);
  }, [onClickContainerBall]);

  const animateScrollBy = (
    element: HTMLDivElement,
    deltaX: number,
    duration: number = 500
  ): Promise<void> => {
    return new Promise((resolve) => {
      const start = element.scrollLeft;
      const startTime = performance.now();

      const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // limite até 1
        element.scrollLeft = start + deltaX * easeInOutQuad(progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve();
        }
      };

      requestAnimationFrame(animate);
    });
  };

  useLayoutEffect(() => {
    activeScrollRightLeft();
  }, [activeScrollRightLeft]);

  return (
    <div className="flex flex-col relative">
      <div className="flex h-[39px]">
        <img
          className="w-full h-full"
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746447792/imgs-backend-frontend-marisa/frontend/Faixa-20241217-FRETE-GRATIS-BRASIL-249-Desktop_ikgbhv.gif"
          alt="img-free-shiping"
        />
      </div>
      <div
        className="hidden absolute left-[20px] top-[45%] w-[40px] h-[40px] cursor-pointer"
        ref={containerArrowLeftRef}>
        <img
          className="flex w-full h-full"
          src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/img/arrow-left-white.svg"
          alt="img-arrow-left"
        />
      </div>
      <div
        className="container-all-imgs-highlight flex overflow-x-hidden scroll-smooth cursor-pointer"
        ref={containerOverflowImgsRef}>
        {arrayImgHighlight.length > 0 &&
          arrayImgHighlight.map((el, i) => <img src={el.src} alt={el.alt} key={i} />)}
      </div>

      <div className="container-quantity-imgs-balls flex justify-center !pt-[15px] gap-[15px]">
        {arrayImgHighlight.length > 0 &&
          arrayImgHighlight.map((_el, i) => (
            <div
              className="w-[14px] h-[14px] bg-[#CFCFCF] rounded-2xl cursor-pointer"
              onClick={() => onClickContainerBall(i)}
              key={i}
              ref={(el) => {
                if (el) containerAllBallRef.current[i] = el;
              }}></div>
          ))}
      </div>

      <div
        className="flex absolute right-[20px] top-[45%] w-[40px] h-[40px] cursor-pointer"
        ref={containerArrowRightRef}>
        <img
          className="flex w-full h-full"
          src="https://scripts2.marisa.com.br/_ui/responsive/theme-marisa/img/arrow-right-white.svg"
          alt="img-arrow-right"
        />
      </div>
    </div>
  );
};

export default HighlightImgs;
