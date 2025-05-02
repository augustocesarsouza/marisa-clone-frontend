import { useEffect, useState } from 'react';
import * as Styled from './styled';
import ImgAndHeader from '../../ImgAndHeader/ImgAndHeader';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { imgNavigation } from '../../../HeaderSecondMain/HeaderSecondMain';

interface FootwearCategoryProps {
  onMouseEnterContainerMainModal: () => void;
  onMouseLeaveContainerMainModal: () => void;
}

const FootwearCategory = ({
  onMouseEnterContainerMainModal,
  onMouseLeaveContainerMainModal,
}: FootwearCategoryProps) => {
  const [allSpansFemale] = useState<string[]>([
    'Tênis',
    'Sandálias',
    'Rasteirinhas',
    'Sapatilhas',
    'Chinelos',
    'Scarpin',
    'Mule',
    'Mocassim Loafer',
    'Botas e Coturnos',
    'Conforto',
  ]);

  const [allSpansMale] = useState<string[]>(['Tênis', 'Tênis Esportivo', 'Chinelos', 'Ver Tudo']);
  const [allSpansForGirls] = useState<string[]>([
    'Sandálias',
    'Tênis',
    'Sapatilhas',
    'Chinelos',
    'Botas',
    'Ver Tudo',
  ]);

  const [allSpansForBoys] = useState<string[]>(['Tênis', 'Chinelos', 'Papetes', 'Ver Tudo']);
  const [allSpansBrands] = useState<string[]>([
    'Via Uno',
    'Modare',
    'Moleca',
    'Ipanema',
    'Beira Rio',
    'Vizzano',
  ]);

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
      span: 'Tênis',
    };

    const objImg5 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h1b/h5b/16591736176670/BMenu-SubCategoria-Calcados-20250213-Rasteiras.gif',
      alt: 'img-flats',
      span: 'Rasteiras',
    };

    const objImg6 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/ha6/he9/16591736471582/BMenu-SubCategoria-Calcados-20250213-Sapatilhas.gif',
      alt: 'img-sneakers',
      span: 'Sapatilhas',
    };

    const objImg7 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/hb4/h47/16591736504350/BMenu-SubCategoria-Calcados-20250213-Scarpin.gif',
      alt: 'img-pumps',
      span: 'Scarpin',
    };

    const objImg8 = {
      img: 'https://www.marisa.com.br/medias/sys_master/images/images/h4f/h74/16591735980062/BMenu-SubCategoria-Calcados-20250213-Chinelos.gif',
      alt: 'img-slippers',
      span: 'Chinelos',
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
            <h1 className="text-[16px] text-[#ec008c] font-semibold !mb-5">Feminino</h1>
            <div className="flex flex-col gap-3">
              {allSpansFemale.length > 0 &&
                allSpansFemale.map((el, i) => <SectionTitle span={el} key={i} />)}
              <span className="text-[13px] font-semibold text-[#3d3d3d] hover:text-[#ec008c] cursor-pointer">
                Ver Tudo
              </span>
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Masculino</h1>
            <div className="flex flex-col gap-3">
              {allSpansMale.length > 0 &&
                allSpansMale.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">para Meninas</h1>
            <div className="flex flex-col gap-3">
              {allSpansForGirls.length > 0 &&
                allSpansForGirls.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">para Meninos</h1>
            <div className="flex flex-col gap-3">
              {allSpansForBoys.length > 0 &&
                allSpansForBoys.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[123px] !mr-[10px]">
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
              src="https://images2.marisa.com.br/medias/sys_master/images/images/he4/hc3/16591735652382/BMenu-Calcados-20250213-Calcados-Desktop.gif"
              alt="img-two-shoes"
            />
          </div>
        </div>
      </div>
    </Styled.ContainerModalFloating>
  );
};

export default FootwearCategory;
