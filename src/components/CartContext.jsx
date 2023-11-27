import React, { createContext, useReducer, useContext, useState } from 'react';

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const isItemAlreadyInCart = state.items.some((item) => item.name === action.payload.name);

      if (!isItemAlreadyInCart) {
        return {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price,
        };
      }
      // Handle other cases as needed
    case 'REMOVE_FROM_CART':
      const updatedItems = state.items.filter((item) => item.name !== action.payload.name);
      return {
        ...state,
        items: updatedItems,
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};

const CartContext = createContext();
const AddedItemsContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [addedItems, setAddedItems] = useState([]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <AddedItemsContext.Provider value={{ addedItems, setAddedItems }}>
        {children}
      </AddedItemsContext.Provider>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const useAddedItems = () => {
  const context = useContext(AddedItemsContext);
  if (!context) {
    throw new Error('useAddedItems must be used within a CartProvider');
  }
  return context;
};
