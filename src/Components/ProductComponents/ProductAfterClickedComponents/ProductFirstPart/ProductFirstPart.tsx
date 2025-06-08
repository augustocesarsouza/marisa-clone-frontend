import { useCallback, useEffect, useRef, useState } from 'react';
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

interface ProductFirstPartProps {
  product: Product;
}

const ProductFirstPart = ({ product }: ProductFirstPartProps) => {
  const [imgsSecondaryAll, setImgsSecondaryAll] = useState<string[] | []>([]);
  const nav = useNavigate();

  const containerDetailsSectionsAllRef = useRef<HTMLDivElement[]>([]);
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

  return (
    <div className="flex flex-col w-[630px]">
      <Styled.ContainerImgMain>
        <img src={product.imageUrl} alt="img-main" className="w-full" />
      </Styled.ContainerImgMain>

      <div className="flex flex-col">
        <div className="flex gap-[7px] !mb-[18px]">
          {imgsSecondaryAll.length > 0 &&
            imgsSecondaryAll.map((el, i) => (
              <div className="flex w-[97px]" key={i}>
                <img src={el} alt="img-secondary" />
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
