
import './QuoteCard.css'

const QuoteCard = ({quote}) => {
    console.log(quote.quote);
    console.log(quote.author)
    var date = new Date(quote.time);
    return(
        <>
            <div className='quoteCard'>
                <div className='cardContent'>

                    <div className='quote'>
                        {/* 'A man who does not care for his body, won't ever care for his soul!  */}
                        {quote.quote}
                    </div>

                    <div className='author'>
                       - {quote.author == null ? "Anonymous" : quote.author}
                       {/* Stocius */}
                    </div>

                </div>

            <div className='cardFooter'>
                <div className='timeStamp'>
                    {date.toLocaleTimeString().substring(0,5) } {date.toLocaleTimeString().substring(9,11)}
                </div>

                <div className='favourite'>
                            {/*Work on this heart here and adds to favourite //BOOKMARK */}
                </div>
            </div>

            </div>
        </>
    );
}

export default QuoteCard;