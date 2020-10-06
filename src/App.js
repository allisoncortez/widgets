import React from 'react'
import Accordion from './components/Accordion'

const items = [
    {
        title: 'The What',
        content: 'React is a front end JS framework'
    },
    {
        title: 'The Why',
        content: 'React is a popular JS library among engineers'
    },
    {
        title: 'But How?',
        content: 'You use React by creating components'
    }
]

export default () => {
    return (
        <div>
            <Accordion />
        </div>
    )
}

