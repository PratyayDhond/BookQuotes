import React from 'react';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
import Quotes from '../QuoteComponents/Quotes';

const ViewQuotes = () =>{
        // const location = useLocation();
        const {quotes} = useLocation().state;
        console.log(quotes)
        return(
            <div>
                <Header />
                <Quotes quotes={quotes} />
            </div>
        );
};

export default ViewQuotes;