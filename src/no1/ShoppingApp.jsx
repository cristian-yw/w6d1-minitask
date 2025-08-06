import React, { useState } from 'react';
import Product from './Product';
import CartSummary from './CartSummary';

function ShoppingApp() {
  const products = [
    { id: 1, name: 'Kaos Polos', price: 100000 },
    { id: 2, name: 'Celana Jeans', price: 250000 },
    { id: 3, name: 'Jaket Hoodie', price: 300000 }
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1); 
      setCart(newCart);
    }
  };

  return (
    <div className="p-6 bg-emerald-500 h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Shopping App</h1>
      <div className='flex flex-row justify-evenly items-center text-white'>
      <Product products={products} onAddToCart={handleAddToCart} />
      <CartSummary cart={cart} onRemove={handleRemoveFromCart} />
      </div>
    </div>
  );
}

export default ShoppingApp;