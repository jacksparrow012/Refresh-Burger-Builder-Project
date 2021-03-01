import React from 'react';

const Order = (props) => {
    const ingredientSummary = props.order.ingredients.map(item => {
        return (
            <span key={item.type} style={{
                border: "1px solid grey",

                borderRadius: "5px",
                padding: "5px",
                marginRight: "15px"
            }} > {item.amount} x <span style={{ textTransform: "capitalize" }}> {item.type}</span> <span>

                </span></span>
        )
    })
    return (

        <div style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "15px"
        }}>

            <p className="commonStyle">Order Number:{props.order.id}</p>
            <p className="commonStyle">Delivery Address:{props.order.customer.deliveryAddress}</p>
            <p className="commonStyle">Phone No:{props.order.customer.phone}</p>
            <p className="commonStyle"> Payment Type:{props.order.customer.paymentType}</p>
            <hr />
            {ingredientSummary}
            <hr />
            <p className="commonStyle">Total:{props.order.price}BDT</p>
        </div>
    );
};

export default Order;