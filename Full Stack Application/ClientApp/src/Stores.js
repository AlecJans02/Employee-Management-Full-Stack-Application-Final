import React, { Component } from 'react';
import DashboardNav from './components/DashboardNav';
import './Stores.css';



export default class Stores extends Component {
    render() {
        return (
            <div>
            <DashboardNav />
                <div className="storePage">
                    <div className="storeDisplay">
                        <div className="storeNav">
                            <ul className="storeUl">
                                <li className="storeLi">Store A</li>
                                <li className="storeLi">Store B</li>
                            </ul>
                        </div>
                         <div className="storeBottom">
                            <div className="storeEmployees">
                                <div className="employeeForm">
                                    <p className="employeeP">Enter Employee Details Below</p>
                                    <div className="employeeInputDiv">
                                        <input placeholder="Employee Name"></input>
                                    </div>
                                    <div className="employeeInputDiv">
                                        <input placeholder="Employee Email"></input>
                                    </div>
                                    <div className="employeeButton">
                                        <button>Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div className="storeRoster">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}