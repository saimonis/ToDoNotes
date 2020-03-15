import React, { PureComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout } from "antd";

import "./index.css"
import AppMenu from "components/menu";
import Routes from "components/routes";
import store from "../store";

const { Header, Footer, Content } = Layout;

class App extends PureComponent {
    render() {
        return (
            <>
                <Provider store={store}>
                    <BrowserRouter>
                        <Layout>
                            <Header>
                                <AppMenu />
                            </Header>
                            <Content>
                                <Routes />
                            </Content>
                            <Footer>
                                <h2>Footer 5</h2>
                            </Footer>
                        </Layout>
                    </BrowserRouter>
                </Provider>
            </>
        );
    }
}

export default App;
