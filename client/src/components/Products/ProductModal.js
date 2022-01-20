import React from 'react';
import Modal from 'react-modal';

function ProductModal(props) {
    const {product, closeModel} = props;
  return (
  <Modal isOpen={product} onRequestClose={closeModel}>
  <span onClick={closeModel} className='close'>&times;</span>
  <div className='product-info'>
      <div>
          <img src={product.imageUrl} alt={product.title} />
          <h3> {product.title} </h3>
          <h4>{product.discription}</h4>
          <h4>{product.price} $</h4>
      </div>
</div>
</Modal>
)}

export default ProductModal