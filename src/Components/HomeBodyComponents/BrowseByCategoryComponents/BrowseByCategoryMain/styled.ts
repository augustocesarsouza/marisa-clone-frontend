import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerAllBrowseByCategory = styled.div`
  @media (max-width: 1050px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContainerImgAndSpanFirst = styled.div`
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: row;

    gap: 15px;
  }
`;

export const ContainerImgAndSpanSecond = styled.div`
  @media (max-width: 1050px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 15px;
    flex-direction: row-reverse;
    justify-content: end;
  }
`;

export const ContainerImg = styled.div`
  @media (max-width: 1050px) {
    width: 92px;
    height: 92px;
  }
`;
