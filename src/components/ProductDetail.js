
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p className='price'>Retail Price: ${product.price}</p>
            <p>Discounted Price: ${(product.price * 0.9).toFixed(2)}</p>
            <p>Brand: {product.category}</p> {/* Assuming the category is the brand */}
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <p>Description: {product.description}</p>
        </div>
    );
}

export default ProductDetail;


