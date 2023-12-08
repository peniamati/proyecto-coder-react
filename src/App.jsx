import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import { CartProvider } from "./contexts/CartContext.jsx";
import { Cart } from "./components/Cart.jsx";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { Error404 } from './components/Error404';
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx';

// funcion principal
function App() {

  return (
  <div>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido a MC King" />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer />}
          />
          <Route path='/items/:id' element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<div>Checkout</div>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </div>
  )
}
export default App
