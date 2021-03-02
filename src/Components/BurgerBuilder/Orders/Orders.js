import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchOrders } from "../../../Redux/ActionCreators";
import Order from "./Order/Order"
import Spinner from "../../Spinner/Spinner"
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
        // console.log(this.props);
    }
    render() {
        let orders = null;
        if (this.props.orderErr) {
            orders = <p className="commonStyle2">"Sorry Failed to Load Orders"</p>
        } else {
            if (this.props.orders.length === 0) {
                orders = <p className="commonStyle2">"Sorry You Have No Orders"</p>
            } else {
                orders = this.props.orders.map(order => {
                    return <Order order={order} key={order.id} />
                })
            }
        }
        return (
            <div>
                {this.props.orderLoading ? <Spinner /> : orders}
            </div>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)