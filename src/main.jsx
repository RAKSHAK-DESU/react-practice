import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json'
import App from './App.jsx'
import { NetflixRegisterComponent } from './components/NetflixRegisterComponent.jsx'
import {NetflixHeaderComponent } from './components/NetflixHeaderComponent.jsx.jsx'
import NetflixIndexComponent from './components/NetflixIndexComponent.jsx'
import DataBindingComponent from './components/DataBindingComponent.jsx'
import BindingArrayCollectionComponent from './components/BindingArrayCollectionComponents.jsx'
import OneWayBindingComponent from './components/OneWayBindingComponent.jsx'
import NestedIterationArrayComponent from './components/NestedIterationArrayComponent.jsx'
import UseStateComponent from './components/UseStateComponent.jsx'
import DataBindingComponentNASAApi from './components/DataBindingComponentNASAApi.jsx'
import ShoppingComponent from './components/ShoppingComponent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ShoppingComponent/>
  </StrictMode>,
)
