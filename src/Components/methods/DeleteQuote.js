import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

async function deleteCurrentQuote(quote,setViewableQuotes){
    console.log(quote);
    console.log("Inside Delete Quote")
    try{
        var db = firebase.firestore();
        db.collection("quotes").doc(quote.id).delete().then(()=>{
            setViewableQuotes([]);
        })
    }catch(e){
        console.log(e);
    }
}

export default deleteCurrentQuote;