import React, { Component } from 'react';
import Button from "../atoms/Button"

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div class="container">
                    <a class="navbar-brand text-white" href="#"> Yudhistira Bahari </a>
                    <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </Button>
                    <div class="collapse navbar-collapse" id="">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Vacancy </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Seatizen </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Company </a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Login </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Register </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
        );
    }
}

export default Navbar;