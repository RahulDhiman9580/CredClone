import { combineReducers } from 'redux';

//custom imports
import { authReducer } from './globalReducers';


const reducers = combineReducers({
  authReducer,
});

export default reducers;
