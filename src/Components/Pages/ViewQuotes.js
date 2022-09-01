import React, { useEffect } from 'react';
import Header from '../Header';
import Quotes from '../QuoteComponents/Quotes';
import getQuotes from '../methods/getQuotes';
import Loading from '../FormComponents/Loading'


async function fetch(setViewableQuotes){
    var temp = [];
    temp = await getQuotes();
    setViewableQuotes(temp);
}

const ViewQuotes = () =>{   
    var [viewableQuotes, setViewableQuotes] = React.useState([]);

    useEffect(()=> {
        fetch(setViewableQuotes);
        console.log(viewableQuotes);
        //eslint-disable-next-line
    },[ ]);

    console.log(viewableQuotes);
        
        return(
            <div>
                <Header />
                {viewableQuotes.length === 0 ? <Loading/> : <Quotes quotes={viewableQuotes} /> }
            </div>
        );
};

export default ViewQuotes;
