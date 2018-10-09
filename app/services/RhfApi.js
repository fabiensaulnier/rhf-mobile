
const BASE_URL = 'http://rhf-manager.herokuapp.com/competition/';

export const getClassement = (ffrsId) => {
  const URL = BASE_URL + ffrsId + '/classement';
  return fetch(URL).then((res) => res.json());
}

export const getResultats = (ffrsId) => {
  const URL = BASE_URL + ffrsId + '/matchs';
  return fetch(URL).then((res) => res.json());
}

export const getStatistiques = (ffrsId) => {
  const URL = BASE_URL + ffrsId + '/statistiques';
  return fetch(URL).then((res) => res.json());
}
