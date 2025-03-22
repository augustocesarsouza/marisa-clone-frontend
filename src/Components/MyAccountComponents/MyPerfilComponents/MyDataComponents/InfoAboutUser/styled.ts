import styled from "styled-components";

export const Span = styled.span``;

export const H1 = styled.h1``;

export const Button = styled.button``;

export const ContainerInfoAboutUser = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 10px;
  gap: 30px;
  margin-bottom: 20px;
`;

export const ContainerInfoUser = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #00000021;
  padding-bottom: 15px;
  
  >h1 {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    width: 43%;
    margin-right: 5px;
  }

  >span {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
  }
`;