import * as Styled from './styled';

import { useLocation, useNavigate } from 'react-router-dom';
import FooterMain from '../../../FooterMainComponents/FooterMain/FooterMain';
import HeaderFullMain from '../../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import { useEffect, useState } from 'react';
import { Product } from '../../../Interfaces/Entity/Product';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { TokenExpiration } from '../../../TokenValidation/TokenExpiration';
import ProductFirstPart from '../ProductFirstPartComponents/ProductFirstPart/ProductFirstPart';
import ProductSecondPart from '../ProductSecondPart/ProductSecondPart';

const ProductAfterClickedMain = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [stringNameNav, setStringNameNav] = useState('');
  const [titleHereNav, setTitleHereNav] = useState('');
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const state = location.state;

    if (state) {
      const product: Product = state;

      setProduct(product);
      const title = product.title;

      const arrayTitle = title.split(' ');

      const firstElementArray = arrayTitle[0];
      const titleHere = `${arrayTitle[0]} ${arrayTitle[1]} ${arrayTitle[2]}`;
      setTitleHereNav(titleHere);

      setStringNameNav(firstElementArray);

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
    }
  }, [location.state]);

  return (
    <div className="flex flex-col">
      <HeaderFullMain />
      <div className="flex justify-center !mb-[130px]">
        <Styled.ContainerMain className="flex flex-col w-[1300px]">
          <h1
            className="text-[10px] font-semibold w-full !mb-[30px] uppercase"
            data-testid="header-string-name-nav">
            <span className="text-[#989696]">{stringNameNav}</span> {'>'} {titleHereNav}
          </h1>
          {product && (
            <div className="flex">
              <ProductFirstPart product={product} />
              <ProductSecondPart product={product} />
            </div>
          )}
        </Styled.ContainerMain>
      </div>
      <FooterMain />
    </div>
  );
};

export default ProductAfterClickedMain;
