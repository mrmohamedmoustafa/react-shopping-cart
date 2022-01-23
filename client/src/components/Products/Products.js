import { Row, Col, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import "../../css/Products/Products.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductModal from './ProductModal';



function Products(props) {
  
    const [product, setProduct] = useState("");

    const openModal = (product) => {
        setProduct(product)
    }

    const closeModel = () => {
        setProduct(false)
    }
    return (
        <div>
           <Row className='mt-2'>
                <Col >
                <Row>
                  {props.products.map(product => (
                      
                           <Col key={product.id} className='border rounded m-2 max-width-colm'>
                          <a href="#" onClick={() => openModal(product)}>
                          <img src={product.imageUrl} alt={product.title} />
                          </a>
                          <Row>
                              <Col xs={8}>
                                  {product.discription}
                              </Col>
                              <Col xs={4}>
                                  {product.price} $
                              </Col>
                          </Row>
                          <Button variant = "primary" className='mt-2 mb-2' onClick={() => props.addToCart(product)}>Add to cart</Button>
                      </Col>
                     
                     
                  ))}

                  <ProductModal product={product} closeModel={closeModel} />
                     
                  
                  </Row>
                </Col>
               
            </Row>
        </div>
    )
}

export default Products