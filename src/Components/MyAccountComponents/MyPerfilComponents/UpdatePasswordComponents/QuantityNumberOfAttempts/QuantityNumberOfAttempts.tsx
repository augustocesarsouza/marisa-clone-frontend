import * as Styled from './styled';

interface QuantityNumberOfAttemptsProps {
  numberOfAttempts: number;
}

const QuantityNumberOfAttempts = ({ numberOfAttempts }: QuantityNumberOfAttemptsProps) => {
  return (
    <Styled.ContainerNumberOfAttempts>
      {numberOfAttempts} de 3 tentativas para alterar senha
    </Styled.ContainerNumberOfAttempts>
  );
};

export default QuantityNumberOfAttempts;
