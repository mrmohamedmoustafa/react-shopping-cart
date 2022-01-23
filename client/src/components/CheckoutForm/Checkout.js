import React from 'react';
import "../../css/CheckoutForm/Checkout.css";
import Input from '../Input/Input';
function Checkout(props){
  return (
  <>
          {
           props.showForm &&  <div className='checkout-form'>
           <span className='close-icon' onClick={() => props.setShowForm(false)}>&times;</span>
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
       </div>
       }
  </>
  )
}
  
  export default Checkout
