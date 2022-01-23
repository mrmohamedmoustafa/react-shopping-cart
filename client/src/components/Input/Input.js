import React from 'react';

function Input(props) {
  return (
    <div>
    <label>{props.lable}</label>
    <input
     type={props.type}
     required
     name={props.name}
     onChange={props.onChange}/>
   </div>
  ) 
}


export default Input