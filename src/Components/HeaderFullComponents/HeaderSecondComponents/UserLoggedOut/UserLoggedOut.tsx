import { useEffect, useRef, useState } from 'react';
import SvgArrow from '../../../Svg/SvgArrow/SvgArrow';
import * as Styled from './styles';
import { GetUserFromLocalStorage } from '../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { useNavigate } from 'react-router-dom';

const UserLoggedOut = () => {
  const RefContainerSvgArrow = useRef<HTMLDivElement | null>(null);
  const [, setWasClickedUserLogged] = useState(false);

  const nav = useNavigate();
  const [showUserName, setShowUserName] = useState<string | null>(null);

  useEffect(() => {
    const objUser = GetUserFromLocalStorage();

    const user = objUser.user;

    if (user) {
      const userName = user.name;
      const nameArray = userName?.split(' ');

      if (nameArray) {
        const showUserName = nameArray[0];
        setShowUserName(showUserName);
      }
    }
  }, [nav]);

  const [showModalInfoUser, setShowModalInfoUser] = useState(false);

  const onClickContainerLoggedInUser = () => {
    setWasClickedUserLogged((prev) => {
      const valueClicked = !prev;

      const containerSvg = RefContainerSvgArrow.current as HTMLDivElement;
      const svg = containerSvg.firstChild as SVGElement;
      svg.style.transform = valueClicked ? 'rotate(90deg)' : 'rotate(-90deg)';

      if (valueClicked) {
        setShowModalInfoUser(true);
      } else {
        setShowModalInfoUser(false);
      }

      return valueClicked;
    });
  };

  const onClickMyOrders = () => {
    // navigate('/dashboard');
    setShowModalInfoUser(false);
    nav('/my-account');
  };

  return (
    <Styled.ContainerLoginAndRegister onClick={onClickContainerLoggedInUser}>
      <Styled.ContainerImgLoginEmpty>
        <Styled.Img
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741520954/imgs-backend-frontend-marisa/frontend/user-login_wicdjr.webp"
          alt="img-login-register"
        />
      </Styled.ContainerImgLoginEmpty>
      <Styled.Span data-testid="span-user-logged">
        Olá, <Styled.SpanNameUser>{showUserName}</Styled.SpanNameUser>
      </Styled.Span>
      <Styled.ContainerSvgArrow ref={RefContainerSvgArrow}>
        <SvgArrow />
      </Styled.ContainerSvgArrow>

      {showModalInfoUser && (
        <Styled.ContainerModalInfoUserMain>
          <Styled.ContainerModalInfoUser>
            <Styled.Span onClick={onClickMyOrders}>Meus dados</Styled.Span>
            <Styled.Span>Meus pedidos</Styled.Span>
            <Styled.Span>Cartões Marisa</Styled.Span>
            <Styled.Span>Lista de Desejos</Styled.Span>
            <Styled.SpanExit>Sair</Styled.SpanExit>
          </Styled.ContainerModalInfoUser>
        </Styled.ContainerModalInfoUserMain>
      )}
    </Styled.ContainerLoginAndRegister>
  );
};

export default UserLoggedOut;
