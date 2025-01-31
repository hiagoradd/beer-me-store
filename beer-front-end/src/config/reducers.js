import { ACTION_TYPES } from './actions';

export const initialState = {
  user: {
    id: 1,
    name: 'Michael',
    style: 'Mr'
  },
  detailedPricing: {
    stock: null,
    price: null
  },
  productsList: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_PRODUCTS_LIST:
      return {
        ...state,
        productsList: action.payload.data
      };

    case ACTION_TYPES.SET_DETAILED_PRICING:
      return {
        ...state,
        detailedPricing: action.payload.data
      };

    default:
      return state;
  }
};

export default rootReducer;