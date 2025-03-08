import * as Styled from './styled';

const HeaderSecond = () => {
  return (
    <Styled.ContainerMain>
      <Styled.ContainerSecond>
        <Styled.ContainerImgMarisaLogo>
          <Styled.Img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/q_100/v1741443432/imgs-backend-frontend-marisa/frontend/logo-marisa_gsegyb.svg"
            alt="svg-marisa-logo"
          />
        </Styled.ContainerImgMarisaLogo>
        <Styled.ContainerNavigation>
          <Styled.Span>Meus Pedidos</Styled.Span>
          <Styled.Span>Nossas Lojas</Styled.Span>
          <Styled.Span>Atendimento</Styled.Span>
        </Styled.ContainerNavigation>
        <Styled.Button>Cartões e Serviços</Styled.Button>
      </Styled.ContainerSecond>
    </Styled.ContainerMain>
  );
};

export default HeaderSecond;
