import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Fitur } from "../../../component"
import { connect } from "react-redux"
import logo from '../../../adm.jpg';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    doLogout = () => {
      if(window.confirm("yakin ingin keluar dari sistem ?")){
           this.props.logoutAction()
        }else{

        }
    }

    render() {
       
        return (

<>
<div className="left side-menu side-menu-light">
  <div className="slimscroll-menu" id="remove-scroll">
    <div className="user-details">
      <div className="float-left mr-2">
      {this.props.checkLogin === false ? (
              <>
          
              </>
            ) : (
              <img src={logo} className="thumb-md rounded-circle" />
            )}
        
      </div>
      <div className="user-info">
        <div className="dropdown">
        <font color="#0285b4"><b>{this.props.dataUserLogin.nama}</b></font>
        </div>
      </div>
    </div>
    <div id="sidebar-menu">
      <ul className="metismenu" id="side-menu">

      {this.props.checkLogin === false ? (
              <>
                <li>
        <Link to="/films">
          <Fitur onClick={() => this.props.history.push("/")}>
            <i className="fa fa-home" /><span> Home </span>
          </Fitur>
          </Link>
        </li>
        <li>
        <Link to="/login">
          <Fitur onClick={() => this.props.history.push("/login")}>
            <i className="fas fa-key"/><span> Login </span>
          </Fitur>
          </Link>
        </li>

        <li>
        <Link to="/register">
          <Fitur onClick={() => this.props.history.push("/register")}>
            <i className="fas fa-folder-open"/><span> Register </span>
          </Fitur>
          </Link>
        </li>
              </>
            ) : (
              <>
                <li>
        <Link to="/">
          <Fitur onClick={() => this.props.history.push("/")}>
            <i className="fa fa-home" /><span> Home </span>
          </Fitur>
          </Link>
        </li>
        <li>
        <Link to="/logout">
          <Fitur redirect={() => { this.doLogout()}}>
            <i className="fas fa-sign-out-alt" /><span> Logout </span>
          </Fitur>
          </Link>
        </li>
              </>
            )}
              
      </ul>
    </div>
    <div className="clearfix" />
  </div>
</div>

            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);