import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Img = styled.img``;

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;

  > div {
    display: flex;
    justify-content: space-between;
    width: 1035px;
  }
`;

export const ContainerAllHighlighted = styled.div`
  display: flex;
  flex-direction: column;
  width: 165px;

  > h1 {
    font-size: 16px;
    font-weight: 600;
    color: #ec008c;
    margin-bottom: 13px;
  }

  > span {
    font-size: 16px;
    font-weight: 600;
    color: #5d5d5d;
    margin-bottom: 10px;
  }
`;

export const ContainerWorkWithUsAnnouncements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerMainFirst = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContainerDidntFindWhatYouWereLookingFor = styled.div`
  display: flex;
  flex-direction: column;
  width: 235px;

  > h1 {
    font-size: 15px;
    font-weight: 600;
    color: #767676;
    margin-bottom: 20px;
  }
`;

export const ContainerWeCanHelp = styled.div`
  display: flex;
  margin-bottom: 25px;

  > img {
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }

  font-size: 17px;
  font-weight: 500;
  color: #a9a9a9;
`;
