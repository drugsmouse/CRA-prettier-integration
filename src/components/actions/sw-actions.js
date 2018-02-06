export const GET_HEROES_REQUEST = 'GET_HEROES_REQUEST'
export const GET_HEROES_SUCCESS = 'GET_HEROES_SUCCESS'
export const GET_HEROES_FAILURE = 'GET_HEREOS_FAILURE'

const requestHeroes = () => ({
  type: GET_HEROES_REQUEST,
})

const successHeroes = heroes => ({
  type: GET_HEROES_SUCCESS,
  heroes,
})

const failureHeroes = error => ({
  type: GET_HEROES_FAILURE,
  error,
})

const getHeroes = () => {
  return dispatch => {
    dispatch(requestHeroes())
    fetch('https://swapi.co/apsi/people/')
      .then(data => data.json())
      .then(data => dispatch(successHeroes(data.results)))
      .catch(error => dispatch(failureHeroes(error.message)))
  }
}

export default getHeroes
