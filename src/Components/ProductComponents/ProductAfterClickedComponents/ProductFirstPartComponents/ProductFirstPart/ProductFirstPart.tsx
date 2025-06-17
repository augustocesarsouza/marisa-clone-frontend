// import * as Styled from './styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Product } from '../../../../Interfaces/Entity/Product';
import { ProductAdditionalInfo } from '../../../../Interfaces/Entity/ProductAdditionalInfo';
import { GetUserFromLocalStorage } from '../../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { useNavigate } from 'react-router-dom';
import { TokenExpiration } from '../../../../TokenValidation/TokenExpiration';
import { User } from '../../../../Interfaces/Entity/User.';
import productAdditionalInfoService, {
  ReturnGetProductAdditionalInfo,
} from '../../../../Service/ProductAdditionalInfoService/ProductAdditionalInfoService';
import { ReturnErroCatch } from '../../../../Service/UserService/UserService';
import ProductImageGallery from '../ProductImageGallery/ProductImageGallery';
import ImgSecondaryAll from '../ImgSecondaryAll/ImgSecondaryAll';
import ProductDetailsAccordion from '../ProductDetailsAccordion/ProductDetailsAccordion';

interface ProductFirstPartProps {
  product: Product;
}

const ProductFirstPart = ({ product }: ProductFirstPartProps) => {
  const [imgsSecondaryAll, setImgsSecondaryAll] = useState<string[]>([]);
  const nav = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  const containerAllImgContainersRef = useRef<HTMLDivElement[]>([]);

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
    setUser(user);

    if (token) {
      const valueExpiration = TokenExpiration(token);

      if (valueExpiration) {
        localStorage.removeItem('user');
        nav('/login');
      }
    }

    GetProductAdditionalInfoByProductId(user, product.id);
  }, [GetProductAdditionalInfoByProductId]);

  const [_, setWhichImgIndex] = useState(0);
  const carouselCustom = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col w-[630px]">
      {user && (
        <ProductImageGallery
          product={product}
          user={user}
          containerAllImgContainersRef={containerAllImgContainersRef}
          imgsSecondaryAll={imgsSecondaryAll}
          setWhichImgIndex={setWhichImgIndex}
          carouselCustom={carouselCustom}
        />
      )}

      <div className="flex flex-col">
        <ImgSecondaryAll
          imgsSecondaryAll={imgsSecondaryAll}
          containerAllImgContainersRef={containerAllImgContainersRef}
          setWhichImgIndex={setWhichImgIndex}
          carouselCustom={carouselCustom}
        />

        {productAdditionalInfoList && product && (
          <ProductDetailsAccordion
            product={product}
            productAdditionalInfoList={productAdditionalInfoList}
          />
        )}
      </div>
    </div>
  );
};

export default ProductFirstPart;
