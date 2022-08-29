import React from 'react';
import './loading.css'
import { HashLoader} from 'react-spinners';
const Loading = ({submitQuoteClicked, }) => {
    // const [time,setTime] = React.useState(3);
    // const timeLeft = () => {
    //     setTimeout(() => {
    //         setTime(time-1);
    //         timeLeft();
    //     },1000) 
    // }

    return(
        <>
                <HashLoader speedMultiplier={1} size={65} className='loading' loading={submitQuoteClicked} color={"#faebd7"}/>
        </>
    );
}

export default Loading;