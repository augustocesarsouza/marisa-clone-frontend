import styled from 'styled-components';

export const Span = styled.span``;

export const Container = styled.div``;

export const ContainerStarSvg = styled.div`
  > svg {
    width: 19px;
    height: 19px;
  }
`;

export const ContainerStarX = styled.div`
  display: flex;
  width: 19px;
  height: 19px;

  > svg {
    width: 100%;
    height: 100%;
    fill: #0000008c;
  }
`;

export const ContainerSvgThumb = styled.div`
  display: flex;
  width: 19px;
  height: 19px;

  > svg {
    width: 100%;
    height: 100%;
    stroke: #000000;
    stroke-width: 20;

    fill: #fff;
  }
`;
