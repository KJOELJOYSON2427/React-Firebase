

export default function CommonSelect({ options, value, onChange,name, placeholder, className}) {
  return (
    <select
    value={value}
    onChange={onChange}
    name={name}
   
    className={className || 'w-full block px-5 py-2 mt-2 text-black border rounded-lg' }
     
    >
        <option value="">{placeholder || 'Select an option'}</option>
        {
            options.map((option, index)=>(
                <option  key={index} value={option.value}>
                    {option.label}
                </option>
            
            ))
        }
    </select>
  )
}
