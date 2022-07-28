import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
  Card,
  Button,
  IsiBody,
  HeaderContent, 
  Content,
  Modal} from "../../../component"
  import { Link, useParams } from "react-router-dom"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films :{},
            url : ""
        }
    }

    getFilms() {
  
      let url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=212c17f768fb1b37d54968403dc1a500`;
  
      Promise.all([
        fetch(url)
      ])
        .then(([response]) =>
          Promise.all([response.json()])
        )
        .then(([json]) => {

          let img = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${json.backdrop_path}`;
          this.setState({
            films: json,
            url : img
          });

          console.log("gambar", this.state.url)
  
        })
  
        .catch(() => {
          
        });
    }
  

    componentDidMount() {
      this.getFilms()
    }

    checkAkses = () =>{
     if (this.props.checkLogin === false) {
        this.props.history.push("/login");
        alert("Anda harus login terlebih dahulu!!")
      }
    }

  render() {

 console.log(this.state.films)
 this.checkAkses()

        return (
            <>
    <Content>
    <HeaderContent>
    <h3 className="page-title"><b><i className="fab fa-pied-piper-alt" />&nbsp;Detail Film : {this.state.films.original_title}</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Informasi Bioskop</li>
            </ol>
            <div className="state-information d-none d-sm-block">
           
            </div>
    </HeaderContent>
    <IsiBody>
    
    <div className="row">  

    
  <div className="col-lg-4 col-md-6 col-5">
    <center><img src={this.state.url}/>
    <br/><br/>
    <button className="btn btn-primary" onClick={() => this.props.history.push("/films")}>
                     <i className="fas fa-angle-double-left" />&nbsp;Kembali
            </button>
    </center>  
  </div>
  <div className="col-lg-8 col-md-6 col-7">
    <table width="99%" cellPadding={5}>
      <tbody>
        <tr>
          <td width={220}>Judul Film</td>
          <td>:</td>
          <td>{this.state.films.original_title}</td>
        </tr>

        <tr>
          <td>Subtitle Film</td>
          <td>:</td>
          <td>{this.state.films.original_language}</td>
        </tr>

        <tr>
          <td>Deskripsi Film</td>
          <td>:</td>
          <td>{this.state.films.overview}</td>
        </tr>
        <tr>
          <td>Tanggal Release</td>
          <td>:</td>
          <td>{this.state.films.release_date}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>:</td>
          <td>{this.state.films.status}</td>
        </tr>
        <tr>
          <td>TagLine</td>
          <td>:</td>
          <td>{this.state.films.tagline}</td>
        </tr>
        <tr>
          <td>Rating</td>
          <td>:</td>
          <td>{this.state.films.vote_average} dari 10 (Dinilai {this.state.films.vote_count} Orang)</td>
        </tr>
      </tbody></table>
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
  dataUserLogin: state.AReducer.userLogin
})

const mapDispatchToProps = dispatch => {
  return {
    keluar: () => dispatch({ type: "LOGOUT_SUCCESS" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);