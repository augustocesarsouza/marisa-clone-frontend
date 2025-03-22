import { Navigate, Route, Routes } from 'react-router-dom';
import * as Styled from './style';
import Home from '../Home/Home';
import LoginMain from '../../Components/LoginComponents/LoginMain/LoginMain';
import RegisterMain from '../../Components/RegisterComponents/RegisterMain/RegisterMain';
import MyAccountMain from '../../Components/MyAccountComponents/MyAccountMain/MyAccountMain';
import MyData from '../../Components/MyAccountComponents/MyPerfilComponents/MyDataComponents/MyData/MyData';
import UpdateProfile from '../../Components/MyAccountComponents/MyPerfilComponents/UpdateProfileComponents/UpdateProfile/UpdateProfile';
import UpdatePasswordMain from '../../Components/MyAccountComponents/MyPerfilComponents/UpdatePasswordComponents/UpdatePasswordMain/UpdatePasswordMain';
import UpdateEmailMain from '../../Components/MyAccountComponents/MyPerfilComponents/UpdateEmailComponents/UpdateEmailMain/UpdateEmailMain';

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
          <Route path="update-password" element={<UpdatePasswordMain />} />
          <Route path="update-email" element={<UpdateEmailMain />} />

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
