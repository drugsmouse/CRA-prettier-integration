import {
  GET_HEROES_SUCCESS,
  GET_HEROES_FAILURE,
  GET_HEROES_REQUEST,
} from '../actions/sw-actions'

const initialState = {
  isLoading: false,
  items: [],
  error: '',
}

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case GET_HEROES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_HEROES_SUCCESS:
      return {
        ...state,
        items: action.heroes,
      }
    case GET_HEROES_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
export default heroes
