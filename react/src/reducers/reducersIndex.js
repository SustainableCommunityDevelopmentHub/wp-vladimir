// imports dependencies
import { combineReducers } from 'redux';

// imports reducers
import { reducer as toastrReducer } from 'react-redux-toastr';
import testReducer from './testReducer.js';

// creates root reducer
const rootReducer = combineReducers({
  toastr: toastrReducer,
  test: testReducer
});

// exports root reducer
export default rootReducer;