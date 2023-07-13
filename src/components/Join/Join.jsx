import React from "react";
import "./Join.css";

const Join = () => {
    return (
        <div className="join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">Ready to</span>
                    <span> Level up</span>
                </div>
                <div>
                    <span>your body</span>
                    <span className="stroke-text"> with us?</span>
                </div>
            </div>
            <div className="right-j">
                <form action="" className="email-container">
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Enter your Email Address here..."
                    />
                    <button type="submit" className="btn btn-j">
                        Join now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Join;
