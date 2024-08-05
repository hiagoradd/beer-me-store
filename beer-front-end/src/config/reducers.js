export const initialState = {
  user: {
    id: 0,
    name: ''
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;