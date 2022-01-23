import React, { useState } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/Cart/Cart.css";
import Checkout from '../CheckoutForm/Checkout';

function Cart(props) {

    const [showForm, setShowForm] = useState(false)
    const [value, setValue] = useState("")

    const submitOrder = (e) => {
        e.preventDefault();
        console.log(value);
        const order = {
            name  : value.name,
            email : value.email
        }
    }
    const handleChange = (e) => {
        setValue( (prevState) => ({ ...prevState, [e.target.name] : e.target.value}) )
    }
  return(
      <div className='max-width mt-5 mb-3'>
          <h5>{props.cartItems.length === 0 ? 'Your cart is empty' : <span>
          There is {props.cartItems.length} products in your cart</span>}</h5>
          <div className='border border-bottom-0 p-3 pb-0'>
            {props.cartItems.map(item => (
                <Row key={item.id} className='border-bottom mb-2'>
                <Col md={2} xs={3}>
                    <img src={item.imageUrl} className='img-size' />
                </Col>
                <Col md={10} xs={9}>
                    <Row>
                        <Col md={9}>
                            <h4>{item.title}</h4>
                            <p>qty = {item.qty}</p>
                            <p>${(item.price * item.qty)}</p>
                        </Col>
                        <Col md={3}>
                            <Button onClick={()=> props.removeFromCart(item)} variant='outline-secondary' size="sm" className='margint-top btn-max-width float-end'>Remove Product</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            ))}
              
          </div>
          {
              props.cartItems.length !== 0 && (
                <div className='cart-total'>
                <h4>
                    Total: ${props.cartItems.reduce( (acc, p) => {
                    return acc + (p.price * p.qty)
                    } , 0)}
                </h4>
                <Button variant='primary' className='btn-max-width' onClick={() => setShowForm(true)}>Select Products</Button>
                 </div>
              )
          }
        <Checkout
        showForm={showForm}
       
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
        />

      </div>
    );
}


export default Cart