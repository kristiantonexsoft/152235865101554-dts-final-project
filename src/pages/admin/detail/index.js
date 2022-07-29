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
            kuliner :{},
            author : {},
            step : [],
            bahan : [],
            url : "",
            komentar : "",
            nama : this.props.dataUserLogin.nama, 
            postingan : this.props.match.params.id
        }
    }

    getKuliner() {
  
      let url = `https://masak-apa-tomorisakura.vercel.app/api/recipe/${this.props.match.params.id}`;
  
      Promise.all([
        fetch(url)
      ])
        .then(([response]) =>
          Promise.all([response.json()])
        )
        .then(([json]) => {
          this.setState({
            kuliner: json.results,
            author : json.results.author,
            step : json.results.step,
            bahan : json.results.ingredient
          });

        })
  
        .catch(() => {
          
        });
    }
  

    componentDidMount() {
      this.getKuliner()
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
          let url = `/kuliner/detail/${this.props.match.params.id}`;
          this.props.history.push(url)
      }
    }

    clear = () => {
      this.setState({ 
        komentar : ""
      })
  }


  render() {
    const stepItems = this.state.step.map((tahap) =>
    <li>{tahap}</li>
    );

    const bahanItems = this.state.bahan.map((bahanMasak) =>
    <li>{bahanMasak}</li>
  );
        return (
            <>
    <Content>
    <HeaderContent>
    <h3 className="page-title"><b><i className="fas fa-utensils" />&nbsp;&nbsp;Masak apa hari ini ? </b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active"></li>
            </ol>
            <div className="state-information d-none d-sm-block">
           
            </div>
    </HeaderContent>


    <IsiBody>

    <div className="row">
  <div className="col-xl-8">
    <div className="card m-b-20">
      <div className="card-body">
       <p align="center">
    <h3><b>{this.state.kuliner.title}</b></h3><br/>
    <button className="btn btn-primary btn-sm"><i className="fas fa-clock" /> {this.state.kuliner.times}</button>&nbsp;
      <button className="btn btn-success btn-sm"><i className="fas fa-utensils" /> {this.state.kuliner.servings}</button>&nbsp;
      <button className="btn btn-warning btn-sm"><i className="fas fa-info" /> &nbsp; Tingkat Kesulitan : {this.state.kuliner.dificulty}</button>&nbsp;
      <br/><br/>
      <i className="fas fa-user" /> Resep by : {this.state.author.user} &nbsp; <i className="fas fa-clock" /> Tanggal Publikasi : {this.state.author.datePublished}
      <br/>
      <img src={this.state.kuliner.thumb} height={300}/>
      </p>
    
      <p align="justify">
      {this.state.kuliner.desc}
      </p>

      <b>Bahan-bahan : </b>
      <ul>{bahanItems}</ul>
      <b>Tahapan Masak : </b>
      <ul>{stepItems}</ul>
      </div>
    </div>
  </div>
  <div className="col-xl-4">
    <div className="card m-b-20">
      <div className="card-body">
        <h4 className="mt-0 header-title"><b>Komentar :</b></h4>
        {
                    this.props.komentarList.filter(a => a.postingan === "komentar").map((b, index) => {     
                        return (
                          <div className="alert alert-secondary" role="alert">
      <font color="#0285b4">
        <table>
                          <tr key={index}>
            <td width={180}><img src='https://smkbitalaga.sch.id/uploads/gallery/media/avatar-staff.png' height={50}/> <b>{b.nama}</b>
            </td>
          </tr>
          <tr>
          <td>{b.komentar}</td>
          </tr>
          </table>
        </font>
     </div>
)
})
}

{
                    this.props.komentarList.filter(a => a.postingan === this.state.postingan).map((b, index) => {     
                        return (
                          <div className="alert alert-secondary" role="alert">
      <font color="#0285b4">
        <table>
                          <tr key={index}>
            <td width={180}><img src='https://smkbitalaga.sch.id/uploads/gallery/media/avatar-staff.png' height={50}/> <b>{b.nama}</b>
            </td>
          </tr>
          <tr>
          <td>{b.komentar}</td>
          </tr>
          </table>
        </font>
     </div>
)
})
}

{this.props.checkLogin === false ? (
              <>
                 <center><b>Silahkan login<br/>untuk menambahkan komentar</b><img src="https://img.freepik.com/premium-vector/login-access-denied-vector-illustration-system-refuses-password-error-entry-computer-device-showing-user-does-have-permission-website-mobile-development_2175-1276.jpg?w=740" height={175}/></center>
              </>
            ) : (
              <>
                 <Fieldset>
                 <textarea className="form-control" name="komentar" value={this.state.komentar} onChange={this.setValue} rows="3"></textarea>
          </Fieldset>
          <Button className="btn btn-primary" onClick={this.sendKomentar}>
            <i className="fas fa-location-arrow " />&nbsp; Kirim Komentar &nbsp;&nbsp;
          </Button>
              </>
            )}
     

      </div>
    </div>
  </div>
</div>
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