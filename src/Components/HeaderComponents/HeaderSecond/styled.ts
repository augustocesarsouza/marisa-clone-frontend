import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 50px;
`;

export const ContainerSecond = styled.div`
  display: flex;
  width: 1024px;
`;

export const Span = styled.span`
  font-size: 12px;
  color: #fff;
`;

export const ContainerImgMarisaLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  background-color: #fff;
  margin-right: 25px;
`;

export const Img = styled.img`
  display: flex;
  width: 70px;
  height: 20px;
`;

export const ContainerNavigation = styled.div`
  display: flex;
  align-items: center;

  >span {
    font-size: 14px;
    font-weight: 400;
    padding: 15px 15px 10px 15px;
    cursor: pointer;

    &:hover {
      color: rgb(236, 0, 140);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 30px;
  background-color: rgb(236, 0, 140);
  color: #fff;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 400;
  margin-top: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;