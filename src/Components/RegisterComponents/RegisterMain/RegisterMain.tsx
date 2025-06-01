import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import * as Styled from './styled';
import Individual from '../Individual/Individual';
import LegalEntity from '../LegalEntity/LegalEntity';

const RegisterMain = () => {
  const ContainerCheckboxFirst = useRef<HTMLDivElement>(null);
  const ContainerCheckboxSecond = useRef<HTMLDivElement>(null);

  const [whichTypePersonalWasClicked, setWhichTypePersonalWasClicked] = useState('individual');

  useLayoutEffect(() => {
    const containerSecond = ContainerCheckboxSecond.current as HTMLDivElement;
    checkboxNotClicked(containerSecond);
  }, []);

  const onClickIndividual = () => {
    const containerFirst = ContainerCheckboxFirst.current as HTMLDivElement;
    checkboxClicked(containerFirst);

    const containerSecond = ContainerCheckboxSecond.current as HTMLDivElement;
    checkboxNotClicked(containerSecond);

    setWhichTypePersonalWasClicked('individual');
  };

  const onClickLegalEntity = () => {
    const containerFirst = ContainerCheckboxFirst.current as HTMLDivElement;
    checkboxNotClicked(containerFirst);

    const containerSecond = ContainerCheckboxSecond.current as HTMLDivElement;
    checkboxClicked(containerSecond);

    setWhichTypePersonalWasClicked('legalEntity');
  };

  const checkboxNotClicked = (container: HTMLDivElement) => {
    const containerInner = container.firstChild as HTMLDivElement;
    container.style.borderColor = '#d6d5d5';
    container.style.background = '#fff';
    containerInner.style.backgroundColor = '#fff';
  };

  const checkboxClicked = (container: HTMLDivElement) => {
    const containerInner = container.firstChild as HTMLDivElement;
    container.style.borderColor = '#ffd1ec';
    container.style.background = '#ffd1ec';
    containerInner.style.backgroundColor = '#ec008c';
  };

  useEffect(() => {
    const seila = '';
    console.log(seila);
  }, []);

  return (
    <Styled.ContainerMain>
      <HeaderFullMain></HeaderFullMain>

      <Styled.ContainerRegiserMain>
        <Styled.ContainerRegiser>
          <Styled.ContainerFirst>
            <Styled.H1>Quer se cadastrar?</Styled.H1>
            <Styled.Span>Por favor preencha os campos abaixo, vai ser rapidinho</Styled.Span>
          </Styled.ContainerFirst>

          <Styled.ContainerSecond>
            <Styled.ContainerCheckboxMain onClick={onClickIndividual}>
              <Styled.ContainerCheckbox ref={ContainerCheckboxFirst}>
                <Styled.Container></Styled.Container>
              </Styled.ContainerCheckbox>

              <Styled.Span>Pessoa Fí­sica</Styled.Span>
            </Styled.ContainerCheckboxMain>
            <Styled.ContainerCheckboxMain onClick={onClickLegalEntity}>
              <Styled.ContainerCheckbox ref={ContainerCheckboxSecond}>
                <Styled.Container></Styled.Container>
              </Styled.ContainerCheckbox>

              <Styled.Span>Pessoa Jurí­dica</Styled.Span>
            </Styled.ContainerCheckboxMain>
          </Styled.ContainerSecond>

          {whichTypePersonalWasClicked === 'individual' && <Individual />}

          {whichTypePersonalWasClicked === 'legalEntity' && <LegalEntity />}
        </Styled.ContainerRegiser>
      </Styled.ContainerRegiserMain>

      <FooterMain></FooterMain>
    </Styled.ContainerMain>
  );
};

export default RegisterMain;
