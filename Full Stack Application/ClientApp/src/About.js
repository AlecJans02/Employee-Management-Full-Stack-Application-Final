import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import './About.css'

export default class About extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <div className="aboutPage">
                    <div className="aboutSection">
                    <h1 className="aboutHeading">About</h1>
                    <div className="aboutInfo">
                        <p1 className="aboutP">This Application is a combination of a task list and an employement/roster managemnt app. Users must first either enter their username/email and password, or create an account. From there
                            they will be greeted by a homepage where they have the option to add and view tasks to complete, manage different store locations, manage employees and the shift rosters. All of the users 
                            changes will be saved to a database and will be able to be added, deleted or changed at any point. 
                        </p1>
                        </div>
                    </div>
                    <div className="pictureSection">
                    <p1>insert picture of application here</p1>
                    </div>
            </div>
            </>
        );
    }
}