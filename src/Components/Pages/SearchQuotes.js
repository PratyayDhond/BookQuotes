import React from 'react';

//methods
import getQuotes from '../methods/getQuotes';

//Components
import Header from '../Header'
import BackArrow from '../../elements/backArrow.png'
import Loading from '../FormComponents/Loading';
import SearchPageOperationalView from '../SearchPage/SearchPageOperationalView'
import { useNavigate, useLocation } from 'react-router-dom'
import Home from './Home'
import getFavourites from "../methods/getUserFavourites";


async function fetch(setViewableQuotes){
    var temp = [];
    temp = await getQuotes();
    setViewableQuotes(temp);
}


const SearchQuotes = () => {
    var navigate = useNavigate();
    const {state} = useLocation();
    const [userFavourites, setUserFavourites] = React.useState([]);
    const [viewableQuotes, setViewableQuotes] = React.useState([]);
    const [filteredQuotes, setFilteredQuotes] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState("");
    
    if(state === null){
        window.history.pushState({}, null, "/");
    }else{
        getFavourites(state.userID, setUserFavourites);
    }
    
    React.useEffect(()=> {
        var tempQuotes = [];
        // console.log("In use effect for searchQuery")
        viewableQuotes.forEach((quote, index) => {
            if(quote.quote.toLowerCase().includes(searchQuery.toLowerCase())){
                tempQuotes.push(quote);
            }
        });
        // console.log(tempQuotes);
        setFilteredQuotes(tempQuotes);
        //eslint-disable-next-line
    },[searchQuery, state])

    React.useEffect(()=> {
        if(viewableQuotes.length === 0)
            fetch(setViewableQuotes);
            setFilteredQuotes(viewableQuotes);
        // console.log(viewableQuotes)
        //eslint-disable-next-line
    },[viewableQuotes]);


    return(
        <>
            {   
                state === null
                ?
                <div>
                    <Home></Home>
                </div>
                :
                <div>
                    <Header />

                    <div >
                        {/* <Link to="/addQuote"  className="MenuBarContent" > */}
                            <img src={BackArrow} alt="Back Arrow" className='ViewQuotes-BackArrow' onClick={() => {
                                console.log(state.userID);
                                navigate('/addQuote', {state:{userID: state.userID}});
                            }}/>
                        {/* </Link> */}
                    </div>
                    {viewableQuotes.length === 0 ? <Loading/> : <SearchPageOperationalView userFavourites={userFavourites} userID={state.userID} searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredQuotes={filteredQuotes} setFilteredQuotes={setFilteredQuotes}  setViewableQuotes={setViewableQuotes}/> }

                </div>
            }
        </>
    )
}

export default SearchQuotes;