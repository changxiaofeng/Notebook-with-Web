import React, { Component } from 'react';
import { Button, Layout } from 'antd';
import './App.css';

const { Content, Sider, Header, Footer } = Layout;

class App extends Component{
  _renderFullPage () {
    return(
      <Content>
        Content  
      </Content>
    )
  }
  render() {
    return (
      <Layout className="app" style={{color: '#fff'}}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          {this._renderFullPage()}   
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
