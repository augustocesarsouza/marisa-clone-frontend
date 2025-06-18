import * as Styled from './styled';
import StarSvgRed from '../../../../Svg/StarSvgRed/StarSvgRed';
import { Product } from '../../../../Interfaces/Entity/Product';

interface ProductMainInfoProps {
  product: Product;
}

const ProductMainInfo = ({ product }: ProductMainInfoProps) => {
  const formatPriceTrunc = (price: number) => {
    if (price !== undefined) {
      const [int, dec = '00'] = String(price).split('.');
      const formatted = `${int},${dec.substring(0, 2).padEnd(2, '0')}`;
      return formatted;
    }
  };

  return (
    <>
      <h1 className="text-[28px] font-medium leading-[30px] !mb-[10px]">{product.title}</h1>
      <span className="text-[12px] text-[#777777] font-normal !mb-[10px]">
        MARISA {product.code}
      </span>

      <div className="flex items-center gap-[2px] leading-[16px] !mt-[10px] !mb-[10px]">
        <div className="flex gap-[2px] !mr-[10px]" data-testid="container-stars-svg">
          <Styled.ContainerStarSvg className="flex">
            <StarSvgRed />
          </Styled.ContainerStarSvg>
          <Styled.ContainerStarSvg className="flex">
            <StarSvgRed />
          </Styled.ContainerStarSvg>
          <Styled.ContainerStarSvg className="flex">
            <StarSvgRed />
          </Styled.ContainerStarSvg>
          <Styled.ContainerStarSvg className="flex">
            <StarSvgRed />
          </Styled.ContainerStarSvg>
          <Styled.ContainerStarSvg className="flex">
            <StarSvgRed />
          </Styled.ContainerStarSvg>
        </div>
        <span className="text-[11px] font-semibold">1 avaliação</span>
      </div>
      <div className="flex flex-col !my-[15px]">
        <div className="flex flex-col">
          <div className="flex leading-[16px]">
            <span className="line-through text-[#777777] text-[18px] font-medium">
              R$ {product.price}
            </span>
          </div>

          <div className="flex leading-[40px]">
            <span
              className="text-[#454242] text-[40px] font-medium"
              data-testid="span-price-discounted">
              R$ {formatPriceTrunc(product.priceDiscounted)}
            </span>
          </div>
        </div>
        <div className="flex text-[14px] font-semibold leading-[16px] gap-[3px] text-[#777777]">
          <span className="">{product.installmentTimesMarisaCard}x</span>
          <span className="">R$</span>
          <span className="" data-testid="span-installment-price">
            {formatPriceTrunc(product.installmentPrice)}
          </span>
          <span className="">sem juros no cartão marisa</span>
        </div>
      </div>

      <button className="flex text-[12px] text-[#EC008C] font-semibold cursor-pointer !mb-[40px]">
        VER AS FORMAS DE PARCELAMENTO
      </button>

      <span className="text-[#ACABAB] font-semibold !mb-[5px]">
        Vendido e entregue por: Lojas Marisa
      </span>
    </>
  );
};

export default ProductMainInfo;
