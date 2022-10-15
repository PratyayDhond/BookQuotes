import './ConfirmPopup.css'


const ConfirmPopup = ({message}) =>{
    console.log(message);
    return(
        <>
            <div className='ConfirmPopup-box'>
            <div className='ConfirmPopup-height'></div>
                <div className='ConfirmPopup-box-confirmed'>
                    Quote submitted Successfully!
                </div>
                <div className='ConfirmPopup-height'></div>
                <div className='ConfirmPopup-box-green'>
                    
                </div>
            </div>
        </>
    )
}

export default ConfirmPopup;