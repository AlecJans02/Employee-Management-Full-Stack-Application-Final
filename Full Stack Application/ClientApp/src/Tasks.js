import React, { Component } from 'react';
import DashboardNav from './components/DashboardNav';
import './Tasks.css';



export default class Tasks extends Component {

    componentDidMount() {
        const taskButton = document.getElementById("taskButton");
        const taskInput = document.getElementById("taskInput");
        const taskUl = document.getElementById("taskUl");


        const addTask = () => {
            const li = document.createElement("li");
            li.className = "taskLi";
            const button = document.createElement("button");
            button.textContent = "Delete";
            button.className = "taskDelete";
            let text = "";
            text = taskInput.value;
            li.appendChild(document.createTextNode(text));
            li.appendChild(button);
            taskUl.appendChild(li);
            taskInput.value = "";
            button.onclick = function() {
                button.parentElement.remove();
            }
        }

        taskButton.addEventListener("click", addTask);
    }



    render() {
        return (
            <div>
                <DashboardNav />
                <div className="taskPage">
                    <div className="taskContainer">
                            <h1 className="taskTitle">TASK LIST</h1>
                        <div className="taskDetails">
                            <input type="text" placeholder="Enter Task" id="taskInput" className="taskInputStyle"></input>
                        <button id="taskButton" className="taskButtonStyle">Submit</button>
                        </div>
                        <div className="taskList">
                            <ul id="taskUl" className="taskUlList">
                                <li className="taskLi"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}