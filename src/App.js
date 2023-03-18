import "./main.css";

import Main from "./pages/Main";
import Auctions from "./pages/Auctions";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Vendors from "./pages/Vendors";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/auctions" element={<Auctions />}></Route>
          <Route path="/vendors" element={<Vendors />}></Route>
          {/*<Route path="*" element={<Error />}></Route>*/}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
