import React, {PureComponent} from "react";
import {connect} from "react-redux";

import {getItem} from "../actions/aList-item";
import ItemCart from "../components/itemCart"

class InfoPage extends PureComponent {
    componentDidMount() {
        this.props.getItem(this.props.routeState.match.params.id)
    }

    render() {
        const {loading, item, error} = this.props;
        const {content, title} = item;

        if (error) return (<h1>sorry Error</h1>);

        const cartData = {
            content,
            title,
            loading
        }

        return (
            <>
                <ItemCart {...cartData}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({...state.reList_item});
const mapDispatchToProps = (dispatch) => ({
    getItem: (id) => dispatch(getItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)