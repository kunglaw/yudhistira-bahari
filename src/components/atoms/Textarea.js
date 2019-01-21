import React, { Component } from 'react';

const Textarea = (props) => {
    
    const { className, cols, rows } = props

    return (
        <textarea className={ "form-control "+className } cols={ cols } rows={ rows }></textarea>
    );
    
}

export default Textarea;