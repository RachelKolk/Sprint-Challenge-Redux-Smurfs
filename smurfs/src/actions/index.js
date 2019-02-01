import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED_SUCCESS = 'SMURF_DELETED_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';


export const getSmurfs = () => dispatch => {
  dispatch({type: FETCHING_SMURFS});
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => dispatch({type: SMURFS_FETCHED, payload: res.data}))
  .catch(err => dispatch({type: FETCH_SMURF_FAILURE, payload: err}));
};

export const addSmurf = smurf => dispatch => {
  dispatch({type: ADDING_SMURF});
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(res => {
    dispatch({type: SMURF_ADDED, payload: res.data});
  })
  .catch(err => dispatch({type: ADD_SMURF_FAILURE, payload: err}));
};

export const deleteSmurf = id => dispatch => {
  dispatch({type: DELETING_SMURF});
  return axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
    dispatch({type: SMURF_DELETED_SUCCESS, payload: res.data});
  })
  .catch(err => dispatch({type: DELETE_SMURF_FAILURE, payload: err}));
};