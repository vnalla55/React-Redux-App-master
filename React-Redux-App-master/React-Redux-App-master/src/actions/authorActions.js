import AuthorApi from '../api/mockAuthorApi';
import * as types from '../actions/actionTypes';

export function loadAuthorsSucess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSucess(authors));
    }).catch(error => {
      throw (error);
    });
  };
}
