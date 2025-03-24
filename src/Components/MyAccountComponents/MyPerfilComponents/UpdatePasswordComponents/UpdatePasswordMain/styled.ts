import styled from "styled-components";

export const Span = styled.span``;

export const H1 = styled.h1``;

export const Label = styled.label``;

export const Input = styled.input``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  width: 100%;
  margin-bottom: 60px;

  >h1 {
    font-size: 26px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

export const ContainerChangedSuccessfully = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin-bottom: 20px;
  background-color: #16db1e59;
  border-radius: 5px;

  >h1 {
    font-size: 18px;
    font-weight: 500;
    padding-left: 20px;
  }
`;

export const ContainerCountdown = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #c53131;
  margin-top: 10px;
  background: #ffe6e6;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 20px;
`;

export const ContainerNumberOfAttempts = styled.div`
  display: flex;
  padding: 15px 0px;
`;

export const ContainerPasswordAll = styled.div``;

export const ContainerLabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin-bottom: 10px;
  width: 50%;
  padding: 0px 10px;
  /* position: relative; */

  >label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  >input {
    padding: 8px 12px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.27);
    transition: border-color 0.1s ease-in-out;
    border-radius: 3px;
    font-size: 15px;

    &:focus {
      outline: none;
      border-color: #FF69B4;
    }
  }
`;

export const ContainerInputAndEye = styled.div`
  display: flex;
  position: relative;

  >input {
    padding: 8px 12px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.27);
    transition: border-color 0.1s ease-in-out;
    border-radius: 3px;
    font-size: 15px;
    width: 100%;

    &:focus {
      outline: none;
      border-color: #FF69B4;
    }
  }
`;

export const ContainerSvgEyeOpen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 9px;
  top: 6px;

  >svg {
    display: flex;
    width: 22px;
    height: 22px;
  }
`;

export const ContainerSvgEyeClose = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 9px;
  top: 6px;

  >svg {
    display: flex;
    width: 22px;
    height: 22px;
  }
`;

export const SpanError = styled.span`
  /* display: none; */
  font-size: 14px;
  font-weight: 500;
  color: transparent;
  margin-top: 5px;
`;

export const ContainerNewPasswordAndConfirmNewPassword = styled.div`
  display: flex;  
`;

export const ContainerSpanWarningAndButton = styled.div`
  display: flex;
  flex-direction: column;

  >span {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  gap: 20PX;

  >button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 2px solid black;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 5px;
    border-radius: 2px;
    cursor: pointer;
  }

  >button:nth-of-type(1){
    &:hover {
      background-color: black;
      color: #fff;
    }
  }

  >button:nth-of-type(2){
    background-color: black;
    color: #fff;

    &:hover {
      opacity: 0.8;
    }
  }
`;