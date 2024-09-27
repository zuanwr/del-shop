import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Produck from "./Pages/Produck";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Footer from "./Components/footer/Footer";
import mens from './Components/Assets/banner_mens.png'
import kids from './Components/Assets/banner_kids.png'
import women from './Components/Assets/banner_women.png'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Shop />} />
          <Route path = "/mens" element = {<ShopCategory banner = {mens} category = "mens" />} />
          <Route path = "/womens" element = {<ShopCategory banner = {women} category = "womens" />} />
          <Route path = "/kids" element = {<ShopCategory banner = {kids} category = "kids" />} />
          <Route path = "/product" element = {<Produck />} />
          <Route path = ":productId" element = {<Produck />} />
          <Route />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/cart" element = {<Cart />} /> 
         </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
