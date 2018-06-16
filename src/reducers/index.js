import { combineReducers } from 'redux';

import GroupReducer from './reducer_group';
import FlagReducer from './reducer_flag';
import TeamResultReducer from './reducer_team_result';

const rootReducer = combineReducers({
  groups: GroupReducer,
  flags: FlagReducer,
  teamResults: TeamResultReducer,
});

export default rootReducer;
