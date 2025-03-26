import styled from "styled-components";

export const Span = styled.span``;

export const H1 = styled.h1``;

export const Label = styled.label``;

export const Input = styled.input``;

export const Option = styled.option``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  >h1 {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  >div:nth-of-type(3){
    width: 100%;
  }

  >div:nth-of-type(4){
    width: 50%;
  }
`;

export const ContainerLabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin-bottom: 10px;
  width: 50%;
  padding: 0px 10px;
  /* position: relative; */

  >label {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  >div {
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
  }

  >select {
    user-select: none;
    outline: none;
    padding: 10px;
    color: #676767;
    border: 1px solid #00000024;
    width: 100%;
    cursor: pointer;
    border-radius: 2px;
    text-transform: uppercase;

    &:focus {
      outline: none;
      border-color: #FF69B4;
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  >input {
    padding: 8px 12px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.27);
    transition: border-color 0.1s ease-in-out;
    border-radius: 3px;
    font-size: 14px;
    width: 100%;
    color: black;
    background-color: #eee;
    opacity: 1;
  }

  >span {
    font-size: 14px;
    text-transform: lowercase;
    text-decoration: underline;
    color: #777;
    width: 128px;
  }
`;

export const ContainerInputCep = styled.div`
  display: flex;
  align-items: end;
  position: relative;
  width: 100%;

  >input {
    padding: 8px 12px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.27);
    transition: border-color 0.1s ease-in-out;
    border-radius: 3px;
    font-size: 14px;
    width: 40%;
    color: black;
    background-color: #eee;
    opacity: 1;
    margin-right: 20px;
  }

  >span {
    font-size: 14px;
    font-weight: 600;
    text-transform: lowercase;
    text-decoration: underline;
    color: #777;
    padding-bottom: 5px;
    cursor: pointer;
  }
`;

export const Select = styled.select``

export const ContainerCheckboxButtonCompleteRegistration = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  >span {
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 35px;
  }
`;

export const ContainerButtonCancelAndSave = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  >button:nth-of-type(1) {
    background-color: #fff;
    color: #fff;
    border: 1px solid black;
    border-radius: 2px;
    font-weight: 600;
    padding: 10px 0px;
    font-size: 16px;
    margin-bottom: 8px;
    color: black;
    text-transform: uppercase;
    width: 251px;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: #fff;
      opacity: 0.9;
    }
  }

  >button:nth-of-type(2) {
    background-color: black;
    color: #fff;
    border: 1px solid black;
    border-radius: 2px;
    font-weight: 600;
    padding: 10px 0px;
    font-size: 16px;
    margin-bottom: 8px;
    color: #fff;
    text-transform: uppercase;
    width: 251px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const SpanError = styled.span`
  display: none;
  font-size: 14px;
  font-weight: 500;
  color: red;
  margin-top: 5px;
  line-height: 1.2;
`;

export const ContainerNumberComplementNeighborhood = styled.div`
  display: flex;
`;

export const ContainerCityAndUf = styled.div`
  display: flex;
`;