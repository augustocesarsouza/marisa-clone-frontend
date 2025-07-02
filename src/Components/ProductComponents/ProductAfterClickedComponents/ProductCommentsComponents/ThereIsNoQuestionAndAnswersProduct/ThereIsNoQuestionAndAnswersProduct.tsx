// import * as Styled from './styled';

interface ThereIsNoQuestionAndAnswersProductProps {
  onClickButtonQuestions: () => void;
}

const ThereIsNoQuestionAndAnswersProduct = ({
  onClickButtonQuestions,
}: ThereIsNoQuestionAndAnswersProductProps) => {
  return (
    <div>
      <h1 className="text-[30px] text-[#3E3E3E] font-medium">Perguntas & respostas</h1>

      <div className="flex flex-col items-center">
        <span className="text-[14px] font-medium !mb-[30px]">
          Este produto ainda não tem perguntas
        </span>
        <div
          className="flex !py-[13px] !px-[27px] border-1 rounded-lg border-[#EC008C] cursor-pointer"
          onClick={onClickButtonQuestions}>
          <button className="uppercase text-[14px] leading-6 text-[#EC008C] font-bold pointer-events-none">
            Seja o primeiro a perguntar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThereIsNoQuestionAndAnswersProduct;
