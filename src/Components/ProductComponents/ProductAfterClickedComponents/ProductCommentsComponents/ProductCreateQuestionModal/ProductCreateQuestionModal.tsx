import SvgX from '../../../../Svg/SvgX/SvgX';
import * as Styled from './styled';

interface ProductCreateQuestionModalProps {
  changeValueButtonQuestions: (value: boolean) => void;
}

const ProductCreateQuestionModal = ({
  changeValueButtonQuestions,
}: ProductCreateQuestionModalProps) => {
  const onClickCloseModalQuestion = () => {
    changeValueButtonQuestions(false);

    document.body.style.overflow = 'scroll';
  };

  return (
    <div className="flex justify-center items-center fixed left-[0px] top-[0px] bg-[#00000042] w-[100%] h-[100%]">
      <div className="flex flex-col w-[400px] bg-[#fff] !p-[20px] relative rounded-2xl">
        <Styled.ContainerStarX
          className="absolute top-[15px] right-[15px]"
          onClick={onClickCloseModalQuestion}>
          <SvgX />
        </Styled.ContainerStarX>

        <h1 className="text-[22px] !mb-[15px] text-center leading-6 uppercase text-[#EC008C] font-bold">
          Fazer pergunta
        </h1>

        <div className="flex flex-col gap-3 w-full !mb-[10px]">
          <span className="text-[14px] text-[#3d3d3d] font-bold leading-[19px]">
            Tem alguma dúvida sobre o produto? Faça sua pergunta!
          </span>
          <textarea
            className="w-full !p-[5px] text-[14px] h-[80px] rounded-lg border border-gray-300 text-sm placeholder:text-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Digite seu pergunta"></textarea>
        </div>

        <div className="flex flex-col leading-6 !mb-[10px]">
          <label
            htmlFor="what-is-your-name"
            className="text-[14px] text-[#3d3d3d] font-bold leading-[19px] !mb-[15px]">
            Qual seu nome?
          </label>
          <input
            type="text"
            id="what-is-your-name"
            autoComplete="new-password"
            className="flex leading-[16px] w-full !p-[9px] !pl-[10px] text-[black] text-[16px] font-medium rounded-full border border-gray-300 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Nome"
          />
        </div>

        <div className="flex flex-col leading-6 !mb-[15px]">
          <label
            htmlFor="what-is-your-email"
            className="text-[14px] text-[#3d3d3d] font-bold leading-[19px] !mb-[15px]">
            Qual seu e-mail?
          </label>
          <input
            type="text"
            id="what-is-your-email"
            autoComplete="new-password"
            className="flex leading-[16px] w-full !p-[9px] !pl-[10px] text-[black] text-[16px] font-medium rounded-full border border-gray-300 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Email"
          />
        </div>

        <button className="text-[14px] leading-6 rounded-full !py-[12px] text-[#fff] bg-[#EC008C] font-bold pointer-events-none">
          Enviar pergunta
        </button>
      </div>
    </div>
  );
};

export default ProductCreateQuestionModal;
