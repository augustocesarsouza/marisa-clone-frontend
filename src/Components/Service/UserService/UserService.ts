import axios, { AxiosInstance } from 'axios';
import { User } from '../../Interfaces/Entity/User.';
import { CodeSendEmailUserDTO } from '../../Interfaces/DTOs/CodeSendEmailUserDTO';
import { CreateUserDTO } from '../../Interfaces/DTOs/CreateUserDTO';

export interface ResultReturnCreate {
  data: CreateUserDTO,
  isSucess: boolean;
}

export interface ResultReturnSendCode {
  data: CodeSendEmailUserDTO,
  isSucess: boolean;
}

class UserService {
  private baseUrl: string;
  private http: AxiosInstance;

  constructor(){
    this.baseUrl = import.meta.env.VITE__APP_APP_BASE_URL;
    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async createUser(userData: User): Promise<ResultReturnCreate | null> {
    try {
      const response = await this.http.post<ResultReturnCreate>('/public/user/create', userData);
      return response.data;
    } catch {
      return null;
    }
  }

  async SendCode(userData: User): Promise<ResultReturnSendCode | null> {
    try {
      const response = await this.http.post<ResultReturnSendCode>('/public/user/send-code-email', userData);
      return response.data;
    } catch {
      return null;
    }
  }
}

const userService = new UserService();
export default userService;