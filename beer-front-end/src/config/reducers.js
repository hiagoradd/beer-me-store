import { ACTION_TYPES } from './actions';

export const initialState = {
  user: {
    id: null,
    name: null
  },
  productsList: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_PRODUCTS_LIST:
      return {
        ...state,
        productsList: action.payload.data
      };

    default:
      return state;
  }
};

export default rootReducer;