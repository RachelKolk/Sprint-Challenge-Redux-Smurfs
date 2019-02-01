
 
import { 
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  FETCH_SMURF_FAILURE,
  ADDING_SMURF,
  SMURF_ADDED,
  ADD_SMURF_FAILURE,
  DELETING_SMURF,
  SMURF_DELETED_SUCCESS,
  DELETE_SMURF_FAILURE
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
  addingSmurf: false,
  deletingSmurf: false,
  error: null
}


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
    };

    case SMURF_DELETED_SUCCESS :
    return {
      ...state,
      smurfs: action.payload,
      deletingSmurf: false,
    };

    default:
    return state;
  }
}

export default reducer;