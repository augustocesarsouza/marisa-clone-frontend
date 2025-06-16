import axios, { AxiosError, AxiosInstance } from 'axios';
import { UserProductLike } from '../../Interfaces/Entity/UserProductLike';
import { ReturnErroCatch } from '../UserService/UserService';
import { UserProductLikeCreateOrDeleteDTO } from '../../Interfaces/DTOs/UserProductLikeCreateOrDeleteDTO';

export interface ReturnGetUserProductLike {
  data: UserProductLike;
  message: string;
  isSucess: boolean;
}

export interface ReturnGetUserProductLikeList {
  data: UserProductLike[];
  isSucess: boolean;
}

export interface ReturnCreateUserProductLike {
  data: UserProductLikeCreateOrDeleteDTO;
  isSucess: boolean;
}

class UserProductLikeService {
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

  async GetUserProductLikeByProductIdUserId(
    productId: string,
    userId: string,
    token: string
  ): Promise<ReturnGetUserProductLike | ReturnErroCatch> {
    try {
      const response = await this.http.get<ReturnGetUserProductLike>(
        `/user-product-like/get-user-product-by-product-id/${productId}/${userId}`,
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

  async create(userProductLike: UserProductLike): Promise<ReturnCreateUserProductLike | null> {
    try {
      const response = await this.http.post<ReturnCreateUserProductLike>(
        '/user-product-like/create',
        userProductLike
      );
      return response.data;
    } catch {
      return null;
    }
  }
}

const userProductLikeService = new UserProductLikeService();
export default userProductLikeService;
