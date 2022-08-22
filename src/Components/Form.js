import React from 'react'
import './Form.css'
import Rating from './Rating'


const Form = () => {
    const [quote,setQuote] = React.useState('');
    const [author,setAuthor] = React.useState('');
    const [rating, setRating] = React.useState(0);

    return(
        <>
            <div className='FormArea'>

                <div className='QuoteForm'>

                    <div className='addAQuote'>Add A Quote!</div>

                    <div>
                        <label htmlFor="quoteInput" className='quoteLabel'>Quote: </label>
                        <input type="text" value={quote} onChange={(e) => {setQuote(e.target.value)}} height='3' className='quoteInput' placeholder='Quote...' />
                    </div>

                    <div className='author'>
                        <label htmlFor="AuthorInput" className='authorLabel'>Author: </label>
                        <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} className='authorInput' placeholder='Author.. Anonymous if left empty' />
                    </div>

                    <Rating rating={rating} setRating={setRating} />

                </div>
            </div>
        </>
    );
}

export default Form;