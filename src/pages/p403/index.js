import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import logo from '../../error.png';
import { Button, FormLogin } from "../../component"

class p403 extends Component {
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
                <Button onClick={() => this.props.history.push("/")} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-angle-double-left " /><span> Kembali ke Halaman Login</span>
                </Button>
                </center>
                
    </FormLogin>

            </>
        );
    }
}

const mapStateToProps = state => ({
    checkLogin: state.AReducer.isLogin,
    dataUser: state.UReducer.users
  })
  
  const mapDispatchToProps = dispatch => {
    return {
      submitLogin: (data) => dispatch({ type: "LOGIN_SUCCESS", payload: data })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(p403);