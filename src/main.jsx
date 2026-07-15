import React from 'react'
import ReactDOM from 'react-dom/client'
import Doc from './Doc.jsx'
import policySource from './privacy-policy.md?raw'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Doc source={policySource} docLabel="Privacy Policy" current="privacy" />
  </React.StrictMode>,
)
