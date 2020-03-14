import React,{useEffect, useState} from "react";
import {List, Row, Col} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getData, getDataThunk, getDataSaga} from "../actions/aList"
import reList from "../reducers/reList";


const list_options = (data,loading)=> ({
    dataSource:data,
    itemLayout:"vertical",
    size:"large",
    pagination: {
        onChange: page => {
            console.log(page);
        },
        pageSize: 32,
    },
    loading: loading? true:false,
    size:"large",
    grid:{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
        xxl: 3,
    },

});
const ListPage = (props) => {
    console.log(props);

    useEffect(()=>{
       props.getData();
    },[]);

    return (
        <>
            <Row>
                <Col span={24} style={{padding:"10px"}}>
            <List
                {...list_options(props.data, props.loading)}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                    >
                        <List.Item.Meta
                            title={<Link to={`/${item._id}`}>{item.title} {item.id}</Link>}
                        />
                    </List.Item>
                )}
            />
                </Col>
            </Row>
        </>
    );
};
ListPage.defaultProps = {
    data:[{
        _id:1,
        title:"nothing"
    }]
}

const mapStateToProps = (state)=>{
    console.log(state)
    return ({...state.reList})
};
const mapDispatchToProps = (dispatch)=>({
    getData:()=>dispatch(getData()),
});


export default connect(mapStateToProps,mapDispatchToProps)(ListPage)
