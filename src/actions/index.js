import axios from 'axios';
const GROUPS_URL = 'https://world-cup-json.herokuapp.com/teams/group_results';
const TEAMS_URL = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';
const TEAM_RESULTS_URL = 'https://world-cup-json.herokuapp.com/teams/results';

export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_TEAMS = 'FETCH_TEAMS';
export const FETCH_TEAM_RESULTS = 'FETCH_TEAM_RESULTS';

export function fetchGroups(){
  const request = axios.get(GROUPS_URL);
  return {
      type: FETCH_GROUPS,
      payload: request
  };
}

export function fetchTeams(){
  const request = axios.get(TEAMS_URL);
  return {
    type: FETCH_TEAMS,
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