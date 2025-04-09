import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

interface PayloadToken {
  Email: string;
  userID: string;
  exp: number;
}

const ChangePassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    // console.log('Token recebido na URL:', token);
    const tokenHere =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImF1Z3VzdG9jZXNhcnNhbnRhbmE5MEBnbWFpbC5jb20iLCJ1c2VySUQiOiJjNzJlMzk4Zi0yYzM5LTQ1NGMtOGNkNi0zNDA2MThjNDNlOWUiLCJleHAiOjE3NDQxMjcyNjZ9.WMthGHBL4-T5Ec0Z2oBxpR-SzQxcfvw5p5y4T-dStp4';

    const payload = jwtDecode<PayloadToken>(tokenHere);

    // console.log(payload.Email);
    // console.log(payload.exp);

    const now = Date.now() / 1000;
    if (payload.exp < now) {
      // se estiver expirado - avisa usuario que expirou e redireciona ele para login e fala que ele tem que confirmar no email dnv
      console.log('Token expirado');
    } else {
      console.log('Token nao expirado');
    }
  }, [token]);

  return (
    <div>
      <h1>change password</h1>
    </div>
  );
};

export default ChangePassword;
