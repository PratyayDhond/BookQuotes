import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import { setQuotes, quotes } from '../../App'; 

async function deleteCurrentQuote(quote){
    console.log(quote);
    console.log("Inside Delete Quote")
    try{
        var db = firebase.firestore();
        db.collection("quotes").doc(quote.id).delete().then(()=>{
            //Updating the current quotes array
            //Removing the deleted quote from the array of Quotes
            var temp = [];
            quotes.forEach(q => {
                if(q.id !== quote.id)
                    temp.push(q);
            })
            setQuotes(temp);
        })
    }catch(e){
        console.log(e);
    }
}

export default deleteCurrentQuote;