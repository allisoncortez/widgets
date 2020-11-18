import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    //
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options = {options}/>
        </div>
    )
}

