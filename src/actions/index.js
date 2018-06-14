import axios from 'axios';
const ROOT_URL = 'https://github.com/lsv/fifa-worldcup-2018';

export const FETCH_GROUPS = 'FETCH_GROUPS';

export function fetchGroups(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_GROUPS,
    payload: request
  };
}