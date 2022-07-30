import React, { Component } from 'react';
import { connect } from "react-redux"
import { Button,
  Input,
 FormLogin} from "../../../component"
 import swal from "sweetalert";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username:"",
          password:""
      }
    }

    setValueInput = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    doLogin = userObj => {
      const { username, password} = userObj

      if(username == "" || password == ""){
        swal("Gagal", "Username atau Password harus diisi..." , "error");  
      }else{

        let validLogin = this.props.dataUser.filter(user => {
          return user.username === username && user.password === password
        })

        let dataLogin = this.props.dataUser.filter(user => {
            return user.username === username 
        })
    
        if(validLogin.length > 0){
            this.props.submitLogin({userData: dataLogin[0]})
            this.props.history.push("/")
        }else{
          swal("Gagal !", "Username atau Password salah..." , "error");
             this.props.history.push("/login")
        }

      }
      
    }

    render() {
      console.log(this.props.dataUser)
      const { username, password} = this.state
        return (
            <div className="content-page">
            {/* Start content */}
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-title-box">
                    
                      <ol className="breadcrumb">
                       
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="page-content-wrapper">
                  <div className="row">
                    <div className="col-xl-12 col-md-6">
                      <div className="card bg-primary mini-stat position-relative">
                        <div className="card-body">
                          <div className="mini-stat-desc">
                            <h6 className="verti-label text-white-50">Bioskop</h6>
                            <div className="text-white">
                              <h6 className="mt-0 text-white-50"></h6>
                              <h4 className="mb-3 mt-0"><b></b></h4>
                            </div>
                            <div className="mini-stat-icon">
                              <i className="fas fa-clock  display-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>

                    <FormLogin>
                <h2><center><img src="https://cdn0.iconfinder.com/data/icons/basic-11/97/16-512.png" height={150}/><br/><br/>LOGIN</center></h2>
                
                <Input type="text" placeholder="Masukan Username" name="username" onChange={this.setValueInput}/><br/>
                <Input type="password"  placeholder="Masukan Password" name="password" onChange={this.setValueInput}/><br/>
            <Button className="btn btn-primary waves-effect waves-light form-control" onClick={() => this.doLogin({username, password})}><i className="fas fa-sign-in-alt" /> Login</Button>
    </FormLogin>
                  
                  
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

const mapStateToProps = state => ({
  checkLogin: state.AReducer.isLogin,
  dataUserLogin: state.AReducer.userLogin,
  dataUser: state.UReducer.users
})

const mapDispatchToProps = dispatch => {
  return {
    keluar: () => dispatch({ type: "LOGOUT_SUCCESS" }),
    submitLogin: (data) => dispatch({ type: "LOGIN_SUCCESS", payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);