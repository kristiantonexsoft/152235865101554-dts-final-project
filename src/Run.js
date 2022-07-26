import React, { Component } from 'react';
import App from './App';
import { connect } from "react-redux"

class Run extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  showPage = () => {
    // if (this.props.checkLogin == true && this.props.dataUserLogin.role == "Admin") {
    //     console.log("isLogin", this.props.checkLogin)
    //     console.log("Role", this.props.dataUserLogin.role)
    //     console.log("nama", this.props.dataUserLogin.nama)
    //    return <App/>
    // }

    return <App/>
}

  render() {
    return (
      <>
      {this.showPage()}
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
    keluar: () => dispatch({ type: "LOGOUT_SUCCESS" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Run);