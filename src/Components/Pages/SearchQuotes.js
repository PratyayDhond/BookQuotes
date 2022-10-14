import React from 'react';

//Components
import Header from '../Header'
import BackArrow from '../../elements/backArrow.png'
import Loading from '../FormComponents/Loading';
import SearchPageOperationalView from '../SearchPage/SearchPageOperationalView'
import { useNavigate, useLocation } from 'react-router-dom'
import Home from './Home'
import {userID, quotes, setUserID} from '../../App.js'

const SearchQuotes = () => {
    var navigate = useNavigate();
    const {state} = useLocation();
    const [filteredQuotes, setFilteredQuotes] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState("");
    
    if(state === null && userID == null){
        window.history.pushState({}, null, "/");
    }else{
        setUserID(state.userID);
    }

    React.useEffect(()=> {
        var tempQuotes = [];
        quotes.forEach((quote, index) => {
            if(quote.quote.toLowerCase().includes(searchQuery.toLowerCase())){
                tempQuotes.push(quote);
            }
        });
        setFilteredQuotes(tempQuotes);
        //eslint-disable-next-line
    },[searchQuery, state, userID])

    return(
        <>
            {   
                state === null
                ?
                <div>
                    <Home></Home>
                </div>
                :
                <div >
                    <Header />

                    <div>
                        {/* <Link to="/addQuote"  className="MenuBarContent" > */}
                            <img src={BackArrow} alt="Back Arrow" className='ViewQuotes-BackArrow' onClick={() => {
                                console.log(state.userID);
                                navigate('/addQuote', {state:{userID: state.userID}});
                            }}/>
                        {/* </Link> */}
                    </div>
                    {quotes.length === 0 ? <Loading/> : <SearchPageOperationalView  userID={state.userID} searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredQuotes={filteredQuotes} setFilteredQuotes={setFilteredQuotes} /> }

                </div>
            }
        </>
    )
}

export default SearchQuotes;