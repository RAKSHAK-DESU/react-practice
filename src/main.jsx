import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json'
import App from './App.jsx'
import { NetflixRegisterComponent } from './components/NetflixRegisterComponent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NetflixRegisterComponent/>
    <App />
  </StrictMode>,
)
