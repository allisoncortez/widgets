import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    //create new piece of state
    const [term,setTerm] = useState('');

    //useEffect, similar to componentDidMount
    //second argument tells when our code gets executed
    //should be an empty array, array with something inside, or nothing at all
    useEffect(() => {
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });
        };

        search();
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    className="input" />
                </div>
            </div>
        </div>
    )
}

export default Search;