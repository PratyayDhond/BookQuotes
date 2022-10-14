import React from 'react';
import './loading.css'

import { HashLoader} from 'react-spinners';
const Loading = ({submitQuoteClicked}) => {


    return(
        <>
        {/* #BOOKMARK why is this loading=submitQuoteClicked here? */}
                <HashLoader speedMultiplier={1} size={65} className='loading' loading={submitQuoteClicked} color={"#faebd7"}/>
        </>
    );
}

export default Loading;