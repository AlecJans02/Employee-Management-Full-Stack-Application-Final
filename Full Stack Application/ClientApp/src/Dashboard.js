import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from './components/DashboardNav';
import './Dashboard.css';
import './custom.css';



export default class Dashboard extends Component {
    componentDidMount() {

        const displayedDate = document.getElementById("displayedDate");
        const displayedTime = document.getElementById("displayedTime");
        const displayedDay = document.getElementById("displayDay");

        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        let hours = date.getHours();
        let minutes = date.getMinutes();

        // write function to get better time display
        const updatedTime = () => {

        }

        let currentDay = date.getDay();
        const convertedDay = () => {
            let i = currentDay
            if (i === 0) {
                return "Sunday";
            } else if (i === 1) {
                return "Monday";
            } else if (i === 2) {
                return "Tuesday";
            } else if (i === 3) {
                return "Wednesday";
            } else if (i === 4) {
                return "Thursday";
            } else if (i === 5) {
                return "Friday";
            } else {
                return "Saturday"
            }
        }

        let newDay = convertedDay();

        displayedDate.innerHTML = `${day}/${month + 1}/${year}`;
        displayedTime.innerHTML = `${hours} : ${minutes}`;
        displayedDay.innerHTML = `${newDay}`;

        //calender javascript
        const currentDate = document.getElementById("currentDate");
        const daysUpdated = document.getElementById("days");
        const monthPrev = document.getElementById("prev");
        const monthNext = document.getElementById("next");

        const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const renderCalculator = () => { 
            let LastDayOfMonth = new Date(year, month + 1, 0).getDate(),
                FirstDayOfMonth = new Date(year, month, 1).getDay(),
                LastDateOfLastMonth = new Date(year, month, 0).getDate(),
                FirstDateOfMonth = new Date(year, month, LastDayOfMonth).getDay();
            let liTag = "";

            for (let i = FirstDayOfMonth; i > 0; i--) {
                liTag += `<li class="inactive">${LastDateOfLastMonth - i + 1}</li>`;
            }

            for (let i = 1; i <= LastDayOfMonth; i++) {
                let isToday = i === date.getDate() && month === new Date().getMonth()
                    && year === new Date().getFullYear() ? "active" : "";
                liTag += `<li class="${isToday}">${i}</li>`;
            }

            for (let i = FirstDateOfMonth; i < 6; i++) {
                liTag += `<li class="inactive">${i - FirstDateOfMonth + 1}</li>`;
            }

            daysUpdated.innerHTML = liTag;
            currentDate.innerText = `${monthName[month]} ${year}`;
        }

        renderCalculator();


    }    


    render() {
        return (
            <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <DashboardNav />
            <div className="mainDashboard">
                    <div className="dashboardDateAndClock">
                        <h1 className="dashboardDay" id="displayDay"></h1>
                        <h1 className="dashboardClock" id="displayedTime"></h1>
                        <h2 className="dashboardDate" id="displayedDate"></h2>
                    </div>
                    <div className="dashboardTasksOverlay">
                        <h1 className="taskh1">Task List</h1>
                        <h3 className="taskh3">Create new tasks to keep track of jobs or remind yourself of future events.
                        These tasks can be edited and deleted and will remian on your account until removed.
                            Click the link below or the navigation link to access Tasks!</h3>
                        <div className="dashboardButton">
                            <Link to="/Tasks" className="dashLinkStyle">
                                <button className="taskButton">Tasks &rarr;</button>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="dashboardStoreOverlay">
                        <h1 className="storeh1">Store Locations</h1>
                        <h3 className="locationh3">Inside store locations is where you manage the different stores and employees
                        After creating a new store location and entering employee details, you are able to create a shift roster
                        This shift will organise and create a work roster and if you choose, will be sent to all employees involved in the roster.
                            Click the link below or the navigation link to access Stores!</h3>
                        <div className="dashboardButton">
                            <Link to="/Stores" className="dashLinkStyle">
                                <button className="taskButton">Stores &rarr;</button>
                            </Link>
                        </div>
                    </div>
                    <div className="dashboardCalender"> 
                        <h3 className="calenderh3">CALENDER</h3>
                        <div className="monthAndArrows">
                            <h1 className="Current Date" id="currentDate" >MAY 2023</h1>
                            <div className="icons">
                                <p className="calenderP">Current Day Displayed <span style={{ color: "lightgreen"}}>Green</span> Below</p>
                            </div>
                            
                        </div>
                        <div className="mainCalender">
                            <ul className="weeks">
                                <li>Sun</li>
                                <li>Mon</li>
                                <li>Tue</li>
                                <li>Wed</li>
                                <li>Thu</li>
                                <li>Fri</li>
                                <li>Sat</li>
                            </ul>
                            <ul className="days" id="days">
                              
                            </ul>
                        </div>
                    </div>
            </div>
            </>
        )
    }
}