import { APIService } from '../../services/apiService';
import actionTypes from './types';
import { Item } from '../../types';
import { Dispatch } from 'redux';

export const addPlayer = (item: Item) => ({
  type: actionTypes.ADD_PLAYER,
  payload: item,
});

export const editPlayer = (newItem: Item) => ({
  type: actionTypes.EDIT_SEARCH_ITEM,
  payload: newItem,
});

export const addSearchItemAction = (item: Item) => ({
  type: actionTypes.ADD_SEARCH_ITEM,
  payload: item,
});

export const deleteSearchItemAction = (id: string) => ({
  type: actionTypes.DELETE_SEARCH_ITEM,
  payload: id,
});

export const editSearchItemAction = (newItem: Item) => ({
  type: actionTypes.EDIT_SEARCH_ITEM,
  payload: newItem,
});

const getSearchResultsRequest = () => ({
  type: actionTypes.GET_SEARCH_RESULTS_REQUEST,
});

const getSearchResultsSuccess = (result: Item) => ({
  type: actionTypes.GET_SEARCH_RESULTS_SUCCESS,
  payload: result,
});

const getSearchResultsFailure = (err: string) => ({
  type: actionTypes.GET_SEARCH_RESULTS_FAILURE,
  payload: err,
});

export const getSearchResults = (query: string) => (dispatch: Dispatch) => {
  dispatch(getSearchResultsRequest());
  APIService.search(query)
    .then((response) => {
      dispatch(getSearchResultsSuccess(response.items));
    })
    .catch((err) => {
      dispatch(getSearchResultsFailure(err));
    });
};
