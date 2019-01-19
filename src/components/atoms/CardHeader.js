import React from 'react';

const CardHeader = (props) => {
    
    const className = props.className
    
    return (
        <div class={ "card-header "+className } >
            <div class="card-title">{ props.children } </div>
        </div>
    );
}


export default CardHeader;