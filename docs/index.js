import React from 'react'
import ReactDOM from 'react-dom'
import defaults from 'traits/defaults.css'
import * as components from './components'

const Docs = ({ components }) => {
  return (
    <div>
      {Object.keys(components).map((k) => {
        return (
          <div key={k}>{components[k].example}</div>
        )
      })}
    </div>
  )
}

ReactDOM.render(<Docs components={components} />, document.getElementById('root'))
