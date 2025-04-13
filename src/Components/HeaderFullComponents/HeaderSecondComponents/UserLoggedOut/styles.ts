import styled from 'styled-components';

export const ContainerModalInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  background-color: #fff;
  border: 1px solid #00000042;
  color: #8d8d8d;
  width: 188px;
  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #00000042;
    border-right-color: transparent;
    border-bottom-color: transparent;
    background-color: #fff;
    backface-visibility: hidden;
    left: 50%;
    transform: rotate(45deg) translate(-100%, 20%) scale(1, 1);
  }
`;
