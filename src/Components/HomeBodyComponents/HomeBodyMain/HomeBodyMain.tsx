import LoupaSvg from '../../Svg/LoupaSvg/LoupaSvg';
import * as Styled from './styled';

const HomeBodyMain = () => {
  return (
    <Styled.ContainerMain>
      <Styled.ContainerFirstHeaderBody>
        <Styled.ContainerImgMarisa>
          <Styled.Img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741443432/imgs-backend-frontend-marisa/frontend/logo-marisa_gsegyb.svg"
            alt="logo-home-body-marisa"
          />
        </Styled.ContainerImgMarisa>

        <Styled.ContainerInputSearch>
          <Styled.Input placeholder="O que você procura?" />
          <Styled.ContainerSvgLoupa>
            <LoupaSvg></LoupaSvg>
          </Styled.ContainerSvgLoupa>
        </Styled.ContainerInputSearch>

        <Styled.ContainerLoginAndRegister>
          <Styled.ContainerImgLoginEmpty>
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741520954/imgs-backend-frontend-marisa/frontend/user-login_wicdjr.webp"
              alt="img-login-register"
            />
          </Styled.ContainerImgLoginEmpty>
          <Styled.Span>Entre ou cadastre-se</Styled.Span>
        </Styled.ContainerLoginAndRegister>

        <Styled.ContainerMyPurchase>
          <Styled.ContainerImgPurchase>
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1741520934/imgs-backend-frontend-marisa/frontend/img-purchase_jfqphr.webp"
              alt="img-login-register"
            />

            <Styled.Span>0</Styled.Span>
          </Styled.ContainerImgPurchase>
          <Styled.ContainerSecondPurchase>
            <Styled.Span>Minhas compras</Styled.Span>
            <Styled.Span>R$ 0,00 (Subtotal)</Styled.Span>
          </Styled.ContainerSecondPurchase>
        </Styled.ContainerMyPurchase>
      </Styled.ContainerFirstHeaderBody>

      <Styled.ContainerNavigation></Styled.ContainerNavigation>
    </Styled.ContainerMain>
  );
};

export default HomeBodyMain;
