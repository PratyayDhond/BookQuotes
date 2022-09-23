import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

async function update(id, isFavourite, userID) {
    var db = firebase.firestore();

    try{
        var favourites = [];
            await db.collection("users").doc(userID).get().then((snapshot) => {
                favourites = snapshot.data().favourite;
            });

        if(isFavourite){
            console.log("In Add")

            var alreadyExists = false;
            favourites.forEach(element => {
                if(element === id)
                    alreadyExists = true;
            });
            if(!alreadyExists)
                favourites.push(id);
            console.log(favourites);
            
            
            await db.collection("users").doc(userID).set({
                favourite: favourites
            })
        }else{
            console.log("In remove")
            var temp = [];
            favourites.forEach(element => {
                if(element !== id)
                    temp.push(element);
            });
            favourites = temp;
            console.log(favourites);
            await db.collection("users").doc(userID).set({
                favourite:favourites
            });
        }
        
    }catch(e){
        console.log(e);
    }


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
        userID: data[0].userID || ""
        
    }).then(()=>{

    })
    }catch(e){
        console.log(e);
    };
} 

export default update;