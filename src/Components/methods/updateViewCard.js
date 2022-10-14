import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import {userFavourites, isuserFavouritesArrayEmpty, setIsuserFavouritesArrayEmpty} from '../../App'
import {getUserFavouriteQuotesAndIsAdmin } from '../Pages/AddQuote'

async function update(id, isFavourite, userID) {
    var db = firebase.firestore();
    try{
        var favourites = userFavourites;
        if(favourites.length === 0 && !isuserFavouritesArrayEmpty){
            console.log("XD")
            setIsuserFavouritesArrayEmpty(true);
            getUserFavouriteQuotesAndIsAdmin();
            favourites = userFavourites;
        }
        // #BOOKMARK for deletion
        // console.log("Called in updateViewCard.js -> update -> 1");
            // await db.collection("users").doc(userID).get().then((snapshot) => {
            //     favourites = snapshot.data().favourite;
            // });

        if(isFavourite){

            var alreadyExists = false;
            favourites.forEach(element => {
                if(element === id)
                    alreadyExists = true;
            });
            if(!alreadyExists)
                favourites.push(id);
            
            
            await db.collection("users").doc(userID).update({
                favourite: favourites
            })
        }else{
            var temp = [];
            favourites.forEach(element => {
                if(element !== id)
                    temp.push(element);
            });
            favourites = temp;
            await db.collection("users").doc(userID).update({
                favourite:favourites
            });
        }
        
    }catch(e){
        console.log(e);
    }


    //#BOOKMARK -> Marked for removal
    // Reason - Unnecessary data, no need of updating the isFavourite in Quotes as user has his own favourites array itself.
    // // try{
    // var data = [];
    // console.log("Called in updateViewCard.js -> update -> 2");
    // await db.collection("quotes").doc(id).get().then((snapshot) => {
    //     data.push(snapshot.data());
    // })
    
    // db.collection("quotes").doc(id).set({
    //     quote: data[0].quote || "",
    //     author: data[0].author || "",
    //     time: data[0].time || 0, 
    //     source: data[0].source || "",
    //     updateTime: data[0].updateTime || 0,
    //     isFavourite: isFavourite || false,
    //     rating: data[0].rating || 0,
    //     userID: data[0].userID || ""
        
    // }).then(()=>{

    // })
    // // }catch(e){
    // //     console.log(e);
    // // };
} 

export default update;