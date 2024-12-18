function CommonInput({type,placeholder,value,name,onChange,className}){
   return <input
   type={type || "text"}
   placeholder={placeholder}
   value={value}
   name={name}
   onChange={onChange}
   className={className || 'w-full block px-5 py-2 mt-2 text-black border rounded-lg'}
  />
}


export default CommonInput;