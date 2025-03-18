import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';

const UserLogged = () => {
  const nav = useNavigate();

  const onClickContainerLoginAndRegister = () => {
    if (typeof window === 'undefined') return;
    nav('/login', { replace: false });
    window.location.reload();
  };

  return (
    <Styled.ContainerLoginAndRegister onClick={onClickContainerLoginAndRegister}>
      <Styled.ContainerImgLoginEmpty>
        <Styled.Img
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741520954/imgs-backend-frontend-marisa/frontend/user-login_wicdjr.webp"
          alt="img-login-register"
        />
      </Styled.ContainerImgLoginEmpty>
      <Styled.Span data-testid="span-login-out">Entre ou cadastre-se</Styled.Span>
    </Styled.ContainerLoginAndRegister>
  );
};

export default UserLogged;
