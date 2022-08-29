import React from "react";
import './MenuBar.css'

const MenuBar = () => {
    return(
        <>
            <div className="MenuBar">
                <div className="MenuBarComponent">
                    <span className="MenuBarContent">
                        Add a Quote
                    </span>    
                    
                    <span className="MenuBarContent">
                        Your Quotes
                    </span>    
                </div>
            </div>
        </>
    );
}

export default MenuBar;