
import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/landing";
import { AllProduct } from "../pages/allproduct";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { SingleProduct } from "../components/singleproduct";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/product" element={<AllProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="product/:productID" element={<SingleProduct/>}/>
    </Routes>
  );
};

