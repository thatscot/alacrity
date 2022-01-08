import React from "react";

const Toggle = (props) => {
    return (
        <div className="togglle-btn">
            <input type="checkbox" name="toggle" id="toggle" onChange={props.handleCheck} />
            <label id="toggle-label" htmlFor="toggle"></label>
        </div>
    );
};

export default Toggle;