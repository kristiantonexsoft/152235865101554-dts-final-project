import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
  Card,
  Button,
  IsiBody,
  HeaderContent, 
  Content,
  Modal} from "../../../component"
  import { Link} from "react-router-dom"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films : [],
            page: 0,
            rowsPerPage: 20,
            totalRows: 0
        }
    }

    getFilms(rowsPerPage) {
      if(rowsPerPage){
  
      }else{
        rowsPerPage = this.state.rowsPerPage
      }
  
      let url = `https://masak-apa-tomorisakura.vercel.app/api/recipes`;
  
      Promise.all([
        fetch(url)
      ])
        .then(([response]) =>
          Promise.all([response.json()])
        )
        .then(([json]) => {
          this.setState({
            films: json.results
          });
  
        })
  
        .catch(() => {
          
        });
    }
  

    componentDidMount() {
      this.getFilms()
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  searchData= el=>{
    var keyword = el.target.value;

    if(keyword === ""){
      this.getFilms()
    }else{
      
      let url = `https://api.themoviedb.org/3/search/movie?api_key=212c17f768fb1b37d54968403dc1a500&query=${keyword}`;
  
      Promise.all([
        fetch(url)
      ])
        .then(([response]) =>
          Promise.all([response.json()])
        )
        .then(([json]) => {
          this.setState({
            films: json.results
          });
  
        })
  
        .catch(() => {
          
        });

    }

}



    render() {
 console.log(this.state.films)
        return (
            <>
    <Content>
    <HeaderContent>
    <h3 className="page-title"><b><i className="fab fa-pied-piper-alt" />&nbsp; Menu</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">152235865101554-dts-final-project</li>
            </ol>
            <div className="state-information d-none d-sm-block">
           
            </div>
    </HeaderContent>
    <IsiBody>
    <input type="text" onChange={this.searchData} name="cari" placeholder="Masukan Judul Film" className="form-control"/>   
    <br/>
    <div className="row">  

    

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