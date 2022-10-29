import Header from '../Header'
import Form from '../Form'
import React from 'react'
import Home from './Home'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import Loading from '../FormComponents/Loading'
import ConfirmPopup from '../ConfirmPopup'
import { useLocation } from 'react-router-dom'
import {quotesCalled,userID, setUserID, quotes, setQuotes, setQuotesCalled, userFavourites, setUserFavourites, loading, setIsAdmin, setIsuserFavouritesArrayEmpty, message, setLoading} from '../../App.js'


async function getUserFavouriteQuotesAndIsAdmin(userID){
    await firebase.firestore().collection("users").doc(userID).get().then(r => {
        setUserFavourites(r.data().favourite);
        if(r.data().favourite.length === 0)
            setIsuserFavouritesArrayEmpty(true);
        setIsAdmin(r.data().isAdmin);
    }).finally(() => {
        // Updates the quotes to add the favourite quotes of the user
        var temp = [];
        quotes.forEach( q => {
            var obj = q;
            if(userFavourites.includes(q.id)){
                obj.isFavourite = true;
            }
            temp.push(obj);
        });
        setQuotes(temp);
        setLoading(false);

    })
}

async function getQuotes ()  {
    setQuotesCalled(true);
    try{
        var firebaseQuotes = [];

        await firebase.firestore().collection("quotes").get().then((querySnapshot) =>  {
                querySnapshot.forEach(e => {
                    var data = e.data();
                    data.id = e.id;
                    data.isFavourite = false;
                    firebaseQuotes.push(data);
                });
        }).finally(()=> { 
            // alert(firebaseQuotes.length)
            setQuotes(firebaseQuotes)
            setLoading(false);

        })
    }catch(e){
        console.log(e);   
    }
}   

var setSubmitted;


const AddQuote = () => {
    const [quoteSubmitted, setQuoteSubmitted] = React.useState(false);
    setSubmitted = setQuoteSubmitted;
    const {state} = useLocation();
    React.useEffect(() => {
        if(userID === null){
            if(state === null){
                window.history.pushState({}, null, "/");
            }else{
                setUserID(state.userID);
                if(!quotesCalled){
                    if(quotes.length === 0) 
                        getQuotes()
    
                        // BOOKMARK POSSIBLY GLITCHY
                    if(userFavourites.length === 0){
                        getUserFavouriteQuotesAndIsAdmin(state.userID);
                    }
                }
            }
        }
        //eslint-disable-next-line
    },[])

    return(
        <>
            {
                (state === null && userID === null)
                ?
                <div>
                    <Home></Home>
                </div>
                :
                <div>
                    <Header />
                    {
                        (quotes.length === 0 && loading) ? <Loading /> : <Form/>        
                    }
            
                    { 
                        quoteSubmitted 
                        ? <ConfirmPopup message={message} setSubmitted={setSubmitted}/>
                        : <div></div>
                    }  
                </div>
                
            }
        </>
    )
}
export {getQuotes, getUserFavouriteQuotesAndIsAdmin, setSubmitted};
export default AddQuote;

