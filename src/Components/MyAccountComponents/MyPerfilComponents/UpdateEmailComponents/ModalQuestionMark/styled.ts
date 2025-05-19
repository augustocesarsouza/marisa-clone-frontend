import styled from 'styled-components';

export const Span = styled.span``;

export const ContainerModal = styled.div`
  display: block;
  background: #f4f4fa;
  position: absolute;
  color: #8d8d8d;
  border: 1px solid #bdbdbd;
  font-weight: 600;
  padding: 10px 15px;

  > span {
    font-size: 12px;
  }

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
    left: 340px;
    top: 0px;
    transform: rotate(45deg) translate(-100%, 20%) scale(1, 1);
  }
`;
