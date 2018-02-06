import { CHANGE } from './counter-actions'

const counter = (state = 10, action) => {
  const { sum, type } = action

  switch (type) {
    case CHANGE:
      return state + sum
    default:
      return state
  }
}

export default counter
