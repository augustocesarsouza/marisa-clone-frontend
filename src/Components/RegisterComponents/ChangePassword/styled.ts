import styled from 'styled-components';

export const Span = styled.span``;

export const H1 = styled.h1``;

export const Label = styled.label``;

export const Input = styled.input``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const ContainerChildrenMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1024px;

  > h1 {
    font-size: 26px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
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

  > label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  > input {
    padding: 8px 12px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.27);
    transition: border-color 0.1s ease-in-out;
    border-radius: 3px;
    font-size: 15px;

    &:focus {
      outline: none;
      border-color: #ff69b4;
    }
  }
`;

export const ContainerInputAndEye = styled.div`
  display: flex;
  position: relative;

  > input {
    padding: 8px 12px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.27);
    transition: border-color 0.1s ease-in-out;
    border-radius: 3px;
    font-size: 15px;
    width: 100%;

    &:focus {
      outline: none;
      border-color: #ff69b4;
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

  > svg {
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

  > svg {
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

  > span {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  gap: 20px;

  > button {
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

  > button:nth-of-type(1) {
    &:hover {
      background-color: black;
      color: #fff;
    }
  }

  > button:nth-of-type(2) {
    background-color: black;
    color: #fff;

    &:hover {
      opacity: 0.8;
    }
  }
`;
