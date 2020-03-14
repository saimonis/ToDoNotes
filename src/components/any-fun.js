import React,{memo} from "react";

function f(props) {
    // console.log("rendered")
    return <h3>{props.text} {props.num||0}</h3>
}

export default memo(f)