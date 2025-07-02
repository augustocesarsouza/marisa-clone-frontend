import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Product } from '../../../../Interfaces/Entity/Product';
import SvgArrowShowImgProduct from '../../../../Svg/SvgArrowShowImgProduct/SvgArrowShowImgProduct';
import SvgHeart from '../../../../Svg/SvgHeart/SvgHeart';
import SvgHeartColor from '../../../../Svg/SvgHeartColor/SvgHeartColor';
import SvgMagnifyingGlass from '../../../../Svg/SvgMagnifyingGlass/SvgMagnifyingGlass';
import * as Styled from './styled';
import userProductLikeService, {
  ReturnGetUserProductLike,
} from '../../../../Service/UserProductLikeService/UserProductLikeService';
import { User } from '../../../../Interfaces/Entity/User.';
import { ReturnErroCatch } from '../../../../Service/UserService/UserService';
import { UserProductLike } from '../../../../Interfaces/Entity/UserProductLike';

interface ProductImageGalleryProps {
  product: Product;
  user: User;
  containerAllImgContainersRef: React.RefObject<HTMLDivElement[]>;
  imgsSecondaryAll: string[] | [];
  setWhichImgIndex: (value: React.SetStateAction<number>) => void;
  carouselCustom: React.RefObject<HTMLDivElement | null>;
}

