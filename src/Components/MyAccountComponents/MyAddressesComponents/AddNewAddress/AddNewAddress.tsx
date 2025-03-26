import { useLayoutEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import Inputmask from 'inputmask';

const AddNewAddress = () => {
  const nav = useNavigate();

  const buttonCancelRef = useRef<HTMLButtonElement>(null);
  const buttonSaveRef = useRef<HTMLButtonElement>(null);

  const inputAddressNickname = useRef<HTMLInputElement>(null);
  const SelectTypeAddressRef = useRef<HTMLSelectElement | null>(null);
  const inputRecipientName = useRef<HTMLInputElement>(null);
  const inputCep = useRef<HTMLInputElement>(null);
  const inputAddress = useRef<HTMLInputElement>(null);
  const inputNumberHome = useRef<HTMLInputElement>(null);
  const inputComplement = useRef<HTMLInputElement>(null);
  const inputNeighborhood = useRef<HTMLInputElement>(null);
  const inputCity = useRef<HTMLInputElement>(null);
  const SelectUfRef = useRef<HTMLSelectElement | null>(null);
  const inputReferencePoint = useRef<HTMLInputElement>(null);

  const SpanErrorAddressNickname = useRef<HTMLSpanElement>(null);
  const SpanErrorTypeAddress = useRef<HTMLSpanElement>(null);
  const SpanErrorRecipientName = useRef<HTMLSpanElement>(null);
  const SpanErrorCep = useRef<HTMLSpanElement>(null);
  const SpanErrorAddress = useRef<HTMLSpanElement>(null);
  const SpanErrorNumberHome = useRef<HTMLSpanElement>(null);
  const SpanErrorComplement = useRef<HTMLSpanElement>(null);
  const SpanErrorNeighborhood = useRef<HTMLSpanElement>(null);
  const SpanErrorCity = useRef<HTMLSpanElement>(null);
  const SpanErrorUf = useRef<HTMLSpanElement>(null);

  const [selectedType, setSelectedType] = useState('Tipo de Endereço');

  useLayoutEffect(() => {
    const applyMask = (
      element: HTMLInputElement | null,
      maskPattern: string,
      placeholder: string
    ) => {
      if (!element) return;
      const mask = new Inputmask({
        mask: maskPattern,
        placeholder,
        insertMode: true,
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(element);
    };

    const inputCepHere = inputCep.current as HTMLInputElement;
    const inputNumberHomeHere = inputNumberHome.current as HTMLInputElement;

    const maskConfigs = [
      { element: inputCepHere, mask: '99999-999', placeholder: '_____-___' },
      { element: inputNumberHomeHere, mask: '999999', placeholder: '' },
    ];

    // Aplica todas as máscaras usando a função genérica
    maskConfigs.forEach(({ element, mask, placeholder }) => {
      applyMask(element as HTMLInputElement, mask, placeholder);
    });
  }, []);

  const onChangeInputAddressNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorAddressNickname();
  };

  const handleClickSelectTypeAddressRef = () => {
    verifyErrorSelectTypeAddress();
  };

  const onChangeInputRecipientName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorRecipientName();
  };

  const onChangeInputCep = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorCep();
  };

  const onChangeInputAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorAddress();
  };

  const onChangeInputNumberHome = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorNumberHome();
  };

  const onChangeInputComplement = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const onChangeInputNeighborhood = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorNeighborhood();
  };

  const onChangeInputCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    verifyErrorCity();
  };

  const onChangeInputReferencePoint = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const validateAddressNickname = (value: string): boolean => {
    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateTypeAddress = (value: string): boolean => {
    const valueValid = value !== 'Tipo de Endereço';
    return valueValid;
  };

  const validateRecipientName = (value: string): boolean => {
    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateCep = (value: string): boolean => {
    const valueValid = value.length > 7;
    return valueValid;
  };

  const validateAddress = (value: string): boolean => {
    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateNumberHome = (value: string): boolean => {
    if (value.length <= 0) {
      value = 'a';
    }

    const numberValue = Number(value);

    const valueValid = !isNaN(numberValue);
    return valueValid;
  };

  const validateNeighborhood = (value: string): boolean => {
    const valueValid = value.length > 2;
    return valueValid;
  };

  const validateCity = (value: string): boolean => {
    const valueValid = value.length > 0;
    return valueValid;
  };

  const validateUf = (value: string): boolean => {
    const valueValid = value !== 'UF';
    return valueValid;
  };

  const putErrorSpanAndInput = (
    span: HTMLSpanElement | null,
    input: HTMLInputElement | HTMLSelectElement
  ) => {
    if (span) {
      span.style.display = 'block';
    }

    input.style.backgroundColor = 'rgba(197, 49, 49, 0.2)';
    input.style.border = '1px solid red';
  };

  const withoutErrorSpanAndInput = (
    span: HTMLSpanElement | null,
    input: HTMLInputElement | HTMLSelectElement
  ) => {
    if (span) {
      span.style.display = 'none';
    }

    input.style.backgroundColor = '#fff';
    input.style.border = '1px solid rgba(0, 0, 0, 0.27)';
  };

  const onClickCancel = () => {
    nav('/my-account/address-book');
  };

  const onClickSave = () => {
    verifyErrorAddressNickname();

    verifyErrorSelectTypeAddress();

    verifyErrorRecipientName();

    verifyErrorCep();

    verifyErrorAddress();

    verifyErrorNumberHome();

    verifyErrorNeighborhood();

    verifyErrorCity();

    verifyErrorUf();
  };

  const verifyErrorAddressNickname = () => {
    const inputAddressNicknameHere = inputAddressNickname.current as HTMLInputElement;
    const valueInputAddressNickname = inputAddressNicknameHere.value;

    const addressNicknameIsValid = validateAddressNickname(valueInputAddressNickname);
    const spanErrorAddressNicknameHere = SpanErrorAddressNickname.current as HTMLSpanElement;

    if (!addressNicknameIsValid) {
      putErrorSpanAndInput(spanErrorAddressNicknameHere, inputAddressNicknameHere);
    } else {
      withoutErrorSpanAndInput(spanErrorAddressNicknameHere, inputAddressNicknameHere);
    }
  };

  const verifyErrorSelectTypeAddress = () => {
    const selectTypeAddress = SelectTypeAddressRef.current as HTMLSelectElement;
    const valueTypeAddress = selectTypeAddress.value;

    const errorTypeAddress = validateTypeAddress(valueTypeAddress);
    const spanErrorTypeAddressHere = SpanErrorTypeAddress.current as HTMLSpanElement;

    if (!errorTypeAddress) {
      putErrorSpanAndInput(spanErrorTypeAddressHere, selectTypeAddress);
    } else {
      withoutErrorSpanAndInput(spanErrorTypeAddressHere, selectTypeAddress);
    }
  };

  const verifyErrorRecipientName = () => {
    const inputRecipientNameHere = inputRecipientName.current as HTMLInputElement;
    const valueRecipientName = inputRecipientNameHere.value;

    const addressRecipientName = validateRecipientName(valueRecipientName);
    const spanErrorRecipientNameHere = SpanErrorRecipientName.current as HTMLSpanElement;

    if (!addressRecipientName) {
      putErrorSpanAndInput(spanErrorRecipientNameHere, inputRecipientNameHere);
    } else {
      withoutErrorSpanAndInput(spanErrorRecipientNameHere, inputRecipientNameHere);
    }
  };

  const verifyErrorCep = () => {
    const inputCepHere = inputCep.current as HTMLInputElement;
    const valueCepHere = inputCepHere.value.replace(/[-_]/g, '');

    const cepIsValid = validateCep(valueCepHere);
    const SpanErrorCepHere = SpanErrorCep.current as HTMLSpanElement;

    if (!cepIsValid) {
      putErrorSpanAndInput(SpanErrorCepHere, inputCepHere);
    } else {
      withoutErrorSpanAndInput(SpanErrorCepHere, inputCepHere);
    }
  };

  const verifyErrorAddress = () => {
    const inputAddressHere = inputAddress.current as HTMLInputElement;
    const valueInputAddress = inputAddressHere.value;

    const addressIsValid = validateAddress(valueInputAddress);
    const spanErrorAddressHere = SpanErrorAddress.current as HTMLSpanElement;

    if (!addressIsValid) {
      putErrorSpanAndInput(spanErrorAddressHere, inputAddressHere);
    } else {
      withoutErrorSpanAndInput(spanErrorAddressHere, inputAddressHere);
    }
  };

  const verifyErrorNumberHome = () => {
    const inputNumberHomeHere = inputNumberHome.current as HTMLInputElement;
    const valueInputNumberHome = inputNumberHomeHere.value;

    const NumberHomeIsValid = validateNumberHome(valueInputNumberHome);
    const spanErrorNumberHomeHere = SpanErrorNumberHome.current as HTMLSpanElement;

    if (!NumberHomeIsValid) {
      putErrorSpanAndInput(spanErrorNumberHomeHere, inputNumberHomeHere);
    } else {
      withoutErrorSpanAndInput(spanErrorNumberHomeHere, inputNumberHomeHere);
    }
  };

  const verifyErrorNeighborhood = () => {
    const inputNeighborhoodHere = inputNeighborhood.current as HTMLInputElement;
    const valueInputNeighborhood = inputNeighborhoodHere.value;

    const NeighborhoodIsValid = validateNeighborhood(valueInputNeighborhood);
    const spanErrorNeighborhoodHere = SpanErrorNeighborhood.current as HTMLSpanElement;

    if (!NeighborhoodIsValid) {
      putErrorSpanAndInput(spanErrorNeighborhoodHere, inputNeighborhoodHere);
    } else {
      withoutErrorSpanAndInput(spanErrorNeighborhoodHere, inputNeighborhoodHere);
    }
  };

  const verifyErrorCity = () => {
    const inputCityHere = inputCity.current as HTMLInputElement;
    const valueInputCity = inputCityHere.value;

    const CityIsValid = validateCity(valueInputCity);
    const spanErrorCityHere = SpanErrorCity.current as HTMLSpanElement;

    if (!CityIsValid) {
      putErrorSpanAndInput(spanErrorCityHere, inputCityHere);
    } else {
      withoutErrorSpanAndInput(spanErrorCityHere, inputCityHere);
    }
  };

  const verifyErrorUf = () => {
    const selectRef = SelectUfRef.current as HTMLSelectElement;
    const valueInputUf = selectRef.value;

    const ufIsValid = validateUf(valueInputUf);
    const spanErrorUfHere = SpanErrorUf.current as HTMLSpanElement;

    if (!ufIsValid) {
      putErrorSpanAndInput(spanErrorUfHere, selectRef);
    } else {
      withoutErrorSpanAndInput(spanErrorUfHere, selectRef);
    }
  };

  const onClickSendCep = () => {
    window.open('https://buscacepinter.correios.com.br/app/endereco/index.php', '_blank');
  };

  return (
    <Styled.ContainerMain>
      <Styled.H1>Adicionar Novo Endereço</Styled.H1>

      <Styled.ContainerLabelAndInput>
        <Styled.Label htmlFor="address-nickname">Apelido do Endereço*</Styled.Label>
        <Styled.ContainerInput>
          <Styled.Input
            id="address-nickname"
            placeholder="apelido do endereço. Ex.: casa da mãe"
            ref={inputAddressNickname}
            onChange={onChangeInputAddressNickname}
          />
        </Styled.ContainerInput>
        <Styled.SpanError ref={SpanErrorAddressNickname}>
          Informe Apelido do Endereço
        </Styled.SpanError>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerLabelAndInput>
        <Styled.Label htmlFor="type-of-address">Tipo de Endereço*</Styled.Label>
        <Styled.Select
          id="type-of-address"
          ref={SelectTypeAddressRef}
          onClick={() => handleClickSelectTypeAddressRef()}
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}>
          <Styled.Option data-testid="option-type-address" disabled>
            Tipo de Endereço
          </Styled.Option>
          <Styled.Option data-testid="option-type-address-residential" value="RESIDENTIAL">
            Residencial
          </Styled.Option>
          <Styled.Option data-testid="option-type-address-commercial" value="COMMERCIAL">
            Comercial
          </Styled.Option>
        </Styled.Select>
        <Styled.SpanError ref={SpanErrorTypeAddress}>Informe Tipo de Endereço</Styled.SpanError>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerLabelAndInput>
        <Styled.Label htmlFor="recipient-name">nome do destinatário*</Styled.Label>
        <Styled.ContainerInput>
          <Styled.Input
            id="recipient-name"
            placeholder="nome do destinatário"
            ref={inputRecipientName}
            onChange={onChangeInputRecipientName}
          />
        </Styled.ContainerInput>
        <Styled.SpanError ref={SpanErrorRecipientName}>
          Informe nome do destinatário
        </Styled.SpanError>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerLabelAndInput>
        <Styled.Label htmlFor="cep">cep*</Styled.Label>
        <Styled.ContainerInputCep>
          <Styled.Input id="cep" placeholder="cep" ref={inputCep} onChange={onChangeInputCep} />
          <Styled.Span onClick={onClickSendCep}>Não sei o meu CEP</Styled.Span>
        </Styled.ContainerInputCep>
        <Styled.SpanError ref={SpanErrorCep}>CEP inválido</Styled.SpanError>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerLabelAndInput>
        <Styled.Label htmlFor="address">endereço*</Styled.Label>
        <Styled.ContainerInput>
          <Styled.Input
            id="address"
            placeholder="endereço"
            ref={inputAddress}
            onChange={onChangeInputAddress}
          />
        </Styled.ContainerInput>
        <Styled.SpanError ref={SpanErrorAddress}>Informe endereço</Styled.SpanError>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerNumberComplementNeighborhood>
        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="number-home">número*</Styled.Label>
          <Styled.ContainerInput>
            <Styled.Input
              id="number-home"
              placeholder="número"
              ref={inputNumberHome}
              onChange={onChangeInputNumberHome}
            />
          </Styled.ContainerInput>
          <Styled.SpanError ref={SpanErrorNumberHome}>Informe número</Styled.SpanError>
        </Styled.ContainerLabelAndInput>

        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="complement">complemento</Styled.Label>
          <Styled.ContainerInput>
            <Styled.Input
              id="complement"
              placeholder="complemento"
              ref={inputComplement}
              onChange={onChangeInputComplement}
            />
          </Styled.ContainerInput>
          <Styled.SpanError ref={SpanErrorComplement}>Informe número</Styled.SpanError>
        </Styled.ContainerLabelAndInput>

        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="neighborhood">bairro*</Styled.Label>
          <Styled.ContainerInput>
            <Styled.Input
              id="neighborhood"
              placeholder="bairro"
              ref={inputNeighborhood}
              onChange={onChangeInputNeighborhood}
            />
          </Styled.ContainerInput>
          <Styled.SpanError ref={SpanErrorNeighborhood}>
            O bairro deve ter no mínimo 3 caracteres
          </Styled.SpanError>
        </Styled.ContainerLabelAndInput>
      </Styled.ContainerNumberComplementNeighborhood>

      <Styled.ContainerCityAndUf>
        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="city">cidade*</Styled.Label>
          <Styled.ContainerInput>
            <Styled.Input
              id="city"
              placeholder="cidade"
              ref={inputCity}
              onChange={onChangeInputCity}
            />
          </Styled.ContainerInput>
          <Styled.SpanError ref={SpanErrorCity}>Informe cidade</Styled.SpanError>
        </Styled.ContainerLabelAndInput>

        <Styled.ContainerLabelAndInput>
          <Styled.Label htmlFor="uf">UF*</Styled.Label>
          <Styled.Select id="uf" ref={SelectUfRef}>
            <Styled.Option data-testid="option-uf">UF</Styled.Option>
          </Styled.Select>
          <Styled.SpanError ref={SpanErrorUf}>Informe UF</Styled.SpanError>
        </Styled.ContainerLabelAndInput>
      </Styled.ContainerCityAndUf>

      <Styled.ContainerLabelAndInput>
        <Styled.Label htmlFor="reference-point">ponto de referência</Styled.Label>
        <Styled.ContainerInput>
          <Styled.Input
            id="reference-point"
            placeholder="ponto de referência"
            ref={inputReferencePoint}
            onChange={onChangeInputReferencePoint}
          />
        </Styled.ContainerInput>
      </Styled.ContainerLabelAndInput>

      <Styled.ContainerCheckboxButtonCompleteRegistration>
        <Styled.Span>* Campos marcados são obrigatórios</Styled.Span>

        <Styled.ContainerButtonCancelAndSave>
          <Styled.Button ref={buttonCancelRef} onClick={onClickCancel}>
            Cancelar
          </Styled.Button>
          <Styled.Button ref={buttonSaveRef} onClick={onClickSave}>
            Salvar
          </Styled.Button>
        </Styled.ContainerButtonCancelAndSave>
      </Styled.ContainerCheckboxButtonCompleteRegistration>
    </Styled.ContainerMain>
  );
};

export default AddNewAddress;
