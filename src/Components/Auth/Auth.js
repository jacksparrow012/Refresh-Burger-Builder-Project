import React, { Component } from 'react';
import { Formik } from "formik"
import { auth } from "../../Redux/authActionCreators"
import Spinner from "../Spinner/Spinner"
import { connect } from "react-redux"
import { Alert } from 'reactstrap';
const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode))
    }
}
const mapStateToProps = state => {
    return {
        authLoading: state.authLoading,
        authFailedMsg: state.authFailedMsg,
    }
}
class Auth extends Component {
    state = {
        mode: "Sign Up"
    }
    switchModeHandler = () => {
        this.setState({
            mode: this.state.mode === "Sign Up" ? 'Log In' : "Sign Up"
        })
    }
    render() {
        let err = null;
        if (this.props.authFailedMsg !== null) {
            err = (<Alert color="danger">{this.props.authFailedMsg}</Alert>)
        }
        let form = null;
        if (this.props.authLoading) {
            form = <Spinner />
        } else {
            form = (<Formik
                initialValues={
                    {
                        email: "",
                        password: "",
                        passwordConfirm: ""
                    }
                }
                onSubmit={
                    (values) => {
                        this.props.auth(values.email, values.password, this.state.mode)
                    }
                }
                validate={(values) => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = "**Required"
                    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)) {
                        errors.email = "Invalid Email Address"
                    }
                    if (!values.password) {
                        errors.password = "**Required";
                    } else if (values.password.length < 4) {
                        errors.password = "Must be atleast 4 character"
                    }
                    if (this.state.mode === "Sign Up") {
                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = "**Required"
                        }
                        else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = "Two Password field does not match"
                        }
                    }
                    console.log("from errors", errors)
                    return errors
                }}
            >
                {({ values, handleChange, handleSubmit, errors }) => (<div style={{
                    marginTop: "150px",
                    width: "80vw",
                    margin: "0 auto",
                    border: "1px solid grey",
                    borderRadius: "8px",
                    boxShadow: "1px 1px #888888",
                    padding: "15px"
                }}>
                    <button style={{
                        backgroundColor: "#D70F64",
                        color: "white"
                    }} className="btn btn-sm btn-block" onClick={this.switchModeHandler}>Switch To..{this.state.mode == "Sign Up" ? "Log In" : "Sign Up"}</button>
                    <br />

                    <form onSubmit={handleSubmit}>
                        <input
                            name="email"
                            placeholder="Enter Your Email"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <span style={{ color: "red", margin: "5px 1px", fontFamily: "italic", fontSize: "15px" }}>{errors.email}</span>
                        <br />
                        <input
                            name="password"
                            placeholder="Enter Your Password"
                            className="form-control"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <span style={{ color: "red", margin: "5px 1px", fontFamily: "italic", fontSize: "15px" }}>{errors.password}</span>
                        <br />
                        {this.state.mode === "Sign Up" ? <div>
                            <input
                                name="passwordConfirm"
                                placeholder="ReEnter Your Password"
                                className="form-control"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                            />
                            <span style={{ color: "red", margin: "5px 1px", fontFamily: "italic", fontSize: "15px" }}>{errors.passwordConfirm}</span>
                            <br />
                        </div> : null}

                        <button type="submit" className="btn btn-success btn-block btn-sm">{this.state.mode === "Sign Up" ? "Sign Up" : "Log In"}</button>
                    </form>
                </div>)}
            </Formik>)

        }
        return (
            <div>
                {err}
                {form}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);