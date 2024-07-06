
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, addToCart, removeFromCart }) {
  return (
    <div id="product-list" className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
}

export default ProductList;


