import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthState from "./context/index.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthState>
       <App/>
    </AuthState>
  </BrowserRouter>
)
