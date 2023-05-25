import React from 'react';
import './PasswordReset.css';
import NavigationBar from './components/NavigationBar';

export default class ForgotPassword extends React.Component {
    render() {
        return (
            <>
            <NavigationBar />
            <div className="Page">
                <div className="Container">
                    <h1 className="resetTitle">Password Reset</h1>
                    <p>Please enter your email below to verify your account and receive a password reset form</p>
                    <div className="inputPosition">
                        <input className="emailInput" type="text" placeholder="email address" autoFocus />
                    </div>
                    <div className="passwordButton">
                        <button className="passButtonStyle">Send</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}