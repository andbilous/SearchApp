import actionTypes from './types';

const initialState = {
  isModalOpened: false,
};

export const navigationReducer = (state = initialState, { type }) => {
  switch (type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpened: true,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpened: false,
      };
    default:
      return state;
  }
};
