import './EditQuote.css'
import React from 'react'

import BackArrow from '../../elements/backArrow.png'

import Header from '../Header'

const EditQuote = ({quote,setEditQuote}) => {
    var tempQuote = quote;

    return(
        <>
            <div className='EditQuote-Background'>
                {/* BackArrow */}
                <img src={BackArrow} alt="Go Back" className='EditQuote-BackArrow' onClick={()=>{setEditQuote(false)}} />

                <Header/>

            </div>
        </>
    )
}

export default EditQuote;