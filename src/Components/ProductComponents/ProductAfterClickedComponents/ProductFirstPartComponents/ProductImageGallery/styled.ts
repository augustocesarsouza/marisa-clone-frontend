import styled from 'styled-components';

export const Span = styled.span``;

export const Container = styled.div``;

export const ContainerImgMain = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  margin-bottom: 20px;
  position: relative;
  user-select: none;
  cursor: pointer;

  @media (max-width: 1400px) {
    width: 492px;
    height: auto;
  }
`;

export const containerSvgArrowRight = styled.div`
  display: flex;
  position: absolute;
  right: 30px;
  top: 340px;
  width: 20px;
  height: 30px;

  > svg {
    width: 100%;
    height: 100%;
    transform: rotate(360deg);
    cursor: pointer;
  }
`;

export const containerSvgArrowLeft = styled.div`
  display: flex;
  position: absolute;
  left: 30px;
  top: 340px;
  width: 20px;
  height: 30px;
  z-index: 10;

  > svg {
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
    cursor: pointer;
  }
`;
