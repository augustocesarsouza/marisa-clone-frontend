import MinusSvg from '../../../../Svg/MinusSvg/MinusSvg';
import MoreSvg from '../../../../Svg/MoreSvg/MoreSvg';
import * as Styled from './styled';
import { useLayoutEffect, useRef, useState } from 'react';

const QuantityProduct = () => {
  const containerSvgMinusRef = useRef<HTMLDivElement>(null);
  const containerSvgMoreRef = useRef<HTMLDivElement>(null);

  const [quantityOfItemsClicked, setQuantityOfItemsClicked] = useState(1);

  const onClickMinusQuantity = () => {
    setQuantityOfItemsClicked((prev) => {
      if (prev > 1) {
        const quantity = prev - 1;

        if (quantity <= 1) {
          const containerMinus = containerSvgMinusRef.current as HTMLDivElement;
          if (
            containerMinus.firstChild &&
            containerMinus.firstChild.firstChild &&
            containerMinus.firstChild.firstChild instanceof SVGElement
          ) {
            containerMinus.style.cursor = 'not-allowed';
            const svg = containerMinus.firstChild.firstChild as SVGElement;
            svg.style.fill = '#979797';
          }
        }

        return quantity;
      }

      return prev;
    });
  };

  const onClickMoreQuantity = () => {
    setQuantityOfItemsClicked((prev) => {
      if (prev > 0) {
        const containerMinus = containerSvgMinusRef.current as HTMLDivElement;
        if (
          containerMinus.firstChild &&
          containerMinus.firstChild.firstChild &&
          containerMinus.firstChild.firstChild instanceof SVGElement
        ) {
          containerMinus.style.cursor = 'pointer';
          const svg = containerMinus.firstChild.firstChild as SVGElement;
          svg.style.fill = '#ec008c';
        }

        return prev + 1;
      }

      return prev;
    });
  };

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useLayoutEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const containerMinus = containerSvgMinusRef.current as HTMLDivElement;
      if (
        containerMinus.firstChild &&
        containerMinus.firstChild.firstChild &&
        containerMinus.firstChild.firstChild instanceof SVGElement
      ) {
        containerMinus.style.cursor = 'not-allowed';
        const svg = containerMinus.firstChild.firstChild as SVGElement;
        svg.style.fill = '#979797';
      }
    }, 40);
  }, []);

  return (
    <div className="flex flex-col gap-[12px]">
      <span className="text-[14px] text-[#555] font-semibold">Quantidade</span>

      <div className="flex items-center rounded-4xl w-[135px] leading-[16px] select-none border-t border-b border-[#e0e0e0]">
        <div
          className="flex bg-[#e0e0e0] !p-[10px] rounded-4xl cursor-pointer "
          ref={containerSvgMinusRef}
          onClick={onClickMinusQuantity}>
          <Styled.ContainerSvgMinusAndMore>
            <MinusSvg />
          </Styled.ContainerSvgMinusAndMore>
        </div>
        <span className="flex items-center justify-center text-[14px] text-[#777] font-semibold w-[71px] h-full text-center">
          {quantityOfItemsClicked}
        </span>
        <div
          className="flex bg-[#e0e0e0] !p-[10px] rounded-4xl cursor-pointer"
          ref={containerSvgMoreRef}
          onClick={onClickMoreQuantity}>
          <Styled.ContainerSvgMinusAndMore>
            <MoreSvg />
          </Styled.ContainerSvgMinusAndMore>
        </div>
      </div>
    </div>
  );
};

export default QuantityProduct;
