import axios, { AxiosError, AxiosInstance } from 'axios';
import { User } from '../../Interfaces/Entity/User.';
import { ReturnErroCatch } from '../UserService/UserService';
import { ProductAdditionalInfo } from '../../Interfaces/Entity/ProductAdditionalInfo';

export interface ReturnGetProductAdditionalInfo {
  data: ProductAdditionalInfo;
  isSucess: boolean;
}

export interface ReturnGetProductAdditionalInfoList {
  data: ProductAdditionalInfo[];
  isSucess: boolean;
}

class ProductAdditionalInfoService {
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

  async GetProductAdditionalInfoByProductId(
    user: User,
    productId: string
  ): Promise<ReturnGetProductAdditionalInfo | ReturnErroCatch> {
    try {
      const response = await this.http.get<ReturnGetProductAdditionalInfo>(
        `/product-additional-info/get-by-product-id/${productId}`,
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

const productAdditionalInfoService = new ProductAdditionalInfoService();
export default productAdditionalInfoService;
