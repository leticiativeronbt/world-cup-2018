import { FETCH_GROUPS } from '../actions/index';

export default function(state = [], action){
  switch (action.type){
    case FETCH_GROUPS: {
      console.log(action.payload);
      return [ action.payload ]; 
    }
  }
  return state;
}