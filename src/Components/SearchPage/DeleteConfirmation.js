import './DeleteConfirmation.css'
import deleteCurrentQuote from '../methods/DeleteQuote'
import { setMessage } from '../../App';
import {setIconClicked} from '../Pages/SearchQuotes'
const DeleteConfirmation = ({setSearchQuery, setDeleteQuote, quote, setViewQuoteCard}) => {
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
                    <div className='yes DeleteConfirmation-Button' onClick={()=>{
                            setDeleteQuote(false);
                            setViewQuoteCard(false);
                            deleteCurrentQuote(quote, setSearchQuery);
                            setMessage("Quote Deleted Successfully")
                            setIconClicked(true);
                        }}>
                        Yes
                    </div>
                    <div className='DeleteConfirmation-Button no' onClick={()=>{setDeleteQuote(false);}}>
                        No
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteConfirmation;