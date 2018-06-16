import { combineReducers } from 'redux';
import GroupReducer from './reducer_group';
import FlagReducer from './reducer_flag';

const rootReducer = combineReducers({
  groups: GroupReducer,
  flags: FlagReducer,
});

export default rootReducer;
