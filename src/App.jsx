
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css';

import LoginPage from './pages/login'
import Registerpage from './pages/register'
import Profilepage from './pages/profile'
import AuthPage from './pages/AuthPage'

function App() {
 

  return (
    <>
     <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<Registerpage/>}/>
      <Route path="/profile" element={
        <AuthPage>
           <Profilepage/>
        </AuthPage>
      }/>
     </Routes>
    </>
  )
}

export default App
