import styled from 'styled-components';

export const Span = styled.span``;

export const H1 = styled.h1``;

export const ContainerNavigation = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 25%; */
  width: 231px;
  margin-right: 15px;
  user-select: none;

  > h1 {
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 5px 0px;
    cursor: pointer;
    line-height: 1;
  }
`;

export const ContainerMyProfileAndModalNavAfterClicked = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ContainerNavAfterClickedProps {
  $clickMyProfile: boolean;
}

export const ContainerNavAfterClicked = styled.div<ContainerNavAfterClickedProps>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: hidden;

  max-height: ${(props) => (props.$clickMyProfile ? '200px' : '0px')};
  margin: ${(props) => (props.$clickMyProfile ? '7px 0 5px 7px' : '0px')};
  opacity: ${(props) => (props.$clickMyProfile ? '1' : '0')};
  visibility: ${(props) => (props.$clickMyProfile ? 'visible' : 'hidden')};

  transition:
    max-height 0.3s ease-in-out,
    opacity 0.2s ease-in-out,
    visibility 0.3s ease-in-out,
    margin 0.2s ease-in-out;

  > span {
    color: rgb(112, 112, 112);
    line-height: 1;
    font-size: 15px;
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

  > h1 {
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0px;
    line-height: 1;
  }

  > svg {
    width: 13px;
  }
`;
