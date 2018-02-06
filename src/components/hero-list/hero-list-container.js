import React from 'react'
import { connect } from 'react-redux'
import getHeroes from '../actions/sw-actions'
import HeroList from './hero-list'

class HeroesListContainer extends React.Component {
  componentDidMount() {
    this.props.getHeroes()
  }

  render() {
    const { heroes, error } = this.props
    return <HeroList heroes={heroes} error={error} />
  }
}

export default connect(
  state => ({
    heroes: state.heroes.items,
    error: state.heroes.error,
  }),
  {
    getHeroes,
  }
)(HeroesListContainer)
