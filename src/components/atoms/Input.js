import React, { Component } from 'react';

const Input = (props) => {

    const type = props.type
    const className = "form-control "+props.className 
    const { ...restProps } = props
    
    return (
        <input class="form-control" type={ type } className={ className } { ...restProps } />
    );
}

export default Input;