import React, { Component } from 'react';
import CardHeader from '../atoms/CardHeader';
import CardFooter from '../atoms/CardFooter';
import CardImg from "../atoms/CardImg"

class Card extends Component {
    render() {
        const props = this.props
        const classHeader = props.classHeader
        const cardHeader = props.cardHeader ? <CardHeader className={classHeader}>{ props.cardHeader }</CardHeader> : ""
        const cardFooter = props.cardFooter ? <CardFooter>{ props.cardFooter }</CardFooter> : ""
        const imgTop = props.imgTop ? <CardImg src={ props.imgTop } /> : ""
        return (
            <div className={ "card "+props.className } style={ props.style }>
                { cardHeader }
                { imgTop }
                <div class="card-body">
                    { this.props.children }
                </div>
                { cardFooter }
            </div>
        );
    }
}

export default Card;