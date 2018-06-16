import { combineReducers } from 'redux';

import GroupReducer from './reducer_group';
import TeamReducer from './reducer_team';
import TeamResultReducer from './reducer_team_result';

const rootReducer = combineReducers({
  groups: GroupReducer,
  teams: TeamReducer,
  teamResults: TeamResultReducer,
});

export default rootReducer;
