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

  > svg {
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
    cursor: pointer;
  }
`;
