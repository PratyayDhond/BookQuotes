import React from 'react';
import { Link } from "react-router-dom";

//methods
import getQuotes from '../methods/getQuotes';

//Components
import Header from '../Header'
import BackArrow from '../../elements/backArrow.png'
import Loading from '../FormComponents/Loading';
import SearchPageOperationalView from '../SearchPage/SearchPageOperationalView'

async function fetch(setViewableQuotes){
    var temp = [];
    temp = await getQuotes();
    setViewableQuotes(temp);
}



const SearchQuotes = () => {
    const [viewableQuotes, setViewableQuotes] = React.useState([]);
    const [filteredQuotes, setFilteredQuotes] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState("");

    React.useEffect(()=> {
        // setFilteredQuotes([]);
        var tempQuotes = [];
        console.log("In use effect for searchQuery")
        viewableQuotes.forEach((quote, index) => {
            // console.log(quote.quote)
            // console.log();
            if(quote.quote.toLowerCase().includes(searchQuery.toLowerCase())){
                tempQuotes.push(quote);
            }
        });
        console.log(tempQuotes);
        setFilteredQuotes(tempQuotes);
        //eslint-disable-next-line
    },[searchQuery])

    React.useEffect(()=> {
        if(viewableQuotes.length === 0)
            fetch(setViewableQuotes);
            setFilteredQuotes(viewableQuotes);
        console.log(viewableQuotes)
        //eslint-disable-next-line
    },[viewableQuotes]);


    return(
        <>
            <div>
                <Header />
                <div >
                    <Link to="/"  className="MenuBarContent" >
                        <img src={BackArrow} alt="Back Arrow" className='ViewQuotes-BackArrow'/>
                    </Link>
                </div>
                {viewableQuotes.length === 0 ? <Loading/> : <SearchPageOperationalView searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredQuotes={filteredQuotes} setFilteredQuotes={setFilteredQuotes}/> }

            </div>
        </>
    )
}

export default SearchQuotes;