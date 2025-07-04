import axios, { AxiosError, AxiosInstance } from 'axios';
import { ProductCommentLike } from '../../Interfaces/Entity/ProductCommentLike';
import { User } from '../../Interfaces/Entity/User.';
import { ReturnErroCatch } from '../UserService/UserService';

export interface ReturnGetProductCommentLike {
  data: ProductCommentLike;
  isSucess: boolean;
}

export interface ReturnGetProductCommentLikeList {
  data: ProductCommentLike[];
  isSucess: boolean;
}

class ProductCommentLikeService {
  private baseUrl: string;
  private http: AxiosInstance;

  constructor() {
    this.baseUrl = import.meta.env.VITE__APP_BASE_URL;
    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getAllProductCommentLikeProductId(
    user: User,
    productId: string
  ): Promise<ReturnGetProductCommentLikeList | ReturnErroCatch> {
    try {
      const response = await this.http.get<ReturnGetProductCommentLikeList>(
        `/public/product-comment-like/get-all-product-comment-like-product-id/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            uid: user.id,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error: unknown) {
      const dataReturn: ReturnErroCatch = {
        isSucess: false,
        message: '',
      };

      if (error instanceof AxiosError) {
        const data: ReturnErroCatch = error.response?.data;
        return data;
      }

      return dataReturn;
    }
  }

  async create(
    productCommentLike: ProductCommentLike,
    user: User
  ): Promise<ReturnGetProductCommentLike | ReturnErroCatch> {
    try {
      const response = await this.http.post<ReturnGetProductCommentLike>(
        '/public/product-comment-like/create',
        productCommentLike,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            uid: user.id,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error: unknown) {
      const dataReturn: ReturnErroCatch = {
        isSucess: false,
        message: '',
      };

      if (error instanceof AxiosError) {
        const data: ReturnErroCatch = error.response?.data;
        return data;
      }

      return dataReturn;
    }
  }
}

const productCommentLikeService = new ProductCommentLikeService();
export default productCommentLikeService;
