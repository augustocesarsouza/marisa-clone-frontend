// import * as Styled from './styled';

const ProductActionButtons = () => {
  return (
    <div className="flex flex-col !mt-[20px] border-b border-[#e0e0e0] !pb-[35px] !mb-[20px] w-[360px]">
      <button className="text-[14px] font-medium !mb-[10px] text-[#2DDF89] border-1 border-[#2DDF89] h-[48px] rounded-[3%]">
        ADICIONAR À SACOLA
      </button>
      <button className="text-[14px] font-medium text-[#fff] bg-[#2ddf89] rounded-[3%] h-[48px]">
        COMPRAR AGORA
      </button>
    </div>
  );
};

export default ProductActionButtons;
