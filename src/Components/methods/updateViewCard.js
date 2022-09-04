import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

async function update(id, isFavourite) {
    var db = firebase.firestore();
    try{
    var data = [];
    await db.collection("quotes").doc(id).get().then((snapshot) => {
        data.push(snapshot.data());
        
    })
    
    db.collection("quotes").doc(id).set({
        quote: data[0].quote || "",
        author: data[0].author || "",
        time: data[0].time || 0, 
        source: data[0].source || "",
        updateTime: data[0].updateTime || 0,
        isFavourite: isFavourite || false,
        rating: data[0].rating || 0,
    }).then(()=>{

    })
    }catch(e){
        console.log(e);
    };
} 

export default update;