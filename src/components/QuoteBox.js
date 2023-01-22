import React, { useState, useEffect } from 'react';
import '../QuoteBox.css';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QuoteBox = () => {
    const [quote, setQuote] = useState({ text: '', author: '' });
    const [isLoading, setIsLoading] = useState(false);

    // const twitter = <FontAwesomeIcon icon={twitter} />


    useEffect(() => {
        //initial quote fetched 
        const fetchQuote = async () => {
            setIsLoading(true);
            const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=', {
                // mode: 'no-cors',
                method: "GET",
                headers: {
                    'X-Api-Key': 'bAjrAy5Hprin2b1P3ZAfEg==Aq4ApDgXx8gS9Oah',
                }
            });
            const data = await res.json();
            console.log(data[0])
            setQuote({ text: data[0].quote, author: data[0].author })

            console.log(quote)
            setIsLoading(false);
        };
        fetchQuote();
    }, []);

    //new quote fetched when you click on "new quote"
    const handleNewQuoteClick = async () => {
        setIsLoading(true);
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=', {
            // mode: 'no-cors',
            method: "GET",
            headers: {
                'X-Api-Key': 'bAjrAy5Hprin2b1P3ZAfEg==Aq4ApDgXx8gS9Oah',
            }
        });
        const data = await res.json();
        console.log(data)
        setQuote({ text: data[0].quote, author: data[0].author });
        console.log(quote)
        setIsLoading(false);
    };

    return (
        <div id="quote-box" className="center">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div id="wrapper">
                        <div id="text"><FontAwesomeIcon icon={faQuoteLeft} size="2x" /> {quote.text}</div>
                        <div id="author">- {quote.author}</div>
                        <div id="buttons">
                            <button id="new-quote" onClick={handleNewQuoteClick}>New quote</button>
                            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`} target="_blank">
                                <FontAwesomeIcon icon={faSquareTwitter} size="2x" />
                            </a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default QuoteBox;