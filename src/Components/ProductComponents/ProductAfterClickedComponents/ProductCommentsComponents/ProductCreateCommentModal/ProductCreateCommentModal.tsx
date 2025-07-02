import { useRef, useState } from 'react';
import StarSvg from '../../../../Svg/StarSvg/StarSvg';
import * as Styled from './styled';
import SvgX from '../../../../Svg/SvgX/SvgX';
import { User } from '../../../../Interfaces/Entity/User.';
import { RootStateProduct } from '../../ReduxSendProduct/productStore';
import { useSelector } from 'react-redux';
import productCommentService, {
  ReturnGetProductComment,
} from '../../../../Service/ProductCommentService/ProductCommentService';
import { ProductComment } from '../../../../Interfaces/Entity/ProductComment';
import { ReturnErroCatch } from '../../../../Service/UserService/UserService';

type StarRefItem = {
  el: HTMLDivElement;
  active: boolean;
};

interface ProductCreateCommentModalProps {
  user: User;
  changeValueButtonEvaluate: (value: boolean) => void;
  changeCommentsCreateNew: (data: ProductComment) => void;
}

const ProductCreateCommentModal = ({
  user,
  changeValueButtonEvaluate,
  changeCommentsCreateNew,
}: ProductCreateCommentModalProps) => {
  const [whichRecommendation, setWhichRecommendation] = useState(-1);
  const product = useSelector((state: RootStateProduct) => state.product);

  const onClickWhichRecommendation = (number: number) => {
    setWhichRecommendation(number);
  };

  const onClickCloseModalEvaluate = () => {
    changeValueButtonEvaluate(false);

    document.body.style.overflow = 'scroll';
  };

  const onClickUploadImg = () => {};

  const [indexWasClickedStarSvg, setIndexWasClickedStarSvg] = useState(-1);
  const textareaTypeYourCommentRef = useRef<HTMLTextAreaElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  const inputRadioRecommendedRef = useRef<HTMLInputElement>(null);
  const inputRadioNotRecommendedRef = useRef<HTMLInputElement>(null);
  const [errorChooseStar, setErrorChooseStar] = useState(false);

  const [ringColor, setRingColor] = useState<'blue' | 'red'>('blue');
  const [ringColorInputName, setRingColorInputName] = useState<'blue' | 'red'>('blue');
  const [ringColorInputEmail, setRingColorInputEmail] = useState<'blue' | 'red'>('blue');

  const focusRingClass = {
    blue: 'focus:ring-blue-500',
    red: 'focus:ring-red-500',
  };

  const onClickSendEvaluate = async () => {
    if (
      product === null ||
      textareaTypeYourCommentRef.current === null ||
      inputNameRef.current === null ||
      inputEmailRef.current === null
    )
      return;

    const textarea = textareaTypeYourCommentRef.current;
    const inputName = inputNameRef.current;
    const inputEmail = inputEmailRef.current;

    const valueTextare = textarea.value;
    const valueInputName = inputName.value;
    const valueInputEmail = inputEmail.value;

    let canSendCreateComment = 0;

    if (indexWasClickedStarSvg < 0) {
      setErrorChooseStar(true);
    } else {
      canSendCreateComment += 1;
    }

    if (valueTextare.length < 3) {
      textarea.style.border = '1px solid red';
      setRingColor('red');
    } else {
      textarea.style.border = '1px solid #d1d5dc';
      setRingColor('blue');
      canSendCreateComment += 1;
    }

    if (valueInputName.length < 3) {
      inputName.style.border = '1px solid red';
      setRingColorInputName('red');
    } else {
      inputName.style.border = '1px solid #d1d5dc';
      setRingColorInputName('blue');
      canSendCreateComment += 1;
    }

    if (!valueInputEmail.includes('@gmail')) {
      inputEmail.style.border = '1px solid red';
      setRingColorInputEmail('red');
    } else {
      inputEmail.style.border = '1px solid #d1d5dc';
      setRingColorInputEmail('blue');
      canSendCreateComment += 1;
    }

    if (canSendCreateComment < 4) return;

    const objEvaluate: ProductComment = {
      productId: product.id,
      starQuantity: indexWasClickedStarSvg,
      recommendProduct: whichRecommendation === 0 ? true : false,
      comment: valueTextare,
      name: inputName.value,
      email: inputEmail.value,
      imgProduct: '',
      id: '',
      productIdString: '',
      productDTO: null,
      createdAt: '',
      updatedAt: '',
    };

    if (user.id === null || user.token === null) return;

    const objTest: ProductComment = {
      comment: 'Blusa Muito Top Da Galaxia',
      createdAt: '2025-07-02T15:17:44.9448683Z',
      email: 'lucas@gmail.com',
      id: 'e119f988-c31f-416e-b377-827322e12482',
      name: 'Lucas',
      productId: '90635a26-1e40-468e-b36c-c5ade6df7d22',
      recommendProduct: false,
      starQuantity: 4,
      updatedAt: '2025-07-02T15:17:44.9448684Z',
      productIdString: '',
      productDTO: null,
      imgProduct: '',
    };

    changeValueButtonEvaluate(false);
    changeCommentsCreateNew(objTest);

    // const res = await productCommentService.create(objEvaluate, user.id, user.token);

    // if (res.isSucess) {
    //   const data = res as ReturnGetProductComment;

    //   if (data.isSucess) {
    //     const productCommentData = data.data;

    //     changeValueButtonEvaluate(false);
    //     changeCommentsCreateNew(productCommentData);
    //     console.log(productCommentData);
    //   }
    // } else {
    //   const error = res as ReturnErroCatch;
    //   console.error(error);
    // }
  };

  const containerAllStarsRef = useRef<StarRefItem[]>([]);

  const wasClickedStarSvg = useRef(false);

  const onMouseEnterStarSvg = (index: number) => {
    const containerAllStars = containerAllStarsRef.current;

    containerAllStars.forEach((element, i) => {
      if (i <= index) {
        const polygon = element.el.querySelector('polygon') as SVGElement;
        if (polygon) {
          polygon.style.fill = '#EC008C';
        }
      }
    });
  };

  const onMouseLeaveStarSvg = () => {
    const containerAllStars = containerAllStarsRef.current;

    containerAllStars.forEach((element) => {
      if (!element.active) {
        const polygon = element.el.querySelector('polygon') as SVGElement;
        if (polygon) {
          polygon.style.fill = '#ffffff';
        }
      }
    });
  };

  const onClickStarSvg = (index: number) => {
    wasClickedStarSvg.current = !wasClickedStarSvg.current;

    const starIndex = index + 1;

    setIndexWasClickedStarSvg(starIndex);
    const inputRadioRecommended = inputRadioRecommendedRef.current as HTMLInputElement;
    const inputRadioNotRecommended = inputRadioNotRecommendedRef.current as HTMLInputElement;

    if (starIndex < 3) {
      inputRadioRecommended.checked = true;
      inputRadioNotRecommended.checked = false;
    } else {
      inputRadioRecommended.checked = false;
      inputRadioNotRecommended.checked = true;
    }

    handleStarSelection(index);
    seeIfStarIsChecked();
  };

  const handleStarSelection = (index: number) => {
    const containerAllStars = containerAllStarsRef.current;

    containerAllStarsRef.current = containerAllStars.map((element, i) => {
      const polygon = element.el.querySelector('polygon') as SVGElement;

      if (i === index) {
        const ele = { ...element, active: !element.active };

        if (!ele.active) {
          if (polygon) {
            polygon.style.fill = '#ffffff';
          }
        } else {
          if (polygon) {
            polygon.style.fill = '#EC008C';
          }
        }

        return ele;
      } else {
        if (i <= index) {
          if (polygon) {
            polygon.style.fill = '#EC008C';
          }

          return { ...element, active: true };
        }

        if (polygon) {
          polygon.style.fill = '#ffffff';
        }

        return { ...element, active: false };
      }
    });
  };

  const seeIfStarIsChecked = () => {
    const containerAllStars = containerAllStarsRef.current;
    let countStarActiveFalse = 0;

    containerAllStars.forEach((el) => {
      if (el.active) {
        setErrorChooseStar(false);
      } else {
        countStarActiveFalse += 1;
      }
    });

    if (countStarActiveFalse >= 5) {
      setIndexWasClickedStarSvg(-1);

      const inputRadioRecommended = inputRadioRecommendedRef.current as HTMLInputElement;
      const inputRadioNotRecommended = inputRadioNotRecommendedRef.current as HTMLInputElement;

      inputRadioNotRecommended.checked = false;
      inputRadioRecommended.checked = false;
    }
  };

  const onChangeInputTypeYourComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target;
    const valueInputTypeComment = input.value;

    if (valueInputTypeComment.length < 3) {
      input.style.border = '1px solid red';
      setRingColor('red');
    } else {
      input.style.border = '1px solid #d1d5dc';
      setRingColor('blue');
    }
  };

  const onChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const valueInput = input.value;

    if (valueInput.length < 3) {
      input.style.border = '1px solid red';
      setRingColorInputName('red');
    } else {
      input.style.border = '1px solid #d1d5dc';
      setRingColorInputName('blue');
    }
  };

  const onChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const valueInput = input.value;

    if (!valueInput.includes('@gmail')) {
      input.style.border = '1px solid red';
      setRingColorInputEmail('red');
    } else {
      input.style.border = '1px solid #d1d5dc';
      setRingColorInputEmail('blue');
    }
  };

  return (
    <div className="flex justify-center items-center fixed left-[0px] top-[0px] bg-[#00000042] w-[100%] h-[100%]">
      <div className="flex flex-col w-[400px] bg-[#fff] !p-[20px] relative">
        <h1 className="text-[22px] text-center leading-6 uppercase text-[#EC008C] font-bold !mb-[5px]">
          Avaliar produto
        </h1>

        <div className="flex flex-col">
          <span className="text-[14px] text-[#2f2f2f] font-bold !pt-[10px] !pb-[5px]">
            Dê uma nota de 1 a 5
          </span>

          <div
            className="flex items-center gap-[2px] !mr-[10px] !mt-[8px]"
            data-testid="container-stars-svg">
            {Array.from({ length: 5 }).map((_el, i) => (
              <Styled.ContainerStarSvgModalEvaluate
                key={i}
                ref={(el) => {
                  if (el && !containerAllStarsRef.current[i]) {
                    containerAllStarsRef.current[i] = {
                      el,
                      active: false,
                    };
                  } else if (el) {
                    containerAllStarsRef.current[i].el = el;
                  }
                }}
                className="flex"
                onMouseEnter={() => onMouseEnterStarSvg(i)}
                onMouseLeave={() => onMouseLeaveStarSvg()}
                onClick={() => onClickStarSvg(i)}>
                <StarSvg />
              </Styled.ContainerStarSvgModalEvaluate>
            ))}
          </div>

          <span className="text-[14px] text-[#2f2f2f] font-bold !mt-[8px] !mb-[5px]">
            Você recomenda este produto?
          </span>

          <div className="flex justify-between w-[350px] !mb-[40px]">
            <div className="flex leading-6" onClick={() => onClickWhichRecommendation(0)}>
              <input
                id="recommended"
                className="w-[13px] h-[13px] !mr-[10px]"
                type="radio"
                name="recommendation"
                value="yes"
                ref={inputRadioRecommendedRef}
              />
              <label htmlFor="recommended" className="text-[#3D3D3D] text-[14px] font-semibold">
                Sim, recomendo
              </label>
            </div>

            <div className="flex leading-6" onClick={() => onClickWhichRecommendation(1)}>
              <input
                id="not-recommended"
                className="w-[13px] h-[13px] !mr-[10px]"
                type="radio"
                name="recommendation"
                value="no"
                ref={inputRadioNotRecommendedRef}
              />
              <label htmlFor="not-recommended" className="text-[#3D3D3D] text-[14px] font-semibold">
                Não, não recomendo
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col">
              <textarea
                className={`w-full h-[80px] text-[14px] !p-[5px] text-sm rounded-lg border border-gray-300 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-1 ${focusRingClass[ringColor]}`}
                placeholder="Digite seu comentário"
                ref={textareaTypeYourCommentRef}
                onChange={(e) => onChangeInputTypeYourComment(e)}></textarea>

              {ringColor === 'red' && (
                <span className="text-[14px] text-[red] font-semibold">
                  Erro preencha comentário precisa ter pelo menos 3 caracteres
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                autoComplete="new-password"
                className={`w-full !p-[9px] !pl-[10px] text-[black] text-[16px] font-medium rounded-full border border-gray-300 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 ${focusRingClass[ringColorInputName]}`}
                placeholder="Nome"
                ref={inputNameRef}
                onChange={(e) => onChangeInputName(e)}
              />

              {ringColorInputName === 'red' && (
                <span className="text-[14px] text-[red] font-semibold">
                  Erro preencha comentário precisa ter pelo menos 3 caracteres
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                className={`w-full !p-[9px] !pl-[10px] text-[black] text-[16px] font-medium rounded-full border border-gray-300 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 ${focusRingClass[ringColorInputEmail]}`}
                placeholder="E-mail"
                ref={inputEmailRef}
                onChange={(e) => onChangeInputEmail(e)}
              />

              {ringColorInputEmail === 'red' && (
                <span className="text-[14px] text-[red] font-semibold">
                  Erro coloque um Email Valido
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col text-[14px] text-[#3d3d3d] font-extrabold !mb-[15px]">
            <span className="!p-[10px]">Adicione fotos ou vídeo do produto</span>

            <button
              type="button"
              onClick={onClickUploadImg}
              className="w-[60px] h-[60px] cursor-pointer border-2 border-dashed border-gray-300 appearance-none p-0 m-0 rounded-[5px] bg-[#f7f7f7] bg-[url('https://reviews.konfidency.com.br/marisa/b02bf8ce7b715cebfdce.png')] bg-no-repeat bg-center bg-[length:30%]"></button>
          </div>

          <div className="flex">
            {errorChooseStar && (
              <span className="text-[14px] text-[red] text-center font-semibold">
                Por favor, escolha uma nota de 1 a 5 e informe se recomenda o produto
              </span>
            )}
          </div>

          <button
            className="rounded-4xl !p-[10px] bg-[#ec008c] text-[#fff] font-bold cursor-pointer"
            onClick={onClickSendEvaluate}>
            Enviar avaliação
          </button>
        </div>

        <Styled.ContainerStarX
          className="absolute top-[15px] right-[15px]"
          onClick={onClickCloseModalEvaluate}>
          <SvgX />
        </Styled.ContainerStarX>
      </div>
    </div>
  );
};

export default ProductCreateCommentModal;
