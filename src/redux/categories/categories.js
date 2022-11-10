const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Under construction',
});

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHECK_STATUS:
      return payload;

    default:
      return state;
  }
};

export default categoriesReducer;
