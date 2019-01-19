import React, { Component } from 'react';

const CardFooter = (props) => {
    return (
        <div class="card-footer">
            { props.children }
        </div>
    );
}


export default CardFooter;