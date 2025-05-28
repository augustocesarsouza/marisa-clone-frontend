// import * as Styled from './styled';

import { useLocation } from 'react-router-dom';
import ProductLeftMain from '../ProductLeftComponents/ProductLeftMain/ProductLeftMain';
import ProductRight from '../ProductRightComponents/ProductRight/ProductRight';
import { useEffect, useState } from 'react';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import { Provider } from 'react-redux';
import { productArrayStore } from '../ReduxProduct/productArrayStore';

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
  const [arrayAllSize, setArrayAllSize] = useState<string[]>([]);

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

  const handleSizesClick = (size: string) => {
    if (size.length > 0) {
      setArrayAllSize((prev) => {
        let newArray = [...prev];

        if (newArray.some((el) => el === size)) {
          newArray = newArray.filter((el) => el !== size);
        } else {
          newArray.push(size);
        }

        return newArray;
      });
    } else {
      setArrayAllSize([]);
    }
  };

  const [categoryRemoveMark, setCategoryRemoveMark] = useState<{ value: string; key: number }>({
    value: '',
    key: 0,
  });

  const [sizeRemoveMark, setSizeRemoveMark] = useState<{ value: string; key: number }>({
    value: '',
    key: 0,
  });
  const [deleteCategory, setDeleteCategory] = useState(false);

  const handleRemoveCategoryMark = (category: string) => {
    setDeleteCategory(true);
    setCategoryRemoveMark({ value: category, key: Date.now() });
  };

  const handleRemoveSizeMark = (size: string) => {
    setDeleteCategory(false);
    setSizeRemoveMark({ value: size, key: Date.now() });
  };

  return (
    <Provider store={productArrayStore}>
      <div className="flex flex-col">
        <HeaderFullMain />
        <div className="flex items-center justify-center !mb-[120px]">
          <div className="flex flex-col items-center w-[1080px]">
            {/* !px-10 !py-10 */}
            <h1 className="text-[12px] font-semibold w-full !mb-[10px]">
              Home {'>'} {stringNameNav}
            </h1>
            <div className="flex w-full justify-between">
              <ProductLeftMain
                handleCategoryClick={handleCategoryClick}
                handleSizesClick={handleSizesClick}
                categoryRemoveMark={categoryRemoveMark}
                sizeRemoveMark={sizeRemoveMark}
                deleteCategory={deleteCategory}
              />
              <ProductRight
                arrayAllCategory={arrayAllCategory}
                arrayAllSize={arrayAllSize}
                handleCategoryClick={handleCategoryClick}
                handleSizesClick={handleSizesClick}
                handleRemoveCategoryMark={handleRemoveCategoryMark}
                handleRemoveSizeMark={handleRemoveSizeMark}
              />
            </div>
          </div>
        </div>
        <FooterMain />
      </div>
    </Provider>
  );
};

export default ProductMain;
