import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import MissingPage from "./pages/missingPage/MissingPage";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
