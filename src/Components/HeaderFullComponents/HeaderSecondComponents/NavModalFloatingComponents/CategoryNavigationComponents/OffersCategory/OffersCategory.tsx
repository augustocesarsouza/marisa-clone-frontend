import { useState } from 'react';
import * as Styled from './styled';
import SectionTitle from '../../SectionTitle/SectionTitle';

interface OffersCategoryProps {
  onMouseEnterContainerMainModal: () => void;
  onMouseLeaveContainerMainModal: () => void;
}

const OffersCategory = ({
  onMouseEnterContainerMainModal,
  onMouseLeaveContainerMainModal,
}: OffersCategoryProps) => {
  const [allSpansFemine] = useState<string[]>([
    'Blusas',
    'Vestidos',
    'Calças',
    'Saias',
    'Shorts',
    'Camisas',
    'Croppeds',
    'Casacos',
    'Jaquetas',
    'Macacão',
    'Coletes',
    'Moletom',
    'Blazers',
    'Ver Tudo',
  ]);

  const [allSpansMasculine] = useState<string[]>([
    'Camisetas',
    'Calças',
    'Bermudas',
    'Camisas',
    'Polos',
    'Regatas',
    'Casacos e Jaquetas',
    'Ver Tudo',
  ]);

  const [allSpansFootwear] = useState<string[]>([
    'Tênis',
    'Sandálias',
    'Rasteirinhas',
    'Sapatilhas',
    'Chinelos',
    'Scarpins',
    'Botas e Coturnos',
    'Mule',
    'Mocassim Loafer',
    'Ver Tudo',
  ]);

  const [allSpansGirls] = useState<string[]>([
    'Bebê',
    'Infantil',
    'Juvenil',
    'Calçados',
    'Ver Tudo',
  ]);

  const [allSpansBoys] = useState<string[]>([
    'Bebê',
    'Infantil',
    'Juvenil',
    'Calçados',
    'Ver Tudo',
  ]);

  return (
    <Styled.ContainerModalFloating
      className="flex flex-col !px-[20px] !pt-[20px] !pb-[20px] w-[1050px] h-[644px] absolute top-[155px] bg-[#ffffff] z-10 border border-[#0000003a]"
      onMouseEnter={onMouseEnterContainerMainModal}
      onMouseLeave={onMouseLeaveContainerMainModal}>
      <div className="flex h-full justify-between">
        <div className="flex w-[68%]">
          <div className="flex flex-col w-[176px] !mr-[10px]">
            <h1 className="text-[16px] text-[#ec008c] font-semibold !mb-5">Feminino</h1>
            <div className="flex flex-col gap-3">
              {allSpansFemine.length > 0 &&
                allSpansFemine.map((el, i) => <SectionTitle span={el} key={i} />)}
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
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Calçados</h1>
            <div className="flex flex-col gap-3">
              {allSpansFootwear.length > 0 &&
                allSpansFootwear.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Meninas</h1>
            <div className="flex flex-col gap-3">
              {allSpansGirls.length > 0 &&
                allSpansGirls.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>

          <div className="flex flex-col w-[160px] !mr-[10px]">
            <h1 className="text-2xl text-[#ec008c] font-semibold !mb-5">Meninos</h1>
            <div className="flex flex-col gap-3">
              {allSpansBoys.length > 0 &&
                allSpansBoys.map((el, i) => <SectionTitle span={el} key={i} />)}
            </div>
          </div>
        </div>

        <div className="flex justify-end w-[353px] h-[400px]">
          <div className="flex">
            <img
              src="https://images2.marisa.com.br/medias/sys_master/images/images/hae/hf0/16350528372766/BMenu-Masculino-20240930-UltimasOportunidades-Desktop.gif"
              alt="img-bottom"
            />
          </div>
        </div>
      </div>
    </Styled.ContainerModalFloating>
  );
};

export default OffersCategory;
