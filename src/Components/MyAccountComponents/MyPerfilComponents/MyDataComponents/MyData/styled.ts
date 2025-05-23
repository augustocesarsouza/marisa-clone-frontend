import styled from 'styled-components';

export const Span = styled.span``;

export const H1 = styled.h1``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  /* width: 100%; */
  max-width: 753px;

  > h1 {
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

export const H2Agree = styled.h2`
  font-size: 15px;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 70px;
  padding-bottom: 15px;
  border-bottom: 1px solid #00000021;
  padding-left: 10px;
`;

export const SpanLink = styled.span`
  color: #ec008c;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;

  > button {
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
