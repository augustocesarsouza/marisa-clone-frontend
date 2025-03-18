import styled from "styled-components";

export const Span = styled.span``;

export const ContainerLoginAndRegister = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  position: relative;

  >span {
    font-size: 15px;
    font-weight: 500;
    color: #8d8d8d;
  }
`;

export const ContainerImgLoginEmpty = styled.div`
  display: flex;
  margin-right: 20px;

  >img {
    border-radius: 50px;
  }
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;

export const SpanNameUser = styled.span`
  font-weight: 600;
  display: inline-block;
  color: #ec008c;
`;

export const ContainerSvgArrow = styled.div`
  display: flex;
  margin-left: 7px;

  >svg {
    display: flex;
    width: 10px;
    height: 10px;
    transform: rotate(-90deg);
  }
`;

export const ContainerModalInfoUserMain = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0px;
  top: 50px;
`;

export const ContainerModalInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  background-color: #fff;
  border: 1px solid #00000042;
  color: #8d8d8d;
  width: 188px;
  position: relative;

  >span{
    font-size: 16px;
    font-weight: 600;
    padding: 10px 25px;

    &:hover {
      color: #ec008c;
    }
  }

  &::before {
    content: " ";
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #00000042;
    border-right-color: transparent;
    border-bottom-color: transparent;
    background-color: #fff;
    backface-visibility: hidden;
    left: 50%;
    transform: rotate(45deg) translate(-100%, 20%) scale(1, 1);
  }
`;

export const SpanExit = styled.span`
  border-top: 1px solid #0000001c;
`;