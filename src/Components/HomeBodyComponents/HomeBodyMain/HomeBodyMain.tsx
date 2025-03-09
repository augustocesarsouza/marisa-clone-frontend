import FirstHeaderBody from '../FirstHeaderBody/FirstHeaderBody';
import NavigationBody from '../NavigationBody/NavigationBody';
import * as Styled from './styled';

const HomeBodyMain = () => {
  return (
    <Styled.ContainerMain>
      <FirstHeaderBody></FirstHeaderBody>

      <NavigationBody></NavigationBody>
    </Styled.ContainerMain>
  );
};

export default HomeBodyMain;
