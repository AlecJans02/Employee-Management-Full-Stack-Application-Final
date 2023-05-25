import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import './Help.css';

export default class Help extends Component {
    render() {
        return (
            <div className="fullHelpPage">
            <NavigationBar />
            <div className="helpPage">
                    <div className="helpInfo">
                        <ul className="dropDownText">
                            <li>
                                <input type="radio" name="dropDownText" id="first" />
                                <label for="first">FAQ and Answers</label>
                                <div className="content">
                                    <p><b>Is there a limit on how many store location i can Enter?</b> No, there is currently not a set limit on how many store locations the user is able to add.
                                    </p>
                                    <p><b>Can Employees view my tasks?</b> No, only the user of the application will be able to veiw the tasks and other information.
                                    </p>
                                    <p><b>Do the employees receive an email after creating a roster?</b> Yes, if you choose to, you are able to send each employee an email with the created roster if you would want.
                                    </p>
                                    <p><b>Can i have multiple accounts?</b> Yes, you are able to create as many accounts as you prefere.
                                    </p>
                                    <p><b>Can i sync information from one account to antoher?</b> No, unfortunatley you are not able to sync information from one account to another as of now.
                                    </p>
                                    <p><b>Can i save employee information?</b> Yes, you are able to save an employees contact info including email which is required to email employees the updates shift rosters.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="dropDownText" id="second" />
                                <label for="second">Quick Overveiw</label>
                                <div className="content">
                                    <p>This Application is an employmee management app where you are able to choose and add different store locations, the employees that work at those stores and the shift roster for that specific store.
                                        Along with this you will be able to add, delete and create tasks in the task section. For more information please see our About page.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="dropDownText" id="third" />
                                <label for="third">Your Account / Info</label>
                                <div className="content">
                                    <p><b>Forgot Password:</b> If you unfortunatley forget your password or simply would like to change your password due to other circumstances than underneath the login will be a link to reset your password.
                                        if there are any further issues it is highly suggested you contact us via the Contact Us information below.
                                    </p>
                                    <p><b>Creating Account:</b> In order to create an account with us simply go to the login page and underneath the login and password feilds there will be a link to create a new account. 
                                        if there are any further issues it is highly suggested you contact us via the Contact Us information below.
                                    </p>
                                    <p><b>Account Information:</b> Our team takes great care in ensuring your information is safe with us. We have a policy where your information cannot be sold or disclosed with any person nor governing body.
                                    </p>
                                    <p><b>Account Memory:</b> All of the changes that you make within the application will be saved to a database therefore securing that whatever information you decide to add, edit or delete will be kept next time you login and use the application.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="dropDownText" id="fourth" />
                                <label for="fourth">Contact Us</label>
                                <div className="content">
                                    <p>Email: employementmanagemnthelp@gmail.com
                                    </p>
                                    <p>Phone: +61 0749 8473
                                    </p>
                                    <p>Fax: +6 (454) 865-8812
                                    </p>
                                    <p>Location: Unit 67/743 Brunswick Street, Brisbane Qld 4005
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
            </div>
        );
    }
}