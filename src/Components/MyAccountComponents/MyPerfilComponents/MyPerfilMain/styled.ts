import styled from "styled-components";

export const Span = styled.span``;

export const H1 = styled.h1``;

export const Button = styled.button``;

export const ContainerMainPerfil = styled.div`
  /* height: 416px; */
  height: 100%;

  >h1 {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 7px;
  }
`;

export const ContainerSpanAndButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  >span {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;

  >button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 2px solid black;
    width: 30%;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 5px;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: #fff;
    }
  }
`;

export const ContainerOrders = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
`;

export const Thead = styled.thead`
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #eee;
`;

export const Th = styled.th`
  background-color: #f6f4f5;
  border-color: #f6f4f5;
  padding: 14px;
  vertical-align: middle;

  color: #3d3d3d;
  font-weight: 600;
  text-transform: none;
  font-size: 15px;
`;

export const Tbody = styled.tbody`
`;

export const Td = styled.td`
  background-color: #fcfcfc;
  color: #575757;
  border-color: #f6f4f5;
  padding: 18px 0px;
  vertical-align: middle;
  font-weight: 600;
  text-align: center;
`;

export const ContainerRegisteredAddresses = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  >button {
    font-size: 14px;
    font-weight: 600;
    background-color: #fff;
    color: black;
    border: 1px solid #979797;
    padding: 16px;
    cursor: pointer;

    &:hover {
      border-color: #ec008c;
      background-color:#f1eeee;
    }
  }
`;