const ProductImageGallery = ({
  product,
  user,
  containerAllImgContainersRef,
  imgsSecondaryAll,
  setWhichImgIndex,
  carouselCustom,
}: ProductImageGalleryProps) => {
  const containerImgMain = useRef<HTMLDivElement | null>(null);
  const imgProductRef = useRef<HTMLImageElement | null>(null);

  const imgsSecondaryAllRef = useRef<string[]>([]);

  const [alreadyClickedContainerZoom, setAlreadyClickedContainerZoom] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  const [whichHeartShowRed, setWhichHeartShowRed] = useState(false);

  const GetUserProductLikeByProductIdUserId = useCallback(
    async (productId: string, userId: string, token: string) => {
      const respSend = await userProductLikeService.GetUserProductLikeByProductIdUserId(
        productId,
        userId,
        token
      );

      if (respSend.isSucess) {
        const resp = respSend as ReturnGetUserProductLike;

        if (resp.message === 'object not found') {
          setWhichHeartShowRed(false);
        }

        if (resp.message === undefined) {
          setWhichHeartShowRed(true);
          // se nao tiver claro isso pode criar uma class que te avisa e tem objeto ou nao
        }
      } else {
        const respError = respSend as ReturnErroCatch;
        console.log(respError);
      }
    },
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setWhichImgIndex((index) => {
        const scrollElement = carouselCustom.current as HTMLDivElement;
        const valueDistance = scrollElement.offsetWidth;
        const targetScrollLeft = index * valueDistance;

        const distance = targetScrollLeft - scrollElement.scrollLeft;

        smoothScrollBy(scrollElement, distance, 30, () => {
          isScrollingRef.current = false;
        });

        return index;
      });
    };

    window.addEventListener('resize', handleResize);

    imgsSecondaryAllRef.current = imgsSecondaryAll;

    const token = user.token;
    const productId = product.id;

    if (user.id && token) {
      GetUserProductLikeByProductIdUserId(productId, user.id, token);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [user, GetUserProductLikeByProductIdUserId, imgsSecondaryAll]);

  const onClickMagnifyingGlass = () => {
    const container = containerImgMain.current as HTMLDivElement;

    if (!alreadyClickedContainerZoom) {
      container.style.cursor = 'zoom-in';
      setAlreadyClickedContainerZoom(true);
    } else {
      container.style.cursor = 'pointer';
      setAlreadyClickedContainerZoom(false);
      const img = imgProductRef.current as HTMLImageElement;
      img.style.transform = 'scale(1)';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({ x, y });
  };

  const onMouseEnterContainerImg = () => {};

  const onMouseLeaveContainerImg = () => {
    const container = containerImgMain.current as HTMLDivElement;
    container.style.cursor = 'pointer';

    setAlreadyClickedContainerZoom(false);
  };

  const onClickCreateOrDeleteHeart = async () => {
    if (user === null) return;

    var token = user.token;
    var userId = user.id;

    if (userId === null || token === null) return;

    const obj: UserProductLike = {
      id: null,
      productId: null,
      productIdString: product.id,
      product: null,
      userId: null,
      userIdString: userId,
      user: null,
      likedAt: null,
    };

    const respSend = await userProductLikeService.create(obj, userId, token);

    if (respSend && respSend.isSucess) {
      const data = respSend.data;

      if (data.deleted) {
        setWhichHeartShowRed(false);
      }

      if (data.created) {
        setWhichHeartShowRed(true);
      }
    }
  };

  const containerArrowLeft = useRef<HTMLDivElement>(null);
  const containerArrowRight = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollElement = carouselCustom.current;
    const containerLeft = containerArrowLeft.current;
    const containerRight = containerArrowRight.current;

    const updateArrowsVisibility = () => {
      if (scrollElement) {
        let maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

        if (maxScrollLeft === 0) {
          maxScrollLeft = 10;
        }

        containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
        containerRight!.style.display = scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
      }
    };

    containerLeft?.addEventListener('click', scrollLeft);
    containerRight?.addEventListener('click', scrollRight);
    scrollElement?.addEventListener('scroll', updateArrowsVisibility);
    window.addEventListener('resize', updateArrowsVisibility);

    updateArrowsVisibility();

    return () => {
      containerLeft?.removeEventListener('click', scrollLeft);
      containerRight?.removeEventListener('click', scrollRight);
      scrollElement?.removeEventListener('scroll', updateArrowsVisibility);
      window.removeEventListener('resize', updateArrowsVisibility);
    };
  }, []);

  const isScrollingRef = useRef(false);

  const scrollLeft = () => {
    if (!isScrollingRef.current) {
      isScrollingRef.current = true;

      const scrollElement = carouselCustom.current as HTMLDivElement;
      const valueDistance = scrollElement.offsetWidth;

      smoothScrollBy(scrollElement, -valueDistance, 500, () => {
        isScrollingRef.current = false;
      });

      setWhichImgIndex((prev) => {
        if (prev > 0) {
          const index = prev - 1;
          applyBorder(index);
          return index;
        }
        return prev;
      });
    }
  };

  const scrollRight = () => {
    if (!isScrollingRef.current) {
      isScrollingRef.current = true;

      const scrollElement = carouselCustom.current as HTMLDivElement;
      const valueDistance = scrollElement.offsetWidth;

      smoothScrollBy(scrollElement, valueDistance, 500, () => {
        isScrollingRef.current = false;
      });

      setWhichImgIndex((prev) => {
        if (prev < imgsSecondaryAllRef.current.length - 1) {
          const index = prev + 1;
          applyBorder(index);
          return index;
        }
        return prev;
      });
    }
  };

  const applyBorder = (index: number) => {
    const arrayContainer = containerAllImgContainersRef.current;

    arrayContainer.forEach((el) => {
      el.style.borderBottom = 'none';
    });

    const container = arrayContainer[index];
    if (container) {
      container.style.borderBottom = '3px solid #ec008c';
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
    <Styled.ContainerImgMain
      ref={containerImgMain}
      onMouseEnter={onMouseEnterContainerImg}
      onMouseLeave={onMouseLeaveContainerImg}>
      <div className="flex items-center justify-center w-[64px] absolute left-4 top-4 !py-[2px] bg-[#2ddf89] text-[13px] font-semibold text-[#fff] z-5">
        <span>-{product.discountPercentage}%</span>
      </div>

      <Styled.containerSvgArrowLeft ref={containerArrowLeft} data-testid="container-svg-arrow-left">
        <SvgArrowShowImgProduct />
      </Styled.containerSvgArrowLeft>

      <div
        className="flex flex-wrap overflow-y-hidden overflow-x-hidden flex-col"
        style={{ scrollBehavior: 'smooth' }}
        ref={carouselCustom}
        data-testid="container-all-imgs-product">
        {imgsSecondaryAll.length > 0 &&
          imgsSecondaryAll.map((el, i) => (
            <Styled.ContainerImgSecond
              key={i}
              className="overflow-hidden relative"
              onMouseMove={alreadyClickedContainerZoom ? handleMouseMove : undefined}>
              <img
                src={el}
                alt="img-main"
                className="w-full h-full object-cover transition-transform duration-300"
                ref={imgProductRef}
                style={{
                  transform: alreadyClickedContainerZoom ? 'scale(2)' : 'scale(1)',
                  transformOrigin: `${origin.x}% ${origin.y}%`,
                }}
              />
            </Styled.ContainerImgSecond>
          ))}
      </div>

      <Styled.containerSvgArrowRight
        ref={containerArrowRight}
        data-testid="container-svg-arrow-right">
        <SvgArrowShowImgProduct />
      </Styled.containerSvgArrowRight>

      <div className="flex flex-col absolute right-4 top-4">
        {whichHeartShowRed ? (
          <div
            className="flex items-center justify-center w-[40px] h-[40px] rounded-4xl bg-[#fff] !mb-[5px] cursor-pointer"
            onClick={onClickCreateOrDeleteHeart}>
            <SvgHeartColor fill="#ec008d" width="16px" height="16px" />
          </div>
        ) : (
          <div
            className="flex items-center justify-center w-[40px] h-[40px] rounded-4xl bg-[#fff] !mb-[5px] cursor-pointer"
            data-testid="container-svg-heart"
            onClick={onClickCreateOrDeleteHeart}>
            <SvgHeart fill="#0000007a" width="16px" height="16px" />
          </div>
        )}
        <div
          className="flex items-center justify-center w-[40px] h-[40px] rounded-4xl bg-[#fff] cursor-pointer"
          data-testid="container-svg-magnifying-glass"
          onClick={onClickMagnifyingGlass}>
          <SvgMagnifyingGlass fill="#0000007a" width="16px" height="16px" />
        </div>
      </div>
    </Styled.ContainerImgMain>
  );
};

export default ProductImageGallery;
