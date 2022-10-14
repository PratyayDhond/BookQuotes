import React from 'react';
import Header from '../Header';
import Quotes from '../QuoteComponents/Quotes';
import Home from '../Pages/Home'
import Loading from '../FormComponents/Loading'
import BackArrow from '../../elements/backArrow.png'
import { useNavigate, useLocation } from 'react-router-dom'
import '../Form.css'
//setUserFavourites
import {isuserFavouritesArrayEmpty, setIsuserFavouritesArrayEmpty, userFavourites, userID} from '../../App'
import {quotes} from '../../App'
import 'firebase/firestore'
import { getQuotes, getUserFavouriteQuotesAndIsAdmin } from './AddQuote';


async function setFavouriteQuotes(setViewableQuotes, setLoading, userID) {
    // #BOOKMARK This might glitch if userFavourites is empty
    if(userFavourites.length === 0 && isuserFavouritesArrayEmpty === false){
      setIsuserFavouritesArrayEmpty(true);
      await getUserFavouriteQuotesAndIsAdmin(userID);
      setFavouriteQuotes(setViewableQuotes, setLoading, userID);
      return;
    }
    setLoading(true);
    var temp = [];
    // Iterating through the quotes array to find the id which are present in the userFavourite quotes array and pushing 
    // those quotes to viewableQuotes
    quotes.forEach(q => {
        if(userFavourites.includes(q.id)){
            temp.push(q);
        }
    })
    setViewableQuotes(temp);
    setLoading(false);
}


async function updateQuotes(setViewableQuotes){
    if(quotes.length === 0){
        await getQuotes();
        console.log(quotes);
    }    
    setViewableQuotes(quotes)
}


const ViewQuotes = () => {
    var navigate = useNavigate();
    const {state} = useLocation();
    
    if(state === null && userID === null){
        window.history.pushState({}, null, "/");
    }


    var [loading, setLoading] = React.useState(false);
    var [viewableQuotes, setViewableQuotes] = React.useState(quotes);
    const [viewPage, setViewPage] = React.useState(0);

    React.useEffect(() => {
        if(quotes.length === 0)
            updateQuotes(setViewableQuotes);
    }, [])


    console.log(viewableQuotes)
    var currentlySelectedOpacity = {
        opacity:1,
        fontSize: "2.5vh",
    };

    var CurrentlyNotSelectedOpacity={opacity:0.7};


        return(
            <>
                {
                    state === null
                    ?
                    <div>
                        <Home />
                    </div>
                    :
                    <div>
                        <Header />
                        <div >
                                <img src={BackArrow} alt="Back Arrow" className='ViewQuotes-BackArrow' onClick={() => {
                                            console.log(state.userID);
                                            navigate('/addQuote', {state:{userID: state.userID}});
                                }}/>
                        </div>
                        <div>
                            
                            
                        <div>
                            <div className="ViewQuotesSwitch">
                                <div className='ViewQuotesSwitch-Content' style={viewPage === 0 ? currentlySelectedOpacity : CurrentlyNotSelectedOpacity} onClick={() => {
                                    setViewPage(0);
                                    setLoading(true);
                                    updateQuotes()
                                    setViewableQuotes(quotes);
                                    setLoading(false);
                                }}>Your Quotes</div> 
                                |
                                <div className='ViewQuotesSwitch-Content' style={viewPage === 1 ? currentlySelectedOpacity : CurrentlyNotSelectedOpacity} onClick={() => {
                                    setViewPage(1);
                                    setLoading(true);
                                    setFavouriteQuotes(setViewableQuotes, setLoading, state.userID);
                                    }}>Favourites</div>
                            </div>
                        </div>
                                
                        </div>
                        { loading || quotes.length === 0 
                            ? <Loading/>
                            : viewableQuotes.length === 0 
                                ?  viewPage === 0 
                                    ? <NoQuotesFound heading={"You have not posted any quotes yet! :("} message=" To post a Quote, go to the AddQuotes page using the back arrow on the top left, and just Add your Quote."/>
                                    : <NoQuotesFound heading={"You are yet to favourite a quote! :("} message=" To favourite a Quote, go to the SearchQuotes page using the back arrow on the top left, and then click on Search Quotes, then click on the heart icon in any quote and it would be added to your favourite :) Yayy!"/>
                                :  <Quotes userID={state.userID} viewableQuotes={viewableQuotes} setViewableQuotes={setViewableQuotes}/> }
                    </div>
                }
            </>
        );
};

const NoQuotesFound = ({heading, message}) => {
    return(
        <div className='NoQuotesFound-Div'>
          <h2 className='NoQuotesFound-h2'>{heading}</h2>
          <h5 className='NoQuotesFound-h5'>
                {message}
          </h5>
        </div>
    );
}

export default ViewQuotes;
