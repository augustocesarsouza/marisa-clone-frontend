import { Navigate, Route, Routes } from 'react-router-dom';
import * as Styled from './style';
import Home from '../Home/Home';
import LoginMain from '../../Components/LoginComponents/LoginMain/LoginMain';
import RegisterMain from '../../Components/RegisterComponents/RegisterMain/RegisterMain';
import MyAccountMain from '../../Components/MyAccountComponents/MyAccountMain/MyAccountMain';
import MyData from '../../Components/MyAccountComponents/MyPerfilComponents/MyData/MyData';
import UpdateProfile from '../../Components/MyAccountComponents/MyPerfilComponents/UpdateProfile/UpdateProfile';

const AppContent = () => {
  return (
    <Styled.ContainerMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/register" element={<RegisterMain />} />

        <Route path="/my-account" element={<MyAccountMain />}>
          <Route index element={<Navigate to="" />}></Route>
          <Route path="profile" element={<MyData />} />
          <Route path="update-profile" element={<UpdateProfile />} />

          {/* <Route path="voucher-wallet" element={<MyCupons />} /> */}
          {/* <Route path="coin" element={<MyCoinsShopee />} /> */}
        </Route>

        {/* <Route path="/verify" element={<VerifyPassword />} />
        <Route path="/verify/password" element={<VerifyPasswordStep2 />} /> */}
      </Routes>
    </Styled.ContainerMain>
  );
};

export default AppContent;
