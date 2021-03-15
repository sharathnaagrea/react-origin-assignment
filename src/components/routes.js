import React, { Component } from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import EmployeeList from './employee-list';
import NotFound from './not-found';


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={EmployeeList} ></Route>
                <Route path="*" component={NotFound} ></Route>
            </Switch>
        );
    }
}

export default Routes;