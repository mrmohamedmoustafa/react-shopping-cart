import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data  from './data.json';
import { Static } from  "./Static"
import Products from "./components/Products/Products";
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';

function App() {
const [products, setProducts] = useState(data)
const [size, setSize] = useState("");
const [sort, setSort] = useState("");
const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

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
  let productsClone = [...products];
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

const addToCart = (product) => {
  const cartItemClone = [...cartItems];
  let isProductExist = false;
  cartItemClone.forEach(p => {
    if(p.id == product.id) {
      p.qty++;
      isProductExist = true;
    }
  })
  if(!isProductExist) {
    cartItemClone.push({...product, qty : 1})
  }
  setCartItems(cartItemClone);
}

useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}, [cartItems])

const removeFromCart = (product) => {
  const cartItemClone = [...cartItems];
  setCartItems(cartItemClone.filter(p => p.id !== product.id))
}
  return (
    <div className="layout">
      
    <Header />
    <Container fluid>
      <Row>
        <Col md={{ order: 'first'}}>
      <Products products={products} addToCart={addToCart}/>
      </Col>
      <Col md= {3} xs= {{ order:'first' }}>
      <Filter
      productsNomber = {products.length}
      size={size}
      sort={sort}
      handleFilterBySize={handleFilterBySize}
      handleFilterByPrice={handleFilterByPrice}
          />
      </Col>
      </Row>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </Container>
     <Footer />
    
    </div>
  );
}

export default App;
