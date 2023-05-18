
// import "./DropDown.css"

interface NavBarItem {
    text: string,
    onClick: () => void
}
interface NavBar {
    text: string,
    onClick: () => void
}

const NavBar = ({text, onClick}:NavBar) =>{
return(
    <div className="navbar-container">
       <button onClick={onClick}>{text}</button>
    </div>
)
}
export default NavBar
/*properties
 text
 onclick
  */