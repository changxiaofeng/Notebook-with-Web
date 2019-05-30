import React, { Component } from 'react';
import { Button, Layout, Form, Input, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './app.scss';
import '../sign/login.scss';

const { Content, Sider, Header, Footer } = Layout;

class App extends Component{
  _renderFullPage () {
    const pathname = window.location.pathname;
    console.log(pathname);
    return(
      <>
        {
          pathname.indexOf('login') !== -1 ? null : (
            <Header className="myHeader">
              <p>
                已有账号，<Link to="sign/login">请登录</Link>
              </p>
            </Header>
          )
        }
        <Content>
          <div className="app-page" style={{color: '#000'}}>
            app-page
          </div>
        </Content>
      </>
    )
  }
  render() {
    return (
      <Layout className="app" style={{color: '#fff'}}>
        {this._renderFullPage()}   
      </Layout>
    );
  }
}

export default App;
