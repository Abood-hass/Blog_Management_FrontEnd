import React, { Component } from "react";

import "./App.css";
import {Login} from "./components/Login";
import rocketImg from './assets/rocket.png';

function App() {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <Login />
                </div>
                <div className="col-md-7 my-auto">
                    <img className="img-fluid w-100" src={rocketImg} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default App;
