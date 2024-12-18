import { useContext } from "react";
import CommonForm from "../../components'/common-form/index";
import { AuthContext } from "../../context";
import { loginFormControls } from "../../config/loginFormControls";
import {useNavigate} from "react-router-dom"
export default function LoginPage() {
  const {loginFormData,setloginFormData,loginWithFireBase,useloading,loading} =useContext(AuthContext)
  const navigate=useNavigate()
  function handleLogin(){
    event.preventDefault();
    
    loginWithFireBase().then((result)=>{
      console.log(result,"result111");
      if(result){
        useloading(false)
        navigate("/profile")
      }
    })


  }
  if(loading) return <h1>Loading!Please Wait</h1>

  
  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
     <div className="px-6 py-5">
      <h1>Welcome Back</h1>
      <p>Login Page</p>
      <CommonForm
      formControls={loginFormControls}
      formData={loginFormData}
      setformData={setloginFormData}
      buttonText={'Login'}
      onSubmit={handleLogin}
      />
     </div>
      </div>
  )
}
