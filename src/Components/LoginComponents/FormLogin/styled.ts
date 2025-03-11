import styled from "styled-components";

export const Span = styled.span``;

export const Container = styled.div`
`;

export const H1 = styled.h1``;

export const Form = styled.form``;

export const Label = styled.label``;

export const Input = styled.input``;

export const ContainerLoginMain = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 321px;

  >h1 {
    font-size: 18px;
    margin-bottom: 25px;
    font-weight: 600;
  }
`;

export const ContainerLabelInput = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  /* margin-bottom: 20px; */
  margin-bottom: 10px;
  position: relative;

  >label {
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  >input {
    padding: 8px 12px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.27);
    transition: border-color 0.1s ease-in-out;
    border-radius: 3px;

    &:focus {
      outline: none;
      border-color: #FF69B4;
    }
  }

  >div {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 5px;
    bottom: 23px;

    >svg {
      display: flex;
      width: 100%;
      height: 100%;
    }
   
    cursor: pointer;
  }
`;

export const ContainerSvgEyeOpen = styled.div`
  display: flex;
`;

export const ContainerSvgEyeClose = styled.div`
  display: none;
`;

export const ContainerSpanForgotYourPassword = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;

  >span {
    font-size: 14px;
    font-weight: 600;
    color: #ec008c;
  }
`;

export const ButtonEnter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 17px;
  border: none;
  background-color: #9f9e9e;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 20px;

  /* cursor: pointer; */
  cursor: not-allowed;
`;

export const ContainerSpanYetNotHaveAccount = styled.div`
  display: flex;

  >span {
    font-size: 13px;
    font-weight: 600;
    color: black;
  }

  >span:nth-of-type(1){
    padding-right: 2px;
  }

  >span:nth-of-type(2){
    color: #ec008c;
  }
`;

export const SpanError = styled.span`
  /* display: none; */
  font-size: 14px;
  font-weight: 500;
  color: transparent;
  margin-top: 5px;
`;