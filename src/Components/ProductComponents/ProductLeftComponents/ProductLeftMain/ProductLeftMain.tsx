import * as Styled from './styled';

import MoreSvg from '../../../Svg/MoreSvg/MoreSvg';
import MinusSvg from '../../../Svg/MinusSvg/MinusSvg';
import { useRef, useState } from 'react';

interface ProductLeftMainProps {
  handleCategoryClick: (category: string) => void;
}

const ProductLeftMain = ({ handleCategoryClick }: ProductLeftMainProps) => {
  const containerCategoryAll = useRef<HTMLDivElement[]>([]);
  const containerMainCategoryAll = useRef<HTMLDivElement>(null);

  const categories = ['Moda Feminina', 'Infantil', 'Moda Masculina', 'Marcas', 'Promoção'];
  // const [whichCategoryMain, setWhichCategoryMain] = useState<string>('');

  const onClickCategory = (category: string, index: number) => {
    // handleCategoryClick('');
    handleCategoryClick(category);

    // containerCategoryAll.current.forEach((div) => {
    //   if (div) {
    //     div.classList.remove('bg-[red]');
    //   }
    // });

    containerCategoryAll.current[index].classList.toggle('bg-[red]');
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

  // useEffect(() => {
  //   handleCategoryClick(whichCategoryMain);
  // }, [handleCategoryClick, whichCategoryMain]);

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
            <div className="flex items-center justify-between" key={index}>
              <div
                className="flex items-center leading-[16px] cursor-pointer"
                onClick={() => onClickCategory(category, index)}>
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

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase !mb-[40px]">
        <span className="text-[14px] font-normal">Tamanho</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
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
