//#BOOKMARK
// Marked file for deleting if not being used anywhere.

// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'

// async function getQuotes ()  {
//     try{
//         var firebaseQuotes = [];
//         console.log("Called in getQuotes.js -> getQuotes");
//         await firebase.firestore().collection("quotes").get().then((querySnapshot) =>  {
//                 querySnapshot.forEach(e => {
//                     var data = e.data();
//                     data["id"] = e.id;
                    
//                     // console.log(e.data());
//                     firebaseQuotes.push(data);
//                 });
//         }).finally( ()=>  { 
//         })

//         return firebaseQuotes;
//     }catch(e){
//         console.log(e);   
//     }
// }       

// export default getQuotes;