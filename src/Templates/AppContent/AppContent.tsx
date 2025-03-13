import { Route, Routes } from 'react-router-dom';
import * as Styled from './style';
import Home from '../Home/Home';
import LoginMain from '../../Components/LoginComponents/LoginMain/LoginMain';
import RegisterMain from '../../Components/RegisterComponents/RegisterMain/RegisterMain';

const AppContent = () => {
  return (
    <Styled.ContainerMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/register" element={<RegisterMain />} />

        {/* <Route path="/verify" element={<VerifyPassword />} />
        <Route path="/verify/password" element={<VerifyPasswordStep2 />} /> */}

        {/* <Route path="/user" element={<AccountSetting />}>
          <Route index element={<Navigate to="purchase" />}></Route>
          <Route path="purchase" element={<Purchase />} />
          <Route path="voucher-wallet" element={<MyCupons />} />
          <Route path="coin" element={<MyCoinsShopee />} />
        </Route> */}
      </Routes>
    </Styled.ContainerMain>
  );
};

export default AppContent;
