import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import NavigationBar from './components/NavigationBar';
import { Link } from 'react-router-dom';


// for project, this login after succes will go to a home page where u can add notes for reminders exetra, then there will be tabs for different store locations, 
// and with these stores location you can add or remove employers and roster them for their shift (maybe also as defualt it sends them an email when rostered)

export default class Homepage extends Component {

    componentDidMount() {

        const form = document.getElementById("login");
        form.addEventListener("submit", e => {
            e.preventDefault();
        })

        //perform ajax login or add the code from sql/api to check info

        const buttonClick = document.getElementById("continueButton");
        const userName = document.getElementById("userName");
        const password = document.getElementById("password");
        const userError = document.getElementById("userError");
        const passwordError = document.getElementById("passwordError");

        const test = () => {
        console.log("test success");
        }

        const testtwo = () => {
            if (userName == "yes" && password == "yes") {
                console.log("yes")
            } else {
                userError.classList.toggle("formInputErrorUserFail");
                /*userError.classList.remove("formInputErrorUser");*/
                passwordError.classList.toggle("formInputErrorPasswordFail");
                /*passwordError.classList.remove("formInputErrorPassword");*/
            }
        }

        buttonClick.addEventListener("click", testtwo);
    }


    /*static displayName = App.name;*/


  render() {
      return (
          <>
          <NavigationBar />
          <div className="Main">
              <div className="formPage">
                  <form className="form" id="login" >
                      <h1 className="formTitle formTitleColors">Login </h1>
                      <div className="formInputGroup">
                          <div className="inputPosition">
                              <input type="text" className="formInput" placeholder="Username or Email Address" id="userName" autoFocus required />
                          </div>
                          <div className="formInputErrorUser" id="userError">Incorrect Username/Email</div>
                      </div>
                      <div className="formInputGroup">
                          <div className="inputPosition">
                              <input type="password" className="formInput" placeholder="Password" id="password" autoFocus required />
                          </div>
                          <div className="formInputErrorPassword" is="passwordError">Password Incorrect</div>
                      </div>
                      <div className="buttonPosition">
                          <button className="formButton" type="submit" id="continueButton" >Continue</button>
                      </div>
                      <div className="PageLinks">
                          <ul className="HomepageUl">
                              <li className="HomepageLi">
                                  <Link to="/Reset-Password">Forgot Password?</Link>
                              </li>
                              <li className="HomepageLi">
                                  <Link to="/Create-Account">Create Account!</Link>
                                  </li>
                              <li className="HomepageLi">
                                  <Link to="/Dashboard" target="_blank">Test Link For Dashboard</Link>
                              </li>
                          </ul>
                      </div>
                      
                  </form>
                     
              </div>
              <div>

              </div>
              </div>
          </>
    );
  }
}

