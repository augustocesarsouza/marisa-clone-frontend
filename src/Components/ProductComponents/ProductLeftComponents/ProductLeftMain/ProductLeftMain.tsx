import * as Styled from './styled';

import MoreSvg from '../../../Svg/MoreSvg/MoreSvg';

const ProductLeftMain = () => {
  return (
    <div className="flex flex-col w-[240px]">
      <h1 className="font-semibold !mb-[40px]">Filtros</h1>

      <div className="flex flex-col items-center justify-between !mb-[40px]">
        <div className="flex items-center justify-between w-full border-b-1 border-b-gray-300 cursor-pointer uppercase !mb-[10px]">
          <span className="text-[14px] font-normal">Categoria</span>
          <Styled.ContainerMore>
            <MoreSvg />
          </Styled.ContainerMore>
        </div>

        <div className="flex flex-col w-full text-[12px] !pl-[10px]">
          {/* Continuar fazendo isso amanha */}
          <span>Moda Feminina</span>
          <span>Infantil</span>
          <span>Moda Masculina</span>
          <span>Marcas</span>
          <span>Promoção</span>
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
