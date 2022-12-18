import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/landing";
import { AllProduct } from "../pages/allproduct";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import CartPage from "../components/Cart/cart";
import PaymentPage from "../components/Payment&Otp/PaymentPage";
import Bank from "../components/Payment&Otp/Blank";
import End from "../components/End";
import OrderSummaryPage from "../components/Cart/OrderSummeryPage";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "../components/PrivateRoute";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/product" element={<AllProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderSummaryPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/end" element={<End />} />
      <Route
        path="/addproduct"
        element={
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
