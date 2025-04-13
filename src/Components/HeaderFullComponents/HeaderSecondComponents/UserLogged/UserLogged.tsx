import { useNavigate } from 'react-router-dom';

const UserLogged = () => {
  const nav = useNavigate();

  const onClickContainerLoginAndRegister = () => {
    if (typeof window === 'undefined') return;
    nav('/login', { replace: false });
    window.location.reload();
  };

  return (
    <div
      className="flex items-center cursor-pointer relative"
      onClick={onClickContainerLoginAndRegister}>
      <div className="flex !mr-[20px]">
        <img
          className="rounded-4xl"
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741520954/imgs-backend-frontend-marisa/frontend/user-login_wicdjr.webp"
          alt="img-login-register"
        />
      </div>
      <span className="text-xl font-medium text-[#8d8d8d]" data-testid="span-login-out">
        Entre ou cadastre-se
      </span>
    </div>
  );
};

export default UserLogged;
