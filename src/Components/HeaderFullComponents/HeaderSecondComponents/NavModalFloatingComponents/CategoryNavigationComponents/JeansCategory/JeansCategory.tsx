import { useEffect, useState } from 'react';
import * as Styled from './styled';
import { imgNavigation } from '../../../HeaderSecondMain/HeaderSecondMain';
import ImgAndHeader from '../../ImgAndHeader/ImgAndHeader';
import SectionTitle from '../../SectionTitle/SectionTitle';

interface JeansCategoryProps {
  onMouseEnterContainerMainModal: () => void;
  onMouseLeaveContainerMainModal: () => void;
}

const JeansCategory = ({
  onMouseEnterContainerMainModal,
  onMouseLeaveContainerMainModal,
}: JeansCategoryProps) => {
  const [allSpansFemale] = useState<string[]>([
    'Calças',
    'Shorts',
    'Salas',
    'Jaquetas',
    'Vestidos',
    'Marcacões',
    'Camisas',
    'Sarja',
    'Ver Tudo',
  ]);

  const [allSpansModeling] = useState<string[]>([
    'Skinny',
    'Wide Leg',
    'Cigarrete',
    'Mom Jeans',
    'Cintura Alta',
    'Clochard',
    'Destroyed',
    'Flare',
    'Reta',
  ]);

  const [allSpansPlusSize] = useState<string[]>(['Calça', 'Camisas', 'Shorts e Bermudas', 'Saias']);

  const [allSpansMasculine] = useState<string[]>(['Calças', 'Camisas', 'Bermudas', 'Jaquetas']);

  const [allSpansBrands] = useState<string[]>([
    'Marisa',
    'Sawary',
    'Biotipo',
    'Zune Jeans',
    'Uber Jeans',
    'Combos Premium',
    'Ver Tudo',
  ]);

  const [allImgsJeans, setallImgsJeans] = useState<imgNavigation[]>([]);

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
      span: 'Calças',
    };

    const objImg5 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h1b/h5b/16591736176670/BMenu-SubCategoria-Calcados-20250213-Rasteiras.gif',
      alt: 'img-flats',
      span: 'Shorts',
    };

    const objImg6 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/ha6/he9/16591736471582/BMenu-SubCategoria-Calcados-20250213-Sapatilhas.gif',
      alt: 'img-sneakers',
      span: 'Salas',
    };

    const objImg7 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/hb4/h47/16591736504350/BMenu-SubCategoria-Calcados-20250213-Scarpin.gif',
      alt: 'img-pumps',
      span: 'Vestidos',
    };

    const objImg8 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h4f/h74/16591735980062/BMenu-SubCategoria-Calcados-20250213-Chinelos.gif',
      alt: 'img-slippers',
      span: 'Plus Size',
    };

    const allImgs = [objImg1, objImg2, objImg3, objImg4, objImg5, objImg6, objImg7, objImg8];

    setallImgsJeans(allImgs);
  }, []);

  return (
    <Styled.ContainerModalFloating
      className="flex flex-col !px-[20px] !pt-[20px] !pb-[20px] w-[1050px] h-[644px] absolute top-[155px] bg-[#ffffff] z-10 border border-[#0000003a]"
      onMouseEnter={onMouseEnterContainerMainModal}
      onMouseLeave={onMouseLeaveContainerMainModal}>
      <div className="flex w-full justify-between !mb-7">
        {allImgsJeans.length > 0 &&
          allImgsJeans.map((el, i) => (
            <ImgAndHeader key={i} img={el.img} alt={el.alt} span={el.span} />
          ))}
      </div>
      <div className="flex h-full justify-between">
        <div className="flex w-[68%]">
          <div className="flex flex-col w-[176px] !mr-[10px]">
            <h1 className="text-[16px] text-[#ec008c] font-semibold !mb-5">Feminino</h1>
            <div className="flex flex-col gap-3">
              {allSpansFemale.length > 0 &&
                allSpansFemale.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Modelagem</h1>
            <div className="flex flex-col gap-3">
              {allSpansModeling.length > 0 &&
                allSpansModeling.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Plus Size</h1>
            <div className="flex flex-col gap-3">
              {allSpansPlusSize.length > 0 &&
                allSpansPlusSize.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Masculino</h1>
            <div className="flex flex-col gap-3">
              {allSpansMasculine.length > 0 &&
                allSpansMasculine.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Marcas</h1>
            <div className="flex flex-col gap-3">
              {allSpansBrands.length > 0 &&
                allSpansBrands.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
        </div>

        <div className="flex justify-end w-[353px] h-[400px]">
          <div className="flex">
            <img
              src="https://images2.marisa.com.br/medias/sys_master/images/images/h97/h70/16640643563550/BMenu-Jeans-20250310-Jeans-Desktop.gif"
              alt="img-bottom"
            />
          </div>
        </div>
      </div>
    </Styled.ContainerModalFloating>
  );
};

export default JeansCategory;
