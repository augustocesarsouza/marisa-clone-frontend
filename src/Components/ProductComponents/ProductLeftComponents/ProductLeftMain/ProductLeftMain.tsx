import * as Styled from './styled';

import MoreSvg from '../../../Svg/MoreSvg/MoreSvg';
import MinusSvg from '../../../Svg/MinusSvg/MinusSvg';
import { useEffect, useRef, useState } from 'react';
import { RootStateProductArray } from '../../ReduxProduct/productArrayStore';
import { useSelector } from 'react-redux';

interface ProductLeftMainProps {
  handleCategoryClick: (category: string) => void;
  handleSizesClick: (size: string) => void;
  categoryRemoveMark: {
    value: string;
    key: number;
  };
  sizeRemoveMark: {
    value: string;
    key: number;
  };
  deleteCategory: boolean;
}

const ProductLeftMain = ({
  handleCategoryClick,
  handleSizesClick,
  categoryRemoveMark,
  sizeRemoveMark,
  deleteCategory,
}: ProductLeftMainProps) => {
  const containerCategoryAll = useRef<HTMLDivElement[]>([]);
  const containerCategoryMainAll = useRef<HTMLDivElement[]>([]);

  const containerMainCategoryAll = useRef<HTMLDivElement>(null);
  const containerMainSizeAll = useRef<HTMLDivElement>(null);
  const productArray = useSelector((state: RootStateProductArray) => state.productArray);

  const [categories] = useState<string[]>([
    'Moda Feminina',
    'Infantil',
    'Moda Masculina',
    'Marcas',
    'Promoção',
  ]);

  const [allSizesProduct, setAllSizesProduct] = useState<string[]>([]);

  const [itWasClickedCategory, setItWasClickedCategory] = useState(false);
  const [itWasClickedSize, setItWasClickedSize] = useState(false);
  const [whichWasClicked, setWhichWasClicked] = useState<Record<number, boolean>>({});
  const [whichWasClickedSize, setWhichWasClickedSize] = useState<Record<number, boolean>>({});
  const containerSizesAll = useRef<HTMLDivElement[]>([]);

  const onClickCategory = (category: string, index: number) => {
    const containerSizes = containerSizesAll.current as HTMLDivElement[];

    containerSizes.forEach((el) => {
      el.classList.remove('bg-[#fff]', 'bg-[red]');
      el.classList.add('bg-[#cfcfcf]', 'cursor-not-allowed');
    });

    setItWasClickedCategory(true);
    handleCategoryClick(category);

    setWhichWasClicked((prev) => {
      if (prev[index]) {
        return { ...prev, [index]: false };
      } else {
        return { ...prev, [index]: true };
      }
    });

    containerCategoryAll.current[index].classList.toggle('bg-[red]');
  };

  useEffect(() => {
    let elementsTrue = false;

    for (const key in whichWasClicked) {
      const numericKey = Number(key);
      const value = whichWasClicked[numericKey];

      if (value) {
        elementsTrue = true;
        break;
      }
    }

    if (!elementsTrue) {
      const containerSizes = containerSizesAll.current as HTMLDivElement[];

      containerSizes.forEach((el) => {
        el.classList.remove('bg-[#cfcfcf]', 'cursor-not-allowed');
        el.classList.add('bg-[#fff]', 'cursor-pointer');
      });
    }

    setItWasClickedCategory(elementsTrue);
  }, [whichWasClicked]);

  useEffect(() => {
    let elementsTrue = false;

    for (const key in whichWasClickedSize) {
      const numericKey = Number(key);
      const value = whichWasClickedSize[numericKey];

      if (value) {
        elementsTrue = true;
        break;
      }
    }

    if (!elementsTrue) {
      const containerSizes = containerCategoryMainAll.current as HTMLDivElement[];
      containerSizes.forEach((el) => {
        el.classList.remove('bg-[#fff]', 'cursor-not-allowed');
        el.classList.add('bg-[#fff]', 'cursor-pointer');
      });
    }

    console.log(elementsTrue);

    setItWasClickedSize(elementsTrue);
  }, [whichWasClickedSize]);

  const onClickSize = (size: string, index: number) => {
    const containerSizes = containerCategoryMainAll.current as HTMLDivElement[];

    containerSizes.forEach((el) => {
      console.log(el);

      el.classList.remove('bg-[#fff]', 'cursor-pointer');
      el.classList.add('bg-[#fff]', 'cursor-not-allowed');
    });

    handleSizesClick(size);

    setItWasClickedSize(true);

    setWhichWasClickedSize((prev) => {
      if (prev[index]) {
        return { ...prev, [index]: false };
      } else {
        return { ...prev, [index]: true };
      }
    });

    containerSizesAll.current[index].classList.toggle('bg-[red]');
  };

  const [isOpen, setIsOpen] = useState(false);

  const onClickHightFull = () => {
    handleCategoryClick('');

    containerCategoryAll.current.forEach((div) => {
      if (div) {
        div.classList.remove('bg-[red]');
      }
    });

    const el = containerMainCategoryAll.current as HTMLDivElement;
    if (el) {
      if (!isOpen) {
        el.style.height = el.scrollHeight + 'px'; // Expande
      } else {
        el.style.height = '0px'; // Colapsa
      }
      setIsOpen(!isOpen);
    }
  };

  const onClickHightFullSize = () => {
    const el = containerMainSizeAll.current as HTMLDivElement;
    if (el) {
      if (!isOpen) {
        el.style.height = el.scrollHeight + 'px'; // Expande
      } else {
        el.style.height = '0px'; // Colapsa
      }
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (productArray.length > 0) {
      const newArraySizes: string[] = [];

      productArray.map((el) => {
        el.sizesAvailable.map((sizes) => {
          if (!newArraySizes.some((size) => size === sizes)) {
            newArraySizes.push(sizes);
          }
        });
      });

      if (!deleteCategory) {
        const index = newArraySizes.findIndex((el) => el === sizeRemoveMark.value);

        const containerHere = containerSizesAll.current[index];

        if (containerHere) {
          containerHere.classList.toggle('bg-[red]');
        }
      }

      setAllSizesProduct(newArraySizes);
    }

    if (deleteCategory) {
      const index = categories.findIndex((el) => el === categoryRemoveMark.value);

      const containerHere = containerCategoryAll.current[index];

      if (!containerHere) return;

      containerHere.classList.toggle('bg-[red]');
    }
  }, [categories, categoryRemoveMark, productArray, sizeRemoveMark, deleteCategory]);

  return (
    <div className="flex flex-col w-[240px]">
      <h1 className="font-semibold !mb-[40px]">Filtros</h1>

      <div className="flex flex-col items-center justify-between !mb-[40px] select-none">
        <div
          className="flex items-center justify-between w-full border-b-1 border-b-gray-300 cursor-pointer uppercase !mb-[10px]"
          onClick={onClickHightFull}>
          <span className="text-[14px] font-normal">Categoria</span>
          <Styled.ContainerMore>
            {!isOpen && <MoreSvg />}
            {isOpen && <MinusSvg />}
          </Styled.ContainerMore>
        </div>

        <div
          className="flex flex-col w-full overflow-hidden transition-all duration-300 ease-in-out pl-[10px] gap-[15px]"
          style={{ height: '0px' }}
          ref={containerMainCategoryAll}>
          {categories.map((category, index) => (
            <div
              className="flex items-center justify-between cursor-pointer"
              key={index}
              ref={(el) => {
                if (el) containerCategoryMainAll.current[index] = el;
              }}
              onClick={() => (!itWasClickedSize ? onClickCategory(category, index) : null)}>
              <div className="flex items-center leading-[16px]">
                <div
                  className="w-[15px] h-[15px] border border-gray-300 !mr-[10px]"
                  ref={(el) => {
                    if (el) containerCategoryAll.current[index] = el;
                  }}></div>
                <span className="font-medium text-lg">{category}</span>
              </div>
              <Styled.ContainerMoreCategory>
                <MoreSvg />
              </Styled.ContainerMoreCategory>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start justify-between !mb-[40px] select-none">
        <div
          className="flex items-center w-full justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase !mb-[15px]"
          onClick={onClickHightFullSize}>
          <span className="text-[14px] font-normal">Tamanho</span>
          <Styled.ContainerMore>
            <MoreSvg />
          </Styled.ContainerMore>
        </div>

        <div
          className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out pl-[10px] w-[215px]"
          // style={{ height: '0px' }}
          ref={containerMainSizeAll}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {allSizesProduct.map((size, index) => (
              <div
                className="flex items-center leading-[16px] w-[50px] h-[33px] !mb-[5px]"
                key={index}
                onClick={() => (!itWasClickedCategory ? onClickSize(size, index) : null)}>
                <div
                  className={`flex items-center w-full h-full leading-[16px] justify-center border border-[black] cursor-pointer`}
                  ref={(el) => {
                    if (el) containerSizesAll.current[index] = el;
                  }}>
                  <span className="font-medium text-lg">{size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase !mb-[40px]">
        <span className="text-[14px] font-normal">Preço</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase !mb-[40px]">
        <span className="text-[14px] font-normal">Cor</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase !mb-[40px]">
        <span className="text-[14px] font-normal">Marca</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase !mb-[40px]">
        <span className="text-[14px] font-normal">Desconto</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase !mb-[40px]">
        <span className="text-[14px] font-normal">Vendido Por</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>
    </div>
  );
};

export default ProductLeftMain;
