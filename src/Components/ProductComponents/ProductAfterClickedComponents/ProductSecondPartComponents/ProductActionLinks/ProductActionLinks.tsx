import * as Styled from './styled';
import SvgChanging from '../../../../Svg/SvgChanging/SvgChanging';
import SvgTable from '../../../../Svg/SvgTable/SvgTable';

const ProductActionLinks = () => {
  return (
    <div className="flex gap-[15px] !mb-[40px]">
      <Styled.ContainerSvgChanging
        className="flex items-center leading-[16px]"
        data-testid="container-svg-changing">
        <SvgChanging />
        <span className="text-[#ec008c] text-[12px] font-semibold !mt-[2px]">Provador Virtual</span>
      </Styled.ContainerSvgChanging>
      <Styled.ContainerSvgTable
        className="flex items-center leading-[16px]"
        data-testid="container-svg-table">
        <SvgTable />
        <span className="text-[#ec008c] text-[12px] font-semibold !mt-[2px]">
          Tabela de Medidas
        </span>
      </Styled.ContainerSvgTable>
    </div>
  );
};

export default ProductActionLinks;
