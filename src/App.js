import React, {PureComponent} from 'react';
import './App.css';
import AppMenu from "./components/menu";
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/routes";
import {Provider} from "react-redux";
import store from "./store";

import {Layout} from 'antd';

const {Header, Footer, Content} = Layout;


class App extends PureComponent {
    render() {

        return (<>
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Header><AppMenu/></Header>
                        <Content><Routes/></Content>
                        <Footer><h2>Footer 4</h2></Footer>
                    </Layout>
                </BrowserRouter>
            </Provider>
        </>)
    }
}

export default App;
