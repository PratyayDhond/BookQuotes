import React from "react";
import './MenuBar.css'
import { useNavigate, useLocation } from 'react-router-dom'

const MenuBar = () => {
    var navigate = useNavigate();
    const {state} = useLocation();

    return(
        <>
            <div className="MenuBar">
                <div className="MenuBarComponent">

                        <div className="MenuBarContent" onClick={() => {
                               navigate('/searchQuotes', {state:{userID: state.userID}});
                        }}>
                            Search Quotes
                        </div>
                    
                    
                        <div className="MenuBarContent" onClick={() => {
                              console.log(state.userID);
                              navigate('/viewQuotes', {state:{userID: state.userID}});
                        }}>
                        Your Quotes
                        </div>
                </div>
            </div>
        </>
    );
}

export default MenuBar;