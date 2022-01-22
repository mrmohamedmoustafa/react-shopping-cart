import React from 'react';
import { Card, Form } from 'react-bootstrap'
import { Static } from  "../../Static"
import "../../css/Filter/Filter.css";

function Filter(props) {
  return(
   <Card className='mt-2'>
      <Card.Header className='header'>
      {Static.filter}
      </Card.Header>
      <Card.Title className='mt-3 m-2'>Number of Products {props.productsNomber}</Card.Title>
      <Card.Body>
          <Form>
              <Form.Group className='mb-3'>
                <Form.Label>{Static.productSize}</Form.Label>
                <Form.Select value={props.size} onChange={props.handleFilterBySize}>
                    <option value={Static.chooseProduct}>{Static.chooseProduct}</option>
                    <option value="XL">XL</option>
                    <option value="LG">LG</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>{Static.orderPrice}</Form.Label>
                <Form.Select value={props.sort} onChange={props.handleFilterByPrice}>
                    <option value={Static.chooseProduct}>{Static.chooseProduct}</option>
                    <option value="latest">latest</option>
                    <option value="lowest">lowest price</option>
                    <option value="hieghest">hieghest price</option>
                </Form.Select>
              </Form.Group>
          </Form>
      </Card.Body>
  </Card>
  )}


export default Filter