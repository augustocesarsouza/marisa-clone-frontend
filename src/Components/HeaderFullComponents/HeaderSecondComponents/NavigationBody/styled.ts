import styled from "styled-components";

export const Span = styled.span``;

export const ContainerNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  height: 50px;
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 101px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #F9629F;
  }
`;