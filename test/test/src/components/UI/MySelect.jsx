const MySelect = ({options, defaultValue,value, onChange})=> {
   
    return (
        <>
        <select
        value={value}
        onChange = {e => onChange(e.target.value)}
        >
            <option disabled>{defaultValue}</option>
              {
                options.map((option,index)=>  <option key={index} value= {option.value}>{option.title}</option>)
              }
        </select>
        </>
    )
}
export default MySelect;