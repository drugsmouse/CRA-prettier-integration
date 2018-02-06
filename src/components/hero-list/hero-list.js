import React from 'react'

const HeroList = ({ heroes, error }) => {
  debugger
  return (
    <div>
      {heroes.map(hero => {
        return <div key={hero.name}>{hero.name}</div>
      })}
      {error && (
        <div style={{ color: 'red' }}>
          Unfortunately we are not able to get your heroes right now due to:{' '}
          {error}
        </div>
      )}
    </div>
  )
}

export default HeroList
