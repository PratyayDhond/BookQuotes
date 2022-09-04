import React from "react";
import './SearchPageQuoteCardFullPageView.css'
import BackArrow from '../../elements/backArrow.png'
import Check from '../../elements/heartChecked.png'
import UnCheck from '../../elements/heartUnchecked.png'
import getTime from "../methods/getTime";
import Edit from '../../elements/edit.svg'

const SearchPageQuoteCardFullPageView = ({quote,viewQuoteCard,setViewQuoteCard, isFavourite, setIsFavourite}) => {
    var time = getTime(quote.time);
    var source = quote.source;
    if(source.length !== 0)
        source = "(" + source + ")";
    return(
        <div className="SeachPageQuoteCardFullPageView-background">
            <div className="SearchPageQuoteCardFullPageView-Card">
            
                    <img src={BackArrow} alt="Go Back" onClick={() => {setViewQuoteCard(false)}} draggable="false" className="SearchPageQuoteCardFullPageView-BackArrow"/>
                   
                    <img src={Edit} alt="EditQuote" className="SearcPageQuoteCardFullPageView-EditIcon" onClick={()=>{console.log("Edit Quote Clicked")}}/>

                 
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

                    <div className='SearchPageQuoteCardFullPageView-TimeStamp'>
                        upload time: {time.hour}:{time.minute}, {time.day}-{time.month}-{time.year}
                    </div>


                    <div className='SearchPageQuoteCardFullPageView-favourite'>
                        {
                            isFavourite? 
                            <img src={Check} className="heart" alt="Checked" onClick={() => {setIsFavourite(false); console.log('check')}}/> :
                            <img src={UnCheck} className="heart" alt="UnChecked" onClick={() => {setIsFavourite(true); console.log('Uncheck')}}/>
                        }
                    </div>


            </div>
        </div>
    )
}

export default SearchPageQuoteCardFullPageView;