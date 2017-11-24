// https://github.com/infinitered/ignite-ir-boilerplate/blob/master/boilerplate/App/Services/Api.js
import apisauce from 'apisauce'
// our "constructor"
const create = (baseURL = 'http://roller-hockey-france-elite.herokuapp.com/') => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const getClassement = () => api.get('elite/classement')
  const getMatchs = () => api.get('elite/matchs')
  const getStatistiques = () => api.get('elite/statistiques')

  return {
    // a list of the API functions from step 2
    getClassement,
    getMatchs,
    getStatistiques
  }
}

// let's return back our create method as the default.
export default {
  create
}
