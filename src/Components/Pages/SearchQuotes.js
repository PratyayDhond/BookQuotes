import React from 'react';

//Components
import Header from '../Header'
import ConfirmPopup from '../ConfirmPopup';
import BackArrow from '../../elements/backArrow.png'
import Loading from '../FormComponents/Loading';
import SearchPageOperationalView from '../SearchPage/SearchPageOperationalView'
import { useNavigate, useLocation } from 'react-router-dom'
import Home from './Home'
import {userID, quotes, setUserID, userFavourites, isuserFavouritesArrayEmpty, message} from '../../App.js'
import { getQuotes, getUserFavouriteQuotesAndIsAdmin } from './AddQuote';


function updateFilteredQuotes(setFilteredQuotes, searchQuery) {
    var tempQuotes = [];
    quotes.forEach((quote, index) => {
        if(quote.quote.toLowerCase().includes(searchQuery.toLowerCase())){
            tempQuotes.push(quote);
        }
    });
    setFilteredQuotes(tempQuotes);
}

var setIconClicked;

const SearchQuotes = () => {
    var navigate = useNavigate();
    const {state} = useLocation();
    const [filteredQuotes, setFilteredQuotes] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [click, setClick] = React.useState(false);
    setIconClicked = setClick;

    React.useEffect(() => {    
        if(state === null && userID == null){
            window.history.pushState({}, null, "/");
        }else{
            if(userID === null)
                setUserID(state.userID);
        }
        // eslint-disable-next-line
    }, [])

    React.useEffect(() => {
        if(state === null && userID == null){
            window.history.pushState({}, null, "/");
        }else{
            if(userID === null)
                setUserID(state.userID);
        if(quotes.length === 0)
           getQuotes();
        if(userFavourites.length === 0 && !isuserFavouritesArrayEmpty)
            getUserFavouriteQuotesAndIsAdmin(state.userID);
        updateFilteredQuotes(setFilteredQuotes,searchQuery);
        }
    // eslint-disable-next-line
    }, [quotes])

    React.useEffect(()=> {
        updateFilteredQuotes(setFilteredQuotes,searchQuery);
        //eslint-disable-next-line
    },[searchQuery])

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
                                navigate('/addQuote', {state:{userID: state.userID}});
                            }}/>
                        {/* </Link> */}
                    </div>
                    {quotes.length === 0 ? <Loading/> : <SearchPageOperationalView  userID={state.userID} searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredQuotes={filteredQuotes} setFilteredQuotes={setFilteredQuotes} /> }

                </div>
            }

            {
                click
                ? <ConfirmPopup message={message} setSubmitted={setIconClicked}/>
                : <div></div>

            }
        </>
    )
}
export {setIconClicked};
export default SearchQuotes;