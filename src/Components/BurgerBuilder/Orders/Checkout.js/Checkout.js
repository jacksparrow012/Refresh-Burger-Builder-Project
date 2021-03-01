import React, { Component } from 'react';
import { Button } from "reactstrap"
class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery"
        }
    }
    goBack = () => {
        this.props.history.push("/")
    }
    inputChangeHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        })
    }
    submitHandler = (e) => {
        console.log(this.state.values);
    }
    render() {

        return (
            <div>
                <form style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                }}>
                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" placeholder="Your Delivery Address" onChange={(e) => this.inputChangeHandler(e)}>
                    </textarea>
                    <br />
                    <input name="phone" value={this.state.values.phone} className="form-control" placeholder="Your Phone Number" onChange={(e) => this.inputChangeHandler(e)} />
                    <br />
                    <select name="paymentType" className="form-control" value={this.state.values.paymentType} onChange={(e) => this.inputChangeHandler(e)}>
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="Bkash">Bkash</option>
                    </select>
                    <br />
                    <Button style={{
                        backgroundColor: "#D70F64"
                    }} className="mr-auto" onClick={this.submitHandler}>Place Order</Button>
                    <Button className="btn btn-primary ml-1" onClick={this.goBack}>Cancel</Button>
                </form>
            </div>
        );
    }
}

export default Checkout;