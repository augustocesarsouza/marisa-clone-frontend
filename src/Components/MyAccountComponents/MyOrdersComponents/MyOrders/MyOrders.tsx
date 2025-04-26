// import * as Styled from './styled';

const MyOrders = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-semibold text-4xl !mt-[20px] !mb-[10px]">
        VOCÊ AINDA NÃO POSSUI PEDIDOS!
      </h1>
      <span className="text-center font-medium text-3xl !mb-[25px]">
        Para fazer um pedido basta navegar pela Loja Virtual Marisa ou utilizar a busca acima, e ao
        encontrar os produtos desejados, clique no botão "Comprar" se seguir os passos seguintes até
        a finalização de seu pedido.
      </span>

      <button className="bg-[#d3007d] text-white font-semibold w-[259px] h-[44px]">
        CONTINUAR NAVEGANDO
      </button>
    </div>
  );
};

export default MyOrders;
