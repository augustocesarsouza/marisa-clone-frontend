const HeaderSecond = () => {
  return (
    <div className="w-full mx-8 h-[45px] bg-black flex justify-center">
      <div className="w-[1004px] h-full flex items-stretch ">
        <ul className="h-full w-[110px] !mr-12">
          <li className="flex justify-center items-center bg-white h-full px-[20px]">
            <a href="/" className="flex w-[70px] h-[20px]">
              <img
                src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741443432/imgs-backend-frontend-marisa/frontend/logo-marisa_gsegyb.svg"
                alt="svg-marisa-logo"
              />
            </a>
          </li>
        </ul>
        <ul className="flex gap-[30px] w-[510px]">
          <li className="flex justify-center items-center">
            <a href="#" className="text-white text-xl font-medium">
              Meus Pedidos
            </a>
          </li>
          <li className="flex justify-center items-center">
            <a href="#" className="text-white text-xl font-medium">
              Nossas Lojas
            </a>
          </li>
          <li className="flex justify-center items-center">
            <a href="#" className="text-white text-xl font-medium">
              Atendimento
            </a>
          </li>
          <li className="flex justify-center items-center">
            <a href="#" className="flex bg-[#ec008c] !p-2 rounded-4xl">
              <span className="text-white text-xl font-medium !mx-6">Cartões e Serviços</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSecond;
