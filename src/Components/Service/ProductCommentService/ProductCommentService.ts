import axios, { AxiosError, AxiosInstance } from 'axios';
import { User } from '../../Interfaces/Entity/User.';
import { ReturnErroCatch } from '../UserService/UserService';
import { ProductComment } from '../../Interfaces/Entity/ProductComment';

export interface ReturnGetProductComment {
  data: ProductComment;
  isSucess: boolean;
}

export interface ReturnGetProductCommentList {
  data: ProductComment[];
  isSucess: boolean;
}

class ProductCommentService {
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

  async getAllProductCommentByProductId(
    user: User,
    productId: string
  ): Promise<ReturnGetProductCommentList | ReturnErroCatch> {
    try {
      const response = await this.http.get<ReturnGetProductCommentList>(
        `/public/product-comment/get-all-product-comment-by-productid/${productId}`,
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
    productComment: ProductComment,
    userId: string,
    token: string
  ): Promise<ReturnGetProductComment | ReturnErroCatch> {
    try {
      const response = await this.http.post<ReturnGetProductComment>(
        '/public/product-comment/create',
        productComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            uid: userId,
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

const productCommentService = new ProductCommentService();
export default productCommentService;
