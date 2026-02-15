const initialState = {
  cart: [],
  payment: {},
  address: {}
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        const newCart = [...state.cart];
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          count: newCart[existingItemIndex].count + 1
        };
        return { ...state, cart: newCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { count: 1, checked: true, product: action.payload }]
        };
      }

    
    case 'UPDATE_CART_ITEM_COUNT':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, count: action.payload.count }
            : item
        )
      };

    
    case 'TOGGLE_CART_ITEM_CHECK':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        )
      };

    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload)
      };

    
    case 'SET_CART':
      return { ...state, cart: action.payload };

    case 'SET_PAYMENT':
      return { ...state, payment: action.payload };

    case 'SET_ADDRESS':
      return { ...state, address: action.payload };

    default:
      return state;
  }
};