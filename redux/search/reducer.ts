import actionTypes from './types';

const initialState = {
  items: [],
  isLoading: false,
  error:''
};


export const searchReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case actionTypes.GET_SEARCH_RESULTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        items: payload
      };
    case actionTypes.GET_SEARCH_RESULTS_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
      case actionTypes.ADD_SEARCH_ITEM:
        return {
          ...state,
          items: [...state.items,payload]
        };
        case actionTypes.DELETE_SEARCH_ITEM:
          return {
            ...state,
            items: state.items.filter(item=>item.cacheId !== payload.cacheId)
          };
          case actionTypes.EDIT_SEARCH_ITEM:
            return {
              ...state,
              items: state.items.map(item=>{
                if(item.cacheId === payload.cacheId ){
                  return payload;
                }
                return item
              })
            };

    default:
      return state;
  }
};
