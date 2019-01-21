import React, { Component } from 'react';
import Section from "./../components/organism/Section"
import Navbar from "./../components/template/Navbar"
import Footer from "./../components/template/Footer"

class About extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Section>
                    <h1 align="center"> About </h1>
                </Section>
                <Footer></Footer>
            </div>
        );
    }
}

export default About;