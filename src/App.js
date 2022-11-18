import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./PAGES/AllProducts";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./COMPONENTS/Navbar";
import SingleProduct from "./PAGES/SingleProduct";
import Cart from "./PAGES/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<AllProducts />} />
          <Route path="/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
