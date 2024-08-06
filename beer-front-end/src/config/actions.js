export const ACTION_TYPES = {
  FETCH_PRODUCTS_LIST: 'FETCH_PRODUCTS_LIST',
  SET_PRODUCTS_LIST: 'SET_PRODUCTS_LIST',
  GET_UPDATED_SKU: 'GET_UPDATED_SKU',
  SET_DETAILED_PRICING: 'SET_DETAILED_PRICING'
};

export const fetchProductsList = () => ({
  type: ACTION_TYPES.FETCH_PRODUCTS_LIST
});

export const getUpdatedSku = (code) => ({
  type: ACTION_TYPES.GET_UPDATED_SKU,
  payload: { code }
});
