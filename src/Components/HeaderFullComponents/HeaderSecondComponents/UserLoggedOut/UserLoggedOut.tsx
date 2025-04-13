import { useEffect, useRef, useState } from 'react';
import SvgArrow from '../../../Svg/SvgArrow/SvgArrow';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../Interfaces/Entity/User.';

interface UserLoggedOutProps {
  user: User;
}

const UserLoggedOut = ({ user }: UserLoggedOutProps) => {
  const RefContainerSvgArrow = useRef<HTMLDivElement | null>(null);
  const [, setWasClickedUserLogged] = useState(false);

  const [showUserName, setShowUserName] = useState<string | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    console.log();

    if (user) {
      const userName = user.name;
      const nameArray = userName?.split(' ');

      if (nameArray) {
        const showUserName = nameArray[0];
        setShowUserName(showUserName);
      }
    }
  }, [user]);

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

  const onClickExitUser = () => {
    localStorage.removeItem('user');
    setShowModalInfoUser(false);
    nav('/login');
    window.location.reload();
  };

  return (
    <div
      className="flex items-center !mr-[10px] cursor-pointer relative"
      onClick={onClickContainerLoggedInUser}>
      <div className="flex !mr-[15px]">
        <img
          className="flex w-full h-auto rounded-4xl"
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741520954/imgs-backend-frontend-marisa/frontend/user-login_wicdjr.webp"
          alt="img-login-register"
        />
      </div>
      <span
        className="text-2xl font-semibold text-[#8d8d8d] !mr-[5px]"
        data-testid="span-user-logged">
        Olá, <span className="font-semibold inline-block text-[#ec008c]">{showUserName}</span>
      </span>
      <div className="flex" ref={RefContainerSvgArrow}>
        <SvgArrow />
      </div>

      {showModalInfoUser && (
        <div className="flex flex-col absolute left-[0px] top-[50px]">
          <Styled.ContainerModalInfoUser>
            <span
              className="text-2xl font-semibold !px-[25px] !py-[10px] hover:text-[#ec008c]"
              onClick={onClickMyOrders}>
              Meus dados
            </span>
            <span className="text-2xl font-semibold !px-[25px] !py-[10px] hover:text-[#ec008c]">
              Meus pedidos
            </span>
            <span className="text-2xl font-semibold !px-[25px] !py-[10px] hover:text-[#ec008c]">
              Cartões Marisa
            </span>
            <span className="text-2xl font-semibold !px-[25px] !py-[10px] hover:text-[#ec008c]">
              Lista de Desejos
            </span>
            <span
              className="text-2xl font-semibold !px-[25px] !py-[10px] hover:text-[#ec008c] border-t border-t-[#0000001c]"
              onClick={onClickExitUser}>
              Sair
            </span>
          </Styled.ContainerModalInfoUser>
        </div>
      )}
    </div>
  );
};

export default UserLoggedOut;
