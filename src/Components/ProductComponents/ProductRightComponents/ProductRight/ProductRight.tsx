import * as Styled from './styled';

import { useCallback, useEffect, useRef, useState } from 'react';
import { User } from '../../../Interfaces/Entity/User.';
import productService, {
  ReturnGetProductList,
} from '../../../Service/ProductService/ProductService';
import { ReturnErroCatch } from '../../../Service/UserService/UserService';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { useNavigate } from 'react-router-dom';
import { TokenExpiration } from '../../../TokenValidation/TokenExpiration';
import { Product } from '../../../Interfaces/Entity/Product';
import SvgX from '../../../Svg/SvgX/SvgX';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import { changeProductArray } from '../../ReduxProduct/productArraySlice';
import { useProductArrayAppDispatch } from '../../ReduxProduct/productArrayDispatch';

interface ProductRightProps {
  arrayAllCategory: string[];
  arrayAllSize: string[];
  handleCategoryClick: (category: string) => void;
  handleSizesClick: (size: string) => void;
  handleRemoveCategoryMark: (category: string) => void;
  handleRemoveSizeMark: (size: string) => void;
}

const ProductRight = ({
  arrayAllCategory,
  arrayAllSize,
  handleCategoryClick,
  handleSizesClick,
  handleRemoveCategoryMark,
  handleRemoveSizeMark,
}: ProductRightProps) => {
  const nav = useNavigate();
  const [selected, setSelected] = useState(1);
  const [listPageNav] = useState([1, 2, 3, 4, 5]);

  const containerMyFilterCategory = useRef<HTMLDivElement>(null);

  const [allProduct, setAllProduct] = useState<Product[]>([]);
  const dispatch = useProductArrayAppDispatch();

  const getAllProductType = useCallback(
    async (user: User, type: string) => {
      if (user.token) {
        const respSend = await productService.getAllProduct(user, type);

        if (respSend.isSucess) {
          const resp = respSend as ReturnGetProductList;
          const data = resp.data;

          setAllProduct(data);
          dispatch(changeProductArray(data));
        } else {
          const respError = respSend as ReturnErroCatch;
          console.log(respError);
        }
      }
    },
    [dispatch] // dependências que a função usa
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.scrollTo({ top: 0, behavior: 'smooth' });

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

    const pathNameArray = location.pathname.split('/')[2];
    getAllProductType(user, pathNameArray);
  }, [getAllProductType, nav]);

  const [newProductFilter, setNewProductFilter] = useState<Product[] | null>(null);
  const [showAllProduct, setShowAllProduct] = useState(true);

  useEffect(() => {
    if (arrayAllSize.length <= 0 && arrayAllCategory.length <= 0) {
      setShowAllProduct(true);
    } else {
      setShowAllProduct(false);
    }

    if (arrayAllCategory.length > 0 && arrayAllSize.length <= 0) {
      const arrayFinal: Product[] = [];

      arrayAllCategory.forEach((here) => {
        setAllProduct((prev) => {
          prev.map((el) => {
            if (el.category === here) {
              if (!arrayFinal.some((item) => item.id === el.id)) {
                arrayFinal.push(el);
              }
            } else {
              // arrayFinal = [];
            }
          });
          return prev;
        });
      });

      setNewProductFilter(arrayFinal);
    } else {
      if (arrayAllCategory.length > 0 && arrayAllSize.length <= 0) {
        setNewProductFilter([]);
      }
    }
    // console.log(arrayAllSize);

    if (arrayAllSize.length > 0 && arrayAllCategory.length <= 0) {
      const arrayFinal: Product[] = [];

      arrayAllSize.forEach((here) => {
        setAllProduct((prev) => {
          prev.map((el) => {
            el.sizesAvailable.map((elSize) => {
              if (elSize === here) {
                if (!arrayFinal.some((item) => item.id === el.id)) {
                  arrayFinal.push(el);
                }
              } else {
                // arrayFinal = [];
              }
            });
          });
          return prev;
        });
      });

      setNewProductFilter(arrayFinal);
    } else {
      if (arrayAllSize.length > 0 && arrayAllCategory.length <= 0) {
        setNewProductFilter([]);
      }
    }
  }, [arrayAllCategory, arrayAllSize]);

  const onClickContainerCategory = (category: string) => {
    handleCategoryClick(category);
    handleRemoveCategoryMark(category);
  };

  const onClickContainerSize = (size: string) => {
    handleSizesClick(size);
    handleRemoveSizeMark(size);
  };

  return (
    <div className="flex flex-col w-[805px]">
      <div className="flex justify-between items-center !mb-[60px]">
        {arrayAllCategory.length <= 0 && arrayAllSize.length <= 0 && <div></div>}

        {(arrayAllCategory.length > 0 || arrayAllSize.length > 0) && (
          <div className="flex flex-col" ref={containerMyFilterCategory}>
            <span className="text-[14px] font-semibold">Você filtrou por:</span>
            <div className="flex flex-col gap-[2px]">
              {arrayAllCategory.map((el, i) => (
                <div key={i} onClick={() => onClickContainerCategory(el)}>
                  <div className="inline-flex items-center leading-[16px] bg-[#E3E3E3] !p-[5px] border border-[#1111113a] cursor-pointer">
                    <span className="text-[11px] font-medium text-[#818181]">{el}</span>
                    <Styled.ContainerSvgX>
                      <SvgX />
                    </Styled.ContainerSvgX>
                  </div>
                </div>
              ))}

              {arrayAllSize.map((el, i) => (
                <div key={i} onClick={() => onClickContainerSize(el)}>
                  <div className="inline-flex items-center leading-[16px] bg-[#E3E3E3] !p-[5px] border border-[#1111113a] cursor-pointer">
                    <span className="text-[11px] font-medium text-[#818181]">{el}</span>
                    <Styled.ContainerSvgX>
                      <SvgX />
                    </Styled.ContainerSvgX>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button className="!mt-[5px] !p-[5px] font-medium text-[11px] bg-[black] text-[#fff] leading-[16px] hover:opacity-75 cursor-pointer">
                Limpar filtros
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-end items-center gap-[30px] text-[12px] font-medium leading-6 h-[30px]">
          <span>768 Produto(s)</span>

          <div className="flex items-center h-full">
            <span className="!mr-[20px]">Ordenar por:</span>
            <select
              className="outline-none border border-gray-300 rounded-md !pl-2 text-gray-700 shadow-sm h-full"
              name="ordenacao"
              id="ordenacao">
              <option value="novidades">Novidades</option>
              <option value="relevancia">Relevância</option>
              <option value="maior-desconto">Maior desconto</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
              <option value="menor-distancia">Menor distância</option>
              <option value="maior-distancia">Maior distância</option>
            </select>
          </div>
          <div className="flex items-center">
            <div className="flex h-[28px] !mr-[15px]">
              {listPageNav.map((num) => (
                <div
                  key={num}
                  onClick={() => setSelected(num)}
                  className={`flex justify-center items-center w-[21px] cursor-pointer rounded
            ${selected === num ? 'border-2 border-[#00000041] rounded-md' : ''}`}>
                  <span className="!ml-[1px]">{num}</span>
                </div>
              ))}
            </div>
            <div className="flex w-[8px] h-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 120.64 122.88"
                xmlSpace="preserve">
                <g>
                  <path d="M54.03,108.91c-1.55,1.63-2.31,3.74-2.28,5.85c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12c1.58,1.5,3.6,2.23,5.61,2.2 c2.01-0.03,4.01-0.82,5.55-2.37c17.66-17.66,35.13-35.61,52.68-53.4c0.07-0.05,0.13-0.1,0.19-0.16c1.55-1.63,2.31-3.76,2.28-5.87 c-0.03-2.11-0.85-4.21-2.45-5.8l-0.27-0.26C100.43,37.47,82.98,19.87,65.46,2.36C63.93,0.82,61.93,0.03,59.92,0 c-2.01-0.03-4.03,0.7-5.61,2.21l-0.15,0.15c-1.57,1.58-2.38,3.66-2.41,5.76c-0.03,2.1,0.73,4.22,2.28,5.85l47.22,47.27 L54.03,108.91L54.03,108.91z M2.26,106.91c-1.54,1.62-2.29,3.73-2.26,5.83c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12 c1.57,1.5,3.6,2.23,5.61,2.21c2.01-0.03,4.02-0.82,5.55-2.37C31.01,101.2,48.87,84.2,66.39,67.12c0.07-0.05,0.14-0.11,0.21-0.17 c1.55-1.63,2.31-3.76,2.28-5.87c-0.03-2.11-0.85-4.21-2.45-5.8C48.94,38.33,31.36,21.44,13.83,4.51l-0.12-0.13 c-1.53-1.54-3.53-2.32-5.54-2.35C6.16,2,4.14,2.73,2.56,4.23L2.41,4.38C0.84,5.96,0.03,8.05,0,10.14c-0.03,2.1,0.73,4.22,2.28,5.85 l47.18,45.24L2.26,106.91L2.26,106.91z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* FAZER CLICKED NO PRODUCT PARA REDIRECIONAR */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {showAllProduct && allProduct.map((el, i) => <ProductDisplay product={el} key={i} />)}

        {arrayAllCategory.length > 0 &&
          newProductFilter &&
          newProductFilter.map((el, i) => <ProductDisplay product={el} key={i} />)}

        {arrayAllSize.length > 0 &&
          newProductFilter &&
          newProductFilter.map((el, i) => <ProductDisplay product={el} key={i} />)}
      </div>
    </div>
  );
};

export default ProductRight;
