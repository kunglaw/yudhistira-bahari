import React, { Component } from 'react';
import InputGroup from "./../molecule/InputGroup"
import Button from "./../atoms/Button"

class ContactForm extends Component {
    render() {
        return (
            <form class="form" action="">
                <h3> Contact Us </h3>
                <InputGroup label="Name" type="text" ></InputGroup>
                <InputGroup label="Email" type="email" ></InputGroup>
                <InputGroup label="Subject" type="text" ></InputGroup>
                <InputGroup label="Content" element="Textarea" ></InputGroup>
                <Button className="btn btn-primary"> Submit </Button>
            </form>
        );
    }
}

export default ContactForm;