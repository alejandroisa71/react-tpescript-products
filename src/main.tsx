import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import  'bootswatch/dist/lumen/bootstrap.min.css'
// import     'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:

// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
