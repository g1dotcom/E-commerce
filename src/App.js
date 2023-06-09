import "./App.css";
import Footer from "./components/footer/Footer";

//pages
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hakkımızda from "./pages/Hakkımızda/Hakkımızda";
import Iletisim from "./pages/Iletisim/Iletisim";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/hakkımızda" element={<Hakkımızda />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
