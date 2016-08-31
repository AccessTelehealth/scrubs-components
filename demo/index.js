import React from 'react'
import ReactDOM from 'react-dom'
import defaults from '../styles/defaults.css'
import Welcome from './Welcome'
import Home from './Home'
import PatientSummary from './PatientSummary'

ReactDOM.render(<PatientSummary />,
  document.getElementById('root')
)
