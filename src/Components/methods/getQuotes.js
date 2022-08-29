import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

async function getQuotes ()  {
    try{
        var firebaseQuotes = [];
        await firebase.firestore().collection("quotes").get().then((querySnapshot) =>  {
                querySnapshot.forEach(e => {
                    var data = e.data();
                    firebaseQuotes.push(data);
                });
    
        }).finally(()=> { 
            console.log("Firebase Quotes : ")
            console.log(firebaseQuotes.);
            return firebaseQuotes;
        })
    }catch(e){
        console.log(e);   
    }
}

export default getQuotes;