import React, { Component } from 'react';
import Input from "./../atoms/Input"
import Textarea from "./../atoms/Textarea"

const InputGroup = (props) => {

    const {...restProps } = props
    const input = props.element === undefined || props.element === "Input" ? <Input type={ props.type } classname={ props.className } { ...restProps }></Input> : ""
    const textarea = props.element == "Textarea" ? <Textarea className={ props.className } cols={ props.cols } rows={ props.rows } { ...restProps }>{ props.children }</Textarea> : ""

    return (
        <div class="form-group">
            <label>{ props.label }</label><br></br>
            { input }
            { textarea }
        </div>
    );
}


export default InputGroup;