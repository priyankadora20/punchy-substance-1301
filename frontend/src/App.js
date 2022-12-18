import './App.css';
import Navbar from "./components/navbar/Navbar"
import {AllRoutes} from "./routes/allroutes"
import Footer from "./components/footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
