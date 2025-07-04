import { useCallback, useEffect, useState } from 'react';
import StarSvgRed from '../../../../Svg/StarSvgRed/StarSvgRed';
import * as Styled from './styled';
import ProductCreateCommentModal from '../ProductCreateCommentModal/ProductCreateCommentModal';
import { ProductComment } from '../../../../Interfaces/Entity/ProductComment';
import ProductCreateQuestionModal from '../ProductCreateQuestionModal/ProductCreateQuestionModal';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../../Interfaces/Entity/User.';
import { GetUserFromLocalStorage } from '../../../../GetUserFromLocalStorage/GetUserFromLocalStorage';
import { TokenExpiration } from '../../../../TokenValidation/TokenExpiration';
import productCommentService, {
  ReturnGetProductCommentList,
} from '../../../../Service/ProductCommentService/ProductCommentService';
import { ReturnErroCatch } from '../../../../Service/UserService/UserService';
import ThereIsNoCommentProduct from '../ThereIsNoCommentProduct/ThereIsNoCommentProduct';
import ThereIsNoQuestionAndAnswersProduct from '../ThereIsNoQuestionAndAnswersProduct/ThereIsNoQuestionAndAnswersProduct';
import StarSvg from '../../../../Svg/StarSvg/StarSvg';
import SvgDislikeThumb from '../../../../Svg/SvgDislikeThumb/SvgDislikeThumb';
import SvgLikeThumb from '../../../../Svg/SvgLikeThumb/SvgLikeThumb';
import { Product } from '../../../../Interfaces/Entity/Product';
import { useProductAppDispatch } from '../../ReduxSendProduct/productDispatch';
import { changeProduct } from '../../ReduxSendProduct/productSlice';
import productCommentLikeService, {
  ReturnGetProductCommentLike,
  ReturnGetProductCommentLikeList,
} from '../../../../Service/ProductCommentLikeService/ProductCommentLikeService';
import { ProductCommentLike, Reaction } from '../../../../Interfaces/Entity/ProductCommentLike';

interface ProductCommentsDisplayProsp {
  product: Product;
}

interface ObjLikeOrDislike {
  productCommentId: string;
  quantityLike: number;
}

