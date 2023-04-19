import "./App.css";
import Footer from "./components/footer/Footer";

//pages
import Home from "./pages/Home/Home";
import Detail from "./pages/Details/Detail";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
