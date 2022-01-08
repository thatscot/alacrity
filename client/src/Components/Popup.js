import React from "react";
import AddTask from "./Add-Task/AddTask";

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={() => props.close(false)}>x</span>
                {/* {props.content} */}
                <AddTask />
            </div>
        </div>
    );
};

export default Popup;