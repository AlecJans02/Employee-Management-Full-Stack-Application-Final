import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './DashboardNav.css';

export default class DashboardNav extends Component {

    componentDidMount() {
        window.history.forward();
        function noBack() {
            window.history.forward();
    }

}
    render() {
        return (
            <nav className="dashNavDisplay">
                <ul className="dashUl">
                    <li className="dashListClass">
                        <Link className="dashboardLink" to="/Dashboard">Dashboard</Link>
                    </li>
                    <li className="dashListClass">
                        <Link className="dashboardLink" to="/Tasks">Tasks</Link>
                    </li>
                    <li className="dashListClass">
                        <Link className="dashboardLink" to="/Stores">Stores</Link>
                    </li >
                    <li className="dashListClassLogout">
                        <Link className="dashboardLink" to="/">Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}