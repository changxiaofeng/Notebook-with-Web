import React from 'react';
import {HashRouter, Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from './sign/login';
import Register from './sign/register';

const BasicRoute = () => (
    <HashRouter history={BrowserRouter}>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/Register/:id" component={Register}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;