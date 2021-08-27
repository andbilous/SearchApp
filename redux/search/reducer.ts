import actionTypes, { Action } from './types';
import { Item } from '../../types';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
  players: [
    {
      id: 1,
      firstName: 'A',
      lastName: 'Goof',
      handicap: '+5',
      par: '2',
      birdie: '3',
      eagle: '14',
      hallinone: '6',
      booggey: '9',
      doubleboggey: '7',
      tripleboggey: '22',
      nearesttothepin: '2',
      longestdrive: '1',
    },
    {
      id: 2,
      firstName: 'B',
      lastName: 'Alt',
      handicap: '0',
      par: '2',
      birdie: '8',
      eagle: '12',
      hallinone: '2',
      booggey: '9',
      doubleboggey: '12',
      tripleboggey: '15',
      nearesttothepin: '5',
      longestdrive: '9',
    },
    {
      id: 3,
      firstName: 'C',
      lastName: 'Minsky',
      handicap: '20',
      par: '2',
      birdie: '8',
      eagle: '12',
      hallinone: '2',
      booggey: '9',
      doubleboggey: '12',
      tripleboggey: '15',
      nearesttothepin: '5',
      longestdrive: '9',
    },
    {
      id: 4,
      firstName: 'D',
      lastName: 'Minskyaaa',
      handicap: '4',
      par: '2',
      birdie: '8',
      eagle: '12',
      hallinone: '2',
      booggey: '9',
      doubleboggey: '12',
      tripleboggey: '15',
      nearesttothepin: '5',
      longestdrive: '9',
    },
  ],
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
    case actionTypes.ADD_PLAYER:
      return {
        ...state,
        players: [payload, ...state.players],
      };
    case actionTypes.EDIT_PLAYER:
      return {
        ...state,
        players: state.players.map((item: any) => {
          if (item.id === payload.id) {
            return payload;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
