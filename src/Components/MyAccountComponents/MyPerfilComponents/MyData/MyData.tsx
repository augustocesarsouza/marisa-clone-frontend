import { useContext, useEffect } from 'react';
import * as Styled from './styled';
import { ContextMyAccount } from '../../Contexts/ContextMyAccount';

const MyData = () => {
  const context = useContext(ContextMyAccount);

  useEffect(() => {
    if (context === null) return;
    const user = context.user;

    if (user) {
      // console.log(user);
    }
  }, [context]);

  return (
    <Styled.ContainerMain>
      <Styled.H1>MyData</Styled.H1>
    </Styled.ContainerMain>
  );
};

export default MyData;
