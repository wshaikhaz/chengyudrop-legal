import React from 'react'
import ReactDOM from 'react-dom/client'
import Doc from './Doc.jsx'
import termsSource from './terms.md?raw'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Doc source={termsSource} docLabel="Terms of Use" current="terms" />
  </React.StrictMode>,
)
