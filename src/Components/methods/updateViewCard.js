import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import {userFavourites, isuserFavouritesArrayEmpty, setIsuserFavouritesArrayEmpty, setUserFavourites, setMessage} from '../../App'
import {getUserFavouriteQuotesAndIsAdmin } from '../Pages/AddQuote'
import {setFavouriteClicked} from '../Pages/ViewQuotes'

async function update(id, isFavourite, userID) {
    var db = firebase.firestore();
    try{
        var favourites = userFavourites;
        if(favourites.length === 0 && !isuserFavouritesArrayEmpty){
            setIsuserFavouritesArrayEmpty(true);
            getUserFavouriteQuotesAndIsAdmin();
            favourites = userFavourites;
        }

        if(isFavourite){
            setMessage("Quote added to Favourites :)")
            setFavouriteClicked(true);
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
            setUserFavourites(favourites);
        }else{
            setMessage("Quote Removed from favourites")
            setFavouriteClicked(true)
            var temp = [];
            favourites.forEach(element => {
                if(element !== id)
                    temp.push(element);
            });
            favourites = temp;
            await db.collection("users").doc(userID).update({
                favourite:favourites
            });
            setUserFavourites(temp);
        }
        
    }catch(e){
        console.log(e);
    }

}

export default update;