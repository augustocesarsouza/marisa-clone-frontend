import * as Styled from './styled';

const HeaderSecond = () => {
  return (
    <Styled.ContainerMainHeaderSecondMain className="w-full mx-8 h-[45px] flex justify-center">
      <Styled.ContainerMainHeaderSecond className="w-[1004px] h-full flex items-stretch">
        <Styled.UlImgMarisa className="h-full w-[110px]">
          <li className="flex justify-center items-center bg-white h-full px-[20px]">
            <a href="/" className="flex w-[70px] h-[20px]">
              <img
                src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741443432/imgs-backend-frontend-marisa/frontend/logo-marisa_gsegyb.svg"
                alt="svg-marisa-logo"
              />
            </a>
          </li>
        </Styled.UlImgMarisa>
        <ul className="flex gap-[30px] w-[600px]">
          <li className="flex justify-center items-center">
            <Styled.Link href="#" className="text-white text-xl font-medium text-[12px]">
              Meus Pedidos
            </Styled.Link>
          </li>
          <li className="flex justify-center items-center">
            <Styled.Link href="#" className="text-white text-xl font-medium text-[12px]">
              Nossas Lojas
            </Styled.Link>
          </li>
          <li className="flex justify-center items-center">
            <Styled.Link href="#" className="text-white text-xl font-medium text-[12px]">
              Atendimento
            </Styled.Link>
          </li>
          <li className="flex justify-center items-center">
            <a href="#" className="flex bg-[#ec008c] !p-2 rounded-4xl">
              <span className="text-white text-xl font-medium !mx-6">Cartões e Serviços</span>
            </a>
          </li>
        </ul>
      </Styled.ContainerMainHeaderSecond>
    </Styled.ContainerMainHeaderSecondMain>
  );
};

export default HeaderSecond;
