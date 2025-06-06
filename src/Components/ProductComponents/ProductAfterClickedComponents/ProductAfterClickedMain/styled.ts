import styled from 'styled-components';

export const Span = styled.span``;

export const Container = styled.div``;

export const ContainerMain = styled.div`
  @media (max-width: 1400px) {
    width: 1000px;
  }
`;

export const ContainerStarSvg = styled.div`
  > svg {
    width: 19px;
    height: 19px;
  }
`;

export const ContainerSvgMinusAndMore = styled.div`
  display: flex;
  width: 12px;
  height: 12px;

  > svg {
    width: 100%;
    height: auto;
    fill: #ec008c;
  }
`;

export const ContainerImgMain = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 1400px) {
    width: 492px;
    height: auto;
  }
`;

export const ContainerSvgChanging = styled.div`
  > svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

export const ContainerSvgTable = styled.div`
  > svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    transform: rotate(45deg);
  }
`;

export const h1EstimatedDelivery = styled.h1`
  font-size: 18px;
  font-family: 'PT Sans';
  font-weight: 500;
`;

export const ContainerArrowSvgRight = styled.div`
  display: flex;

  > svg {
    width: 15px;
    height: 30px;
    transform: rotate(270deg);
    fill: #777777;
  }
`;

export const ContainerAboutTheProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
  padding: 10px 15px;
  cursor: pointer;
  height: 40px;
  user-select: none;

  > svg {
    width: 15px;
    height: 30px;
    transform: rotate(0deg);
    fill: #4f4f4f;
  }
`;

export const ContainerOthers = styled.div`
  padding: 15px 0px;
`;
