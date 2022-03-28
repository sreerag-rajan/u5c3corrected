import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="navbar">
        <button onClick={()=>{
          navigate("/")
        }}  className="home"> Home </button>
        <button onClick={()=>{
          navigate("section/history")
        }}  className="history"> History </button>
        <button onClick={()=>{
          navigate("/section/mystery")
        }}  className="mystery"> Mystery </button>
        <button className="technology" onClick={()=>{
          navigate("/section/technology")
        }} >Technology </button>
        <button onClick={()=>{
          navigate("/section/mythology")
        }}  className="mythology"> Mythology </button>
        

        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
