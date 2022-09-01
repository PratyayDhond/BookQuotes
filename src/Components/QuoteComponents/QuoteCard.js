import './QuoteCard.css'
import Check from '../../elements/heartChecked.png'
import UnCheck from '../../elements/heartUnchecked.png'
import React from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

async function update(id, isFavourite) {
    var db = firebase.firestore();
    try{
    var data = [];
    await db.collection("quotes").doc(id).get().then((snapshot) => {
        data.push(snapshot.data());
        
    })
    // console.log(data[0]);
    // console.log(data[0].quote);
    // console.log(data[0].author);
    // console.log(data[0].isFavourite);
    // console.log(data[0].time);
    
    db.collection("quotes").doc(id).set({
        quote: data[0].quote,
        author: data[0].author || "",
        time: data[0].time,
        isFavourite: isFavourite
    }).then(()=>{

    })
    }catch(e){
        console.log(e);
    };
} 

const QuoteCard = ({quote}) => {
    // console.log(quote.quote);
    // console.log(quote.author);
    const[isFavourite, setIsFavourite] = React.useState(quote.isFavourite);
    React.useEffect(()=>{
        // console.log("In UseEffect" + quote.isFavourite)
        update(quote.id, isFavourite);

    },[isFavourite, quote.id]);
    var date = new Date(quote.time);

    return(
        <>
            <div className='quoteCard'>
                <div className='cardContent'>

                    <div className='quote'>
                        {quote.quote}
                    </div>

                    <div className='author'>
                       - {quote.author === "" ? "Anonymous" : quote.author}

                    </div>

                </div>

            <div className='cardFooter'>
                <div className='timeStamp'>
                    {date.getHours()} : {date.getMinutes()}, {date.toLocaleDateString()}
                </div>

                <div className='favourite'>
                    {
                        isFavourite? 
                        <img src={Check} className="heart" alt="Checked" onClick={() => {setIsFavourite(false); console.log('check')}}/> :
                        <img src={UnCheck} className="heart" alt="UnChecked" onClick={() => {setIsFavourite(true); console.log('Uncheck')}}/>
                    }
                            {/*Work on this heart here and adds to favourite //BOOKMARK */}
                </div>
            </div>

            </div>
        </>
    );
}

export default QuoteCard;