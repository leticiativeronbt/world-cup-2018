import { FETCH_FLAGS } from '../actions/index';

export default function(state = [], action){
  switch (action.type){
    case FETCH_FLAGS: return  action.payload;
  }
  return state;
}