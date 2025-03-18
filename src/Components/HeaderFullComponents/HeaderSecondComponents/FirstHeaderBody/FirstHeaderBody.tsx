import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import LoupaSvg from '../../../Svg/LoupaSvg/LoupaSvg';
import { useNavigate } from 'react-router-dom';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { User } from '../../../Interfaces/Entity/User.';
import UserLoggedOut from '../UserLoggedOut/UserLoggedOut';
import UserLogged from '../UserLogged/UserLogged';

const FirstHeaderBody = () => {
  const nav = useNavigate();
  const RefContainerMyPurchase = useRef<HTMLDivElement | null>(null);

  const [user, setUser] = useState<User | null>(null);
  const [showUserName, setShowUserName] = useState<string | null>(null);

  useEffect(() => {
    const objUser = GetUserFromLocalStorage();

    // if (objUser.isNullUserLocalStorage) {
    //   nav('/login');
    //   return;
    // }

    // if (objUser.user === null) {
    //   localStorage.removeItem('user');

    //   nav('/login');
    //   return;
    // }
    const user = objUser.user;

    setUser(user);

    if (user) {
      const userName = user.name;
      const nameArray = userName?.split(' ');

      if (nameArray) {
        const showUserName = nameArray[0];
        setShowUserName(showUserName);
      }
    }
  }, [nav]);

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
    <Styled.ContainerFirstHeaderBody>
      <Styled.ContainerImgMarisa onClick={onClickContainerImgMarisa}>
        <Styled.Img
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741443432/imgs-backend-frontend-marisa/frontend/logo-marisa_gsegyb.svg"
          alt="logo-home-body-marisa"
        />
      </Styled.ContainerImgMarisa>

      <Styled.ContainerInputSearch>
        <Styled.Input placeholder="O que você procura?" />
        <Styled.ContainerSvgLoupa data-testid="container-svg-loupa">
          <LoupaSvg />
        </Styled.ContainerSvgLoupa>
      </Styled.ContainerInputSearch>

      {user === null && <UserLogged />}

      {showUserName && <UserLoggedOut />}

      <Styled.ContainerMyPurchase
        onMouseEnter={onMouseEnterMyPurchase}
        onMouseLeave={onMouseLeaveMyPurchase}>
        <Styled.ContainerImgPurchase>
          <Styled.Img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1741520934/imgs-backend-frontend-marisa/frontend/img-purchase_jfqphr.webp"
            alt="img-purchase"
          />

          <Styled.Span data-testid="span-quantity-purchase">0</Styled.Span>
        </Styled.ContainerImgPurchase>
        <Styled.ContainerSecondPurchase data-testid="container-second-purchase">
          <Styled.Span>Minhas compras</Styled.Span>
          <Styled.Span>R$ 0,00 (Subtotal)</Styled.Span>
        </Styled.ContainerSecondPurchase>
        <Styled.ContainerModalMyPurchase ref={RefContainerMyPurchase}>
          <Styled.Span>Sua sacola está vazia</Styled.Span>
        </Styled.ContainerModalMyPurchase>
      </Styled.ContainerMyPurchase>
    </Styled.ContainerFirstHeaderBody>
  );
};

export default FirstHeaderBody;
