import styled from 'styled-components';

export const Span = styled.span``;

export const Container = styled.div``;

export const ContainerMain = styled.div``;

export const H1 = styled.h1``;

export const Label = styled.label``;

export const Input = styled.input``;

export const Button = styled.button``;

export const ContainerMainBodyOfRegister = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerFirstRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ContainerSecondRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  > div:nth-of-type(1),
  div:nth-of-type(3),
  div:nth-of-type(4) {
    margin-bottom: 20px;
  }
`;

export const ContainerFirst = styled.div`
  display: flex;
  flex-direction: column;

  > :nth-of-type(1),
  :nth-of-type(2),
  :nth-of-type(3) {
    margin-bottom: 20px;
  }

  > div:nth-of-type(5) {
    margin-bottom: 20px;
  }
`;

export const ContainerLabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;

  > label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
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

export const ContainerUfAndIcms = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  > div:nth-of-type(1) {
    width: 70%;
  }

  > div:nth-of-type(2) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ContainerFourth = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  > h1 {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 16px;
  }
`;

export const ContainerSecond = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerCellPhone = styled.div`
  display: flex;
  width: 50%;
  gap: 20px;
  margin-bottom: 10px;

  > div:nth-of-type(1) {
    width: 30%;
  }

  > div:nth-of-type(2) {
    width: 60%;
  }
`;

export const ContainerTelephone = styled.div`
  display: flex;
  width: 50%;
  gap: 20px;

  > div:nth-of-type(1) {
    width: 30%;
  }

  > div:nth-of-type(2) {
    width: 60%;
  }
`;

export const ContainerButtonReceiveToken = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  > button {
    background-color: rgb(172, 171, 171);
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    padding: 10px 0px;
    font-size: 16px;
    margin-bottom: 8px;
  }

  > span {
    font-size: 14px;
  }
`;

export const ContainerSvgEyeOpen = styled.div`
  display: flex;

  width: 25px;
  height: 25px;
  position: absolute;
  right: 5px;
  bottom: 6px;

  > svg {
    display: flex;
    width: 100%;
    height: 100%;
  }

  cursor: pointer;
`;

export const ContainerSvgEyeClose = styled.div`
  display: none;

  width: 25px;
  height: 25px;
  position: absolute;
  right: 5px;
  bottom: 6px;

  > svg {
    display: flex;
    width: 100%;
    height: 100%;
  }

  cursor: pointer;
`;

export const SpanError = styled.span`
  display: none;
  font-size: 14px;
  font-weight: 500;
  color: red;
  margin-top: 5px;
  line-height: 1.2;
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

export const ContainerCheckboxButtonCompleteRegistration = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  > button {
    background-color: rgb(172, 171, 171);
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    padding: 10px 0px;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const ContainerOffers = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid black;
    line-height: 1;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const ContainerAllCheckboxSpan = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-weight: 600;
  }
`;

export const ContainerAllCheckbox = styled.div`
  display: flex;
  gap: 170px;
`;

export const ContainerCheckboxIUnderstandAndAgree = styled.label`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 15px;

  > input {
    /* appearance: none; */
    width: 14px;
    height: 14px;
    /* border: 2px solid black; */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    margin-right: 10px;
  }
`;

export const SpanLink = styled.span`
  color: #ec008c;
  text-decoration: underline;
  cursor: pointer;
`;

export const Select = styled.select`
  user-select: none;
  outline: none;
  padding: 10px;
  color: #676767;
  border: 1px solid #00000024;
  margin-bottom: 6px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
`;

export const Option = styled.option``;

export const SelectTaxSituation = styled.select`
  user-select: none;
  outline: none;
  padding: 10px;
  color: #000000;
  font-weight: 600;
  border: 1px solid #00000024;
  margin-bottom: 6px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  font-size: 15px;
`;
