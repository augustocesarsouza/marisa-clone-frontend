import styled from 'styled-components';

export const Span = styled.span``;

export const ContainerNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  height: 50px;

  @media (min-width: 1400px) {
    width: 1350px;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 101px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  @media (min-width: 1400px) {
    font-size: 15px;
  }

  &:hover {
    color: #fff;
    background-color: #f9629f;
  }
`;
