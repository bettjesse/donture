import React from 'react'
import Hero from './Hero'
import Header from './Header';


import Products from "./Products";
import CustomerSupport from "./CustomerSupport";
import Gps from "./Gps";
import TwoImages from "./TwoImages";
import QuoteForm from "./QuoteForm";
import TopProducts from "./TopProducts";
import Footer from "./Footer";

import { productData} from "../productData"

const Home = () => {
  return (
    <div>


      <Hero />
      <Products products={productData} />
      <CustomerSupport/>
      <Gps/>
      <TwoImages/>
      
      <TopProducts/>
      <QuoteForm/>
     
    </div>
  )
}

export default Home