import React from "react"
import Section from "../organism/Section";
import Button from "../atoms/Button"

const Header = (props) => {
    return (
        <Section class="header">
            <div class="">
                <div class="container">
                    <div class="vertical-center">
                        <h1>Seatizen let Sail !</h1>
                        <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
                        responsive, mobile-first projects on the web.</p>
                        <Button className="btn btn-lg btn-primary col-md-2"> 
                            Getting Started
                        </Button>
                    </div>
                    
                </div>
            </div>
        </Section>
    )
}

export default Header