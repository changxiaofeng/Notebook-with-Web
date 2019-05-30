import React from 'react';
import { Button } from 'antd';
import './register.scss'

class register extends React.Component {
    componentDidMount() {
        console.log(this.props.match.params);
    }
    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return(
            <div className="register-page">
                <a href="/">register-page</a> <br /><br /><br />
                <Button onClick={this.goBack}>返回上一页</Button>
            </div>
        )
    }
}
export default register;