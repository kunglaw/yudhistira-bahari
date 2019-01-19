import React, { Component } from 'react';
import Section from "./../components/organism/Section"
import Card from '../components/molecule/Card';
import Button from "../components/atoms/Button"


class Test extends Component {
    render() {
        return (
            <Section>
                <div class="container">
                    <h1 align="center"> Test Section </h1>
                    <div class="col-md-4 float-left">
                        <Card 
                            className=""
                        
                            classHeader="bg-primary text-white" 
                            cardHeader="Ini Header" >
                            <p> Ini Isi nya </p>
                        </Card>
                    </div>
                    
                    <div class="col-md-4 float-left">
                        <Card 
                            className=""
                            imgTop="https://via.placeholder.com/150x80.png?text?sinergibahari.com"
                            classHeader="bg-primary text-white" 
                            >
                            <p> Ini Isi nya </p>
                        </Card>
                    </div>

                    <div class="col-md-4 float-left">
                        <Card 
                            className=""
                        
                            classHeader="bg-primary text-white" 
                            cardHeader="Ini Header" 
                            cardFooter="Ini Footer">
                            <p> Ini Isi nya </p>
                            <Button className="btn btn-primary"> Confirm </Button>
                        </Card>
                    </div>
                    
                </div>
                
            </Section>
        );
    }
}

export default Test;