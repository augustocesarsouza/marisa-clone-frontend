import styled from "styled-components";

export const Span = styled.span``;

export const H1 = styled.h1``;

export const Label = styled.label``;

export const Input = styled.input``;

export const Container = styled.div``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  width: 100%;

  >div:nth-of-type(1){
    margin-bottom: 20px;
  }

  >div:nth-of-type(3){
    margin-bottom: 20px;
  }
`;

export const H1UpdateProfile = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const ContainerLabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
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

export const SpanError = styled.span`
  display: none;
  font-size: 14px;
  font-weight: 500;
  color: red;
  margin-top: 5px;
  line-height: 1.2;
`;

export const ContainerGenderAndBirthDate = styled.div`
  display: flex;
  margin-bottom: 20px;

  >div:nth-of-type(2){
    width: 50%;
  }
`;

export const ContainerAllGendersMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  >h1 {
    font-size: 13px;
    text-transform: uppercase;
    color: #3d3d3d;
    margin-bottom: 8px;
  }
`;

export const ContainerAllGenders = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
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

export const ContainerTelephoneAndCelphone = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCellPhone = styled.div`
  display: flex;
  width: 50%;
  gap: 20px;
  margin-bottom: 10px;

  >div:nth-of-type(1){
    width: 30%;
  }

  >div:nth-of-type(2){
    width: 60%;
  }
`;

export const ContainerTelephone = styled.div`
  display: flex;
  width: 50%;
  gap: 20px;

  >div:nth-of-type(1){
    width: 30%;
  }

  >div:nth-of-type(2){
    width: 60%;
  }
`;

export const ContainerCheckboxButtonCompleteRegistration = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  >button {
    background-color: rgb(172, 171, 171);
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    padding: 10px 0px;
    font-size: 16px;
    margin-bottom: 8px;
  }

  >span {
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 35px;
  }
`;

export const ContainerCheckboxIUnderstandAndAgree = styled.label`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 30px;

  >input {
    /* appearance: none; */
    width: 14px;
    height: 14px;
    /* border: 2px solid black; */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    margin-right: 15px;
  }
`;

export const SpanLink = styled.span`
  color: #ec008c;
  text-decoration: underline;
  cursor: pointer;
`;