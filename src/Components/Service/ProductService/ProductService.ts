import axios, { AxiosError, AxiosInstance } from 'axios';
import { Product } from '../../Interfaces/Entity/Product';
import { User } from '../../Interfaces/Entity/User.';
import { ReturnErroCatch } from '../UserService/UserService';

export interface ReturnGetProduct {
  data: Product;
  isSucess: boolean;
}

export interface ReturnGetProductList {
  data: Product[];
  isSucess: boolean;
}

class ProductService {
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

  async getAllProduct(user: User, type: string): Promise<ReturnGetProductList | ReturnErroCatch> {
    try {
      const response = await this.http.get<ReturnGetProductList>(
        `/product/get-all-product-by-type/${type}`,
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

const productService = new ProductService();
export default productService;
