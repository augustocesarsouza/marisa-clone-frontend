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

  const [arrayAllCategory, setArrayAllCategory] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    if (category.length > 0) {
      setArrayAllCategory((prev) => {
        let newArray = [...prev];

        if (newArray.some((el) => el === category)) {
          newArray = newArray.filter((el) => el !== category);
        } else {
          newArray.push(category);
        }

        return newArray;
      });
    } else {
      setArrayAllCategory([]);
    }
  };

  return (
    <div className="flex flex-col">
      <HeaderFullMain />
      <div className="flex items-center justify-center !mb-[120px]">
        <div className="flex flex-col items-center w-[1080px]">
          {/* !px-10 !py-10 */}
          <h1 className="text-[12px] font-semibold w-full !mb-[10px]">
            Home {'>'} {stringNameNav}
          </h1>
          <div className="flex w-full justify-between">
            <ProductLeftMain handleCategoryClick={handleCategoryClick} />
            <ProductRight arrayAllCategory={arrayAllCategory} />
          </div>
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default ProductMain;
