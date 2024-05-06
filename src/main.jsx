import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandContextProvider from "./Context/LandContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandContextProvider>

        <App />

    </LandContextProvider>
  </React.StrictMode>,
)
