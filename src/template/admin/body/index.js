import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import { 
     Dashboard, Login, Register, Logout, Detail} from "../../../pages/admin"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
 
        return (
            <Switch>
            <Route exact path="/" component={props =>   <Dashboard {...props} />}/>
            <Route path="/films" component={props => <Dashboard {...props} />} />
            <Route path="/film/detail/:id" component={props => <Detail {...props} />} />
            <Route path="/login" component={props => <Login {...props} />} />
            <Route path="/register" component={props => <Register {...props} />} />
            <Route path="/logout" component={props => <Logout {...props} />} />
            </Switch>
        )
    }
}

export default Body;