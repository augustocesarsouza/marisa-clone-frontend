const MoreOffersAndJustArrived = () => {
  return (
    <div className="flex flex-col items-center !mt-[60px]">
      <h1 className="header-more-offers-just-arrived uppercase text-[#EC008C] text-[18px] font-medium !mb-[15px]">
        mais <span className="font-bold">ofertas</span>
      </h1>

      <div className="flex">
        <img
          className="flex w-full h-full"
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746639312/imgs-backend-frontend-marisa/frontend/acabou-de-chegar_qr6dli.gif"
          alt="img-homepage-just-arrived"
        />
      </div>
    </div>
  );
};

export default MoreOffersAndJustArrived;
