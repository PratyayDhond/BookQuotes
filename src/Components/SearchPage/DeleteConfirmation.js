import './DeleteConfirmation.css'
import deleteCurrentQuote from '../methods/DeleteQuote'

const DeleteConfirmation = ({setDeleteQuote, quote, setViewQuoteCard, setViewableQuotes}) => {
    return(
        <>
            <div className='DeleteConfirmationArea'>
                <div className='DeleteConfirmationArea-text'>
                    Are you sure you want to delete this quote?
                </div>

                <div className='DeleteConfirmation-Quote'>
                    “{quote.quote}”
                </div>


                <div className='DeleteConfirmation-ButtonsDiv'>
                    <div className='yes DeleteConfirmation-Button' onClick={()=>{setDeleteQuote(false); setViewQuoteCard(false);deleteCurrentQuote(quote, setViewableQuotes)}}>
                        Yes
                    </div>
                    <div className='DeleteConfirmation-Button no' onClick={()=>{setDeleteQuote(false);console.log("Delete Quote nope")}}>
                        No
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteConfirmation;