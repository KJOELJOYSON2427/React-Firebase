import { useContext } from "react";
import CommonInput from "../common-input";
import CommonSelect from "../common-select";




const formElementType={
    INPUT:"input",
    SELECT:"select",
    TEXTAREA:"textarea"
}
export default function CommonForm({formControls=[],buttonText,formData,setformData,onSubmit}) {

    function renderFormElement(getCurrentFormControl,getFormData){
   let element=null;
   switch (getCurrentFormControl.componentType) {
    case formElementType.INPUT:
        element=(
            <CommonInput
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            onChange={(event)=>
                setformData({
                    ...formData,
                    [getCurrentFormControl.name]:event.target.value
                })
            }/>
        )
        break;
    case formElementType.SELECT:
        element = (
            <CommonSelect
              options={getCurrentFormControl.options} // Expect options to be passed for SELECT
              value={getFormData[getCurrentFormControl.name]}
              name={getCurrentFormControl.name}
              onChange={(event) =>
                setformData({
                  ...formData,
                  [getCurrentFormControl.name]: event.target.value,
                })
              }
              placeholder={getCurrentFormControl.placeholder}
            />
          );
        
        break;
    case formElementType.TEXTAREA:
        break;    
    default:
        element=(
            <CommonInput
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            onChange={(event)=>
                setformData({
                    ...formData,
                    [getCurrentFormControl.name]:event.target.value
                })
            }/>
        )
        break;
   }
   return element;
 }
 
  return (
    <form onSubmit={onSubmit}>
        {
            formControls.map((singleFormControl)=>
                renderFormElement(singleFormControl,formData)
            )
        }
        <button type="submit"> 
            {buttonText || "Submit"}
        </button>
    </form>
  )
}
