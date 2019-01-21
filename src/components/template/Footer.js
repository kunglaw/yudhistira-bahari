import React, { Component } from 'react';
import Section from "../organism/Section"
import "./Footer.css"
import ContactForm from '../organism/ContactForm';

class Footer extends Component {
    render() {
        return (
            
            <footer>
                <Section>
                    <div class="container">
                        <div class="footer-left col-md-6">
                            <h1> Yudhistira Bahari </h1>

                            <p align="justify"> 
                                To change the way a picture fits in your document, 
                                click it and a button for layout options appears next to it. 
                                When you work on a table, click where you want to add a row or a column, 
                                and then click the plus sign. 
                                Reading is easier, too, in the new Reading view. 
                            </p>
                            
                            <div class="sitemap">
                                <h5> Sitemap </h5>
                                
                                <ul class="col-md-4 float-left">
                                    <li><a href="#"> Home </a></li>
                                    <li><a href="#"> Vacancy </a></li>
                                    <li><a href="#"> Seatizen </a></li>
                                    <li><a href="#"> Company </a></li>
                                </ul>
                            
                            
                                <ul class="col-md-4 float-left">
                                    <li><a href="#"> About </a></li>
                                    <li><a href="#"> Vision and Mission </a></li>
                                    
                                </ul>
                                
                                <div class="clearfix"></div>
                            </div>

                            <div class="connect">
                                <h5> Connect Us </h5>
                            </div>
                            
                        </div>
                        <div class="footer-right col-md-5">
                            <ContactForm></ContactForm>
                        </div>
                        <div class="clearfix"></div>
                        
                    </div>   
                     
                </Section>
                <Section class="copyright bg-primary">
                    <p align="center"> Copyright &copy; 2019 </p>
                </Section>  
            </footer>
           
        );
    }
}

export default Footer;