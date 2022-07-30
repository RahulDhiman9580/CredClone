import { combineReducers } from 'redux';

//custom imports
import {authReducer} from './globalReducer'


const reducers = combineReducers({
  authReducer,
});

export default reducers;
