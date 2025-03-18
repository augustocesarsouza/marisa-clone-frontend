import styled from "styled-components";

export const Span = styled.span``;

export const Input = styled.input`
`;

export const ContainerFirstHeaderBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
`;

export const ContainerImgMarisa = styled.div`
  display: flex;
  width: 175px;
  height: 40px;
  margin-right: 80px;
  cursor: pointer;
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;

export const ContainerInputSearch = styled.div`
  display: flex;
  width: 320px;
  height: 35px;
  margin-right: 30px;

  >input {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.27);
    padding: 0px;
    margin: 0px;
    padding-left: 10px;
    width: 100%;
    transition: border-color 0.1s ease-in-out;

    &:focus{
      outline: none;
      border-color: #FF69B4;
    }
  }
`;

export const ContainerSvgLoupa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: #ec008c;
  cursor: pointer;

  >svg {
    display: flex;
    width: 15px;
    height: 15px;
    fill: #fff;
  }
`;

export const ContainerMyPurchase = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 170px;
  position: relative;
  cursor: pointer;
`;

export const ContainerImgPurchase = styled.div`
  display: flex;
  width: 22px;
  height: 28px;

  position: relative;

  >span {
    background-color: #ff1293;
    color: #fff;
    position: absolute;
    bottom: -7px;
    left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerSecondPurchase = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  >span {
    font-size: 13px;
    font-weight: 500;
  }
`;

export const ContainerModalMyPurchase = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  bottom: -100px;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 400px;
  height: 85px;

  >span {
    font-size: 17px;
    font-weight: 600;
    color: #777;
  }

  &::before {
    content: " ";
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #ccc;
    border-right-color: transparent;
    border-bottom-color: transparent;
    background-color: #fff;
    backface-visibility: hidden;
    left: 255px;
    top: 0px;
    transform: rotate(45deg) translate(-100%, 20%) scale(1, 1);
  }
`;