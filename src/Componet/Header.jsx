import React,{useState, useContext} from "react";
import Themecontext from "../Context/ThemeContext";

const Header = ()=>{
    const [darkMode, SetDarkMode]= useState(false);
    const color = useContext(Themecontext);

    const handleClick= ()=>{
        SetDarkMode(!darkMode)
    }
    return(
        <div className="Header">
            <h1 style={{color}}>ReactHooks</h1>
        <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode': 'Light Mode'}</button>
        </div>
    )
}

export default Header