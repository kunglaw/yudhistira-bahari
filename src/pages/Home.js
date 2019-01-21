import React, { Component } from 'react';
import Navbar from '../components/template/Navbar';
import Header from "../components/template/Header"
import Footer from "../components/template/Footer"
import Test from './Test';
import LatestSeatizen from '../components/template/LatestSeatizen';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Header></Header>
                <LatestSeatizen></LatestSeatizen>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;