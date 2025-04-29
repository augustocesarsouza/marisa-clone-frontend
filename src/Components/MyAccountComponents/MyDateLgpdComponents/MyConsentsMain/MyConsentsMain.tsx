const MyConsentsMain = () => {
  return (
    <div className="max-w-[753px] flex flex-col">
      <h1 className="text-4xl uppercase font-medium !mb-6">Meus Consentimentos</h1>
      <span className="text-3xl font-medium !mb-10">
        Sua privacidade e segurança são prioridades, para melhor atender você, customize nosso
        contato
      </span>

      <div className="flex flex-col !ml-4">
        <label className="flex leading-6 !mb-10 cursor-pointer">
          <input
            type="checkbox"
            className="!mr-2 w-[18px] h-[18px] accent-[#ec008c] text-sm input-checkbox-offers-and-promotions"
          />
          <span className="text-xl font-medium">
            Quero receber ofertas e promoções do Cartão Marisa, Via e-mail, SMS, Ligação ou Push
          </span>
        </label>

        <button className="w-[255px] bg-[black] text-[#fff] uppercase font-semibold text-2xl !p-3 cursor-pointer hover:opacity-80">
          Salvar Atualização
        </button>
      </div>
    </div>
  );
};

export default MyConsentsMain;
