
// import "./CheckBox.css"

interface Checkbox {
    text: string,
    groupName: string
}

const Checkbox = ({text, groupName}:Checkbox) =>{
return(
    <div className="checkbox-container">
        <label>{text}</label>
        <div className="">text</div>
    </div>
)
}
export default Checkbox

/*properties
 label
 options
 groupName
  */