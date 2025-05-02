import styled from 'styled-components';

export const Span = styled.span``;

export const Container = styled.div``;

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 35px;
  gap: 25px;
  position: relative;
`;

export const ContainerModalFloating = styled.div`
  @media (min-width: 1400px) {
    width: 1365px;
  }
`;
