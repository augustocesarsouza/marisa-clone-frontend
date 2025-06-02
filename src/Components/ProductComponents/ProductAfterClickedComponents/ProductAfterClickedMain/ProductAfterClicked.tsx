import * as Styled from './styled';

import { useLocation } from 'react-router-dom';
import FooterMain from '../../../FooterMainComponents/FooterMain/FooterMain';
import HeaderFullMain from '../../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Product } from '../../../Interfaces/Entity/Product';
import StarSvgRed from '../../../Svg/StarSvgRed/StarSvgRed';
import MinusSvg from '../../../Svg/MinusSvg/MinusSvg';
import MoreSvg from '../../../Svg/MoreSvg/MoreSvg';
import SvgChanging from '../../../Svg/SvgChanging/SvgChanging';
import SvgTable from '../../../Svg/SvgTable/SvgTable';
import SvgArrow from '../../../Svg/SvgArrow/SvgArrow';
import Inputmask from 'inputmask';

const ProductAfterClickedMain = () => {
  // const { slug } = useParams();
  const location = useLocation();
  const [stringNameNav, setStringNameNav] = useState('');
  const [titleHereNav, setTitleHereNav] = useState('');
  const [product, setProduct] = useState<Product | null>(null);
  const containerSizesRef = useRef<HTMLDivElement[]>([]);

  const containerSvgMinusRef = useRef<HTMLDivElement>(null);
  const containerSvgMoreRef = useRef<HTMLDivElement>(null);
  const containerColors = useRef<HTMLDivElement[]>([]);

  const [whichSizeWasClicked, setWhichSizeWasClicked] = useState('');
  const [quantityOfItemsClicked, setQuantityOfItemsClicked] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inputCep = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const state = location.state;

    if (state) {
      const product: Product = state;
      setProduct(product);
      const title = product.title;

      const arrayTitle = title.split(' ');

      const firstElementArray = arrayTitle[0];
      const titleHere = `${arrayTitle[0]} ${arrayTitle[1]} ${arrayTitle[2]}`;
      setTitleHereNav(titleHere);

      setStringNameNav(firstElementArray);
    }
  }, [location.state]);

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

      const elements = containerColors.current;

      if (product) {
        product.colors.forEach((color, i) => {
          elements[i].style.borderColor = color.toLowerCase();
        });
      }

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
  }, [containerColors, product]);

  const formatPriceTrunc = (price: number) => {
    if (price !== undefined) {
      const [int, dec = '00'] = String(price).split('.');
      const formatted = `${int},${dec.substring(0, 2).padEnd(2, '0')}`;
      return formatted;
    }
  };

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

        // product -> pegar esses product quantity e nao pode somar mais que isso

        return prev + 1;
      }

      return prev;
    });
  };

  return (
    <div className="flex flex-col">
      <HeaderFullMain />
      <div className="flex justify-center !mb-[130px]">
        <Styled.ContainerMain className="flex flex-col w-[1300px]">
          <h1 className="text-[10px] font-semibold w-full !mb-[30px] uppercase">
            <span className="text-[#989696]">{stringNameNav}</span> {'>'} {titleHereNav}
          </h1>
          {product && (
            <div className="flex">
              <Styled.ContainerImgMain>
                <img src={product.imageUrl} alt="img-main" className="w-full" />
              </Styled.ContainerImgMain>

              <div className="flex flex-col w-[580px] !pl-[80px] !pr-[10px]">
                <h1 className="text-[28px] font-medium leading-[30px] !mb-[10px]">
                  {product.title}
                </h1>
                <span className="text-[12px] text-[#777777] font-normal !mb-[10px]">
                  MARISA {product.code}
                </span>

                <div className="flex items-center gap-[2px] leading-[16px] !mt-[10px] !mb-[10px]">
                  <div className="flex gap-[2px] !mr-[10px]">
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
                      <span className="text-[#454242] text-[40px] font-medium">
                        R$ {formatPriceTrunc(product.priceDiscounted)}
                      </span>
                    </div>
                  </div>
                  <div className="flex text-[14px] font-semibold leading-[16px] gap-[3px] text-[#777777]">
                    <span className="">{product.installmentTimesMarisaCard}x</span>
                    <span className="">R$</span>
                    <span className="">{formatPriceTrunc(product.installmentPrice)}</span>
                    <span className="">sem juros no cartão marisa</span>
                  </div>
                </div>

                <button className="flex text-[12px] text-[#EC008C] font-semibold cursor-pointer !mb-[40px]">
                  VER AS FORMAS DE PARCELAMENTO
                </button>

                <span className="text-[#ACABAB] font-semibold !mb-[5px]">
                  Vendido e entregue por: Lojas Marisa
                </span>

                <div className="flex flex-col gap-[5px] !mb-[15px]">
                  <span className="text-[15px] font-medium">
                    Escolha a cor: {product.colors[0]}
                  </span>
                  <div className="flex gap-[4px]">
                    {product.colors.map((el, i) => (
                      <div
                        key={i}
                        ref={(elRef) => {
                          if (elRef) containerColors.current[i] = elRef;
                        }}
                        className={`flex w-[48px] h-[48px] border-2 rounded-[50%]`}></div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-[12px] !mb-[40px]">
                  <span className="text-[14px] font-semibold text-[#555555]">
                    Escolha a sua variação: {whichSizeWasClicked}
                  </span>
                  <div className="flex gap-[4px]">
                    {product.sizesAvailable.map((el, i) => (
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

                <div className="flex gap-[15px] !mb-[40px]">
                  <Styled.ContainerSvgChanging className="flex items-center leading-[16px]">
                    <SvgChanging />
                    <span className="text-[#ec008c] text-[12px] font-semibold !mt-[2px]">
                      Provador Virtual
                    </span>
                  </Styled.ContainerSvgChanging>
                  <Styled.ContainerSvgTable className="flex items-center leading-[16px]">
                    <SvgTable />
                    <span className="text-[#ec008c] text-[12px] font-semibold !mt-[2px]">
                      Tabela de Medidas
                    </span>
                  </Styled.ContainerSvgTable>
                </div>

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
                {/* font-family: "PT Sans", sans-serif; */}

                <div className="flex flex-col !mt-[20px] border-b border-[#e0e0e0] !pb-[35px] !mb-[20px] w-[360px]">
                  <button className="text-[14px] font-medium !mb-[10px] text-[#2DDF89] border-1 border-[#2DDF89] h-[48px] rounded-[3%]">
                    ADICIONAR À SACOLA
                  </button>
                  <button className="text-[14px] font-medium text-[#fff] bg-[#2ddf89] rounded-[3%] h-[48px]">
                    COMPRAR AGORA
                  </button>
                </div>

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
                        ref={inputCep}
                      />
                      <Styled.ContainerArrowSvgRight className="outline-none">
                        <SvgArrow />
                      </Styled.ContainerArrowSvgRight>
                    </div>
                  </div>

                  <span className="text-[12px] font-semibold text-[#989696] !mt-[10px]">
                    Os preços, prazos e tipos de entrega são apenas para este produto em consulta.
                  </span>
                </div>
              </div>
            </div>
          )}
        </Styled.ContainerMain>
      </div>
      <FooterMain />
    </div>
  );
};

export default ProductAfterClickedMain;
