import axios from 'axios';
const GROUPS_URL = 'http://worldcup.sfg.io/teams/group_results';
const FLAGS_URL = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';
const TEAM_RESULTS_URL = 'http://worldcup.sfg.io/teams/results';

export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_FLAGS = 'FETCH_FLAGS';
export const FETCH_TEAM_RESULTS = 'FETCH_TEAM_RESULTS';

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

export function fetchTeamResults(){
  const request = axios.get(TEAM_RESULTS_URL);
  return {
    type: FETCH_TEAM_RESULTS,
    payload: request
  }
};