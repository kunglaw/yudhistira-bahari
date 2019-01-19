import React, { Component } from 'react';

const CardImg = (props) => {
    return (
        <img class="card-img-top" height="100%" width="100%" src={ props.src } alt={ props.alt } />
    );
}

export default CardImg;