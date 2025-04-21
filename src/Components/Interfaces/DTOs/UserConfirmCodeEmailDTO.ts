export interface UserConfirmCodeEmailDTO {
  code: string;
  userId: string;
  email: string;
  correctCode: boolean;
}
