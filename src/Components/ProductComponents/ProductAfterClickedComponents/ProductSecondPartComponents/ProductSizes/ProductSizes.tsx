// import * as Styled from './styled';

import { useRef, useState } from 'react';

interface ProductSizesProps {
  sizesAvailable: string[];
}

const ProductSizes = ({ sizesAvailable }: ProductSizesProps) => {
  const [whichSizeWasClicked, setWhichSizeWasClicked] = useState('');
  const containerSizesRef = useRef<HTMLDivElement[]>([]);

  const onClickSizes = (size: string, index: number) => {
    const arraySizes = containerSizesRef.current;
    setWhichSizeWasClicked(size);

    arraySizes.forEach((el) => {
      el.style.backgroundColor = '#fff';
      el.style.color = '#000000';
    });

    arraySizes[index].style.backgroundColor = '#555';
    arraySizes[index].style.color = '#fff';
  };

  return (
    <div className="flex flex-col gap-[12px] !mb-[40px]">
      <span
        className="text-[14px] font-semibold text-[#555555]"
        data-testid="span-choose-variation">
        Escolha a sua variação: {whichSizeWasClicked}
      </span>
      <div className="flex gap-[4px]" data-testid="container-all-szies">
        {sizesAvailable.map((el, i) => (
          <div
            key={i}
            ref={(elRef) => {
              if (elRef) containerSizesRef.current[i] = elRef;
            }}
            onClick={() => onClickSizes(el, i)}
            className={`flex items-center justify-center font-medium cursor-pointer w-[48px] h-[48px] border-1 border-[#585757] rounded-[50%]`}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
