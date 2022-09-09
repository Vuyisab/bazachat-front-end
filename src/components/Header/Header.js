import { NavLink } from "react-router-dom"
import { selectPass } from "../Login/LoginSlice"
import { useSelector } from "react-redux"
import "./Header.css"

export const Header = ()=>{
    const pass = useSelector(selectPass);

    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    {pass && <li><NavLink exact to="/feed">Feed</NavLink></li>}
                    
                    <li><NavLink to="/login">Sign In</NavLink></li>
                    <li><NavLink to="/signUp">Sign Up</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}