import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import About from "./About.js";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>);
