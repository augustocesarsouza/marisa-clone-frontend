// import * as Styled from './styled';

import { useLocation } from 'react-router-dom';
import ProductLeftMain from '../ProductLeftComponents/ProductLeftMain/ProductLeftMain';
import ProductRight from '../ProductRightComponents/ProductRight/ProductRight';
import { useEffect, useState } from 'react';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';

const ProductMain = () => {
  const location = useLocation();
  const [stringNameNav, setStringNameNav] = useState('');

  useEffect(() => {
    const pathNameArray = location.pathname.split('/')[2];
    const pathNameFinalArray = pathNameArray.split('-');
    let stringNameNav = '';

    pathNameFinalArray.forEach((el, index) => {
      const capitalizedFirstLetter = el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      stringNameNav += capitalizedFirstLetter;
      if (index < pathNameFinalArray.length - 1) {
        stringNameNav += '-';
      }
    });

    setStringNameNav(stringNameNav);
  }, [location.pathname]);

  return (
    <div className="flex flex-col">
      <HeaderFullMain />
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center w-[1080px]">
          {/* !px-10 !py-10 */}
          <h1 className="text-[12px] font-semibold w-full !mb-[10px]">
            Home {'>'} {stringNameNav}
          </h1>
          <div className="flex w-full justify-between">
            <ProductLeftMain />
            <ProductRight />
          </div>
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default ProductMain;
