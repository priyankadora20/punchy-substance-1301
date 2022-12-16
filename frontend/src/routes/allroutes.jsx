import { Route, Routes } from "react-router-dom"
import {Landing} from "../pages/landing" 
import {AllProduct} from "../pages/allproduct"
import { SingleProduct } from "../components/singleproduct"


export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path='/landing' element={<Landing/>}/>
            <Route path='/product' element={<AllProduct/>}/>
            <Route path='/product/:productID' element={<SingleProduct/>}/>
        </Routes>
    )
}