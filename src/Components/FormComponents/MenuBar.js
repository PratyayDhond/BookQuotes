import React from "react";
import './MenuBar.css'
import { useNavigate, useLocation } from 'react-router-dom'
// import { Link } from "react-router-dom";
const MenuBar = ({quotes, setLoading, setQuotes}) => {
    // console.log(quotes)
    // const path = {
    //     pathname:'',
    //     state
    // }
    var navigate = useNavigate();
    const {state} = useLocation();

    return(
        <>
            <div className="MenuBar">
                <div className="MenuBarComponent">

                    {/* <Link to="/searchQuotes" className="MenuBarContent" > */}
                        <div className="MenuBarContent" onClick={() => {
                               console.log(state.userID);
                               navigate('/searchQuotes', {state:{userID: state.userID}});
                        }}>
                            Search Quotes
                        </div>
                    {/* </Link>     */}
                    
                    
                    {/* <Link to="/viewQuotes"  className="MenuBarContent" > */}
                    {/* <Link to={{pathname:"viewQuotes", state:{quotes:quotes} }} className="MenuBarContent" > */}
                        <div className="MenuBarContent" onClick={() => {
                              console.log(state.userID);
                              navigate('/viewQuotes', {state:{userID: state.userID}});
                        }}>
                        Your Quotes
                        </div>
                    {/* </Link> */}
                </div>
            </div>
        </>
    );
}

export default MenuBar;