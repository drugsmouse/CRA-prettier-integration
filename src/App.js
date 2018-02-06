import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CounterContainer from './counter-container'
import HeroList from './components/hero-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CounterContainer />
        <HeroList />
      </div>
    )
  }
}

export default App
