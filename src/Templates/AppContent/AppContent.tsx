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
import MyAddressesMain from '../../Components/MyAccountComponents/MyAddressesComponents/MyAddressesMain/MyAddressesMain';
import AddNewAddress from '../../Components/MyAccountComponents/MyAddressesComponents/AddAddressAndEditComponents/AddNewAddress/AddNewAddress';
import ChangePassword from '../../Components/RegisterComponents/ChangePassword/ChangePassword';
import MyOrders from '../../Components/MyAccountComponents/MyOrdersComponents/MyOrders/MyOrders';
import VoucherExchangeMain from '../../Components/MyAccountComponents/VoucherExchangeComponents/VoucherExchangeMain/VoucherExchangeMain';
import MyDateLgpd from '../../Components/MyAccountComponents/MyDateLgpdComponents/MyDateLgpdMain/MyDateLgpd';
import MyConsentsMain from '../../Components/MyAccountComponents/MyDateLgpdComponents/MyConsentsMain/MyConsentsMain';
import ProductMain from '../../Components/ProductComponents/ProductMain/ProductMain';

const AppContent = () => {
  return (
    <Styled.ContainerMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/register" element={<RegisterMain />} />
        <Route path="/change-password" element={<ChangePassword />} />

        <Route path="/my-account" element={<MyAccountMain />}>
          <Route index element={<Navigate to="" />}></Route>
          <Route path="profile" element={<MyData />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="update-password" element={<UpdatePasswordMain />} />
          <Route path="update-email" element={<UpdateEmailMain />} />
          <Route path="address-book" element={<MyAddressesMain />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="voucher-exchange" element={<VoucherExchangeMain />} />
          <Route path="lgpd" element={<MyDateLgpd />} />
          <Route path="lgpd-consent" element={<MyConsentsMain />} />
          <Route path="add-address" element={<AddNewAddress />} />
          <Route path="edit-address" element={<AddNewAddress />} />

          {/* <Route path="voucher-wallet" element={<MyCupons />} /> */}
          {/* <Route path="coin" element={<MyCoinsShopee />} /> */}
        </Route>

        <Route path="/hotsite" element={<ProductMain />}>
          <Route index element={<Navigate to="" />}></Route>
          <Route path="festival-de-blusas" element={<ProductMain />} />
          <Route path="bolsas-e-acessorios" element={<ProductMain />} />
          <Route path="tricos-geral" element={<ProductMain />} />

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
