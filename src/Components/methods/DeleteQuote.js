import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import { setQuotes, quotes } from '../../App'; 

async function deleteCurrentQuote(quote, setSearchQuery){
    try{
        var db = firebase.firestore();
        db.collection("quotes").doc(quote.id).delete().then(()=>{
            //Updating the current quotes array
            //Removing the deleted quote from the array of Quotes
            var temp = [];
            quotes.forEach(q => {
                // comparting the whole quotes objects directly because the quotes do not have the parent IDs
                if(q !== quote){
                    temp.push(q);
                }
            })
            setQuotes(temp);
            setSearchQuery("");
        })
    }catch(e){
        console.log(e);
    }
}

export default deleteCurrentQuote;