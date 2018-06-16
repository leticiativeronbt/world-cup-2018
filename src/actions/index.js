import axios from 'axios';
const GROUPS_URL = 'http://worldcup.sfg.io/teams/group_results';
const FLAGS_URL = 'https://restcountries.eu/rest/v2/all?fields=name;flag';

export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_FLAGS = 'FETCH_FLAGS';

export function fetchGroups(){
  const request = axios.get(GROUPS_URL);
  return {
      type: FETCH_GROUPS,
      payload: request
  };
}

export function fetchFlags(){
  const request = axios.get(FLAGS_URL);
  return {
    type: FETCH_FLAGS,
    payload: request
  }
};