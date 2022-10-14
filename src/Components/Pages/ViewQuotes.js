import React from 'react';
import Header from '../Header';
import Quotes from '../QuoteComponents/Quotes';
import Home from '../Pages/Home'
import Loading from '../FormComponents/Loading'
import BackArrow from '../../elements/backArrow.png'
import { useNavigate, useLocation } from 'react-router-dom'
import '../Form.css'
//setUserFavourites
import {userFavourites, setQuotes, userID} from '../../App'
import {quotes} from '../../App'
import 'firebase/firestore'

// This function is not needed anymore as userFavourites already has userFavourite Quotes
// async function getFavourites(userID){
//     console.log("Called in ViewQuotes.js -> getFavourites");

//     await firebase.firestore().collection("users").doc(userID).get().then(snapshot => {
//         // console.log(snapshot.data().favourite);
//         setUserFavourites(snapshot.data().favourite);
//     })
// }

// async function fetch(, userID, setLoading){
//     var temp = [];
//     temp = await getQuotesUploadedByUser(userID);
//     // console.log(temp)
//     setViewableQuotes(temp);
//     setLoading(false);
// }

// async 
async function setFavouriteQuotes(setLoading){
    setLoading(true);
    var temp = [];
    
    // temp = await getUserFavouriteQuotes(userID, userFavourites);
    console.log(temp);
    setQuotes(temp);
    setLoading(false);
}


const ViewQuotes = () =>{ 
    var [viewableQuotes, setViewableQuotes] = React.useState(quotes);
    var [loading, setLoading] = React.useState(false);
    const [viewPage, setViewPage] = React.useState(0);
    var navigate = useNavigate();
    const {state} = useLocation();

    var currentlySelectedOpacity = {
        opacity:1,
        fontSize: "2.5vh",
    };

    var CurrentlyNotSelectedOpacity={opacity:0.7};
    // console.log(state.userID);

    if(state === null || userID === null){
        window.history.pushState({}, null, "/");
    }

    //#BOOKMARK -> For Deletion
    // useEffect(()=> {
    //     // if(state !== null){
    //     // fetch(setViewableQuotes, state.userID, setLoading);
    //     // getFavourites(state.userID, setUserFavourites)
    //     // console.log(viewableQuotes);
    //   }
    //eslint-disable-next-line
    // },[state]);

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
                                    setViewableQuotes(quotes);
                                }}>Your Quotes</div> 
                                |
                                <div className='ViewQuotesSwitch-Content' style={viewPage === 1 ? currentlySelectedOpacity : CurrentlyNotSelectedOpacity} onClick={() => {
                                    setViewPage(1);
                                    setLoading(true);
                                    setFavouriteQuotes(setLoading);
                                    }}>Favourites</div>
                            </div>
                        </div>
                                
                        </div>
                        { loading ? <Loading/> : viewableQuotes.length === 0 ? <NoQuotesFound />:  <Quotes userFavourites={userFavourites} userID={state.userID} quotes={viewableQuotes} /> }
                    </div>
                }
            </>
        );
};

const NoQuotesFound = () => {
    return(
        <div className='NoQuotesFound-Div'>
          <h2 className='NoQuotesFound-h2'>You have not uploaded any quotes yet! :(</h2>
          <h5 className='NoQuotesFound-h5'>
            To upload a Quote, go to the AddQuotes page using the back arrow on the top left, and just Add your Quote.
          </h5>
        </div>
    );
}

export default ViewQuotes;
