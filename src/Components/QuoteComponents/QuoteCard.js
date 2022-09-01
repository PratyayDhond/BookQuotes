
import './QuoteCard.css'

const QuoteCard = ({quote}) => {
    console.log(quote.quote);
    console.log(quote.author)
    return(
        <>
            <div className='quoteCard'>
                <div className='favourite'>
                    {/*Work on this heart here and adds to favourite //BOOKMARK */}
                </div>
                <div className='quote'>
                    {/* 'A man who does not care for his body, won't ever care for his soul!  */}
                    {quote.quote}
                </div>
                <div className='author'>
                   - {quote.author == null ? "Anonymous" : quote.author}
                   {/* Stocius */}
                </div>
                {/* <div className='TimeStamp'>
                    Timestamp
                </div> */}
            </div>
        </>
    );
}

export default QuoteCard;