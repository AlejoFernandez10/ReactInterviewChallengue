import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <footer style={{position:'absolute', bottom:'15px', left:'0', right:'0'}}>Developed by <a href="https://www.linkedin.com/in/alejo-fernandez-23821b243/" target='_blank'>Alejo Fernandez</a></footer>
  </React.StrictMode>,
)
