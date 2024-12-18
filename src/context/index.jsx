import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import  auth  from "../firebse/FireBaseconfog";
import { useNavigate } from "react-router-dom";
export const AuthContext= createContext(null);


export default function AuthState({children}){
  
    const [registerFormData, setRegisterFormData]=useState({
        name:"",
        email:"",
        password:"",
        role:""
    })
    const [user,setUser]=useState(null);
    const [loading,useloading]=useState(true);
    const [loginFormData,setloginFormData]=useState({
     
        email:"",
        password:""
    }
)
   const navigate=useNavigate()
    const registerUser = async (email, password) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log("User created successfully:", userCredential.user);
          return userCredential;
        } catch (error) {
          console.error("Error creating user:", error.message);
          throw error; // Propagate error so that it can be handled in the calling function
        }
      };
      
    function registerWithfireBase(){
      useloading(true)
     
      const {email, password}=registerFormData;

       return registerUser(email,password)
      
     
    }
    function loginWithFireBase(){
        useloading(true)
        const email = loginFormData.email.trim();

        const {password}=loginFormData

        return signInWithEmailAndPassword(auth,email,password)
    }
    function handleLogout(){
        return signOut(auth)
    }
    useEffect(()=>{
            const checkAuthState=onAuthStateChanged(auth,
              (currentUser)=>{
                  setUser(currentUser)
                  useloading(false)
              }
             
            )
            return ()=>checkAuthState()
          },[])
          console.log(user,"users");

    useEffect(()=>{
        if(user) navigate("/profile")
    },[user])
    
    if(loading) <p>Loading! please wait</p>
    return <AuthContext.Provider value={{user,useloading,handleLogout,loginFormData,loginWithFireBase,setloginFormData,registerFormData,loading,registerWithfireBase,setRegisterFormData}}>{children}</AuthContext.Provider>
}