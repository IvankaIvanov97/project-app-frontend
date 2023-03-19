import "./main.css";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import Auctions from "./pages/Auctions";
import Vendors from "./pages/Vendors";
import Vendor from "./pages/Vendor";
import Error from "./pages/Error";
import ProductCard from "./pages/ProductCard";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/auctions" element={<Auctions />}></Route>
          <Route path="/vendors" element={<Vendors />}></Route>
          <Route path="/vendor/:id" element={<Vendor />}></Route>
          <Route path="/lot/:id" element={<ProductCard />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
