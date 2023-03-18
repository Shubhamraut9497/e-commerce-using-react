import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Products from './component/Products'
import ProductInfo from './component/ProductInfo'
import About from './component/About'
import Contact from './component/Contact'
import Login from './component/Login'
import Cart from './component/Cart'
import SignUp from './component/SignUp'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductInfo/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
