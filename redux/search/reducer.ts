import actionTypes, { Action } from './types';
import { Item } from '../../types';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

export const searchReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case actionTypes.GET_SEARCH_RESULTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case actionTypes.GET_SEARCH_RESULTS_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case actionTypes.ADD_SEARCH_ITEM:
      return {
        ...state,
        items: [payload, ...state.items],
      };
    case actionTypes.DELETE_SEARCH_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item: Item) => item.cacheId !== payload.cacheId
        ),
      };
    case actionTypes.EDIT_SEARCH_ITEM:
      return {
        ...state,
        items: state.items.map((item: Item) => {
          if (item.cacheId === payload.cacheId) {
            return payload;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
