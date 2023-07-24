import React from "react";

const Child = ({changeState}) => {
    return(
        <div>
            <h1>Child Component</h1>
            <input type="text" onChange={(e) => changeState(e.target.value)}></input>
        </div>
    )
}

export default Child