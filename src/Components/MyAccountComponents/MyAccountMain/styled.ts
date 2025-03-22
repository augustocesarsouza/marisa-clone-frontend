import styled from "styled-components";

export const Span = styled.span``;

export const H1 = styled.h1``;

export const ContainerMain = styled.div``;

export const SpanNav = styled.span`
  font-size: 11px;
  line-height: 1;
  padding: 25px 0px;
  text-transform: uppercase;
`;

export const SpanNavMain = styled.span`
  font-weight: 600;
`;

export const ContainerBodyMain = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 1005px;

  >h1 {
    font-size: 25px;
    font-weight: 500;
    text-transform: uppercase;
    border-bottom: 3px solid black;
    margin-bottom: 5px;
  }
`;

export const ContainerMyAccountNavigation = styled.div`
  display: flex;
`;

export const ContainerWelcome = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;