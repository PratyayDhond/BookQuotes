import React, { useEffect } from 'react';
import Header from '../Header';
import Quotes from '../QuoteComponents/Quotes';
import getQuotes from '../methods/getQuotes';
import Loading from '../FormComponents/Loading'
import BackArrow from '../../elements/backArrow.png'
import { Link } from "react-router-dom";
import '../Form.css'

async function fetch(setViewableQuotes){
    var temp = [];
    temp = await getQuotes();
    setViewableQuotes(temp);
}

const ViewQuotes = () =>{   
    var [viewableQuotes, setViewableQuotes] = React.useState([]);

    useEffect(()=> {
        fetch(setViewableQuotes);
        // console.log(viewableQuotes);
        //eslint-disable-next-line
    },[ ]);

    // console.log(viewableQuotes);
        
        return(
            <div>
                <Header />
                <div >
                    <Link to="/addQuote"  className="MenuBarContent" >
                        <img src={BackArrow} alt="Back Arrow" className='ViewQuotes-BackArrow'/>
                    </Link>
                </div>
                {viewableQuotes.length === 0 ? <Loading/> : <Quotes quotes={viewableQuotes} /> }
            </div>
        );
};

export default ViewQuotes;
