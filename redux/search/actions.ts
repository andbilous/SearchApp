import actionTypes from './types';
import { APIService } from '../../services/apiService';

export const addSearchItemAction = (item) => ({
  type: actionTypes.ADD_SEARCH_ITEM,
  payload: item,
});

export const deleteSearchItemAction = (id) => ({
  type: actionTypes.DELETE_SEARCH_ITEM,
  payload: id,
});

export const editSearchItemAction = (newItem) => ({
  type: actionTypes.EDIT_SEARCH_ITEM,
  payload: newItem,
});

const getSearchResultsRequest = () => ({
  type: actionTypes.GET_SEARCH_RESULTS_REQUEST,
});

const getSearchResultsSuccess = (result) => ({
  type: actionTypes.GET_SEARCH_RESULTS_SUCCESS,
  payload: result,
});

const getSearchResultsFailure = (err) => ({
  type: actionTypes.GET_SEARCH_RESULTS_FAILURE,
  payload: err,
});

export const getSearchResults = (query: string) => (dispatch: any) => {
  dispatch(getSearchResultsRequest());
  APIService.search(query)
    .then((response) => {
      dispatch(getSearchResultsSuccess(response.items));
    })
    .catch((err) => {
      dispatch(getSearchResultsFailure(err));
    });
};
