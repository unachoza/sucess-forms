// import "./button.css"
interface Icon {
    image: string,
    name: string,
    onClick: () => void 
}

const Icon = ({image, name, onClick}:Icon): JSX.Element => {
  return (
    // <image src={image} name={name}onClick={onClick}/>
    <div>Icon</div>
  );
};
export default Icon;





/*properties
 svg
 onclick
  */