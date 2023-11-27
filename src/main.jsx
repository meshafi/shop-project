import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from './App.jsx'
import './index.css'
import { CartProvider } from './components/CartContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
  <MainApp />
</CartProvider>
)
