import React from "react";
import './MenuBar.css'
import { Link } from "react-router-dom";
const MenuBar = ({quotes, setLoading, setQuotes}) => {
    // console.log(quotes)
    // const path = {
    //     pathname:'',
    //     state
    // }

    return(
        <>
            <div className="MenuBar">
                <div className="MenuBarComponent">

                    <Link to="/searchQuotes" className="MenuBarContent" >
                        Search Quotes
                    </Link>    
                    
                    
                    <Link to="/viewQuotes"  className="MenuBarContent" >
                    {/* <Link to={{pathname:"viewQuotes", state:{quotes:quotes} }} className="MenuBarContent" > */}
                        Your Quotes
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MenuBar;