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

      if(obj.username == ""){
        alert("Username wajib diisi !!!")
      }

      if(obj.password == ""){
        alert("Password wajib diisi !!!")
      }

      if(obj.nama == ""){
        alert("Nama wajib diisi !!!")
    }else{
      var indexDivisi = this.props.dataUsers.map(function(e) { return e.username; }).indexOf(obj.username);

      if(indexDivisi >=0){
          alert("Username sudah ada!! Silahkan masukan nama lain...")
      }else{
          this.props.saveRegister(obj);
          this.clear()
          alert("Data berhasil disimpan !!")
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
            <h3 className="page-title"><b><i className="fab fa-pied-piper-alt" />&nbsp;Register User</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Informasi Bioskop</li>
            </ol>
            <div className="state-information d-none d-sm-block">
            </div>
    </HeaderContent>
    <IsiBody>
    <Fieldset>
            <Label>Nama Pengguna<font color="red">*</font></Label>
            <Input type="text" name="nama" value={this.state.nama} onChange={this.setValue}/>
          </Fieldset>

          <Fieldset>
            <Label>Username<font color="red">*</font></Label>
            <Input type="text" name="username" value={this.state.username} onChange={this.setValue}/>
          </Fieldset>

          <Fieldset>
            <Label>Password <font color="red">*</font></Label>
            <Input type="password" name="password" value={this.state.password} onChange={this.setValue}/>
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