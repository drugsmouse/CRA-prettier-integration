import { connect } from 'react-redux'
import Counter from './counter'
import actionCounter from './counter-actions'

const CounterContainer = connect(
  state => ({
    counter: state.counter,
  }),
  dispatch => ({
    inc: () => {
      dispatch(actionCounter(1))
    },
    dec: () => {
      dispatch(actionCounter(-1))
    },
  })
)(Counter)

export default CounterContainer
