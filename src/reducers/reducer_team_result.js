import { FETCH_TEAM_RESULTS } from '../actions/index';

export default function(state = [], action){
  switch (action.type){
    case FETCH_TEAM_RESULTS: return  action.payload;
  }
  return state;
}