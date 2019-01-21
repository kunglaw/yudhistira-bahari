import React, { Component } from 'react';
import Section from "./../organism/Section"
import Card from "./../molecule/Card"

class LatestSeatizen extends Component {
    render() {
        return (
            <Section id="latest-seatizen">
                <div class="container">
                    <h4 align="center" > Latest Seatizen </h4>
                    <hr></hr>

                    <div class="col-md-3 float-left">
                        <Card 
                            className=""
                            imgTop="https://via.placeholder.com/150x80.png?text?sinergibahari.com"
                            classHeader="bg-primary text-white" 
                            >
                            <h5> Aries Dimas Yudhistira </h5>
                            <div> 2nd Engineer </div>
                        </Card>
                    </div>

                    <div class="col-md-3 float-left">
                        <Card 
                            className=""
                            imgTop="https://via.placeholder.com/150x80.png?text?sinergibahari.com"
                            classHeader="bg-primary text-white" 
                            >
                            <h5> Aries Dimas Yudhistira </h5>
                            <div> 2nd Engineer </div>
                        </Card>
                    </div>

                    <div class="col-md-3 float-left">
                        <Card 
                            className=""
                            imgTop="https://via.placeholder.com/150x80.png?text?sinergibahari.com"
                            classHeader="bg-primary text-white" 
                            >
                            <h5> Aries Dimas Yudhistira </h5>
                            <div> 2nd Engineer </div>
                        </Card>
                    </div>

                    <div class="col-md-3 float-left">
                        <Card 
                            className=""
                            imgTop="https://via.placeholder.com/150x80.png?text?sinergibahari.com"
                            classHeader="bg-primary text-white" 
                            >
                            <h5> Aries Dimas Yudhistira </h5>
                            <div> 2nd Engineer </div>
                        </Card>
                    </div>

                    <div class="clearfix"></div>
                </div>
            </Section>
        );
    }
}

export default LatestSeatizen;