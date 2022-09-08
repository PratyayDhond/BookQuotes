import React from 'react';
import Header from '../Header';
import '../Home/Home.css'
import LoginPage from '../Home/LoginForm';
// import HomeIllustration from '../../elements/HomeIllustration.svg'

const Home = ({email, setEmail, password, setPassword, confirmPassword, setConfirmPassword}) => {

    return(
        <>
            <div >
                {/* <img src={HomeIllustration} alt="Illustration" className="Home-Illustration" /> */}
            </div>
            
            <div className='Home-Header'>
                <Header />
            </div>

            <div className='Home-divSlash'>
                <div className='Home-Slash'></div>
            </div>           

            <div className='Home-Login'>
                <LoginPage email={email} setEmail={setEmail} password={password} setPassword={setPassword} setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword}/>
            </div>

        </>
    );

}

export default Home;