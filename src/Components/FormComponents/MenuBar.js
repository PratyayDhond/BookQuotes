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
                    <span className="MenuBarContent">
                        Edit Quote
                    </span>    
                    
                    
                    <Link to="viewQuotes" state={{quotes}} className="MenuBarContent" >
                    {/* <Link to={{pathname:"viewQuotes", state:{quotes:quotes} }} className="MenuBarContent" > */}
                        Your Quotes
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MenuBar;