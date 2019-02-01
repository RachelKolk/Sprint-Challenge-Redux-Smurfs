/*
  Be sure to import in all of the action types from `../actions`
*/
 
import { 
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  FETCH_SMURF_FAILURE,
  ADDING_SMURF,
  SMURF_ADDED,
  ADD_SMURF_FAILURE
} from "../actions";


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer(state = initialState, action) {
  switch(action.type) {

    case SMURFS_FETCHED:
    return {
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false,
    };

    case SMURF_ADDED:
    return {
      ...state,
      smurfs: action.payload,
      addingSmurf: false,
    }

    default:
    return state;
  }
}

export default reducer;