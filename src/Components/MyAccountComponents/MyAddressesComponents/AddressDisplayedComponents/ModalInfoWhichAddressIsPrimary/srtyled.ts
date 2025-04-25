import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerSvgX = styled.div`
  display: flex;
  cursor: pointer;

  > svg {
    width: 13px;
    height: 13px;
    fill: #4b4b4b;
  }
`;

interface ButtonAddNewAddressProps {
  $whichButton: number;
}

export const ButtonAddNewAddress = styled.button<ButtonAddNewAddressProps>`
  display: flex;

  text-transform: uppercase;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.$whichButton === 0 ? '#0000005c' : 'black')};
  color: #fff;
  font-weight: 600;
  padding: 10px 0px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: ${(props) => (props.$whichButton === 0 ? '#00000096' : '#000000e0')};
  }
`;
