import React, { Component } from 'react';
import logo from '../../../logo.png';
import swal from 'sweetalert';
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';
import { 
  Button
} from "../../../component";
import { connect } from "react-redux"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    doLogout = () => {
      swal({
        title: "Apakah anda yakin ?",
        text: "Anda akan keluar dari sistem...",
        icon: "warning",
        buttons: true,
        dangerMode: false,
      })
      .then((logout) => {
        if (logout) {
          this.props.logoutAction()
          this.props.history.push("/login")
        } else {
          swal("Batal !", "Logout dibatalkan...", "error");
        }
      });
      
    }

    render() {
        return (
            <div className="topbar">
            <div className="topbar-left">
              <a className="logo">
                <span>
                  <img src={logo} height="65"/>
                </span>
              </a>
            </div>
            <nav className="navbar-custom">
              <ul className="navbar-right d-flex list-inline float-right mb-0">
                <li></li>
                
              </ul>
              <ul className="list-inline menu-left mb-0">
                <li className="float-left">
                  <button className="button-menu-mobile open-left waves-effect waves-light">
                    <i className="mdi mdi-menu" />
                  </button>
                </li>                        
                <li className="d-none d-sm-block">
               
                </li>
              </ul>

              <ul className="list-inline menu-right mb-0">
                <li className="float-right">
                  <br/>

                  {this.props.checkLogin === false ? (
              <>
          <Link to="/login">
                  <Button className="btn btn-outline-primary waves-effect waves-light" onClick={() => this.props.history.push("/login")}>
                    <i className="fas fa-sign-in-alt" /> Login
                  </Button></Link>&nbsp;
                  <Link to="/register">
                  <Button className="btn btn-outline-info waves-effect waves-light" onClick={() => this.props.history.push("/register")}>
                    <i className="fas fa-user-plus" /> Register
                  </Button></Link>&nbsp;
              </>
            ) : (
              <>
              <Button className="btn btn-outline-danger waves-effect waves-light" onClick={() => { this.doLogout()}}>
                    <i className="fas fa-sign-out-alt" /> Keluar
                  </Button>
              </>
            )}

                  
                  
                </li>                        
              </ul>

            </nav>
          </div>
        );
    }
}

const mapStateToProps = state => ({
  checkLogin: state.AReducer.isLogin,
  dataUserLogin: state.AReducer.userLogin
})

const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => dispatch({ type: "LOGOUT_SUCCESS"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(Header));