import { combineReducers } from 'redux';
import GroupReducer from './reducer_group';

const rootReducer = combineReducers({
  groups: GroupReducer
});

export default rootReducer;
