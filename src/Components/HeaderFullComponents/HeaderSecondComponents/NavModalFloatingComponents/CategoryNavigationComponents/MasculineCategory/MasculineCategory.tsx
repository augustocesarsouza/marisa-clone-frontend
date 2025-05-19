import { useEffect, useState } from 'react';
import ImgAndHeader from '../../ImgAndHeader/ImgAndHeader';
import SectionTitle from '../../SectionTitle/SectionTitle';
import * as Styled from './styled';
import { imgNavigation } from '../../../HeaderSecondMain/HeaderSecondMain';

interface MasculineCategoryProps {
  onMouseEnterContainerMainModal: () => void;
  onMouseLeaveContainerMainModal: () => void;
}

const MasculineCategory = ({
  onMouseEnterContainerMainModal,
  onMouseLeaveContainerMainModal,
}: MasculineCategoryProps) => {
  const [allSpansLingerie] = useState<string[]>([
    'Camisetas',
    'Calças',
    'Bermudas',
    'Camisas',
    'Regatas',
    'Polos',
    'Casacos e Jaquetas',
    'Ver Tudo',
  ]);

  const [allSpansPajamas] = useState<string[]>(['Cuecas', 'Meias', 'Pijamas']);

  const [allSpansLines] = useState<string[]>([
    'Fitness',
    'Praia',
    'Social',
    'Personagens',
    'Jeans',
  ]);

  const [allSpansBrands] = useState<string[]>(['Bonés', 'Relógios']);

  const [allSpansBrands2] = useState<string[]>(['MR', 'Rock & Soda', 'Zune Jeans']);

  const [allImgsFootwear, setAllImgsFootwear] = useState<imgNavigation[]>([]);

  useEffect(() => {
    const objImg1 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/hbc/he1/16591736143902/BMenu-SubCategoria-Calcados-20250213-Ofertas.gif',
      alt: 'img-offers',
      span: 'Ofertas',
    };

    const objImg2 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/haf/h84/16591736111134/BMenu-SubCategoria-Calcados-20250213-Novidades.gif',
      alt: 'img-news',
      span: 'Novidades',
    };

    const objImg3 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/hb0/h1b/16591736078366/BMenu-SubCategoria-Calcados-20250213-MaisVendidos.gif',
      alt: 'img-best-sellers',
      span: 'Mais Vendidos',
    };

    const objImg4 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/hc8/haf/16591736537118/BMenu-SubCategoria-Calcados-20250213-Tenis.gif',
      alt: 'img-tennis',
      span: 'Camisetas',
    };

    const objImg5 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h1b/h5b/16591736176670/BMenu-SubCategoria-Calcados-20250213-Rasteiras.gif',
      alt: 'img-flats',
      span: 'Calças',
    };

    const objImg6 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/ha6/he9/16591736471582/BMenu-SubCategoria-Calcados-20250213-Sapatilhas.gif',
      alt: 'img-sneakers',
      span: 'Bermudas',
    };

    const objImg7 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/hb4/h47/16591736504350/BMenu-SubCategoria-Calcados-20250213-Scarpin.gif',
      alt: 'img-pumps',
      span: 'Jaquetas',
    };

    const objImg8 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h4f/h74/16591735980062/BMenu-SubCategoria-Calcados-20250213-Chinelos.gif',
      alt: 'img-slippers',
      span: 'Calçados',
    };

    const allImgs = [objImg1, objImg2, objImg3, objImg4, objImg5, objImg6, objImg7, objImg8];

    setAllImgsFootwear(allImgs);
  }, []);

  return (
    <Styled.ContainerModalFloating
      className="flex flex-col !px-[20px] !pt-[20px] !pb-[20px] w-[1050px] h-[644px] absolute top-[155px] bg-[#ffffff] z-10 border border-[#0000003a]"
      onMouseEnter={onMouseEnterContainerMainModal}
      onMouseLeave={onMouseLeaveContainerMainModal}>
      <div className="flex w-full justify-between !mb-7">
        {allImgsFootwear.length > 0 &&
          allImgsFootwear.map((el, i) => (
            <ImgAndHeader key={i} img={el.img} alt={el.alt} span={el.span} />
          ))}
      </div>
      <div className="flex h-full justify-between">
        <div className="flex w-[68%]">
          <div className="flex flex-col w-[176px] !mr-[10px]">
            <h1 className="text-[16px] text-[#ec008c] font-semibold !mb-5">Roupas</h1>
            <div className="flex flex-col gap-3">
              {allSpansLingerie.length > 0 &&
                allSpansLingerie.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Intimo</h1>
            <div className="flex flex-col gap-3">
              {allSpansPajamas.length > 0 &&
                allSpansPajamas.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Linhas</h1>
            <div className="flex flex-col gap-3">
              {allSpansLines.length > 0 &&
                allSpansLines.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Acessórios</h1>
            <div className="flex flex-col gap-3">
              {allSpansBrands.length > 0 &&
                allSpansBrands.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Marcas</h1>
            <div className="flex flex-col gap-3">
              {allSpansBrands2.length > 0 &&
                allSpansBrands2.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
        </div>

        <div className="flex justify-end w-[353px] h-[400px]">
          <div className="flex">
            <img
              src="https://images2.marisa.com.br/medias/sys_master/images/images/heb/h4e/16656306372638/BMenu-Masculino-20250321-Masculino-Desktop.gif"
              alt="img-bottom"
            />
          </div>
        </div>
      </div>
    </Styled.ContainerModalFloating>
  );
};

export default MasculineCategory;
