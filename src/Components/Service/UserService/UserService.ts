import axios, { AxiosInstance } from 'axios';
import { User } from '../../Interfaces/Entity/User.';
import { CodeSendEmailUserDTO } from '../../Interfaces/DTOs/CodeSendEmailUserDTO';
import { CreateUserDTO } from '../../Interfaces/DTOs/CreateUserDTO';
import { AxiosError } from 'axios';
import { ChangePasswordUser } from '../../Interfaces/DTOs/ChangePasswordUser';
import { ChangePasswordUserReturnDTO } from '../../Interfaces/DTOs/ChangePasswordUserReturnDTO';
import { UserTokenSentEmail } from '../../Interfaces/DTOs/UserTokenSentEmail';

export interface ReturnGetUser {
  data: User;
  isSucess: boolean;
}

export interface ResultReturnGeneric {
  data: ILoginData;
  isSucess: boolean;
}

interface ILoginData {
  passwordIsCorrect: boolean;
  userDTO: User;
}

export interface ResultReturnCreate {
  data: CreateUserDTO;
  isSucess: boolean;
}

export interface ResultReturnSendCode {
  data: CodeSendEmailUserDTO;
  isSucess: boolean;
}

export interface ResultChangePasswordUser {
  data: ChangePasswordUserReturnDTO;
  isSucess: boolean;
}

export interface ResultUserTokenSentEmail {
  data: UserTokenSentEmail;
  isSucess: boolean;
}

export interface ReturnErroCatch {
  isSucess: boolean;
  message: string;
}

class UserService {
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

  async getByIdInfoUser(userId: string, token: string): Promise<ReturnGetUser | null> {
    try {
      const response = await this.http.get<ReturnGetUser>(`/user/get-by-id-info-user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          uid: userId,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);

      if (error.status === 400) {
        const dataAxios = error.response?.data;
        const dataBack = dataAxios as ReturnGetUser;

        return dataBack;
      }

      if (error.status === 403 || error.status === 401) {
        localStorage.removeItem('user');
        // nav('/login');
        window.location.href = '/login';
        return null;
      }

      return null;
    }
  }

  async getInfoToUpdateProfile(userId: string, token: string): Promise<ReturnGetUser | null> {
    try {
      const response = await this.http.get<ReturnGetUser>(
        `/user/get-info-to-update-profile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            uid: userId,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      if (error.status === 400) {
        const dataAxios = error.response?.data;
        const dataBack = dataAxios as ReturnGetUser;

        return dataBack;
      }

      if (error.status === 403 || error.status === 401) {
        localStorage.removeItem('user');
        // nav('/login');
        window.location.href = '/login';
        return null;
      }

      return null;
    }
  }

  async SendTokenChangePassword(email: string): Promise<ResultUserTokenSentEmail | null> {
    try {
      const response = await this.http.get<ResultUserTokenSentEmail>(
        `/public/user/send-token-change-password/${email}`
      );

      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);

      if (error.status === 400) {
        const dataAxios = error.response?.data;
        const dataBack = dataAxios as ResultUserTokenSentEmail;

        return dataBack;
      }

      if (error.status === 403 || error.status === 401) {
        localStorage.removeItem('user');
        // nav('/login');
        window.location.href = '/login';
        return null;
      }

      return null;
    }
  }

  async login(emailCpf: string, password: string): Promise<ResultReturnGeneric | null> {
    try {
      const response = await this.http.get<ResultReturnGeneric>(
        `/public/user/login/${emailCpf}/${password}`
      );

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      if (error.status === 400) {
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

  async updateUser(userData: User, token: string): Promise<ResultReturnCreate | null> {
    try {
      const response = await this.http.put<ResultReturnCreate>('/user/update-profile', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          uid: userData.id,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      if (error.status === 400) {
        // const dataAxios = error.response?.data;
        // const dataBack = dataAxios as ReturnGetUser;

        return null;
      }

      if (error.status === 403 || error.status === 401) {
        localStorage.removeItem('user');
        // nav('/login');
        window.location.href = '/login';
        return null;
      }

      return null;
    }
  }

  async updateChangePasswordUser(
    userData: ChangePasswordUser,
    token: string
  ): Promise<ResultChangePasswordUser | null> {
    try {
      const response = await this.http.put<ResultChangePasswordUser>(
        '/user/change-password',
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            uid: userData.userId,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      if (error.status === 400) {
        const dataAxios = error.response?.data;
        const dataBack = dataAxios as ResultChangePasswordUser;

        return dataBack;
      }

      if (error.status === 403 || error.status === 401) {
        localStorage.removeItem('user');
        // nav('/login');
        window.location.href = '/login';
        return null;
      }

      return null;
    }
  }

  async updateChangePasswordUserToken(userData: object): Promise<ReturnGetUser | null> {
    try {
      const response = await this.http.put<ReturnGetUser>(
        '/public/user/change-password-with-token',
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (err) {
      const error = err as AxiosError;

      if (error.status === 400) {
        const dataAxios = error.response?.data;
        const dataBack = dataAxios as ReturnGetUser;

        return dataBack;
      }

      if (error.status === 403 || error.status === 401) {
        localStorage.removeItem('user');
        // nav('/login');
        window.location.href = '/login';
        return null;
      }

      return null;
    }
  }

  async sendCode(userData: User): Promise<ResultReturnSendCode | null> {
    try {
      const response = await this.http.post<ResultReturnSendCode>(
        '/public/user/send-code-email',
        userData
      );
      return response.data;
    } catch {
      return null;
    }
  }
}

const userService = new UserService();
export default userService;
