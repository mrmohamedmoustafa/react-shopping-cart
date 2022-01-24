import React from 'react';
import "../../css/CheckoutForm/Checkout.css";
import Input from '../Input/Input';
import Zoom from 'react-reveal/Zoom'

function Checkout(props){
  return (
  <>
          {
           props.showForm &&  <div className='checkout-form'>
           <span className='close-icon' onClick={() => props.setShowForm(false)}>&times;</span>
           <Zoom top>
              <form onSubmit={props.submitOrder}>
              <Input
                  lable="name"
                  type="text"
                  onChange={props.handleChange}
                  name="name"
                  />
                  <Input
                  lable="email"
                  type="email"
                  onChange={props.handleChange}
                  name="email"
                  />
                  <div>
                      <button type='submit'>Checkout</button>
                  </div>
              </form>
           </Zoom>
       </div>
       }
  </>
  )
}
  
  export default Checkout
