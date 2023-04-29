import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllProducts from "./components/AllProducts";


const App = () => {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />}  />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
