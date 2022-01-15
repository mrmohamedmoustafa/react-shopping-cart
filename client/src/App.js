import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data  from './data.json';
import Products from "./components/Products/Products";

function App() {
const [products, setproducts] = useState(data)
  return (
    <div className="layout">
    <Header />
    <Products products={products}/>
     <Footer />
    </div>
  );
}

export default App;
