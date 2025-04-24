import { useEffect, useRef, useState } from 'react';
import { User } from '../../../../Interfaces/Entity/User.';
import SvgX from '../../../../Svg/SvgX/SvgX';
import * as Styled from './styled';
import addressService, {
  AddressConfirmCodeEmail,
  ReturnErroCatch,
  ReturnGetAddress,
  ReturnSendCodeEmail,
} from '../../../../Service/AddressService/AddressService';
import { UserConfirmCodeEmailDTO } from '../../../../Interfaces/DTOs/UserConfirmCodeEmailDTO';
import { Address } from '../../../../Interfaces/Entity/Address';
import TimeRemainingAddress from '../../TimeRemainingAddress/TimeRemainingAddress';
import { useNavigate } from 'react-router-dom';

interface CodeSendEmailModalProps {
  user: User | null;
  objAddress: Address | null;
  addressUser: Address | null;
  changeCodeSendEmailModal: (value: boolean) => void;
}

const CodeSendEmailModal = ({
  user,
  objAddress,
  addressUser,
  changeCodeSendEmailModal,
}: CodeSendEmailModalProps) => {
  const nav = useNavigate();

  const [codeEmailWrong, setCodeEmailWrong] = useState(false);

  const [valueInputPhoneOne, setValueInputPhoneOne] = useState('-1');
  const [valueInputPhoneTwo, setValueInputPhoneTwo] = useState('-1');
  const [valueInputPhoneThree, setValueInputPhoneThree] = useState('-1');
  const [valueInputPhoneFour, setValueInputPhoneFour] = useState('-1');
  const [valueInputPhoneFive, setValueInputPhoneFive] = useState('-1');
  const [valueInputPhoneSix, setValueInputPhoneSix] = useState('-1');
  const [allInputs, setAllInputs] = useState<[] | NodeListOf<HTMLInputElement>>([]);
  const [alreadyTypePassword, setAlreadyTypePassword] = useState(false);

  const onChangeInputCreateAccount = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (!e.target.value) return;

    if (Number.isNaN(Number(e.target.value))) return;

    if (index === 0) setValueInputPhoneOne(String(e.target.value));

    if (index === 1) setValueInputPhoneTwo(String(e.target.value));

    if (index === 2) setValueInputPhoneThree(String(e.target.value));

    if (index === 3) setValueInputPhoneFour(String(e.target.value));

    if (index === 4) setValueInputPhoneFive(String(e.target.value));

    if (index === 5) setValueInputPhoneSix(String(e.target.value));

    const input = e.target as HTMLInputElement;

    if (input.value.length === 1 && index < allInputs.length - 1) {
      allInputs[index + 1].focus();
    }

    setAlreadyTypePassword(true);
  };

  const onKeyDownCreateAccount = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const input = e.target as HTMLInputElement;

    if (e.code === 'Backspace') {
      if (input.value.length === 1) {
        // allInputs[index].value = '';

        if (index === 0) setValueInputPhoneOne('-1');

        if (index === 1) setValueInputPhoneTwo('-1');

        if (index === 2) setValueInputPhoneThree('-1');

        if (index === 3) setValueInputPhoneFour('-1');

        if (index === 4) setValueInputPhoneFive('-1');

        if (index === 5) setValueInputPhoneSix('-1');

        if (index > 0) {
          allInputs[index - 1].focus(); // Só foca no anterior se tiver
        }
      } else {
        if (allInputs[index - 1]) {
          allInputs[index - 1].focus();
          allInputs[index - 1].value = '';
        }
      }

      e.preventDefault();
    }
  };

  useEffect(() => {
    setAllInputs(document.querySelectorAll('.input-cel-phone') as NodeListOf<HTMLInputElement>);
  }, []);

  const onClickInputCreateAccount = () => {
    for (let i = 0; i < allInputs.length; i++) {
      const input = allInputs[i];

      if (Number(input.value) === 0) {
        input.focus();
        break;
      }
    }
  };

  const buttonRegisterMouseEnter = (buttonRegister: HTMLButtonElement) => {
    buttonRegister.style.backgroundColor = 'rgb(238, 92, 63)';
  };

  const buttonRegisterMouseLeave = (buttonRegister: HTMLButtonElement) => {
    buttonRegister.style.backgroundColor = 'rgb(238, 77, 45)';
  };

  const refButtonConfirmChange = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const buttonRegister = refButtonConfirmChange.current;

    const handleMouseEnter = () => buttonRegisterMouseEnter(refButtonConfirmChange.current!);
    const handleMouseLeave = () => buttonRegisterMouseLeave(refButtonConfirmChange.current!);

    if (buttonRegister === null) return;

    if (
      Number(valueInputPhoneOne) >= 0 &&
      Number(valueInputPhoneTwo) >= 0 &&
      Number(valueInputPhoneThree) >= 0 &&
      Number(valueInputPhoneFour) >= 0 &&
      Number(valueInputPhoneFive) >= 0 &&
      Number(valueInputPhoneSix) >= 0
    ) {
      buttonRegister.style.opacity = '1';
      buttonRegister.style.cursor = 'pointer';

      buttonRegister.addEventListener('mouseenter', handleMouseEnter);
      buttonRegister.addEventListener('mouseleave', handleMouseLeave);
    } else {
      if (alreadyTypePassword) {
        buttonRegister.style.opacity = '.7';
        buttonRegister.style.cursor = 'not-allowed';

        buttonRegister.removeEventListener('mouseenter', handleMouseEnter);
        buttonRegister.removeEventListener('mouseleave', handleMouseLeave);
      }
    }

    return () => {
      if (buttonRegister !== null) {
        buttonRegister.removeEventListener('mouseenter', handleMouseEnter);
        buttonRegister.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [
    valueInputPhoneOne,
    valueInputPhoneTwo,
    valueInputPhoneThree,
    valueInputPhoneFour,
    valueInputPhoneFive,
    valueInputPhoneSix,
    alreadyTypePassword,
  ]);

  const [quantityOfAttempts, setQuantityOfAttempts] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null);
  const [canClickWaitingTimeIsOver, setCanClickWaitingTimeIsOver] = useState(true);

  const [showTimeRemaining, setShowTimeRemaining] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onClickConfirmChange = async () => {
    if (!canClickWaitingTimeIsOver) return;

    setCanClickWaitingTimeIsOver(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCanClickWaitingTimeIsOver(true); // Libera cliques depois de 500ms
    }, 1000);

    if (
      Number(valueInputPhoneOne) >= 0 &&
      Number(valueInputPhoneTwo) >= 0 &&
      Number(valueInputPhoneThree) >= 0 &&
      Number(valueInputPhoneFour) >= 0 &&
      Number(valueInputPhoneFive) >= 0 &&
      Number(valueInputPhoneSix) >= 0 &&
      user
    ) {
      if (user.id === null || user.email === null || user.token === null) return;

      const code = `${valueInputPhoneOne}${valueInputPhoneTwo}${valueInputPhoneThree}${valueInputPhoneFour}${valueInputPhoneFive}${valueInputPhoneSix}`;

      const objSendCode: UserConfirmCodeEmailDTO = {
        code: code,
        userId: user.id,
        email: user.email,
        correctCode: false,
      };

      const codeSend = await addressService.verifyCodeSendToEmail(objSendCode, user.token);

      if (codeSend.isSucess) {
        const resp = codeSend as ReturnSendCodeEmail;
        const data = resp.data as AddressConfirmCodeEmail;

        const correctCode = data.codeIsCorrect;

        if (correctCode) {
          if (objAddress && !addressUser) {
            const token = user.token as string;
            const resp = await addressService.createUser(objAddress, token);

            if (resp.isSucess) {
              const respSucessfully = resp as ReturnGetAddress;
              const data = respSucessfully.data as Address;

              if (data) {
                nav('/my-account/address-book');
              }
            } else {
              const respError = resp as ReturnErroCatch;
              console.log(respError);
            }
          }

          if (objAddress && addressUser) {
            objAddress.id = addressUser.id;
            objAddress.mainAddress = addressUser.mainAddress;

            const token = user.token as string;
            const resp = await addressService.updateUserAddress(objAddress, token);

            if (resp.isSucess) {
              const respSucessfully = resp as ReturnGetAddress;
              const data = respSucessfully.data as Address;

              if (data) {
                nav('/my-account/address-book');
              }
            } else {
              const respError = resp as ReturnErroCatch;
              console.log(respError);
            }
          }
        } else {
          setCodeEmailWrong(true);
          const numberOfAttempts = data.numberOfAttempts;
          const timeRemaining = data.timeRemaining as string;

          if (timeRemaining) {
            const time = timeRemaining;
            const timeParts = time.toString().split(':');
            const seconds = parseInt(timeParts[1]) * 60 + parseInt(timeParts[2].split('.')[0]);

            if (seconds >= 1) {
              setShowTimeRemaining(true);
            }

            // setTimeRemaining(seconds);
          }

          setTimeRemaining(timeRemaining);

          setQuantityOfAttempts(numberOfAttempts);
        }
      }
    }
  };

  const onClickResendCode = () => {};

  const onClickExitModal = () => {
    changeCodeSendEmailModal(false);
  };

  // const [timeRollang, setTimeRollang] = useState(0);

  const endTimeRemaining = (time: number) => {
    const buttonRegister = refButtonConfirmChange.current;
    if (buttonRegister === null) return;

    const handleMouseEnter = () => buttonRegisterMouseEnter(refButtonConfirmChange.current!);
    const handleMouseLeave = () => buttonRegisterMouseLeave(refButtonConfirmChange.current!);

    if (time <= 0) {
      setShowTimeRemaining(false);
      setQuantityOfAttempts(0);
      setCodeEmailWrong(false);

      putValueEmptyAllInputCode();

      buttonRegister.style.opacity = '1';
      buttonRegister.style.cursor = 'pointer';

      buttonRegister.addEventListener('mouseenter', handleMouseEnter);
      buttonRegister.addEventListener('mouseleave', handleMouseLeave);
    } else {
      buttonRegister.style.opacity = '.7';
      buttonRegister.style.cursor = 'not-allowed';

      buttonRegister.removeEventListener('mouseenter', handleMouseEnter);
      buttonRegister.removeEventListener('mouseleave', handleMouseLeave);
    }
  };

  const putValueEmptyAllInputCode = () => {
    allInputs.forEach((el) => {
      el.value = '';
    });

    setValueInputPhoneOne('-1');
    setValueInputPhoneTwo('-1');
    setValueInputPhoneThree('-1');
    setValueInputPhoneFour('-1');
    setValueInputPhoneFive('-1');
    setValueInputPhoneSix('-1');
  };

  const [codePastInvalid, setCodePastInvalid] = useState(false);
  const intervalRefCodePast = useRef<NodeJS.Timeout | null>(null);

  const onPasteHandler = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const valueCode = e.clipboardData.getData('Text');

    if (intervalRefCodePast.current) {
      clearTimeout(intervalRefCodePast.current);
    }

    if (/^\d{6}$/.test(valueCode)) {
      const arrayNumbers = valueCode.split('');

      setValueInputPhoneOne(arrayNumbers[0]);
      setValueInputPhoneTwo(arrayNumbers[1]);
      setValueInputPhoneThree(arrayNumbers[2]);
      setValueInputPhoneFour(arrayNumbers[3]);
      setValueInputPhoneFive(arrayNumbers[4]);
      setValueInputPhoneSix(arrayNumbers[5]);

      setCodePastInvalid(false);
    } else {
      setCodePastInvalid(true);

      intervalRefCodePast.current = setInterval(() => {
        setCodePastInvalid(false);
      }, 10000);
      e.preventDefault();
    }
  };

  return (
    <div className="fixed left-[0px] top-[0px] w-full h-full bg-[#0000006e] flex justify-center !pt-15">
      <div className="flex flex-col items-end w-[320px] max-h-[400px] bg-[white] border border-black !p-2">
        <Styled.ContainerExitSvg onClick={onClickExitModal} className="container-svg-exit">
          <SvgX />
        </Styled.ContainerExitSvg>
        <div className="flex items-center flex-col justify-around !px-5 !pb-5 h-full">
          <span className="text-2xl font-semibold text-center span-which-email-was-send">
            Para salvar seus dados com segurança, confirme o token enviado por sms no celular de
            cadastro ou e-mail. {user?.email}
          </span>

          <div className="flex items-center flex-col w-[250px]">
            <div className="flex justify-between mt-[50px] mr-0 mb-[10px] ml-0 w-full">
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneOne) < 0 ? '' : valueInputPhoneOne}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 0)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 0)}
                onPaste={onPasteHandler} // Captura a ação de colar
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneTwo) < 0 ? '' : valueInputPhoneTwo}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 1)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 1)}
                onPaste={onPasteHandler}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneThree) < 0 ? '' : valueInputPhoneThree}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 2)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 2)}
                onPaste={onPasteHandler}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneFour) < 0 ? '' : valueInputPhoneFour}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 3)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 3)}
                onPaste={onPasteHandler}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneFive) < 0 ? '' : valueInputPhoneFive}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 4)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 4)}
                onPaste={onPasteHandler}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneSix) < 0 ? '' : valueInputPhoneSix}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 5)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 5)}
                onPaste={onPasteHandler}
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold span-quantity-of-attempts">
              tentativas restantes: {quantityOfAttempts} de 4
            </span>
          </div>

          {codePastInvalid && (
            <div className="flex">
              <span className="text-center leading-[1] font-semibold text-[red]">
                codigo fornecido invalido deve ter apenas numero e deve ter apenas 6 numeros
              </span>
            </div>
          )}

          {codeEmailWrong && (
            <div>
              <span className="font-semibold text-[red]">Codigo Errado</span>
            </div>
          )}

          {showTimeRemaining && (
            <TimeRemainingAddress
              timeRemaining={timeRemaining}
              endTimeRemaining={endTimeRemaining}
            />
          )}

          <Styled.ContainerDidNotReceiveTheCodeAndButtonNext>
            <Styled.ContainerDidNotReceiveTheCode className="container-did-not-receive-the-code">
              <Styled.Span>Não recebeu o código?</Styled.Span>
              <Styled.Span>
                <Styled.Button onClick={() => onClickResendCode()}>Reenviar</Styled.Button>
              </Styled.Span>
            </Styled.ContainerDidNotReceiveTheCode>

            <Styled.ContainerButtonNext>
              <Styled.Button ref={refButtonConfirmChange} onClick={() => onClickConfirmChange()}>
                CONFIRMAR ALTERAÇÃO
              </Styled.Button>
            </Styled.ContainerButtonNext>
          </Styled.ContainerDidNotReceiveTheCodeAndButtonNext>
        </div>
      </div>
    </div>
  );
};

export default CodeSendEmailModal;
