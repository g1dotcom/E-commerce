import "./App.css";
import Footer from "./components/footer/Footer";

//pages
import Home from "./pages/Home/Home";
import Detail from "./pages/Details/Detail";
import Cart from "./pages/Cart/Cart";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