const ProductCommentsDisplay = ({ product }: ProductCommentsDisplayProsp) => {
  const [evaluate, setEvaluate] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [comments, setComments] = useState<ProductComment[]>([]);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [user, setUser] = useState<User | null>(null);
  const nav = useNavigate();
  const dispatch = useProductAppDispatch();

  const onClickButtonEvaluate = () => {
    setEvaluate(true);

    document.body.style.overflow = 'hidden';
  };

  const changeValueButtonEvaluate = (value: boolean) => {
    setEvaluate(value);
  };

  const changeValueButtonQuestions = (value: boolean) => {
    setQuestions(value);
  };

  const onClickButtonQuestions = () => {
    setQuestions(true);

    document.body.style.overflow = 'hidden';
  };

  const formatTimeAgo = (dateString: string) => {
    const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });
    const date = new Date(dateString);
    const now = new Date();
    const diff = (date.getTime() - now.getTime()) / 1000; // diferença em segundos
    const absDiff = Math.abs(diff);

    const units = [
      { max: 60, value: 1, name: 'second' },
      { max: 3600, value: 60, name: 'minute' },
      { max: 86400, value: 3600, name: 'hour' },
      { max: 604800, value: 86400, name: 'day' },
      { max: 2629800, value: 604800, name: 'week' },
      { max: 31557600, value: 2629800, name: 'month' },
      { max: Infinity, value: 31557600, name: 'year' },
    ] as const;

    for (const unit of units) {
      if (absDiff < unit.max) {
        const rounded = Math.round(diff / unit.value);
        return rtf.format(rounded, unit.name);
      }
    }

    return 'agora mesmo';
  };

  const getAllCommentsProduct = useCallback(
    async (user: User) => {
      const productId = product.id;
      const res = await productCommentService.getAllProductCommentByProductId(user, productId);

      if (res.isSucess) {
        const data = res as ReturnGetProductCommentList;
        const listComments: ProductComment[] = data.data;

        setComments(listComments);
      } else {
        const error = res as ReturnErroCatch;
        console.error(error);

        localStorage.removeItem('user');
        nav('/login');
      }
    },
    [nav]
  );

  const [listCommentLikes, setListCommentLikes] = useState<ProductCommentLike[] | []>([]);

  const getAllLikesAndDeslikeCommentsProduct = useCallback(
    async (user: User) => {
      const productId = product.id;
      const res = await productCommentLikeService.getAllProductCommentLikeProductId(
        user,
        productId
      );

      if (res.isSucess) {
        const data = res as ReturnGetProductCommentLikeList;
        const listCommentLikes: ProductCommentLike[] = data.data;

        // listCommentLikes.forEach((el) => {
        //   const obj =
        // });

        setListCommentLikes(listCommentLikes);
      } else {
        const error = res as ReturnErroCatch;
        console.error(error);

        localStorage.removeItem('user');
        nav('/login');
      }
    },
    [nav]
  );

  const editNameUserComment = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const editCreateAtComment = (createdAt: string) => {
    return formatTimeAgo(createdAt);
  };

  useEffect(() => {
    const objUser = GetUserFromLocalStorage();

    if (objUser.isNullUserLocalStorage) {
      nav('/login');
      return;
    }

    if (objUser.user === null) {
      localStorage.removeItem('user');

      nav('/login');
      return;
    }

    const user = objUser.user;
    const token = user.token;

    if (token) {
      const valueExpiration = TokenExpiration(token);

      if (valueExpiration) {
        localStorage.removeItem('user');
        nav('/login');
      }
    }

    dispatch(changeProduct(product));

    if (user) {
      setUser(user);
      getAllCommentsProduct(user);
      getAllLikesAndDeslikeCommentsProduct(user);
    }
  }, [nav]);

  const changeCommentsCreateNew = (data: ProductComment) => {
    setComments((prev) => {
      const array = [...prev, data];

      return array;
    });
  };

  const [listObjDislike, setListObjDislike] = useState<ObjLikeOrDislike[]>([]);
  const [listObjLike, setListObjLike] = useState<ObjLikeOrDislike[]>([]);

  const onClickLikeOrDislikeComment = async (productCommentId: string, reaction: Reaction) => {
    if (!user || !user.id) return;

    const userId = user.id;
    const productId = product.id;

    const hereUserComment = listCommentLikes.find(
      (el) => el.productCommentId === productCommentId && el.userId === userId
    );

    let reactionValue = reaction;

    if (!hereUserComment) {
      reactionValue = reaction;
    }

    if (hereUserComment && hereUserComment.reaction === reaction) {
      reactionValue = Reaction.None;
    }

    const objLike: ProductCommentLike = {
      userId: userId,
      productCommentId: productCommentId,
      productId: productId,
      reaction: reactionValue,
      id: '',
      productDTO: null,
      UserDTO: null,
      ProductCommentDTO: null,
      createdAt: '',
    };

    const resp = await productCommentLikeService.create(objLike, user);

    if (resp.isSucess) {
      const data = resp as ReturnGetProductCommentLike;

      if (data.isSucess) {
        const productCommentData = data.data;

        if (
          hereUserComment &&
          hereUserComment.reaction === Reaction.None &&
          productCommentData.reaction === Reaction.Like
        ) {
          setListObjLike((array) => {
            const map = array.map((el) => {
              if (el.productCommentId === productCommentId) {
                return { ...el, quantityLike: el.quantityLike + 1 };
              }

              return el;
            });

            return map;
          });
        }

        if (
          hereUserComment &&
          hereUserComment.reaction === Reaction.None &&
          productCommentData.reaction === Reaction.Dislike
        ) {
          setListObjDislike((array) => {
            const map = array.map((el) => {
              if (el.productCommentId === productCommentId) {
                return { ...el, quantityLike: el.quantityLike + 1 };
              }

              return el;
            });

            return map;
          });
        }

        if (
          hereUserComment &&
          hereUserComment.reaction === Reaction.Like &&
          productCommentData.reaction === Reaction.None
        ) {
          setListObjLike((array) => {
            const map = array.map((el) => {
              if (el.productCommentId === productCommentId) {
                return { ...el, quantityLike: el.quantityLike - 1 };
              }

              return el;
            });

            return map;
          });
        }

        if (
          hereUserComment &&
          hereUserComment.reaction === Reaction.Dislike &&
          productCommentData.reaction === Reaction.None
        ) {
          setListObjDislike((array) => {
            const map = array.map((el) => {
              if (el.productCommentId === productCommentId) {
                return { ...el, quantityLike: el.quantityLike - 1 };
              }

              return el;
            });

            return map;
          });
        }

        if (
          hereUserComment &&
          hereUserComment.reaction === Reaction.Dislike &&
          productCommentData.reaction === Reaction.Like
        ) {
          setListObjLike((array) => {
            const map = array.map((el) => {
              if (el.productCommentId === productCommentId) {
                return { ...el, quantityLike: el.quantityLike + 1 };
              }

              return el;
            });

            return map;
          });

          setListObjDislike((array) => {
            const map = array.map((el) => {
              if (el.productCommentId === productCommentId) {
                return { ...el, quantityLike: el.quantityLike - 1 };
              }

              return el;
            });

            return map;
          });
        }

        if (
          hereUserComment &&
          hereUserComment.reaction === Reaction.Like &&
          productCommentData.reaction === Reaction.Dislike
        ) {
          setListObjLike((array) => {
            const map = array.map((el) => {
              if (el.productCommentId === productCommentId) {
                return { ...el, quantityLike: el.quantityLike - 1 };
              }

              return el;
            });
            console.log(map);

            return map;
          });

          setListObjDislike((array) => {
            const map = array.map((el) => {
              if (el.productCommentId === productCommentId) {
                return { ...el, quantityLike: el.quantityLike + 1 };
              }

              return el;
            });

            return map;
          });
        }

        if (!hereUserComment && productCommentData.reaction === Reaction.Like) {
          setListObjLike((array) => {
            const map = array.map((el) => {
              if (el.productCommentId === productCommentId) {
                return { ...el, quantityLike: el.quantityLike + 1 };
              }

              return el;
            });

            return map;
          });
        }

        if (!hereUserComment && productCommentData.reaction === Reaction.Dislike) {
          setListObjDislike((array) => {
            const map = array.map((el) => {
              if (el.productCommentId === productCommentId) {
                return { ...el, quantityLike: el.quantityLike + 1 };
              }

              return el;
            });

            return map;
          });
        }

        if (!hereUserComment) {
          setListCommentLikes((array) => {
            const newArray = [...array, productCommentData];

            return newArray;
          });
        }

        setListCommentLikes((array) => {
          const map = array.map((el) => {
            if (el.productCommentId === productCommentId && el.userId === userId) {
              return { ...el, reaction: productCommentData.reaction };
            }

            return el;
          });

          return map;
        });
        // console.log(productCommentData);
      }
    } else {
      const error = resp as ReturnErroCatch;
      console.error(error);
    }
  };

  const checkifUserLikeComment = (productCommentId: string, reaction: Reaction): boolean => {
    if (!user || !user.id) return false;

    const userId = user.id;

    const value = listCommentLikes.find(
      (el) => el.productCommentId === productCommentId && el.userId === userId
    );

    if (value && value.reaction === reaction) {
      return value.userId === userId;
    }

    return false;
  };

  const checkifUserDislikeComment = (productCommentId: string, reaction: Reaction): boolean => {
    if (!user || !user.id) return false;

    const userId = user.id;

    const value = listCommentLikes.find(
      (el) => el.productCommentId === productCommentId && el.userId === userId
    );

    if (value && value.reaction === reaction) {
      return value.userId === userId;
    }

    return false;
  };

  useEffect(() => {
    comments.forEach((el) => {
      quantityOfLikesComment(el.id);
      quantityOfDislikeComment(el.id);
    });
  }, [comments]);

  const quantityOfLikesComment = (productCommentId: string) => {
    const contLikes = listCommentLikes.filter(
      (like) => like.reaction === 1 && like.productCommentId === productCommentId
    ).length;

    const obj: ObjLikeOrDislike = {
      productCommentId: productCommentId,
      quantityLike: contLikes,
    };

    const arrayLikes: ObjLikeOrDislike[] = [];
    arrayLikes.push(obj);
    setListObjLike(arrayLikes);
  };

  const quantityOfDislikeComment = (productCommentId: string) => {
    const contLikes = listCommentLikes.filter(
      (like) => like.reaction === 2 && like.productCommentId === productCommentId
    ).length;

    const obj: ObjLikeOrDislike = {
      productCommentId: productCommentId,
      quantityLike: contLikes,
    };

    const arrayLikes: ObjLikeOrDislike[] = [];
    arrayLikes.push(obj);
    setListObjDislike(arrayLikes);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-[30px] text-[#3E3E3E] font-medium !mb-[10px]">Avaliações</h1>

        {comments.length > 0 && (
          <div className="flex flex-col">
            <div className="flex items-center leading-6 justify-between">
              <div className="flex">
                <span className="text-[30px] font-bold text-[#3E3E3E] !mr-[15px]">5.0</span>

                <div
                  className="flex items-center gap-[2px] !mr-[10px]"
                  data-testid="container-stars-svg">
                  <Styled.ContainerStarSvg className="flex">
                    <StarSvgRed />
                  </Styled.ContainerStarSvg>
                  <Styled.ContainerStarSvg className="flex">
                    <StarSvgRed />
                  </Styled.ContainerStarSvg>
                  <Styled.ContainerStarSvg className="flex">
                    <StarSvgRed />
                  </Styled.ContainerStarSvg>
                  <Styled.ContainerStarSvg className="flex">
                    <StarSvgRed />
                  </Styled.ContainerStarSvg>
                  <Styled.ContainerStarSvg className="flex">
                    <StarSvgRed />
                  </Styled.ContainerStarSvg>
                </div>
              </div>
              <div
                className="flex !py-[10px] !px-[20px] border-1 border-[#EC008C] cursor-pointer"
                onClick={onClickButtonEvaluate}>
                <button className="uppercase text-[#EC008C] font-bold pointer-events-none">
                  Quero avaliar
                </button>
              </div>
            </div>

            <div className="flex flex-col !mt-[20px] !mb-[40px]">
              <div className="flex justify-between !mb-[20px]">
                <span className="text-[22px] text-[#3E3E3E] font-bold">
                  {comments.length} avaliações
                </span>
                <div className="flex items-center">
                  <span className="text-[12px] font-medium !pr-[10px]">ordenar por</span>
                  <div className="inline-block relative">
                    <select className="appearance-none border text-[12px] font-medium border-gray-300 rounded !px-3 !py-2 !pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="helpfulScore,desc">Mais úteis</option>
                      <option value="created,desc">Mais recentes</option>
                      <option value="created,asc">Mais antigas</option>
                      <option value="rating,desc">Maiores notas</option>
                      <option value="rating,asc">Menores notas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M7 7l3-3 3 3H7zm0 6l3 3 3-3H7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {comments &&
                comments.map((el, i) => (
                  <div
                    className={`flex flex-col border-b border-[#e2e2e2] !pb-[20px] ${comments.length > 1 && i < comments.length - 1 ? '!mb-[20px]' : ''}`}
                    key={el.id}>
                    <div className="flex justify-between leading-[16px] !mb-[18px]">
                      <div className="flex items-center gap-[30px]">
                        <div className="flex items-center gap-[2px]">
                          {Array.from({ length: el.starQuantity }).map((_, index) => (
                            <Styled.ContainerStarSvg className="flex" key={index}>
                              <StarSvgRed />
                            </Styled.ContainerStarSvg>
                          ))}

                          {Array.from({ length: Math.abs(el.starQuantity - 5) }).map((_, index) => (
                            <Styled.ContainerStarSvg className="flex" key={index + 1}>
                              <StarSvg />
                            </Styled.ContainerStarSvg>
                          ))}
                        </div>

                        <span className="text-[16px] font-bold">
                          {editNameUserComment(el.name)}
                        </span>

                        <span className="text-[13px] text-[#787878] font-semibold">
                          {editCreateAtComment(el.createdAt)}
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-[13px] text-[#3E3E3E] font-medium">
                          esta avaliação foi útil?
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#3E3E3E] font-semibold">{el.comment}</span>

                      <div className="flex gap-[10px]">
                        <div
                          className={`flex gap-[5px] items-center border !p-[7px] !px-[15px] rounded-[5px] w-[65px] 
                            cursor-pointer ${checkifUserLikeComment(el.id, Reaction.Like) ? 'border-[#ec008c]' : 'border-[#d8d8d8]'}`}
                          onClick={() => onClickLikeOrDislikeComment(el.id, Reaction.Like)}>
                          <Styled.ContainerSvgThumb>
                            <SvgLikeThumb />
                          </Styled.ContainerSvgThumb>
                          <span className="text-[14px]">
                            {
                              listObjLike.find((obj) => obj.productCommentId === el.id)
                                ?.quantityLike
                            }
                          </span>
                        </div>

                        <div
                          className={`flex gap-[5px] items-center border border-[#d8d8d8] !p-[7px] !px-[15px] rounded-[5px] w-[65px] 
                            cursor-pointer ${checkifUserDislikeComment(el.id, Reaction.Dislike) ? 'border-[#ec008c]' : 'border-[#d8d8d8]'}`}
                          onClick={() => onClickLikeOrDislikeComment(el.id, Reaction.Dislike)}>
                          <Styled.ContainerSvgThumb>
                            <SvgDislikeThumb />
                          </Styled.ContainerSvgThumb>
                          <span className="text-[14px]">
                            {
                              listObjDislike.find((obj) => obj.productCommentId === el.id)
                                ?.quantityLike
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {comments.length <= 0 && (
          <ThereIsNoCommentProduct onClickButtonEvaluate={onClickButtonEvaluate} />
        )}

        {questionsAndAnswers.length <= 0 && (
          <ThereIsNoQuestionAndAnswersProduct onClickButtonQuestions={onClickButtonQuestions} />
        )}
      </div>

      {evaluate && user && (
        <ProductCreateCommentModal
          user={user}
          changeValueButtonEvaluate={changeValueButtonEvaluate}
          changeCommentsCreateNew={changeCommentsCreateNew}
        />
      )}

      {questions && (
        <ProductCreateQuestionModal changeValueButtonQuestions={changeValueButtonQuestions} />
      )}
    </div>
  );
};

export default ProductCommentsDisplay;
