export interface ChangePasswordUserReturnDTO {
  passwordIsCorrect: boolean;
  passwordChangedSuccessfully: boolean;
  numberOfAttempts: number;
  timeRemaining?: number | null;
}