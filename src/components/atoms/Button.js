import React, { Component } from 'react';

const Button = (props) => {
    const { className, ...restProps } = props

    return(
        <button className={ className } {...restProps} >
            { props.children }
        </button>
    )
}



export default Button;