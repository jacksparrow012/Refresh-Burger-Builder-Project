import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchOrders } from "../../../Redux/ActionCreators"
const mapStateToProps = state => {
    return {
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderErr: state.orderErr
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
    }
}
class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders()
    }
    componentDidUpdate() {
        console.log(this.props);
    }
    render() {
        let orders = this.props.orders.map(order => {
            console.log(order)
        })
        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);