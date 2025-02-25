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
              <img src="https://smkbitalaga.sch.id/uploads/gallery/media/avatar-staff.png" className="thumb-md rounded-circle" />
            )}
        
      </div>
      <div className="user-info">
        <div className="dropdown">
        <font color="#0285b4"><b>{this.props.dataUserLogin.nama}</b>
        {this.props.checkLogin === false ? (
              <>
          
              </>
            ) : (
              <>
              <br/>
              Selamat Datang
              </>
            )}
        </font>
        </div>
      </div>
    </div>
    <div id="sidebar-menu">
      <ul className="metismenu" id="side-menu">

                <li>
        <Link to="/kuliners">
          <Fitur onClick={() => this.props.history.push("/")}>
            <i className="fas fa-utensils" /><span> Masak apa hari ini ? </span>
          </Fitur>
          </Link>
        </li>
        <li>
        <Link to="/request-resep">
          <Fitur onClick={() => this.props.history.push("/request-resep")}>
            <i className="far fa-comment " /><span> Request Resep </span>
          </Fitur>
          </Link>
        </li>
              
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