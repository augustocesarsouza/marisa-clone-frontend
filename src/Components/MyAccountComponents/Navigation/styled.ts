import styled from "styled-components";

export const Span = styled.span``;

export const H1 = styled.h1``;

export const ContainerNavigation = styled.div`
  display: flex;
  flex-direction: column;
  width: 231px;
  margin-right: 20px;
  user-select: none;

  >h1 {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 5px 0px;
    cursor: pointer;
  }
`;

export const ContainerMyProfileAndModalNavAfterClicked = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerNavAfterClicked = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  margin-top: 7px;
  margin-bottom: 5px;
  gap: 6px;

  >span {
    color: rgb(112, 112, 112);
    line-height: 1;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: #ec008c;
    }
  }
`;

export const ContainerHeaderAndMoreSvg = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
  cursor: pointer;

  >h1 {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0px;
  }

  >svg {
    width: 13px;
  }
`;