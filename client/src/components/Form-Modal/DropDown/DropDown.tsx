
// import "./DropDown.css"

interface DropDown {
    label: string,
    options: string[],
    type: string
}

const DropDown = ({label, options, type}:DropDown) =>{
return(
    <div className="dropDown-container">
        <label>{label}</label>
        {options.map((o, i) => {
        return (
             <option key={i}>{o}</option>
        )})}
    </div>
)
}
export default DropDown

/*properties
 label
 options
 type
  */