import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Routes, Route ,useLocation} from "react-router-dom";
import Products from './component/Products'
import ProductInfo from './component/ProductInfo'
import About from './component/About'
import Contact from './component/Contact'
import Login from './component/Login'
import Cart from './component/Cart'
import SignUp from './component/SignUp'
import Payment from './component/Payment'
import Success from './component/Success'

function App() {
  const location = useLocation();

  // Only show Navbar on routes other than "/payment"
  const showNavbar = location.pathname !== "/payment";
  const cartShow =location.pathname !="/success"
  return (
    <div>
      {(showNavbar && cartShow)  && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductInfo/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
