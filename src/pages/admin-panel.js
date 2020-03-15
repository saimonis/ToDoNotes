import React from "react";
import {Button, Col, Form, Input, Row, Upload} from "antd";
import * as firebase from "firebase";
const { TextArea } = Input;

const writeUserData = (title, content, imageUrl = null) => {
    const id = new Date().valueOf();
    firebase.database().ref(`data/${id}`).set({
        _id: id,
        title,
        content,
        image: imageUrl
    });
};

const normFile = e => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};


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

const NewPublic = () => {

    const onFinish = values => {
        let uploaded = "null"
        const {title, content} = values;
        if(values.upload){
            uploaded = values.upload[0].thumbUrl
        }
        writeUserData(title, content, uploaded)

        console.log(values)

        alert('ok')
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
                label="title"
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please input your title!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="content"
                name="content"
                rules={[
                    {
                        required: true,
                        message: 'Please input your content!',
                    },
                ]}
            >
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="longgggggggggggggggggggggggggggggggggg"
            >
                <Upload name="logo" action="" listType="picture">
                    <Button>
                        Click to upload
                    </Button>
                </Upload>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>

    );
}

const withGrid = (Component) => {

    return (props) => {
        return (
            <Row justify="center" align="middle" style={{minHeight: "100vh"}}>
                <Col span={8}>
                    <Component {...props}/>
                </Col>
            </Row>
        )
    }
}

export default withGrid(NewPublic)