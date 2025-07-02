// import * as Styled from './styled';

interface ThereIsNoCommentProductProps {
  onClickButtonEvaluate: () => void;
}

const ThereIsNoCommentProduct = ({ onClickButtonEvaluate }: ThereIsNoCommentProductProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[14px] font-medium !mb-[30px]">
        Este produto ainda não tem avaliações
      </span>
      <div
        className="flex !py-[13px] !px-[27px] border-1 rounded-lg border-[#EC008C] cursor-pointer"
        onClick={onClickButtonEvaluate}>
        <button className="uppercase text-[14px] leading-6 text-[#EC008C] font-bold pointer-events-none">
          Seja o primeiro a avaliar
        </button>
      </div>
    </div>
  );
};

export default ThereIsNoCommentProduct;
