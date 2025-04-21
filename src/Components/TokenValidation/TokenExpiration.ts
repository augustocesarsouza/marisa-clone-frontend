import { jwtDecode } from 'jwt-decode';
import { PayloadToken } from '../Interfaces/Others/PayloadToken';

export const TokenExpiration = (token: string): boolean => {
  const payload = jwtDecode<PayloadToken>(token);
  const now = Date.now() / 1000;

  return payload.exp < now;
};
