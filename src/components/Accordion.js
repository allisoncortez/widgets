// import React from 'react'
import React, { useState } from 'react'
//useState, a hook, gives us access to state inside of a component


const Accordion = ({ items }) => {
    // initializes a new piece of state..
    //left hand side: array destructuring
    //activeIndex:the piece of state we are keeping track of(that will be changing/updating over time)
    //setActiveIndex: a function we call to update our piece of state --> when we call this it causes our entire component to re-render
    const [activeIndex, setActiveIndex] = useState(null);


    const onTitleClick = (index) => {
        // console.log('title clicked', index)

        //update the value of our piece of state
        setActiveIndex(index)
        // same thing as saying the following: this.setState({ activeIndex: 10})
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return <React.Fragment key={item.title}>
            <div className={`title ${active}`}
                onClick={() => onTitleClick(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion