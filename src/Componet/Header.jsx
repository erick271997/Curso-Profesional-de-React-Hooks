import React,{useState} from "react";

const Header = ()=>{
    const [darkMode, SetDarkMode]= useState(false);

    const handleClick= ()=>{
        SetDarkMode(!darkMode)
    }
    return(
        <div className="Header">
            <h1>ReactHooks</h1>
        <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode': 'Light Mode'}</button>
        </div>
    )
}

export default Header