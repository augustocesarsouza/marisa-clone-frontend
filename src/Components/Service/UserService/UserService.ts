import axios, {  AxiosInstance } from 'axios';
import { User } from '../../Interfaces/Entity/User.';
import { CodeSendEmailUserDTO } from '../../Interfaces/DTOs/CodeSendEmailUserDTO';
import { CreateUserDTO } from '../../Interfaces/DTOs/CreateUserDTO';
import { AxiosError } from "axios";

export interface ResultReturnGeneric {
  data: ILoginData,
  isSucess: boolean;
}

interface ILoginData {
  passwordIsCorrect: boolean;
  userDTO: User
}

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

  async login(emailCpf: string, password: string): Promise<ResultReturnGeneric | null> {
    try {
      const response = await this.http.get<ResultReturnGeneric>(`/public/user/login/${emailCpf}/${password}`);
      
      return response.data;
    } catch(err) {
      const error = err as AxiosError;

      if(error.status === 400){
        const dataAxios = error.response?.data;
        const dataBack = dataAxios as ResultReturnGeneric;

        return dataBack;
      }
      
      return null;
    }
  }

  async createUser(userData: User): Promise<ResultReturnCreate | null> {
    try {
      const response = await this.http.post<ResultReturnCreate>('/public/user/create', userData);
      return response.data;
    } catch {
      return null;
    }
  }

  async sendCode(userData: User): Promise<ResultReturnSendCode | null> {
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