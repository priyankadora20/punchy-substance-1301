import './App.css';
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import {Landing} from "./pages/landing"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
