import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import './CreateAccount.css';


export default class CreateAccount extends Component {
    render() {
        return (
            <div>
            <NavigationBar />
                <div className="createAccountPage">
                    <div className="createAccountContent">
                        <form className="formCreate" id="login" >
                            <h1 className="formTitle formTitleColors">Create Account </h1>
                            <div className="formInputGroup">
                                <div className="inputPosition createInputPosition">
                                    <input type="text" className="formInput" placeholder="Email Address" id="emailCreate" autoFocus required />
                                </div>
                            </div>
                            <div className="formInputGroup">
                                <div className="inputPosition createInputPosition">
                                    <input type="text" className="formInput" placeholder="Username" id="usernameCreate" autoFocus required />
                                </div>
                            </div>
                            <div className="formInputGroup">
                                <div className="inputPosition createInputPosition">
                                    <input type="password" className="formInput" placeholder="Password" id="passwordCreate" autoFocus required />
                                </div>
                            </div>
                            <div className="buttonPosition createButton">
                                <button className="formButton" type="submit" id="createAccountSubmit" >Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}