import { useEffect, useState } from 'react';
import ImgAndHeader from '../../ImgAndHeader/ImgAndHeader';
import SectionTitle from '../../SectionTitle/SectionTitle';
import * as Styled from './styled';
import { imgNavigation } from '../../../HeaderSecondMain/HeaderSecondMain';

interface FemaleCategoryProps {
  onMouseEnterContainerMainModal: () => void;
  onMouseLeaveContainerMainModal: () => void;
}

const FemaleCategory = ({
  onMouseEnterContainerMainModal,
  onMouseLeaveContainerMainModal,
}: FemaleCategoryProps) => {
  const [allSpansClothes] = useState<string[]>([
    'Blusas e Camisetas',
    'Vestidos',
    'Calças',
    'Saias',
    'Shorts',
    'Camisas',
    'Croppeds',
    'Casacos',
    'Cardugans e Sueters',
    'Jaquetas',
    'Macacões',
    'Coletes',
    'Moletom',
    'Blazers',
  ]);

  const [allSpansLines] = useState<string[]>([
    'Casual',
    'Íntimo',
    'Fitness',
    'Praia',
    'Plus Size',
    'Gestante',
  ]);

  const [allSpansTrend] = useState<string[]>([
    'Animal Print',
    'Tons Terrosos',
    'Estampados',
    'Listrados',
    'Roupas coloridas',
  ]);

  const [allSpansBrand] = useState<string[]>([
    'Marisa',
    'Rovitex',
    'Disney',
    'Blotipo',
    'Sawary',
    'Zune Jeans',
  ]);

  const [allImgsFeminine, setAllImgsFeminine] = useState<imgNavigation[]>([]);

  useEffect(() => {
    const objImg1 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h0d/hf0/16637103570974/BMenu-SubCategoria-Feminino-20250307-Ofertas.gif',
      alt: 'img-offers',
      span: 'Ofertas',
    };

    const objImg2 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/hfd/hc1/16637103407134/BMenu-SubCategoria-Feminino-20250307-Novidades.gif',
      alt: 'img-news',
      span: 'Novidades',
    };

    const objImg3 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h0a/h20/16637103374366/BMenu-SubCategoria-Feminino-20250307-MaisVendidos.gif',
      alt: 'img-best-sellers',
      span: 'Mais Vendidos',
    };

    const objImg4 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h11/h59/16637103276062/BMenu-SubCategoria-Feminino-20250307-Blusas.gif',
      alt: 'img-blouses',
      span: 'Blusas',
    };

    const objImg5 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/ha7/hf6/16637103308830/BMenu-SubCategoria-Feminino-20250307-Calcas.gif',
      alt: 'img-pants',
      span: 'Calças',
    };

    const objImg6 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/hb2/h34/16637103898654/BMenu-SubCategoria-Feminino-20250307-Vestidos.gif',
      alt: 'img-dresses',
      span: 'Vestidos',
    };

    const objImg7 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h1b/h4e/16637103603742/BMenu-SubCategoria-Feminino-20250307-SaiasShorts.gif',
      alt: 'img-skirts-and-shorts',
      span: 'Saias e Shorts',
    };

    const objImg8 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h22/hd5/16637103341598/BMenu-SubCategoria-Feminino-20250307-Jaquetas.gif',
      alt: 'img-jackets',
      span: 'Jaquetas',
    };

    const allImgs = [objImg1, objImg2, objImg3, objImg4, objImg5, objImg6, objImg7, objImg8];

    setAllImgsFeminine(allImgs);
  }, []);

  return (
    <Styled.ContainerModalFloating
      className="flex flex-col !px-[20px] !pt-[20px] !pb-[20px] w-[1050px] h-[644px] absolute top-[155px] bg-[#ffffff] z-10 border border-[#0000003a]"
      onMouseEnter={onMouseEnterContainerMainModal}
      onMouseLeave={onMouseLeaveContainerMainModal}>
      <div className="flex w-full justify-between !mb-7">
        {allImgsFeminine.length > 0 &&
          allImgsFeminine.map((el, i) => (
            <ImgAndHeader key={i} img={el.img} alt={el.alt} span={el.span} />
          ))}
      </div>
      <div className="flex h-full justify-between">
        <div className="flex w-[68%]">
          <div className="flex flex-col w-[176px] !mr-[10px]">
            <h1 className="text-[16px] text-[#ec008c] font-semibold !mb-5">Roupas</h1>
            <div className="flex flex-col gap-3">
              {allSpansClothes.length > 0 &&
                allSpansClothes.map((el, i) => <SectionTitle span={el} key={i} />)}
              <span className="text-[13px] font-semibold text-[#3d3d3d] hover:text-[#ec008c] cursor-pointer">
                Ver Tudo
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[110px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Linhas</h1>
            <div className="flex flex-col gap-3">
              {allSpansLines.length > 0 &&
                allSpansLines.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Tendências</h1>
            <div className="flex flex-col gap-3">
              {allSpansTrend.length > 0 &&
                allSpansTrend.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[123px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Marisa</h1>
            <div className="flex flex-col gap-3">
              {allSpansBrand.length > 0 &&
                allSpansBrand.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
        </div>

        <div className="flex justify-end w-[353px] h-[400px]">
          <div className="flex">
            <img
              src="https://images2.marisa.com.br/medias/sys_master/images/images/h6c/he6/16637103144990/BMenu-Feminino-20250307-Feminino-Desktop.gif"
              alt="img-two-clothes"
            />
          </div>
        </div>
      </div>
    </Styled.ContainerModalFloating>
  );
};

export default FemaleCategory;
