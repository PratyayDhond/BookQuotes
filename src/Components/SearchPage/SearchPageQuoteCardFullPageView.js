import React from "react";
import './SearchPageQuoteCardFullPageView.css'
import BackArrow from '../../elements/backArrow.png'
import Check from '../../elements/heartChecked.png'
import UnCheck from '../../elements/heartUnchecked.png'
import getTime from "../methods/getTime";
import Edit from '../../elements/edit.svg'
import EditQuote from "./EditQuote";
import Delete from '../../elements/delete.svg' 
import DeleteConfirmation from '../SearchPage/DeleteConfirmation'
import firebase from "firebase/compat/app";
import 'firebase/firestore'


const SearchPageQuoteCardFullPageView = ({isAdmin, userID, deleteQuote, setDeleteQuote, confirmDelete, setConfirmDelete,searchQuery, setSearchQuery, setViewableQuotes, quote,viewQuoteCard,setViewQuoteCard, isFavourite, setIsFavourite, editQuote, setEditQuote}) => {
    var time = getTime(quote.time);
    //deleteQuote={deleteQuote} setDeleteQuote={setDeleteQuote} confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete}
    var source = quote.source;
    if(source.length !== 0)
        source = "(" + source + ")";
    return(
        <div className="SeachPageQuoteCardFullPageView-background">

            <div className="SearchPageQuoteCardFullPageView-Card">
        {deleteQuote ? <DeleteConfirmation userID={userID} setViewQuoteCard={setViewQuoteCard} setDeleteQuote={setDeleteQuote} quote={quote} setViewableQuotes={setViewableQuotes}/> : <div></div>}
            
                    <img src={BackArrow} alt="Go Back" onClick={() => {setViewQuoteCard(false)}} draggable="false" className="SearchPageQuoteCardFullPageView-BackArrow"/>
                   
                    <img src={Edit} alt="EditQuote" className="SearcPageQuoteCardFullPageView-EditIcon" onClick={async ()=>{
                        console.log("Edit Quote Clicked");
                        if(userID === quote.userID){
                                setEditQuote(true);
                        }else{
                            var isAdmin = false;
                            await firebase.firestore().collection("users").doc(userID).get().then(r => {
                                isAdmin = r.data().isAdmin;
                             }) 
                            if (isAdmin){
                                setEditQuote(true)
                                console.log("IsAdmin -> " + isAdmin)
                            }
                            else{
                                setEditQuote(false);
                                alert("You cannot edit a quote submitted by other user! Notify us about anything wrong with the quote.")
                                // #BOOKMARK add mail to admin feature
                            }
                        }

                        }}/>

                    
                        <img src={Delete} alt="Delete" className="SearchPageQuoteCardFullPageView-Delete" onClick={async ()=> {
                            if(userID === quote.userID){
                                setDeleteQuote(true);
                            }else{
                                var isAdmin = false;
                                await firebase.firestore().collection("users").doc(userID).get().then(r => {
                                isAdmin = r.data().isAdmin;
                                });
                                if(isAdmin){
                                    setDeleteQuote(true);                                    
                                }else{
                                    alert("You cannot delete the quotes submitted by other users")
                                }   
                            }

                            }}/>

                    <div className='SearchPageQuoteCardFullPageView-TimeStamp'>
                    {time.day}{time.ordinals} {time.monthString}, {time.year}
                    </div>
                 
                    <div className='SearchPageQuoteCardFullPageView-Quote'>
                        <span className='SearchPageQuoteCardFullPageView-DoubleQuotes'>“</span>
                            {quote.quote}
                        <span className='SearchPageQuoteCardFullPageView-DoubleQuotes'>”</span>
                    </div>

                    <div className='SearchPageQuoteCardFullPageView-Author'>
                        -{quote.author === "" ? "Anonymous" : quote.author}
                    </div>

                    <div className="SearchPageQuoteCardFullPageView-Source">
                        {source}
                    </div>

                    <div className='SearchPageQuoteCardFullPageView-favourite'>
                        {
                            isFavourite? 
                            <img src={Check} className="heart" alt="Checked" onClick={() => {setIsFavourite(false); console.log('check')}}/> :
                            <img src={UnCheck} className="heart" alt="UnChecked" onClick={() => {setIsFavourite(true); console.log('Uncheck')}}/>
                        }
                    </div>

            </div>
        {editQuote ? <EditQuote setViewQuoteCard={setViewQuoteCard} searchQuery={searchQuery} setSearchQuery={setSearchQuery}  setViewableQuotes={setViewableQuotes} originalQuote={quote} setEditQuote={setEditQuote}/> : <div></div>}
        </div>

    )
}

export default SearchPageQuoteCardFullPageView;