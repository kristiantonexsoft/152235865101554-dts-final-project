import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import { Login, P403, Logout} from "../../../pages"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
 
        return (
            <Switch>
            <Route exact path="/" component={props =>   <Login {...props} />}/>
            <Route path="/p403" component={props =>   <P403 {...props} />}/>
            <Route path="/logout" component={props =>   <Logout {...props} />}/>
            </Switch>
        )
    }
}

export default Body;