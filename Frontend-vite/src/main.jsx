import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../dist/assets/css/main.css"
import Routing from './router/routing.config'
// import "@fortawesome/fontawesome-free/css/all.min.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Routing/>
  </React.StrictMode>
)
