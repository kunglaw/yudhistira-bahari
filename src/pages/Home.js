import React, { Component } from 'react';
import Navbar from '../components/template/Navbar';
import Header from "../components/template/Header"
import Footer from "../components/template/Footer"

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Header></Header>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;