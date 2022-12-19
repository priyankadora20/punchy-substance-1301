import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/landing";
import { AllProduct } from "../pages/allproduct";
import { SingleProduct } from "../components/singleproduct";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

import CartPage from "../components/Cart/cart";
import PaymentPage from "../components/Payment&Otp/PaymentPage";
import Bank from "../components/Payment&Otp/Blank";
import End from "../components/End";
import OrderSummaryPage from "../components/Cart/OrderSummeryPage";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "../components/PrivateRoute";
import LoginPrivateRoute from "../components/LoginPrivateRoute";
import {NotFound} from "../components/notfound"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/product" element={<AllProduct />} />
      <Route path="/product/:productID" element={<SingleProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/cart"
        element={
          <LoginPrivateRoute>
            <CartPage />
          </LoginPrivateRoute>
        }
      />
      <Route
        path="/order"
        element={
          <LoginPrivateRoute>
            <OrderSummaryPage />
          </LoginPrivateRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <LoginPrivateRoute>
            <PaymentPage />
          </LoginPrivateRoute>
        }
      />
      <Route
        path="/bank"
        element={
          <LoginPrivateRoute>
            <Bank />
          </LoginPrivateRoute>
        }
      />
      <Route path="/end" element={<End />} />
      <Route
        path="/addproduct"
        element={
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};
