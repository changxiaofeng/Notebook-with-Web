import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import './login.scss';


class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="login-page">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />
                    </Form.Item>
                    <Form.Item>
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        <a href="/#/Register/3">Log in</a>
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Login;