import { NavLink } from "react-router-dom"
import "./Header.css"

export const Header = ()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Sign In</NavLink></li>
                    <li><NavLink to="/SignUp">Sign Up</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}