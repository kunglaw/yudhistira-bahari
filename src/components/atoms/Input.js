import React, { Component } from 'react';

const Input = (props) => {

    const type = props.type
    const className = props.className 
    const { ...restProps } = props
    
    return (
        <input type={ type } className={ className } { ...restProps } />
    );
}

export default Input;