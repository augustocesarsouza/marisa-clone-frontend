const StoreBenefitsBar = () => {
  return (
    <div className="flex justify-evenly whitespace-nowrap uppercase !pt-[20px]">
      <div className="flex gap-[5px] items-center leading-6">
        <div className="flex w-[29px] h-[29px]">
          <img
            className="flex w-full h-full"
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746527597/imgs-backend-frontend-marisa/frontend/frete-gratis_gf3xzk.gif"
            alt="img-free-shipping"
          />
        </div>
        <span className="text-[13px] font-medium">Frete Grátis Brasil</span>
      </div>
      <div className="flex gap-[5px] items-center leading-6">
        <div className="flex w-[29px] h-[29px]">
          <img
            className="flex w-full h-full"
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746527602/imgs-backend-frontend-marisa/frontend/pagamento-fatura_ihtevu.gif"
            alt="img-invoice-payment"
          />
        </div>
        <span className="text-[13px] font-medium">Pagamento de Fatura</span>
      </div>
      <div className="flex gap-[5px] items-center leading-6">
        <div className="flex w-[29px] h-[29px]">
          <img
            className="flex w-full h-full"
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746527606/imgs-backend-frontend-marisa/frontend/compra-na-loja-troca_suf4zo.gif"
            alt="img-buy-website-exchange-in-store"
          />
        </div>
        <span className="text-[13px] font-medium">Compre no Site Troque na Loja</span>
      </div>
      <div className="flex gap-[5px] items-center leading-6">
        <div className="flex w-[29px] h-[29px]">
          <img
            className="flex w-full h-full"
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746527609/imgs-backend-frontend-marisa/frontend/cartao-sem-juros_q3kxnb.gif"
            alt="img-interest-free"
          />
        </div>
        <span className="text-[13px] font-medium">Até 5x Sem Juros</span>
      </div>
    </div>
  );
};

export default StoreBenefitsBar;
