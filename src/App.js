import "./components/main.css";

import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/services/" element={<Services />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
