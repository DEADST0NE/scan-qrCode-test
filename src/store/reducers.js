import { combineReducers } from 'redux';

import scan from './scan/reducer'; 

const reducers = combineReducers({
  scan,
});

export default reducers;
