import * as Styled from './styled';
import { useLayoutEffect, useRef } from 'react';
import SvgArrow from '../../../../Svg/SvgArrow/SvgArrow';

const ProductEstimatedDelivery = () => {
  const inputCep = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useLayoutEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const applyMask = (
        element: HTMLInputElement | null,
        maskPattern: string,
        placeholder: string
      ) => {
        if (!element) return;
        const mask = new Inputmask({
          mask: maskPattern,
          placeholder,
          insertMode: true,
          showMaskOnHover: false,
          showMaskOnFocus: false,
        });
        mask.mask(element);
      };

      const maskConfigs = [
        { element: inputCep.current, mask: '99999-99', placeholder: '_____-__' },
      ];

      maskConfigs.forEach(({ element, mask, placeholder }) => {
        applyMask(element as HTMLInputElement, mask, placeholder);
      });
    }, 40);
  }, []);

  return (
    <div className="flex flex-col w-[360px]">
      <Styled.h1EstimatedDelivery className="!my-[10px]">
        Previsão de entrega
      </Styled.h1EstimatedDelivery>

      <div className="flex justify-center items-center h-[69px] shadow-xl/7">
        <div className="flex justify-between w-[80%]">
          <input
            type="text"
            placeholder="Inserir CEP"
            className="w-[80%] text-[15px] text-[#494949] font-semibold outline-none"
            data-testid="input-cep"
            ref={inputCep}
          />
          <Styled.ContainerArrowSvgRight className="outline-none" data-testid="container-svg-arrow">
            <SvgArrow />
          </Styled.ContainerArrowSvgRight>
        </div>
      </div>

      <span className="text-[12px] font-semibold text-[#989696] !mt-[10px]">
        Os preços, prazos e tipos de entrega são apenas para este produto em consulta.
      </span>
    </div>
  );
};

export default ProductEstimatedDelivery;
