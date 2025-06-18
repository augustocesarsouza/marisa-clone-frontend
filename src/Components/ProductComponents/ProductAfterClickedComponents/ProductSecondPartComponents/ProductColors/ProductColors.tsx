// import * as Styled from './styled';
import { useLayoutEffect, useRef } from 'react';

interface ProductColorsProps {
  colors: string[];
}

const ProductColors = ({ colors }: ProductColorsProps) => {
  const containerColors = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const elements = containerColors.current;

    colors.forEach((color, i) => {
      elements[i].style.borderColor = color.toLowerCase();
    });
  }, []);

  return (
    <div className="flex flex-col gap-[5px] !mb-[15px]">
      <span className="text-[15px] font-medium">Escolha a cor: {colors[0]}</span>
      <div className="flex gap-[4px]" data-testid="container-all-colors">
        {colors.map((_, i) => (
          <div
            key={i}
            ref={(elRef) => {
              if (elRef) containerColors.current[i] = elRef;
            }}
            className={`flex w-[48px] h-[48px] border-2 rounded-[50%]`}></div>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
