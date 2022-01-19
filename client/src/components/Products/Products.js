import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import "../../css/Products/Products.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Modal  from 'react-modal';


function Products(props) {
  
    const [product, setProduct] = useState("");

    const openModal = (product) => {
        setProduct(product)
    }

    const closeModel = () => {
        setProduct(false)
    }
    return (
        <Container fluid>
            <Row className='mt-2'>
                <Col md={{ order: 'first'}}>
                <Row>
                  {props.products.map(product => (
                      
                           <Col key={product.id} className='border rounded m-2'>
                          <a href="#" onClick={() => openModal(product)}>
                          <img src={product.imageUrl} alt={product.title} />
                          </a>
                          <Row>
                              <Col xs={8}>
                                  {product.discription}
                              </Col>
                              <Col xs={4}>
                                  {product.price}
                              </Col>
                          </Row>
                          <Button variant = "primary" className='mt-2 mb-2'>Add to cart</Button>
                      </Col>
                     
                     
                  ))}

                  
                      <Modal isOpen={product} onRequestClose={closeModel}>
                        <span onClick={closeModel}>&times;</span>
                      <div>
                      <img src={product.imageUrl} alt={product.title} />
                      <h3> {product.title} </h3>
                      <h4>{product.discription}</h4>
                      <h4>{product.price}</h4>
                      </div>
                      </Modal>
                  
                  </Row>
                </Col>
                <Col md= {3} xs= {{ order:'first' }}>
                    filter
                </Col>
            </Row>
        </Container>
    )
}

export default Products