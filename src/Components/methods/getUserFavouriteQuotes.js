// #BOOKMARK -> Marked for removal

// import firebase from "firebase/compat/app";
// import 'firebase/firestore'

// async function getUserFavouriteQuotes(userID, userFavourites){
//     var temp = [];

// console.log("Called in getUserFavouriteQuotes.js -> getUserFavouriteQuotes -> 1");
//     await firebase.firestore().collection("users").doc(userID).get().then(r => {
//         userFavourites = r.data().favourite;
//     })
//     for(var i = 0; i < userFavourites.length; i++){
//         console.log("Called in getUserFavouriteQuotes.js -> getUserFavouriteQuotes -> 2");
//         // eslint-disable-next-line
//         await firebase.firestore().collection("quotes").doc(userFavourites[i]).get().then((snapshot) =>{
//             var data = snapshot.data();
//             data.id = userFavourites[i];
//             // console.log(snapshot.data().id);
//             temp.push(data);
//         }).catch(e => {console.log(e)});
//     }
//     // console.log(temp);
//     return temp;
// }

// export default getUserFavouriteQuotes;