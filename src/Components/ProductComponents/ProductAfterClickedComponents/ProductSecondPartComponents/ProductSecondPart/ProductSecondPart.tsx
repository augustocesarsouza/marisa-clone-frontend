// import * as Styled from './styled';
import { useLayoutEffect } from 'react';
import { Product } from '../../../../Interfaces/Entity/Product';
import ProductMainInfo from '../ProductMainInfo/ProductMainInfo';
import ProductColors from '../ProductColors/ProductColors';
import ProductSizes from '../ProductSizes/ProductSizes';
import ProductActionLinks from '../ProductActionLinks/ProductActionLinks';
import QuantityProduct from '../QuantityProduct/QuantityProduct';
import ProductActionButtons from '../ProductActionButtons/ProductActionButtons';
import ProductEstimatedDelivery from '../ProductEstimatedDelivery/ProductEstimatedDelivery';

interface ProductSecondPartProps {
  product: Product;
}

const ProductSecondPart = ({ product }: ProductSecondPartProps) => {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col w-[580px] !pl-[80px] !pr-[10px]">
      <ProductMainInfo product={product} />

      <ProductColors colors={product.colors} />

      <ProductSizes sizesAvailable={product.sizesAvailable} />

      <ProductActionLinks />

      <QuantityProduct />

      <ProductActionButtons />

      <ProductEstimatedDelivery />
    </div>
  );
};

export default ProductSecondPart;
