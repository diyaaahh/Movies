import React from "react";
import './popup.css';
function SharePopup({closePopup})
{
    return(
        <div className="popupbg">
            <div className="popupcontainer1">
                <div className="facebooklogo">
                <img src="images/Facebook-logo.png" alt="facebook logo">
                </img>
                </div>
                <div className="twitterlogo">
                    <img src="images/twitter-logo.webp" alt="twitter logo"></img>
                </div>
                <button onClick ={()=>{closePopup(false)}}className="cancelbutton">
                    Cancel
                </button>
            </div>
        </div>
    );
}
export default SharePopup;