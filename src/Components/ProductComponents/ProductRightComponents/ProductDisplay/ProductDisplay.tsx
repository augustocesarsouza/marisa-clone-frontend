import { useNavigate } from 'react-router-dom';
import { Product } from '../../../Interfaces/Entity/Product';
import StarSvg from '../../../Svg/StarSvg/StarSvg';
import * as Styled from './styled';

interface ProductDisplayProps {
  product: Product;
}

const ProductDisplay = ({ product }: ProductDisplayProps) => {
  const nav = useNavigate();

  const formatPriceTrunc = (price: number) => {
    if (price !== undefined) {
      const [int, dec = '00'] = String(price).split('.');
      const formatted = `${int},${dec.substring(0, 2).padEnd(2, '0')}`;
      return formatted;
    }
  };

  const onClickProductRedirect = () => {
    const type = product.type;

    nav(`/product/${type}`, { state: product });
  };

  return (
    <div className="flex flex-col w-[260px] cursor-pointer" onClick={onClickProductRedirect}>
      <div className="flex w-[250px] h-[300px] relative">
        <div
          className="flex flex-col items-center justify-center leading-[16px] text-[14px] bg-[black] text-[#fff] 
                w-[50px] h-[50px] absolute uppercase rounded-[50px] left-[10px] top-[10px]">
          <span>{product.discountPercentage}%</span>
          <span>Off</span>
        </div>
        <img className="w-full h-full" src={product.imageUrl} alt={'img-product-' + product.id} />
      </div>

      <div className="flex flex-col">
        <span className="text-[13px] min-h-[30px]">{product.title}</span>
        <div className="flex items-center gap-[2px] leading-[16px] !mt-[10px] !mb-[10px]">
          <div className="flex gap-[2px]" data-testid="my-div-all-stars">
            <Styled.ContainerStarSvg className="flex">
              <StarSvg />
            </Styled.ContainerStarSvg>
            <Styled.ContainerStarSvg className="flex">
              <StarSvg />
            </Styled.ContainerStarSvg>
            <Styled.ContainerStarSvg className="flex">
              <StarSvg />
            </Styled.ContainerStarSvg>
            <Styled.ContainerStarSvg className="flex">
              <StarSvg />
            </Styled.ContainerStarSvg>
            <Styled.ContainerStarSvg className="flex">
              <StarSvg />
            </Styled.ContainerStarSvg>
          </div>
          <span className="text-[12px]">(0)</span>
        </div>
      </div>

      <div className="flex">
        <span className="line-through text-[#999999] text-[11px] font-medium">
          De: R$ {product.price}
        </span>
      </div>

      <div className="flex">
        <span className="text-[#EC008C] text-[15px] font-bold" data-testid="span-price-discount">
          Por R$ {formatPriceTrunc(product.priceDiscounted)}
        </span>
      </div>

      <div className="flex text-[12px] font-normal leading-[16px] gap-[3px]">
        <span className="text-[#EC008C]">{product.installmentTimesMarisaCard}x</span>
        <span className="text-[#555555]">R$</span>
        <span className="text-[#EC008C]" data-testid="span-install-price">
          {formatPriceTrunc(product.installmentPrice)}
        </span>
        <span className="text-[#555555]">sem juros no cartão marisa</span>
      </div>
    </div>
  );
};

export default ProductDisplay;
