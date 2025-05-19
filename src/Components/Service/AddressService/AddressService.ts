import axios, { AxiosError, AxiosInstance } from 'axios';
import { Address } from '../../Interfaces/Entity/Address';
import { UserConfirmCodeEmailDTO } from '../../Interfaces/DTOs/UserConfirmCodeEmailDTO';
import { User } from '../../Interfaces/Entity/User.';

export interface ReturnGetAddress {
  data: Address;
  isSucess: boolean;
}

export interface ReturnGetAddressList {
  data: Address[];
  isSucess: boolean;
}

export interface ReturnSendCodeEmail {
  data: AddressConfirmCodeEmail;
  isSucess: boolean;
}

export interface AddressConfirmCodeEmail {
  codeIsCorrect: boolean;
  numberOfAttempts: number;
  timeRemaining: string;
}

export interface ReturnSendCodeEmailTwo {
  data: SendCodeEmailTwo;
  isSucess: boolean;
}

export interface SendCodeEmailTwo {
  code: string;
  codeSendToEmailSuccessfully: boolean;
  userAlreadyExist: boolean;
}

export interface ReturnErroCatch {
  isSucess: boolean;
  message: string;
}

class AddressService {
  private baseUrl: string;
  private http: AxiosInstance;

  constructor() {
    this.baseUrl = import.meta.env.VITE__APP_APP_BASE_URL;
    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getAllAddressUser(user: User): Promise<ReturnGetAddressList | ReturnErroCatch> {
    try {
      const response = await this.http.get<ReturnGetAddressList>(
        `/address/get-all-addresses-by-user-id/${user.id}`,
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

  async createUser(
    addressData: Address,
    token: string
  ): Promise<ReturnGetAddress | ReturnErroCatch> {
    try {
      const response = await this.http.post<ReturnGetAddress>('/address/create', addressData, {
        headers: {
          Authorization: `Bearer ${token}`,
          uid: addressData.userId,
          'Content-Type': 'application/json',
        },
      });
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

  async verifyCodeSendToEmail(
    userConfirmCodeEmailDTO: UserConfirmCodeEmailDTO,
    token: string
  ): Promise<ReturnSendCodeEmail | ReturnErroCatch> {
    try {
      const response = await this.http.post<ReturnSendCodeEmail>(
        '/address/verify-code-send-to-email',
        userConfirmCodeEmailDTO,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            uid: userConfirmCodeEmailDTO.userId,
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

  async sendCodeEmail(
    userDTO: User,
    token: string
  ): Promise<ReturnSendCodeEmailTwo | ReturnErroCatch> {
    try {
      const response = await this.http.post<ReturnSendCodeEmailTwo>(
        '/address/send-code-email',
        userDTO,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            uid: userDTO.id,
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

  async updateUserAddress(
    addressData: Address,
    token: string
  ): Promise<ReturnGetAddress | ReturnErroCatch> {
    try {
      const response = await this.http.put<ReturnGetAddress>('/address/update', addressData, {
        headers: {
          Authorization: `Bearer ${token}`,
          uid: addressData.userId,
          'Content-Type': 'application/json',
        },
      });
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

  async updateAddressPrimary(
    addressData: Address,
    user: User
  ): Promise<ReturnGetAddress | ReturnErroCatch> {
    try {
      const response = await this.http.put<ReturnGetAddress>(
        '/address/update-set-up-as-primary-address',
        addressData,
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

  async deleteAddress(addressId: string, user: User): Promise<ReturnGetAddress | ReturnErroCatch> {
    try {
      const response = await this.http.delete<ReturnGetAddress>(`/address/delete/${addressId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          uid: user.id,
          'Content-Type': 'application/json',
        },
      });
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

const addressService = new AddressService();
export default addressService;
