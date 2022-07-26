import React, { Component } from 'react';
import logo from '../../../logout.png';
import { Button, FormLogin } from "../../../component"

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
            <>

    <FormLogin>
                <center><img src={logo} height="475" alt="Logo"/><br/>
                <Button onClick={() => this.props.history.push("/login")} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-angle-double-left " /><span> Login Kembali</span>
                </Button>
                </center>

    </FormLogin>
            </>
        );
    }
}
  
  export default Logout;