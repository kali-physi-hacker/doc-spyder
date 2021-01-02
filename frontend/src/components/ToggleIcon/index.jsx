import React, {useState} from "react";


const ToggleIcon = props => {
    const [toggled, setToggled] = useState(!!props.toggle)
    const outerStyle = {
        position: "relative",
        width: 55,
        height: 25,
        borderRadius: 22,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 20,
        cursor: "pointer",
        backgroundColor: toggled ? props.bg : "#fff",
        border: !toggled ? "1px solid #dcdcdc" : "",
        display: "inline-block",
    }
    const innerStyle = {
        position: "absolute",
        width: 20,
        height: 21,
        top: toggled ? 2 : 1,
        left: toggled ? 32 : 2,
        backgroundColor: toggled ? "white" : props.bg,
        borderRadius: "50%",
        transition: "all 0.1s ease-out",
    }

    return (
        <div onClick={props.onClick} style={{"display": "flex", "alignItems": "center"}}>
            <span onClick={e => setToggled(!toggled)} style={outerStyle}>
                <span className={"shadow"} style={innerStyle}></span>
            </span> <span>Am a doctor </span>
        </div>
    )
}


export default ToggleIcon