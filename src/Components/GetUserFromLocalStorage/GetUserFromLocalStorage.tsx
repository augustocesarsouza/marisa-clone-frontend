import CryptoJS from 'crypto-js';
import { IResultGetUserFromLocalStorage } from './IResultGetUserFromLocalStorage';

export const GetUserFromLocalStorage = (): IResultGetUserFromLocalStorage => {
  const userLocalStorage = localStorage.getItem('user');

  const ResultGetUserFromLocalStorage: IResultGetUserFromLocalStorage = {
    isNullUserLocalStorage: false,
    user: null,
  };

  if (userLocalStorage) {
    const secretKey = import.meta.env.VITE__APP_SECRET_KEY_USER;

    if (secretKey === undefined) {
      return ResultGetUserFromLocalStorage;
    }

    try {
      const bytes = CryptoJS.AES.decrypt(userLocalStorage, secretKey);
      const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

      const decryptedData = JSON.parse(decryptedString);
      ResultGetUserFromLocalStorage.user = decryptedData;

      return ResultGetUserFromLocalStorage;
    } catch (error) {
      console.error('Erro ao converter os dados descriptografados:', error);
      return ResultGetUserFromLocalStorage;
    }
  } else {
    ResultGetUserFromLocalStorage.isNullUserLocalStorage = true;
    return ResultGetUserFromLocalStorage;
  }
};
