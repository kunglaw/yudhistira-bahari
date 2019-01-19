import React, { Component } from 'react';

class Section extends Component {
    render() {

        const { className, ...restProps } = this.props

        return (
            <section className={ className } {...restProps}>
                { this.props.children }
            </section>
        );
    }
}

export default Section;