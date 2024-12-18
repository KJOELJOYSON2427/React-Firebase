import React, { useContext } from 'react'
import { AuthContext } from '../../context'

export default function Profilepage() {
  const {user,handleLogout}=useContext(AuthContext)
  console.log(user);
  
  return (
    <div>
      <h3>
        {user.displayName}
      </h3>
      <p>
        {
          user.email
        }
      </p>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
