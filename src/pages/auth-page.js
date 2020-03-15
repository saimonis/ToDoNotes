import React, {useContext} from "react";
import * as firebase from "firebase";
import {Form, Input, Button, Checkbox, Col, Row} from "antd";

import context from "../api-context/context";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const FormAuth = () => {
    const {authHandler} = useContext(context);

    const onFinish = ({email,password}) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res)=>{
                firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                    localStorage.setItem('token', idToken);
                }).catch(function(error) {
                    // Handle error
                });


                authHandler(true)
            })
            .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (

        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

const withGrid = (Component) => {

    return (props) => {
        return (
            <Row justify="center" align="middle" style={{minHeight:"100vh"}}>
                <Col span={8}>
                    <Component {...props}/>
                </Col>
            </Row>
        )
    }
}
export default withGrid(FormAuth)
