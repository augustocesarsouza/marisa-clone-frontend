export interface User {
  id: string | null;
  name: string| null;
  email: string| null;
  birthDate: string| null; // isso pode ser do tipo "DATE"
  cpf: string| null;
  gender: string| null;
  cellPhone: string| null;
  telephone: string| null;
  passwordHash: string| null;
  salt: string| null;
  userImage: string| null;
  token: string| null;
  tokenForCreation: number| null;
  password: string| null;
  birthDateString: string| null;
}