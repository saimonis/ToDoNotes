import React, {PureComponent} from "react";
import {List, Row, Col} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getData} from "../actions/aList"


const list_options = (data,loading)=> ({
    dataSource:data,
    itemLayout:"vertical",
    size:"large",
    pagination: {
        pageSize: 32,
    },
    loading: loading? true:false,
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

class ListPage extends PureComponent {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <>
                <Row>
                    <Col span={24} style={{padding: "10px"}}>
                        <List
                            {...list_options(this.props.data, this.props.loading)}
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
    }
}

const mapStateToProps = (state)=>{
    return ({...state.reList})
};
const mapDispatchToProps = (dispatch)=>({
    getData:()=>dispatch(getData()),
});


export default connect(mapStateToProps,mapDispatchToProps)(ListPage)
