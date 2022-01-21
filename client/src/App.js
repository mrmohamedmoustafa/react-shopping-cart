import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data  from './data.json';
import { Static } from  "./Static"
import Products from "./components/Products/Products";
import Filter from './components/Filter/Filter';

function App() {
const [products, setProducts] = useState(data)
const [size, setSize] = useState("");
const [sort, setSort] = useState("");

const handleFilterBySize = (e) => {
  setSize(e.target.value);
  if(e.target.value == [Static.chooseProduct]){
    setProducts(data);
  } else {
    let productsClone = (data);
    let newProducts = productsClone.filter(p => p.size.indexOf(e.target.value) != -1);
    setProducts(newProducts);

  }
}
const handleFilterByPrice = (e) => {
  let order = e.target.value;
  setSort(order);
  let productsClone = (data);
  let newProducts = productsClone.sort( function(a, b) {
    if(order == "lowest"){
     return a.price - b.price
    } else if(order == "hieghest") {
      return b.price - a.price
    } else if(order == "latest"){
      return a.id < b.id ? 1 : -1
    } else {
     return a.id > b.id ? 1 : -1
    }
  })
  setProducts(newProducts);
}
  return (
    <div className="layout">
      
    <Header />
    <Container fluid>
      <Row>
        <Col md={{ order: 'first'}}>
      <Products products={products}/>
      </Col>
      <Col md= {3} xs= {{ order:'first' }}>
      <Filter handleFilterBySize={handleFilterBySize} size={size} handleFilterByPrice={handleFilterByPrice} sort={sort}/>
      </Col>
      </Row>
      </Container>
     <Footer />
    
    </div>
  );
}

export default App;
