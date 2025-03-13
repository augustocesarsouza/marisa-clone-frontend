import { useLayoutEffect, useRef } from 'react';
import FooterMain from '../../FooterMainComponents/FooterMain/FooterMain';
import HeaderFullMain from '../../HeaderFullComponents/HeaderFullMain/HeaderFullMain';
import * as Styled from './styled';
import SvgEyeOpen from '../../Svg/SvgEyeOpen/SvgEyeOpen';
import SvgEyeClose from '../../Svg/SvgEyeClose/SvgEyeClose';
import Inputmask from 'inputmask';

const RegisterMain = () => {
  const ContainerCheckboxFirst = useRef<HTMLDivElement>(null);
  const ContainerCheckboxSecond = useRef<HTMLDivElement>(null);

  const ContainerCheckboxFeminine = useRef<HTMLDivElement>(null);
  const ContainerCheckboxMasculine = useRef<HTMLDivElement>(null);
  const ContainerCheckboxDoNotInform = useRef<HTMLDivElement>(null);

  const containerSvgEyeOpen = useRef<HTMLDivElement>(null);
  const containerSvgEyeClose = useRef<HTMLDivElement>(null);

  const inputPasswordActual = useRef<HTMLInputElement>(null);
  const inputConfirmPassword = useRef<HTMLInputElement>(null);

  const inputBirthDate = useRef<HTMLInputElement>(null);
  const inputCpf = useRef<HTMLInputElement>(null);
  const inputCellPhone = useRef<HTMLInputElement>(null);
  const inputDDDCellPhone = useRef<HTMLInputElement>(null);
  const inputTelephone = useRef<HTMLInputElement>(null);
  const inputDDDTelephone = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const containerSecond = ContainerCheckboxSecond.current as HTMLDivElement;
    checkboxNotClicked(containerSecond);

    const containerMasculine = ContainerCheckboxMasculine.current as HTMLDivElement;
    checkboxNotClicked(containerMasculine);

    const containerDoNotInform = ContainerCheckboxDoNotInform.current as HTMLDivElement;
    checkboxNotClicked(containerDoNotInform);

    const inputBirthdate = inputBirthDate.current as HTMLInputElement;

    if (inputBirthdate) {
      const mask = new Inputmask({
        mask: '99/99/9999',
        placeholder: '__/__/___',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputBirthdate);
    }

    const inputCpfMask = inputCpf.current as HTMLInputElement;

    if (inputCpfMask) {
      const mask = new Inputmask({
        mask: '999.999.999-99',
        placeholder: '___.___.___-__',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputCpfMask);
    }

    const inputDDDCellPhoneMask = inputDDDCellPhone.current as HTMLInputElement;

    if (inputDDDCellPhoneMask) {
      const mask = new Inputmask({
        mask: '99',
        placeholder: '__',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputDDDCellPhoneMask);
    }

    const inputDDDTelephoneMask = inputDDDTelephone.current as HTMLInputElement;

    if (inputDDDTelephoneMask) {
      const mask = new Inputmask({
        mask: '99',
        placeholder: '__',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputDDDTelephoneMask);
    }

    const inputCellPhoneMask = inputCellPhone.current as HTMLInputElement;

    if (inputCellPhoneMask) {
      const mask = new Inputmask({
        mask: '99999-9999',
        placeholder: '_____-____',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputCellPhoneMask);
    }

    const inputTelephoneMask = inputTelephone.current as HTMLInputElement;

    if (inputTelephoneMask) {
      const mask = new Inputmask({
        mask: '9999-9999',
        placeholder: '____-____',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputTelephoneMask);
    }
  }, []);

  const onClickIndividual = () => {
    const containerFirst = ContainerCheckboxFirst.current as HTMLDivElement;
    checkboxClicked(containerFirst);

    const containerSecond = ContainerCheckboxSecond.current as HTMLDivElement;
    checkboxNotClicked(containerSecond);
  };

  const onClickLegalEntity = () => {
    const containerFirst = ContainerCheckboxFirst.current as HTMLDivElement;
    checkboxNotClicked(containerFirst);

    const containerSecond = ContainerCheckboxSecond.current as HTMLDivElement;
    checkboxClicked(containerSecond);
  };

  const onClickCheckboxGender = (container: HTMLDivElement | null) => {
    const containerCheckFeminine = ContainerCheckboxFeminine.current as HTMLDivElement;
    const containerCheckMasculine = ContainerCheckboxMasculine.current as HTMLDivElement;
    const containerCheckDoNotInform = ContainerCheckboxDoNotInform.current as HTMLDivElement;

    checkboxNotClicked(containerCheckFeminine);
    checkboxNotClicked(containerCheckMasculine);
    checkboxNotClicked(containerCheckDoNotInform);

    if (container) {
      checkboxClicked(container);
    }
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

  const onClickSvgEyePasswordActual = () => {
    const input = inputPasswordActual.current as HTMLInputElement;
    const containerSvgEyeOpenCurrent = containerSvgEyeOpen.current as HTMLDivElement;
    const containerSvgEyeCloseCurrent = containerSvgEyeClose.current as HTMLDivElement;

    if (input.type === 'text') {
      input.type = 'password';
      containerSvgEyeOpenCurrent.style.display = 'flex';
      containerSvgEyeCloseCurrent.style.display = 'none';
    } else if (input.type === 'password') {
      input.type = 'text';
      containerSvgEyeOpenCurrent.style.display = 'none';
      containerSvgEyeCloseCurrent.style.display = 'flex';
    }
  };

  const onClickSvgEyeConfirmPassword = () => {
    const input = inputConfirmPassword.current as HTMLInputElement;
    const containerSvgEyeOpenCurrent = containerSvgEyeOpen.current as HTMLDivElement;
    const containerSvgEyeCloseCurrent = containerSvgEyeClose.current as HTMLDivElement;

    if (input.type === 'text') {
      input.type = 'password';
      containerSvgEyeOpenCurrent.style.display = 'flex';
      containerSvgEyeCloseCurrent.style.display = 'none';
    } else if (input.type === 'password') {
      input.type = 'text';
      containerSvgEyeOpenCurrent.style.display = 'none';
      containerSvgEyeCloseCurrent.style.display = 'flex';
    }
  };

  return (
    <Styled.ContainerMain>
      <HeaderFullMain></HeaderFullMain>

      <Styled.ContainerRegiserMain>
        <Styled.ContainerRegiser>
          <Styled.ContainerFirst>
            <Styled.H1>Quer se cadastrar?</Styled.H1>
            <Styled.Span>Por favor preencha os campos abaixo, vai ser rapidinho</Styled.Span>
          </Styled.ContainerFirst>

          <Styled.ContainerMainBodyOfRegister>
            <Styled.ContainerFirstRegister>
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

              <Styled.ContainerThird>
                <Styled.ContainerLabelAndInput>
                  <Styled.Label htmlFor="name-full">Nome completo*</Styled.Label>
                  <Styled.Input type="text" id="name-full" placeholder="Informe seu nome" />
                </Styled.ContainerLabelAndInput>

                <Styled.ContainerBirthdateAndCpf>
                  <Styled.ContainerLabelAndInput>
                    <Styled.Label htmlFor="birth-date">Data de nascimento*</Styled.Label>
                    <Styled.Input
                      type="text"
                      id="birth-date"
                      placeholder="00/00/0000"
                      ref={inputBirthDate}
                    />
                  </Styled.ContainerLabelAndInput>

                  <Styled.ContainerLabelAndInput>
                    <Styled.Label htmlFor="cpf">CPF*</Styled.Label>
                    <Styled.Input
                      type="text"
                      id="cpf"
                      placeholder="000.000.000-00"
                      ref={inputCpf}
                    />
                  </Styled.ContainerLabelAndInput>
                </Styled.ContainerBirthdateAndCpf>
              </Styled.ContainerThird>

              <Styled.ContainerFourth>
                <Styled.H1>Gênero*</Styled.H1>

                <Styled.ContainerAllGenders>
                  <Styled.ContainerCheckboxMain
                    onClick={() => onClickCheckboxGender(ContainerCheckboxFeminine.current)}>
                    <Styled.ContainerCheckbox ref={ContainerCheckboxFeminine}>
                      <Styled.Container></Styled.Container>
                    </Styled.ContainerCheckbox>

                    <Styled.Span>Feminino</Styled.Span>
                  </Styled.ContainerCheckboxMain>

                  <Styled.ContainerCheckboxMain
                    onClick={() => onClickCheckboxGender(ContainerCheckboxMasculine.current)}>
                    <Styled.ContainerCheckbox ref={ContainerCheckboxMasculine}>
                      <Styled.Container></Styled.Container>
                    </Styled.ContainerCheckbox>

                    <Styled.Span>Masculino</Styled.Span>
                  </Styled.ContainerCheckboxMain>

                  <Styled.ContainerCheckboxMain
                    onClick={() => onClickCheckboxGender(ContainerCheckboxDoNotInform.current)}>
                    <Styled.ContainerCheckbox ref={ContainerCheckboxDoNotInform}>
                      <Styled.Container></Styled.Container>
                    </Styled.ContainerCheckbox>

                    <Styled.Span>Não informar</Styled.Span>
                  </Styled.ContainerCheckboxMain>
                </Styled.ContainerAllGenders>
              </Styled.ContainerFourth>

              <Styled.ContainerFifth>
                <Styled.ContainerCellPhone>
                  <Styled.ContainerLabelAndInput>
                    <Styled.Label htmlFor="ddd-cell-phone">DDD*</Styled.Label>
                    <Styled.Input
                      type="text"
                      id="ddd-cell-phone"
                      placeholder="( 00 )"
                      ref={inputDDDCellPhone}
                    />
                  </Styled.ContainerLabelAndInput>
                  <Styled.ContainerLabelAndInput>
                    <Styled.Label htmlFor="cell-phone">Celular*</Styled.Label>
                    <Styled.Input
                      type="text"
                      id="cell-phone"
                      placeholder="00000 - 0000"
                      ref={inputCellPhone}
                    />
                  </Styled.ContainerLabelAndInput>
                </Styled.ContainerCellPhone>

                <Styled.ContainerTelephone>
                  <Styled.ContainerLabelAndInput>
                    <Styled.Label htmlFor="ddd-telephone">DDD*</Styled.Label>
                    <Styled.Input
                      type="text"
                      id="ddd-telephone"
                      placeholder="( 00 )"
                      ref={inputDDDTelephone}
                    />
                  </Styled.ContainerLabelAndInput>
                  <Styled.ContainerLabelAndInput>
                    <Styled.Label htmlFor="telephone">Telefone</Styled.Label>
                    <Styled.Input
                      type="text"
                      id="telephone"
                      placeholder="0000 - 0000"
                      ref={inputTelephone}
                    />
                  </Styled.ContainerLabelAndInput>
                </Styled.ContainerTelephone>
              </Styled.ContainerFifth>
            </Styled.ContainerFirstRegister>

            <Styled.ContainerSecondRegister>
              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="ddd-telephone">E-mail*</Styled.Label>
                <Styled.Input type="text" id="ddd-telephone" placeholder="Informe o e-mail" />
              </Styled.ContainerLabelAndInput>

              <Styled.ContainerButtonReceiveToken>
                <Styled.Button>RECEBER TOKEN DE CADASTRO</Styled.Button>
                <Styled.Span>O token será enviado por e-mail/SMS*</Styled.Span>
              </Styled.ContainerButtonReceiveToken>

              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="ddd-telephone">Token*</Styled.Label>
                <Styled.Input
                  type="text"
                  id="ddd-telephone"
                  placeholder="Informe o seu token de cadastro"
                />
              </Styled.ContainerLabelAndInput>

              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="ddd-telephone">Senha *</Styled.Label>
                <Styled.Input
                  type="password"
                  id="ddd-telephone"
                  placeholder="Insira a senha"
                  ref={inputPasswordActual}
                />
                <Styled.ContainerSvgEyeOpen
                  ref={containerSvgEyeOpen}
                  onClick={onClickSvgEyePasswordActual}
                  data-testid="container-svg-eye-open">
                  <SvgEyeOpen></SvgEyeOpen>
                </Styled.ContainerSvgEyeOpen>
                <Styled.ContainerSvgEyeClose
                  ref={containerSvgEyeClose}
                  onClick={onClickSvgEyePasswordActual}
                  data-testid="container-svg-eye-close">
                  <SvgEyeClose></SvgEyeClose>
                </Styled.ContainerSvgEyeClose>
              </Styled.ContainerLabelAndInput>

              <Styled.ContainerLabelAndInput>
                <Styled.Label htmlFor="ddd-telephone">Confirmar Senha *</Styled.Label>
                <Styled.Input
                  type="password"
                  id="ddd-telephone"
                  placeholder="Insiria a senha novamente"
                  ref={inputConfirmPassword}
                />
                <Styled.ContainerSvgEyeOpen
                  ref={containerSvgEyeOpen}
                  onClick={onClickSvgEyeConfirmPassword}
                  data-testid="container-svg-eye-open">
                  <SvgEyeOpen></SvgEyeOpen>
                </Styled.ContainerSvgEyeOpen>
                <Styled.ContainerSvgEyeClose
                  ref={containerSvgEyeClose}
                  onClick={onClickSvgEyeConfirmPassword}
                  data-testid="container-svg-eye-close">
                  <SvgEyeClose></SvgEyeClose>
                </Styled.ContainerSvgEyeClose>
              </Styled.ContainerLabelAndInput>
            </Styled.ContainerSecondRegister>
          </Styled.ContainerMainBodyOfRegister>

          <Styled.ContainerCheckboxButtonCompleteRegistration>
            <Styled.ContainerCheckboxIUnderstandAndAgree>
              <Styled.Input type="checkbox" />
              <Styled.Span>
                Li, compreendi e concordo com as <Styled.SpanLink>Condições Gerais</Styled.SpanLink>
                , inclusive com relação à proteção de dados pessoais, finalidades e hipóteses de
                tratamento de dados.
              </Styled.Span>
            </Styled.ContainerCheckboxIUnderstandAndAgree>

            <Styled.Button>FINALIZAR CADASTRO</Styled.Button>
          </Styled.ContainerCheckboxButtonCompleteRegistration>
        </Styled.ContainerRegiser>
      </Styled.ContainerRegiserMain>

      <FooterMain></FooterMain>
    </Styled.ContainerMain>
  );
};

export default RegisterMain;
