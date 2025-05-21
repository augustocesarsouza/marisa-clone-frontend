import { useNavigate } from 'react-router-dom';

const HomepageMasculineChildishPlusSize = () => {
  const nav = useNavigate();

  const onClickBannerWhich = (banner: string) => {
    if (banner === 'masculine') {
      nav('/hotsite/festival-de-blusas');
    }

    if (banner === 'childish') {
      nav('/hotsite/bolsas-e-acessorios');
    }

    if (banner === 'plus-size') {
      nav('/hotsite/tricos-geral');
    }
  };

  return (
    <div className="flex justify-center gap-[20px] !mt-[65px]">
      <div className="flex cursor-pointer" onClick={() => onClickBannerWhich('masculine')}>
        <img
          className="flex w-full h-full"
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746637864/imgs-backend-frontend-marisa/frontend/homepage-masculino_jeiutc.gif"
          alt="img-homepage-masculine"
        />
      </div>
      <div className="flex cursor-pointer" onClick={() => onClickBannerWhich('childish')}>
        <img
          className="flex w-full h-full"
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746637864/imgs-backend-frontend-marisa/frontend/homepage-infantil_vaiiao.gif"
          alt="img-homepage-childish"
        />
      </div>
      <div className="flex cursor-pointer" onClick={() => onClickBannerWhich('plus-size')}>
        <img
          className="flex w-full h-full"
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1746637864/imgs-backend-frontend-marisa/frontend/homepage-plus-size_zcelbj.gif"
          alt="img-homepage-plus-size"
        />
      </div>
    </div>
  );
};

export default HomepageMasculineChildishPlusSize;
