import React from "react";


const Content = props => {
    console.log(props)
    return (
        <div {...props} className={`content ${props.className}`}>
            {props.children}
        </div>
    )
}


export default Content