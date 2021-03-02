import React from 'react';
import Logo from "../../assets/logo.png";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,

} from "reactstrap"
import "./Header.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux"
const mapStateToProps = state => {
    return {
        token: state.token
    }
}
const Header = props => {
    let links = null;
    if (props.token === null) {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact to="/login" className="NavLink">Log In</NavLink>
                </NavItem>
            </Nav>
        )
    } else {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact to="/" className="NavLink">Burger_Builder</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to="/logout" className="NavLink">Log Out</NavLink>
                </NavItem>
            </Nav>
        )
    }
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px"
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand  	 d-none d-sm-block" >
                    <img src={Logo} alt="logo" width="80px" />
                </NavbarBrand>
                {links}
            </Navbar>
        </div>
    );
};

export default connect(mapStateToProps)(Header);