import { firebaseApp } from './../services/Firebase';


const getCompetition = async (competitionId) => {
  const doc = await firebaseApp
    .firestore()
    .collection('competitions')
    .doc(competitionId)
    .get();
  const competition = await doc.data();
  return competition;
};
export default getCompetition;
