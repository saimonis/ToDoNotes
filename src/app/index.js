import React, {PureComponent} from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Layout} from "antd";

import "./index.css";
import AppMenu from "../components/menu";
import Routes from "../components/routes";
import store from "../store";
import FirebaseApi from "../api-context/firebase";
import * as firebase from "firebase";
import {ContextProvider} from "../api-context/context"

const {Header, Footer, Content} = Layout;

const api = new FirebaseApi().initializeUser();


class App extends PureComponent {
    state={
        logged:false
    }

    authHandler = (value) => {
        this.setState({logged:value})
        console.log(this.state.logged)
    }

    componentDidMount() {
        const token = localStorage.token;
        if (token) {
            firebase.auth().signInWithCustomToken(token)
                .then(()=>{
                    this.authHandler(true)
                })
                .catch(function (error) {
                // Handle Errors here.
                    console.log(error)
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
        }
    }


    render() {
        const {logged} = this.state.logged
        return (
            <>
                <Provider store={store}>
                    <ContextProvider value={{
                        logged: logged,
                        authHandler:this.authHandler
                    }}>
                        <BrowserRouter>
                            <Layout>
                                <Header>
                                    <AppMenu/>
                                </Header>
                                <Content>
                                    <Routes/>
                                </Content>
                                <Footer>
                                    <h2>Footer 5</h2>
                                </Footer>
                            </Layout>
                        </BrowserRouter>
                    </ContextProvider>
                </Provider>
            </>
        );
    }
}

export default App;
