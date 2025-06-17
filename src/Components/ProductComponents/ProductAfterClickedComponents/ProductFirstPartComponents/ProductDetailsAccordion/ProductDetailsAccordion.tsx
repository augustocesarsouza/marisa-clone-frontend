import { useRef, useState } from 'react';
import * as Styled from './styled';
import SvgArrow from '../../../../Svg/SvgArrow/SvgArrow';
import { ProductAdditionalInfo } from '../../../../Interfaces/Entity/ProductAdditionalInfo';
import { Product } from '../../../../Interfaces/Entity/Product';

interface ProductDetailsAccordionProps {
  product: Product;
  productAdditionalInfoList: ProductAdditionalInfo;
}

const ProductDetailsAccordion = ({
  product,
  productAdditionalInfoList,
}: ProductDetailsAccordionProps) => {
  const containerDetailsSectionsAllRef = useRef<HTMLDivElement[]>([]);
  const [whichIndexDeatilsSectionsClicked, setWhichIndexDeatilsSectionsClicked] = useState(-1);

  const onClickDetailsSections = (index: number) => {
    setWhichIndexDeatilsSectionsClicked(index);
    const containerDeatilsArray = containerDetailsSectionsAllRef.current;

    containerDeatilsArray.forEach((el, i) => {
      const svg = el.lastChild as SVGElement;

      if (index !== i) {
        svg.style.transform = 'rotate(0deg)';
      }
    });

    const containerAll = containerDeatilsArray[index] as HTMLDivElement;
    const svg = containerAll.lastChild as SVGElement;

    if (svg.style.transform.length <= 0 || svg.style.transform === 'rotate(0deg)') {
      svg.style.transform = 'rotate(180deg)';
    } else {
      svg.style.transform = 'rotate(0deg)';
      setWhichIndexDeatilsSectionsClicked(-1);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="!pb-[23px] border-b border-b-[#00000045]">
        <Styled.ContainerAboutTheProduct
          onClick={() => onClickDetailsSections(0)}
          data-testid="container-about-the-product"
          ref={(ref) => {
            if (ref) {
              containerDetailsSectionsAllRef.current[0] = ref;
            }
          }}>
          <span className="text-[23px]">Sobre o produto</span>
          <SvgArrow />
        </Styled.ContainerAboutTheProduct>

        <div
          className={`text-[#777777] overflow-hidden transition-all duration-300 ease-in-out ${
            whichIndexDeatilsSectionsClicked === 0 ? 'max-h-[1000px] !p-[15px]' : 'max-h-0'
          }`}>
          <h1 className="text-[14px] font-medium leading-[30px] !mb-[10px]">{product.title}</h1>

          {productAdditionalInfoList.aboutProduct.map((el, index) => (
            <div className="flex flex-col" key={index}>
              <h1 className="text-[14px] font-medium leading-[16px] !mb-[10px]">{el.title}</h1>

              <div className="flex flex-col leading-[18px]">
                {el.items.map((item, index) => (
                  <span className="text-[14px] font-medium" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Styled.ContainerOthers className="!pb-[23px] border-b border-b-[#00000045]">
        <Styled.ContainerAboutTheProduct
          onClick={() => onClickDetailsSections(1)}
          ref={(ref) => {
            if (ref) {
              containerDetailsSectionsAllRef.current[1] = ref;
            }
          }}>
          <span className="text-[23px]">Composição</span>
          <SvgArrow />
        </Styled.ContainerAboutTheProduct>
        <div
          className={`text-[#777777] overflow-hidden transition-all duration-300 ease-in-out ${
            whichIndexDeatilsSectionsClicked === 1 ? 'max-h-[1000px] !p-[15px]' : 'max-h-0'
          }`}>
          <h1 className="text-[14px] font-medium leading-[16px]">
            {productAdditionalInfoList.composition}
          </h1>
        </div>
      </Styled.ContainerOthers>

      <Styled.ContainerOthers className="!pb-[23px] border-b border-b-[#00000045]">
        <Styled.ContainerAboutTheProduct
          onClick={() => onClickDetailsSections(2)}
          ref={(ref) => {
            if (ref) {
              containerDetailsSectionsAllRef.current[2] = ref;
            }
          }}>
          <span className="text-[23px]">Informações sobre o Frete</span>
          <SvgArrow />
        </Styled.ContainerAboutTheProduct>
        <div
          className={`text-[#777777] overflow-hidden transition-all duration-300 ease-in-out ${
            whichIndexDeatilsSectionsClicked === 2 ? 'max-h-[1000px] !p-[15px]' : 'max-h-0'
          }`}>
          <h1 className="text-[14px] font-medium leading-[16px]"></h1>
        </div>
      </Styled.ContainerOthers>
    </div>
  );
};

export default ProductDetailsAccordion;
