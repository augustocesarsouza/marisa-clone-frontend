import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import SvgArrow from '../../../Svg/SvgArrow/SvgArrow';
import * as Styled from './styled';
import { Product } from '../../../Interfaces/Entity/Product';
import { ProductAdditionalInfo } from '../../../Interfaces/Entity/ProductAdditionalInfo';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { useNavigate } from 'react-router-dom';
import { TokenExpiration } from '../../../TokenValidation/TokenExpiration';
import { User } from '../../../Interfaces/Entity/User.';
import productAdditionalInfoService, {
  ReturnGetProductAdditionalInfo,
} from '../../../Service/ProductAdditionalInfoService/ProductAdditionalInfoService';
import { ReturnErroCatch } from '../../../Service/UserService/UserService';
import SvgArrowShowImgProduct from '../../../Svg/SvgArrowShowImgProduct/SvgArrowShowImgProduct';
import SvgHeart from '../../../Svg/SvgHeart/SvgHeart';
import SvgMagnifyingGlass from '../../../Svg/SvgMagnifyingGlass/SvgMagnifyingGlass';

interface ProductFirstPartProps {
  product: Product;
}

const ProductFirstPart = ({ product }: ProductFirstPartProps) => {
  const [imgsSecondaryAll, setImgsSecondaryAll] = useState<string[] | []>([]);
  const nav = useNavigate();

  const imgsSecondaryAllRef = useRef<string[]>([]);

  const containerDetailsSectionsAllRef = useRef<HTMLDivElement[]>([]);
  const containerAllImgContainersRef = useRef<HTMLDivElement[]>([]);
  const [whichIndexDeatilsSectionsClicked, setWhichIndexDeatilsSectionsClicked] = useState(-1);

  const onClickDetailsSections = (index: number) => {
    setWhichIndexDeatilsSectionsClicked(index);
    const containerDeatilsArray = containerDetailsSectionsAllRef.current;

    containerDeatilsArray.forEach((el, i) => {
      const svg = el.lastChild as SVGElement;

      if (index !== i) {
        svg.style.transform = 'rotate(0deg)';
      }
    });

    const containerAll = containerDeatilsArray[index] as HTMLDivElement;
    const svg = containerAll.lastChild as SVGElement;

    if (svg.style.transform.length <= 0 || svg.style.transform === 'rotate(0deg)') {
      svg.style.transform = 'rotate(180deg)';
    } else {
      svg.style.transform = 'rotate(0deg)';
      setWhichIndexDeatilsSectionsClicked(-1);
    }
  };

  const [productAdditionalInfoList, setProductAdditionalInfoList] =
    useState<ProductAdditionalInfo | null>(null);

  const GetProductAdditionalInfoByProductId = useCallback(async (user: User, productId: string) => {
    if (user.token) {
      const respSend = await productAdditionalInfoService.GetProductAdditionalInfoByProductId(
        user,
        productId
      );

      if (respSend.isSucess) {
        const resp = respSend as ReturnGetProductAdditionalInfo;
        const data = resp.data;

        if (data === null || product === null) return;

        const imgsSecondary = data.imgsSecondary;
        imgsSecondary.unshift(product.imageUrl);

        setImgsSecondaryAll(imgsSecondary);
        imgsSecondaryAllRef.current = imgsSecondary;

        setProductAdditionalInfoList(data);
      } else {
        const respError = respSend as ReturnErroCatch;
        console.log(respError);
      }
    }
  }, []);

  useEffect(() => {
    const objUser = GetUserFromLocalStorage();

    if (objUser.isNullUserLocalStorage) {
      nav('/login');
      return;
    }

    if (objUser.user === null) {
      localStorage.removeItem('user');

      nav('/login');
      return;
    }

    const user = objUser.user;
    const token = user.token;

    if (token) {
      const valueExpiration = TokenExpiration(token);

      if (valueExpiration) {
        localStorage.removeItem('user');
        nav('/login');
      }
    }

    GetProductAdditionalInfoByProductId(user, product.id);
  }, [GetProductAdditionalInfoByProductId]);

  const carouselCustom = useRef<HTMLDivElement>(null);
  const containerArrowLeft = useRef<HTMLDivElement>(null);
  const containerArrowRight = useRef<HTMLDivElement>(null);
  const [_, setWhichImgIndex] = useState(0);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollElement = carouselCustom.current;
    const containerLeft = containerArrowLeft.current;
    const containerRight = containerArrowRight.current;

    const scrollLeft = () => {
      scrollElement?.scrollBy({ left: -630, behavior: 'smooth' });

      setWhichImgIndex((prev) => {
        if (prev > 0) {
          const index = prev - 1;
          applyBorder(index);
          return index;
        }
        return prev;
      });
    };

    const scrollRight = () => {
      scrollElement?.scrollBy({ left: 630, behavior: 'smooth' });

      setWhichImgIndex((prev) => {
        if (prev < imgsSecondaryAllRef.current.length - 1) {
          const index = prev + 1;

          applyBorder(index);
          return index;
        }
        return prev;
      });
    };

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

  const onClickContainerImg = (index: number) => {
    setWhichImgIndex(index);

    const arrayContainer = containerAllImgContainersRef.current;

    arrayContainer.forEach((el) => {
      el.style.borderBottom = 'none';
    });

    const container = arrayContainer[index];
    container.style.borderBottom = '3px solid #ec008c';

    const scrollElement = carouselCustom.current;
    const scrollLeftValue = index * 630;

    scrollElement?.scrollTo({ left: scrollLeftValue, behavior: 'smooth' });
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

  const onClickMagnifyingGlass = () => {};

  return (
    <div className="flex flex-col w-[630px]">
      <Styled.ContainerImgMain>
        <div className="flex items-center justify-center w-[64px] absolute left-4 top-4 !py-[2px] bg-[#2ddf89] text-[13px] font-semibold text-[#fff]">
          <span>-{product.discountPercentage}%</span>
        </div>
        <Styled.containerSvgArrowLeft ref={containerArrowLeft}>
          <SvgArrowShowImgProduct />
        </Styled.containerSvgArrowLeft>

        <div
          className="flex flex-wrap overflow-y-hidden overflow-x-scroll flex-col"
          ref={carouselCustom}>
          {imgsSecondaryAll.length > 0 &&
            imgsSecondaryAll.map((el, i) => (
              <img src={el} key={i} alt="img-main" className={`w-[630px] h-[700px]`} />
            ))}
        </div>

        <Styled.containerSvgArrowRight ref={containerArrowRight}>
          <SvgArrowShowImgProduct />
        </Styled.containerSvgArrowRight>

        <div className="flex flex-col absolute right-4 top-4">
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-4xl bg-[#fff] !mb-[5px] cursor-pointer">
            <SvgHeart fill="#0000007a" width="16px" height="16px" />
          </div>
          <div
            className="flex items-center justify-center w-[40px] h-[40px] rounded-4xl bg-[#fff] cursor-pointer"
            onClick={onClickMagnifyingGlass}>
            <SvgMagnifyingGlass fill="#0000007a" width="16px" height="16px" />
          </div>
        </div>
      </Styled.ContainerImgMain>

      <div className="flex flex-col">
        <div className="flex gap-[7px] !mb-[18px]">
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
        <div className="flex flex-col">
          <div className="!pb-[23px] border-b border-b-[#00000045]">
            <Styled.ContainerAboutTheProduct
              onClick={() => onClickDetailsSections(0)}
              ref={(ref) => {
                if (ref) {
                  containerDetailsSectionsAllRef.current[0] = ref;
                }
              }}>
              <span className="text-[23px]">Sobre o produto</span>
              <SvgArrow />
            </Styled.ContainerAboutTheProduct>

            <div
              className={`text-[#777777] overflow-hidden transition-all duration-300 ease-in-out ${
                whichIndexDeatilsSectionsClicked === 0 ? 'max-h-[1000px] !p-[15px]' : 'max-h-0'
              }`}>
              <h1 className="text-[14px] font-medium leading-[30px] !mb-[10px]">{product.title}</h1>

              {productAdditionalInfoList &&
                productAdditionalInfoList.aboutProduct.map((el, index) => (
                  <div className="flex flex-col" key={index}>
                    <h1 className="text-[14px] font-medium leading-[16px] !mb-[10px]">
                      {el.title}
                    </h1>

                    <div className="flex flex-col leading-[18px]">
                      {el.items.map((item, index) => (
                        <span className="text-[14px] font-medium" key={index}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <Styled.ContainerOthers className="!pb-[23px] border-b border-b-[#00000045]">
            <Styled.ContainerAboutTheProduct
              onClick={() => onClickDetailsSections(1)}
              ref={(ref) => {
                if (ref) {
                  containerDetailsSectionsAllRef.current[1] = ref;
                }
              }}>
              <span className="text-[23px]">Composição</span>
              <SvgArrow />
            </Styled.ContainerAboutTheProduct>
            <div
              className={`text-[#777777] overflow-hidden transition-all duration-300 ease-in-out ${
                whichIndexDeatilsSectionsClicked === 1 ? 'max-h-[1000px] !p-[15px]' : 'max-h-0'
              }`}>
              <h1 className="text-[14px] font-medium leading-[16px]">
                {productAdditionalInfoList && productAdditionalInfoList.composition}
              </h1>
            </div>
          </Styled.ContainerOthers>
          <Styled.ContainerOthers className="!pb-[23px] border-b border-b-[#00000045]">
            <Styled.ContainerAboutTheProduct
              onClick={() => onClickDetailsSections(2)}
              ref={(ref) => {
                if (ref) {
                  containerDetailsSectionsAllRef.current[2] = ref;
                }
              }}>
              <span className="text-[23px]">Informações sobre o Frete</span>
              <SvgArrow />
            </Styled.ContainerAboutTheProduct>
            <div
              className={`text-[#777777] overflow-hidden transition-all duration-300 ease-in-out ${
                whichIndexDeatilsSectionsClicked === 2 ? 'max-h-[1000px] !p-[15px]' : 'max-h-0'
              }`}>
              <h1 className="text-[14px] font-medium leading-[16px]"></h1>
            </div>
          </Styled.ContainerOthers>
        </div>
      </div>
    </div>
  );
};

export default ProductFirstPart;
