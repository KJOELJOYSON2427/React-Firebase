import { useContext } from "react"
import { AuthContext } from "../context"
import { Navigate } from "react-router-dom"


export default function AuthPage({children}) {
  const {user,loading}= useContext(AuthContext)
  if(loading) <h1>Loading! please wait</h1>
  if(user){
    return children
  }
  return<Navigate to={"/login"}/>
  
}
