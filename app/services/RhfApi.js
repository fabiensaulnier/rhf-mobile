const BASE_URL = 'http://rhf-manager.herokuapp.com/competition/';

const valueType = {
  CLASSEMENT: 'classement',
  MATCHS: 'matchs',
  STATISTIQUES: 'statistiques',
};

const get = async (stageId, valueType) => {
  try {
    let response = await fetch(
       BASE_URL + stageId + '/' + valueType
    );
    let classement = await response.json();
    return classement;
  } catch (error) {
    console.error(error);
  }
}

const getStage = async (stageId) => {
  const classement = get(stageId, valueType.CLASSEMENT);
  const matchs = get(stageId, valueType.MATCHS);
  const statistiques = get(stageId, valueType.STATISTIQUES);
  const stage = await Promise.all([classement, matchs, statistiques]);
  return {
    classement: stage[0],
    resultats: stage[1],
    statistiques: stage[2],
  }
};

export default getStage;
