import { useContext, useEffect, useRef, useState } from 'react';
import LoupaSvg from '../../../Svg/LoupaSvg/LoupaSvg';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../Interfaces/Entity/User.';
import UserLoggedOut from '../UserLoggedOut/UserLoggedOut';
import UserLogged from '../UserLogged/UserLogged';
import { ContextHome } from '../Contexts/ContextHome';
import * as Styled from './styled';

const FirstHeaderBody = () => {
  const nav = useNavigate();
  const RefContainerMyPurchase = useRef<HTMLDivElement | null>(null);

  const [user, setUser] = useState<User | null>(null);
  const [showUserName, setShowUserName] = useState<string | null>(null);

  const context = useContext(ContextHome);
  useEffect(() => {
    if (context === null) return;
    const user = context.user;

    setUser(user);

    if (user) {
      const userName = user.name;
      const nameArray = userName?.split(' ');

      if (nameArray) {
        const showUserName = nameArray[0];
        setShowUserName(showUserName);
      }
    }
  }, [context]);

  const onMouseEnterMyPurchase = () => {
    if (RefContainerMyPurchase.current) {
      const container = RefContainerMyPurchase.current;
      container.style.display = 'flex';
    }
  };

  const onMouseLeaveMyPurchase = () => {
    if (RefContainerMyPurchase.current) {
      const container = RefContainerMyPurchase.current;
      container.style.display = 'none';
    }
  };

  const onClickContainerImgMarisa = () => {
    if (typeof window === 'undefined') return;
    nav('/', { replace: false });
    window.location.reload();
  };

  return (
    <Styled.ContainerFirstHeaderBodyMain className="flex items-center justify-between w-[1024px]">
      <div
        className="w-[175px] h-[40px] mr-[80px] flex cursor-pointer"
        onClick={onClickContainerImgMarisa}>
        <img
          className="flex w-full h-auto"
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741443432/imgs-backend-frontend-marisa/frontend/logo-marisa_gsegyb.svg"
          alt="logo-home-body-marisa"
        />
      </div>

      <Styled.ContainerInputSearch className="w-[320px] h-[35px] mr-[30px] flex">
        <input
          className="outline-none !pl-[10px] m-[0px] w-full border border-gray-300 focus:border-[#ec008c] transition-colors duration-100 ease-in-out"
          placeholder="O que você procura?"
        />
        <div
          className="w-[50px] flex items-center justify-center bg-[#ec008c] cursor-pointer"
          data-testid="container-svg-loupa">
          <LoupaSvg />
        </div>
      </Styled.ContainerInputSearch>

      {user === null && <UserLogged />}

      {showUserName && user && <UserLoggedOut user={user} />}

      <div
        className="flex justify-evenly w-70 relative cursor-pointer"
        onMouseEnter={onMouseEnterMyPurchase}
        onMouseLeave={onMouseLeaveMyPurchase}>
        <div className="flex w-[22px] h-[28px] relative">
          <img
            className="flex w-full h-auto"
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1741520934/imgs-backend-frontend-marisa/frontend/img-purchase_jfqphr.webp"
            alt="img-purchase"
          />

          <span
            className="flex bg-[#ff1293] text-[#fff] absolute bottom-[-7px] left-[10px] w-[20px] h-[20px] rounded-4xl text-center text-lg font-semibold leading-[1.9] items-center justify-center"
            data-testid="span-quantity-purchase">
            0
          </span>
        </div>
        <div className="flex flex-col leading-[1.2]" data-testid="container-second-purchase">
          <span className="text-xl font-medium">Minhas compras</span>
          <span className="text-xl font-medium">R$ 0,00 (Subtotal)</span>
        </div>
        <Styled.ContainerModalMyPurchase ref={RefContainerMyPurchase}>
          <span className="text-2xl font-semibold text-[#777]">Sua sacola está vazia</span>
        </Styled.ContainerModalMyPurchase>
      </div>
    </Styled.ContainerFirstHeaderBodyMain>
  );
};

export default FirstHeaderBody;
