export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_SHOP_ITEMS':
      return { ...state, items: payload || [], isLoading: false };
    case 'SET_LOADING':
      return { ...state, isLoading: false };

    case 'TOGGLE_CART_VIEW':
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
        isCartBadgeVisible: !state.isCartBadgeVisible,
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => payload.id !== item.id),
      };

    case 'ADD_TO_CART': {
      const ind = state.cart.findIndex((v) => v.id === payload.id);

      if (ind < 0) {
        return {
          ...state,
          cart: [...state.cart, { ...payload, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((v) =>
            v.id === payload.id ? { ...v, quantity: v.quantity + 1 } : v,
          ),
        };
      }
    }

    case 'CHANGE_QUANTITY': {
      if (payload.dir === 'plus') {
        return {
          ...state,
          cart: state.cart.map((v) =>
            v.id === payload.id ? { ...v, quantity: v.quantity + 1 } : v,
          ),
        };
      } else if (payload.dir === 'minus') {
        return {
          ...state,
          cart: state.cart.map((v) =>
            v.id === payload.id ? { ...v, quantity: v.quantity > 1 ? v.quantity - 1 : 1 } : v,
          ),
        };
      }

      return state.cart;
    }

    default:
      return state;
  }
}
