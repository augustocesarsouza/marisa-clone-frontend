import styled from 'styled-components';

export const Container = styled.div``;

export const Span = styled.span``;

export const H1 = styled.h1``;

export const Label = styled.label``;

export const Input = styled.input``;

export const Option = styled.option``;

export const Button = styled.button``;

export const ContainerExitSvg = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const InputCelphone = styled.input`
  outline: none;
  width: 10%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-bottom: 1px solid #00000057;
  font-size: 27px;
`;

export const ContainerCountdown = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #c53131;
  margin-top: 10px;
  background: #ffe6e6;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 20px;
`;

export const ContainerDidNotReceiveTheCodeAndButtonNext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContainerDidNotReceiveTheCode = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  gap: 3px;

  > span > button {
    border: none;
    cursor: pointer;
    color: #508be3;
  }
`;

export const ContainerButtonNext = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 75%;
  height: 40px;

  > button {
    cursor: not-allowed;
    opacity: 0.7;
    background-color: #ee4d2d;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.09);
    color: #fff;
    border: none;
    width: 100%;
    font-size: 14px;
  }
`;
