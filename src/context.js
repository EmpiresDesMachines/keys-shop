import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = {
  items: [],
  cart: [],
  isLoading: true,
  isCartBadgeVisible: true,
  isCartOpen: false,
};

export const ShopContext = createContext();

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  value.removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  value.addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  value.toggleCartView = () => {
    dispatch({ type: 'TOGGLE_CART_VIEW' });
  };

  value.changeQuantity = (dir, id) => {
    dispatch({ type: 'CHANGE_QUANTITY', payload: { dir, id } });
  };

  value.setShopItems = (items) => {
    dispatch({ type: 'SET_SHOP_ITEMS', payload: items });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
