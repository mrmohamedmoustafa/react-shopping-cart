import { Container, Row, Col, Button } from 'react-bootstrap';
//import { Static } from "../../Static";
import React from 'react';
import "../../css/Products/Products.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Products(props) {
  
    return (
        <Container fluid>
            <Row className='mt-2'>
                <Col md={{ order: 'first'}}>
                <Row>
                  {props.products.map(product => (
                      
                           <Col key={product.id} className='border rounded m-2'>
                          <img src={product.imageUrl} alt={product.title} />
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