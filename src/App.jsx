import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import CustomerSupport from "./components/CustomerSupport";
import Gps from "./components/Gps";
import TwoImages from "./components/TwoImages";
import QuoteForm from "./components/QuoteForm";
import TopProducts from "./components/TopProducts";
import Footer from "./components/Footer";
import { productData } from "./productData";

const App = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Products products={productData} />
      <CustomerSupport/>
      <Gps/>
      <TwoImages/>
      <QuoteForm/>
      <TopProducts/>
      <Footer/>
    </div>
  );
};

export default App;
