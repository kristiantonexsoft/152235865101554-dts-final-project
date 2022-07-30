import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
  Input,
  Button,
  Textarea,
  Label,
  Fieldset,
  IsiBody,
  HeaderContent, 
  Content} from "../../../component"
  import swal from "sweetalert";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username : "",
          password : "",
          nama : ""
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  setRegistrasi= el =>{
      let obj = this.state

  if(obj.username === "" || obj.nama === "" || obj.password === ""){

    swal("Gagal !", "Nama User, Username atau Password harus diisi" , "error");

  }else{
      var indexDivisi = this.props.dataUsers.map(function(e) { return e.username; }).indexOf(obj.username);

      if(indexDivisi >=0){
        swal("Gagal !", "Username sudah ada!! Silahkan masukan nama lain..." , "error");
      }else{
          this.props.saveRegister(obj);
          this.clear()
          swal("Sukses", "Registrasi berhasil... Silahkan login" , "success");
          this.props.history.push("/login")
      }
      
  }

  }

 
  clear = () => {
      this.setState({ 
        username : "",
        password : "",
        nama : ""
      })
  }


    render() {
        return (
            <>
    <Content>
    <HeaderContent>
            <ol className="breadcrumb">
           
            </ol>
            <div className="state-information d-none d-sm-block">
            </div>
    </HeaderContent>
    <IsiBody>
    <h2><center><img src="https://cdn0.iconfinder.com/data/icons/basic-11/97/16-512.png" height={135}/><br/>REGISTER</center></h2>
    <Fieldset>
      
            <Label>Nama Pengguna <font color="red">*</font></Label>
            <Input type="text" name="nama" required="required" value={this.state.nama} onChange={this.setValue}/>
          </Fieldset>

          <Fieldset>
            <Label>Username <font color="red">*</font></Label>
            <Input type="text" name="username" required="required" value={this.state.username} onChange={this.setValue}/>
          </Fieldset>

          <Fieldset>
            <Label>Password <font color="red">*</font></Label>
            <Input type="password" name="password" required="required" value={this.state.password} onChange={this.setValue}/>
          </Fieldset>
          <Button className="btn btn-primary" onClick={this.setRegistrasi}>
            <i className="fa fa-save" />&nbsp; Register
          </Button>
          </IsiBody>
    </Content>

            </>
        );
    }
}

const mapStateToProps = state => ({
  dataUsers: state.UReducer.users
})

const mapDispatchToProps = dispatch => {
  return {
    saveRegister: (data)=> dispatch({type:"SAVE_REGISTER", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);