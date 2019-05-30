import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './sign/login';
import Register from './sign/register';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/Register/:id" component={Register}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;