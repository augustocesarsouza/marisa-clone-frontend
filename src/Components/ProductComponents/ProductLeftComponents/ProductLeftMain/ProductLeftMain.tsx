import * as Styled from './styled';

import MoreSvg from '../../../Svg/MoreSvg/MoreSvg';

const ProductLeftMain = () => {
  return (
    <div className="flex flex-col w-[240px]">
      <h1 className="font-semibold">Filtros</h1>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase">
        <span className="text-[14px] font-normal">Categoria</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase">
        <span className="text-[14px] font-normal">Tamanho</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase">
        <span className="text-[14px] font-normal">Preço</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase">
        <span className="text-[14px] font-normal">Cor</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase">
        <span className="text-[14px] font-normal">Marca</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase">
        <span className="text-[14px] font-normal">Desconto</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>

      <div className="flex items-center justify-between border-b-1 border-b-gray-300 cursor-pointer uppercase">
        <span className="text-[14px] font-normal">Vendido Por</span>
        <Styled.ContainerMore>
          <MoreSvg />
        </Styled.ContainerMore>
      </div>
    </div>
  );
};

export default ProductLeftMain;
