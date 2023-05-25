import { React, Component } from 'react';
import './Navigation.css';
import About from "../About.js";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navDisplay">
                <ul>
                    <li className="listClass">
                        <Link className="navLink" to="/">Home</Link>
                    </li>
                    <li className="listClass">
                        <Link className="navLink" to="/Aboutpage">About</Link>
                    </li>
                    <li className="listClass">
                        <Link className="navLink" to="/Help">Help</Link>
                    </li>
                </ul>
                <div className="dot"></div>
            </nav>
        )
    } 
}

export default NavigationBar; 