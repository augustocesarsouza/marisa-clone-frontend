import styled from 'styled-components';

export const Span = styled.span``;

export const Container = styled.div``;

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
