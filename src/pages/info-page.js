import React, {useEffect} from "react";
import {getItem} from "../actions/aList-item";
import {connect} from "react-redux";

const InfoPage = (props) => {
    console.log("router", props)
    useEffect(() => {
        props.getItem(props.routeState.match.params.id)
    }, [])

    const {loading, item, error} = props;

    let result = item.content.match(/(.*)\<div\>(.*)\<\/div\>(.*)/);
    let resultExactly = item.content.match(/\<div\>(.*)\<\/div\>/);
    if(result){



       result = result.map((item,i)=>{
            if(i===0) return null;
            if(item===resultExactly[1]) return (<mark>{item}</mark>)
            return item
        })

        // const jsxheh = (cont) => (<mark>${cont}</mark>)
        // result = item.content.replace(/\<div\>(.*)\<\/div\>/, ("result[1]"))

    }
    // const regContent = (<mark>{result[0]}</mark>)

    const content = (
        <>
            <div className="">{item.title}</div>
            <div className=""><pre>{result}</pre></div>
        </>
    )
    return (
        <>
            {loading ? "loading" : (content || "error")}
        </>
    );
};

const mapStateToProps = (state) => ({...state.reList_item});
const mapDispatchToProps = (dispatch) => ({
    getItem: (id) => dispatch(getItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)