
const BASE_URL = 'http://roller-hockey-france-elite.herokuapp.com/';

export const getClassement = (ffrsId) => {
  const URL = BASE_URL + 'competition/' + ffrsId + '/classement';
  return fetch(URL).then((res) => res.json());
}

export const getResultats = (competitionId) => {
  const URL = BASE_URL + 'elite/matchs';
  return fetch(URL).then((res) => res.json());
}

export const getStatistiques = (competitionId) => {
  const URL = BASE_URL + 'elite/statistiques';
  return fetch(URL).then((res) => res.json());
}
