import styled from "styled-components";

export const Span = styled.span``;

export const Container = styled.div``;

export const ContainerMain = styled.div``;

export const H1 = styled.h1``;

export const Label = styled.label``;

export const Input = styled.input``;

export const Button = styled.button``;

export const ContainerRegiserMain = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0px;
`;

export const ContainerRegiser = styled.div`
  width: 1005px;
`;

export const ContainerFirst = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  line-height: 1;
  gap: 7px;
  margin-bottom: 20px;

  >h1 {
    font-size: 19px;
    font-weight: 600;
  }

  >span {
    font-size: 17px;
    font-weight: 400;
  }
`;

export const ContainerSecond = styled.div`
  display: flex;
  justify-content: space-between;
  width: 401px;
  margin-bottom: 20px;
`;

export const ContainerCheckboxMain = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  cursor: pointer;

  >span {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffd1ec;
  background: #ffd1ec;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;

  >div {
    display: flex;
    background: #ec008c;
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
`;