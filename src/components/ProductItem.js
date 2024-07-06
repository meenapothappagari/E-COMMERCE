
import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product, addToCart, removeFromCart }) {
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </Link>
      <button onClick={addToCart} className='btn1'> +</button>
      <button onClick={removeFromCart} className='btn2'> -</button>
    </div>
  );
}

export default ProductItem;
