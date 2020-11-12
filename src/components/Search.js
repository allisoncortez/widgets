import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term,setTerm] = useState('programming');
    const [debouncedTerm,setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([]);

    useEffect(() => {
        //will run anytime that term changes(anytime user types into the input)
        const timerId = setTimeout(() => {
            //when this changed actually goes through, we'll run our second useEffect
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        //call search, will run when we first render our component
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            });

            setResults(data.query.search);
        };

        search();
    }, [debouncedTerm])

    //useEffect, similar to componentDidMount
    //second argument tells when our code gets executed

    // useEffect(() => {
    //     // if this is the first time our component renders, we want to do a search right away
    //     if (term && !results.length) {
    //         search();
    //     } else {
    //     //if it's not first time, we want to setTimeout && return the clearTimeout
    //         const timeoutId = setTimeout(() => {
    //             if (term){
    //                 search();
    //             }
    //         }, 500);
    
    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }
    // }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} ></span>
             
                </div>
            </div>
        )
    })

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
            <div className="ui celled list"> {renderedResults} </div>
        </div>
    )
}

export default Search;