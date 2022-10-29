import './ConfirmPopup.css'


const ConfirmPopup = ({message, setSubmitted}) =>{
    setTimeout( () => {
        setSubmitted(false);
    }, 3500)
    return(
        <>
            <div className='ConfirmPopup-box'>
            <div className='ConfirmPopup-height'></div>
                <div className='ConfirmPopup-box-confirmed'>
                    {message}
                </div>
                <div className='ConfirmPopup-height'></div>
                <div className='ConfirmPopup-box-green'>
                    
                </div>
            </div>
        </>
    )
}

export default ConfirmPopup;