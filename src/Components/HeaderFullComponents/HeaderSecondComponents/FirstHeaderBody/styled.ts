import styled from 'styled-components';

export const ContainerModalMyPurchase = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  bottom: -100px;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 400px;
  height: 85px;

  &::before {
    content: ' ';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #ccc;
    border-right-color: transparent;
    border-bottom-color: transparent;
    background-color: #fff;
    backface-visibility: hidden;
    left: 255px;
    top: 0px;
    transform: rotate(45deg) translate(-100%, 20%) scale(1, 1);
  }
`;

export const ContainerFirstHeaderBodyMain = styled.div`
  width: 1024px;

  @media (min-width: 1400px) {
    width: 1380px;
  }
`;

export const ContainerInputSearch = styled.div`
  @media (min-width: 1400px) {
    width: 420px;
  }
`;
