import styled from 'styled-components';

export const Span = styled.span``;

export const Container = styled.div``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  background-color: #797073;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  height: 130px;
  padding: 15px 0px;
`;

export const ContainerReceiveNewsAndEnjoyAndShare = styled.div`
  display: flex;
  justify-content: center;
  width: 1024px;
`;

export const ContainerReceiveNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  > span {
    text-align: center;
    line-height: 1.4;
    margin-bottom: 12px;
  }

  > button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    background-color: #ec008c;
    border-color: #ec008c;
    cursor: pointer;
  }
`;

export const ContainerEnjoyAndShare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > span {
    margin-bottom: 20px;
  }
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  gap: 20px;

  > svg {
    display: flex;
    width: 31px;
    height: 31px;
  }
`;
