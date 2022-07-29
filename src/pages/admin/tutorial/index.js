import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
  IsiBody,
  HeaderContent, 
  Content, Fieldset, Button} from "../../../component"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {    
            url : "",
            komentar : "",
            nama : this.props.dataUserLogin.nama, 
            postingan : "request"
        }
    }

    setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
      }
  
      sendKomentar= el =>{
        let obj = this.state
        if(obj.komentar !== ""){
          this.props.saveKomentar(obj);
            this.clear()
            let url = `/request-resep`;
            this.props.history.push(url)
        }
      }
  
      clear = () => {
        this.setState({ 
          komentar : ""
        })
    }
  

   
  render() {
    
        return (
            <>
    <Content>
    <HeaderContent>
    <h3 className="page-title"><b><i className="fas fa-utensils" />&nbsp;&nbsp; Mau dibuatkan resep makanan kesukaan anda ?? Yuk tulis di kolom komentar!</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active"></li>
            </ol>
            <div className="state-information d-none d-sm-block">
           
            </div>
    </HeaderContent>
    <IsiBody>

      {this.props.checkLogin === false ? (
              <>
                 <center><h4><b>Silahkan login terlebih dahulu</b></h4><img src="https://img.freepik.com/premium-vector/login-access-denied-vector-illustration-system-refuses-password-error-entry-computer-device-showing-user-does-have-permission-website-mobile-development_2175-1276.jpg?w=740" /></center>
              </>
            ) : (
              <>
              <h4><b> <i className="far fa-comment " /> Request Resep : </b></h4>
        {
                    this.props.komentarList.filter(a => a.postingan === "request").map((b, index) => {     
                        return (
                          <div className="alert alert-secondary" role="alert">
      <font color="#0285b4">
        <table>
                          <tr key={index}>
            <td width={180}><img src='https://smkbitalaga.sch.id/uploads/gallery/media/avatar-staff.png' height={50}/> <b>{b.nama}</b>
            </td>
            <td>" {b.komentar} "</td>
          </tr>
          </table>
        </font>

     </div>
)
})
}

<Fieldset>
                 <textarea className="form-control" name="komentar" value={this.state.komentar} onChange={this.setValue} rows="3"></textarea>
          </Fieldset>
          <Button className="btn btn-primary" onClick={this.sendKomentar}>
            <i className="fas fa-location-arrow " />&nbsp; Kirim Komentar &nbsp;&nbsp;
          </Button>  
              </>
            )}
     
        


    
          </IsiBody>
    </Content>


            </>
        );
    }
}


const mapStateToProps = state => ({
  checkLogin: state.AReducer.isLogin,
  dataUserLogin: state.AReducer.userLogin,
  komentarList: state.KReducer.komentar
})

const mapDispatchToProps = dispatch => {
  return {
    keluar: () => dispatch({ type: "LOGOUT_SUCCESS" }),
    saveKomentar: (data)=> dispatch({type:"SAVE_MASAKAN", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);