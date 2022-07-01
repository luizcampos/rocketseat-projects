import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/global.css'; //add o Tailwind CSS criado

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

      <App />  
  </React.StrictMode>
)
