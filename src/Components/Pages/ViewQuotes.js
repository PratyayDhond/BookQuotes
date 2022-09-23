import React, { useEffect } from 'react';
import Header from '../Header';
import Quotes from '../QuoteComponents/Quotes';

import getUserFavouriteQuotes from '../methods/getUserFavouriteQuotes';
import getQuotesUploadedByUser from '../methods/getQuotesUploadedByUser';
import Loading from '../FormComponents/Loading'
import BackArrow from '../../elements/backArrow.png'
// import { Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom'
import '../Form.css'

import firebase from 'firebase/compat/app'
import 'firebase/firestore'

async function getFavourites(userID, setUserFavourites){
    await firebase.firestore().collection("users").doc(userID).get().then(snapshot => {
        console.log(snapshot.data().favourite);
        setUserFavourites(snapshot.data().favourite);
    })
}

async function fetch(setViewableQuotes, userID, setLoading){
    var temp = [];
    temp = await getQuotesUploadedByUser(userID);
    console.log(temp)
    setViewableQuotes(temp);
    setLoading(false);
}



async function fetchFavourites(setViewableQuotes, userID, setLoading, userFavourites){
    setLoading(true);
    var temp = [];
    temp = await getUserFavouriteQuotes(userID, userFavourites);
    console.log(temp);
    setViewableQuotes(temp);
    setLoading(false);
}

const ViewQuotes = () =>{ 
    const[userFavourites, setUserFavourites] = React.useState([])
    var [viewableQuotes, setViewableQuotes] = React.useState([]);
    var [loading, setLoading] = React.useState(false);
    const [viewPage, setViewPage] = React.useState(0);
    var navigate = useNavigate();
    const {state} = useLocation();
    console.log(state.userID);


    useEffect(()=> {
            fetch(setViewableQuotes, state.userID, setLoading);
            getFavourites(state.userID, setUserFavourites)
        console.log(viewableQuotes);
        //eslint-disable-next-line
    },[]);

    // useEffect(()=>{
    //     if()
    //     setViewableQuotes([]);
    // },[viewPage])
    // },[]);

    // console.log(viewableQuotes);
        
        return(
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
                <div>

                {/* <div className="ViewQuotesSwitch">
                    <div className="ViewQuotesSwitch-Component">
                        <div className='ViewQuotesSwitch-Content'>
                            Your Quotes
                        </div>
                        <div className="ViewQuotesSwitch-Content">
                            Favourites
                        </div>
                    </div>
                </div> */}

                <div>
                    <div className="ViewQuotesSwitch">
                        <div className='ViewQuotesSwitch-Content' onClick={() => {
                            setViewPage(0);
                            setLoading(true);
                            fetch(setViewableQuotes, state.userID, setLoading);
                            }}>Your Quotes</div> 
                        |
                        <div className='ViewQuotesSwitch-Content' onClick={() => {
                            setViewPage(1);
                            setLoading(true);
                            fetchFavourites(setViewableQuotes, state.userID, setLoading, userFavourites);
                            }}>Favourites</div>
                    </div>
                </div>

                </div>
                { loading ? <Loading/> : viewableQuotes.length === 0 ? <NoQuotesFound />:  <Quotes userFavourites={userFavourites} userID={state.userID} quotes={viewableQuotes} /> }
            </div>
        );
};

const NoQuotesFound = () => {
    console.log(" HI XD")
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
