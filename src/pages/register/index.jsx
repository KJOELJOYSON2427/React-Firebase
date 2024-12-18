import { useContext } from "react";
import CommonForm from "../../components'/common-form";
import { AuthContext } from "../../context";
import { registerFormControls } from "../../components'/registercontrols/registerControls";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebse/FireBaseconfog"

export default function Registerpage() {
  const navigate = useNavigate();
  const { registerFormData, useloading,registerWithfireBase, setRegisterFormData } = useContext(AuthContext);

  console.log(registerFormData);

  // Fixed event handler with 'event' parameter
  function handleRegisterFormSubmit(event) {
    event.preventDefault(); // prevent default form submission

    // Calling registerWithfireBase() function
    registerWithfireBase().then((result) => {
      if (result.user) {
        updateProfile(result.user, {
          displayName: registerFormData.name,
        }).then(()=>{
          console.log(
           
            auth.currentUser.displayName,
            "auth.currentUser"
          );
          if(auth.currentUser && auth.currentUser.displayName){
            useloading(false)
            navigate("/profile");
          }
          
        });

        // Navigate to /profile after successful registration
       
        
      }
    }).catch((error) => {
      console.log(error); // Handle registration errors
    });
  }
  
  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h3>Welcome back</h3>
        <p>Register Page</p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        formData={registerFormData}
        setformData={setRegisterFormData}
        onSubmit={handleRegisterFormSubmit} // Pass event handler
        buttonText="Save"
      />
    </div>
  );
}
