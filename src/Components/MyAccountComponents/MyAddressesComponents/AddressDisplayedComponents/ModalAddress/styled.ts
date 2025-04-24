import styled from 'styled-components';

export const Container = styled.div``;

interface ContainerMainProps {
  $changeValueJustifyContent: boolean;
}

export const ContainerMain = styled.div<ContainerMainProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$changeValueJustifyContent ? '0px' : '20px')};
  justify-content: ${(props) =>
    props.$changeValueJustifyContent ? 'flex-start' : 'space-between'};
  border: 1px solid #979797;
  width: 244px;
  min-height: 195px;
  padding: 14px;
`;
