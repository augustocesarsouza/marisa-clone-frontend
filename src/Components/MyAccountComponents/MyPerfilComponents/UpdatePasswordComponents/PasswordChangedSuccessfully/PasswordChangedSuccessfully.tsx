import * as Styled from './styled';

interface PasswordChangedSuccessfullyProps {
  passwordChangedSuccessfully: boolean;
}

const PasswordChangedSuccessfully = ({
  passwordChangedSuccessfully,
}: PasswordChangedSuccessfullyProps) => {
  return (
    <>
      {passwordChangedSuccessfully && (
        <Styled.ContainerChangedSuccessfully>
          <Styled.H1>Senha alterada com sucesso</Styled.H1>
        </Styled.ContainerChangedSuccessfully>
      )}
    </>
  );
};

export default PasswordChangedSuccessfully;
