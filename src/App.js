import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./Utils/ProtectedRoute";
import NavBar from "./components/NavBar";
import Login from "./pages/User/Login/Login";
import SignUp from "./pages/User/Login/SignUp";
import CoverPage from "./pages/Layout/CoverPage";
import ProductInfo from "./pages/Layout/ProductInfo";
import Artists from "./pages/Layout/Artists";
import FooterContainer from "./components/Containers/FooterContainer";
import UpdateProductInfo from "./pages/Admin/UpdateData/UpdateProductInfo";
import CreateProduct from "./pages/Admin/CreateProduct/CreateProduct";
import Cart from "./pages/User/Cart/Cart";
import ShippingInfo from "./pages/User/Cart/ShippingInfo";
import MyOrders from "./pages/User/Profile/MyOrders";
import UserProfile from "./pages/User/Profile/Profile";
import AdminDashBoard from "./pages/Admin/DashBoard/DashBoard";
import AllProducts from "./pages/Admin/DashBoard/AllProducts";
import AllUsers from "./pages/Admin/DashBoard/AllUsers";
import AllOrders from "./pages/Admin/DashBoard/AllOrders";
import Loading from "./components/Loading";
import UpdateUser from "./pages/Admin/UpdateData/UpdateUser";
import ProcessOrder from "./pages/Admin/UpdateData/ProcessOrder";
import Drawings from "./pages/Layout/Drawings";
import Paintings from "./pages/Layout/Paintings";
import Sculptures from "./pages/Layout/Sculptures";
import OrderConfirm from "./pages/User/Cart/OrderConfirm";
import Payment from "./pages/User/Cart/OrderPayment";
import OrderSuccess from "./pages/User/Cart/OrderSuccess";
import AboutUs from "./pages/Layout/FooterPages/AboutUs";
import PrivacyPolicies from "./pages/Layout/FooterPages/PrivacyPolicies";
import Disclaimer from "./pages/Layout/FooterPages/Disclamer";
import Help from "./pages/Layout/FooterPages/Help";
import ContactUs from "./pages/Layout/FooterPages/ContactUs";
import NotFound from "./pages/Layout/NotFound";
import { loadUser } from "./Actions/userActions";
import OrderDetails from "./pages/User/Profile/OrderDetails";
import ResetPassword from "./pages/User/Login/PasswordReset";
import ForgotPassword from "./pages/User/Login/ForgetPassword";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        <Route path="/drawings" element={<Drawings />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/sculptures" element={<Sculptures />} />

        <Route path="/artists" element={<Artists />} />
        <Route path="/productinfo/:productId" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderdetails/:id" element={<OrderDetails />} />

        <Route path="/loading" element={<Loading />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacypolicies" element={<PrivacyPolicies />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <UpdateProductInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/newproduct"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orderconfirm"
          element={
            <ProtectedRoute>
              <OrderConfirm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ordersuccess"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orderpayment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shippinginfo"
          element={
            <ProtectedRoute>
              <ShippingInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myorders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myprofile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAdmin={true}>
              <AdminDashBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/allusers"
          element={
            <ProtectedRoute isAdmin={true}>
              <AllUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/allusers/updateuser/:id"
          element={
            <ProtectedRoute isAdmin={true}>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/allorders/updateorder/:id"
          element={
            <ProtectedRoute isAdmin={true}>
              <ProcessOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/allproducts"
          element={
            <ProtectedRoute isAdmin={true}>
              <AllProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/allorders"
          element={
            <ProtectedRoute isAdmin={true}>
              <AllOrders />
            </ProtectedRoute>
          }
        />
      </Routes>

      <FooterContainer />
    </Router>
  );
};
export default App;
