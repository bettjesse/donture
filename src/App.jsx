import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { allProductsInfoData } from "./allProductsInfoData";
import AllProducts from "./components/allproducts/AllProducts";


const App = () => {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts  />}  />
          <Route path="/services" element={<Services  />}  />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
