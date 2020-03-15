import React, {useContext} from "react";
import {Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import * as firebase from "firebase";

import context from "../api-context/context";



function AppMenu() {

    const {pathname} = useLocation();

    const {logged, authHandler} = useContext(context);

    const signOut = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
        localStorage.removeItem("token")
        authHandler(false)
    }

    return (
        <Menu selectedKeys={[pathname]} mode="horizontal" theme="dark">
            <Menu.Item key="/">
                <Link to="/">React@@@</Link>
            </Menu.Item>
            {logged? null : (<Menu.Item key="/login"><Link to="/login">Log in</Link></Menu.Item>)}
            {logged? null : (<Menu.Item key="/register"><Link to="/register">Register</Link></Menu.Item>)}
            {logged? (<Menu.Item key="/login"><Link to="/" onClick={signOut}>Sign out</Link></Menu.Item>) : null}
        </Menu>
    );

}

export default AppMenu