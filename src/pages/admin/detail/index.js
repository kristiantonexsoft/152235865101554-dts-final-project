import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
  IsiBody,
  HeaderContent, 
  Content} from "../../../component"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kuliner :{},
            author : {},
            step : [],
            bahan : [],
            url : ""
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
    <h3 className="page-title"><b><i className="fas fa-utensils" />&nbsp;&nbsp;{this.state.kuliner.title}</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active"></li>
            </ol>
            <div className="state-information d-none d-sm-block">
           
            </div>
    </HeaderContent>
    <IsiBody>

    <p align="center">
    <h3>{this.state.kuliner.title}</h3><br/>
    <button className="btn btn-primary btn-sm"><i className="fas fa-clock" /> {this.state.kuliner.times}</button>&nbsp;
      <button className="btn btn-success btn-sm"><i className="fas fa-utensils" /> {this.state.kuliner.servings}</button>&nbsp;
      <button className="btn btn-warning btn-sm"><i className="fas fa-info" /> &nbsp; TIngkat Kesulitan : {this.state.kuliner.dificulty}</button>&nbsp;
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
<br/>
      <b><h4>Komentar : </h4></b>
     

        {
                    this.props.komentarList.map((b, index) => {     
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
        


    
          </IsiBody>
    </Content>


            </>
        );
    }
}


const mapStateToProps = state => ({
  checkLogin: state.AReducer.isLogin,
  dataUserLogin: state.AReducer.userLogin,
  komentarList: state.UReducer.komentar
})

const mapDispatchToProps = dispatch => {
  return {
    keluar: () => dispatch({ type: "LOGOUT_SUCCESS" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);