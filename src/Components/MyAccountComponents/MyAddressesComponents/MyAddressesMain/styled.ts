import styled from 'styled-components';

export const Span = styled.span``;

export const H1 = styled.h1``;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  max-width: 753px;

  > h1 {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

export const ButtonAddNewAddress = styled.button`
  display: flex;

  text-transform: uppercase;
  width: 251px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: #fff;
  font-weight: 600;
  padding: 10px 0px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.9;
  }
`;
