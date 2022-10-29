import firebase from "firebase/compat/app";
import 'firebase/firestore'

async function getFavourites(userID, setUserFavourites){
    await firebase.firestore().collection("users").doc(userID).get().then(snapshot => {
        setUserFavourites(snapshot.data().favourite);
    })
}

export default getFavourites;
