import { FETCH_TEAMS } from '../actions/index';

export default function(state = [], action){
  switch (action.type){
    case FETCH_TEAMS: return  action.payload;
    default: //do nothing;
  }
  return state;
}