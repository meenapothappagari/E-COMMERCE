

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './e_comerce.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import AutoCarousel from './components/AutoCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const openLoginForm = () => {
    setIsLoginFormOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginFormOpen(false);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCart = () => {
    setCartCount(cartCount > 0 ? cartCount - 1 : 0);
  };

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';
    if (category && category !== 'all') {
      url += `/category/${category}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [category]);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  return (
    <Router>
      <div>
        <Header cartCount={cartCount} openLoginForm={openLoginForm} setSearchTerm={setSearchTerm} />
        {isLoginFormOpen && <LoginForm onClose={closeLoginForm} />}
        <Navbar setCategory={setCategory} />
        <AutoCarousel />
        <Routes>
          <Route path="/" element={<ProductList products={filteredProducts} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;






