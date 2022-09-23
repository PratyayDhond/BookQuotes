import firebase from "firebase/compat/app";
import 'firebase/firestore'

async function getUserFavouriteQuotes(userID, userFavourites){
    var temp = [];

    for(var i = 0; i < userFavourites.length; i++){
        await firebase.firestore().collection("quotes").doc(userFavourites[i]).get().then((snapshot) =>{
            temp.push(snapshot.data());
        }).catch(e => {console.log(e)});
    }
    console.log(temp);

    // await userFavourites.forEach(favourite => {
    //      firebase.firestore().collection("quotes").doc(favourite).get().then((snapshot) => {
    //         // console.log(snapshot.data());
    //         temp.push(snapshot.data());
    //     }).catch(e => {console.log(e)});
    // });
    // console.log(temp);
    return temp;
}

export default getUserFavouriteQuotes;