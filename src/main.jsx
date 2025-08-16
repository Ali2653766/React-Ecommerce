import { StrictMode } from 'react'
import React from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CardProvider from './components/context/CardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <CardProvider>
        
          <App/>
        
      </CardProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
