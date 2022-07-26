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
    <h3 className="page-title"><b><i className="fab fa-pied-piper-alt" />&nbsp;Daftar Film Bioskop</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Informasi Bioskop</li>
            </ol>
            <div className="state-information d-none d-sm-block">
           
            </div>
    </HeaderContent>
    <IsiBody>
    <input type="text" onChange={this.searchData} name="cari" placeholder="Masukan Judul Film" className="form-control"/>   
    <br/>
    <div className="row">  

    {
                    this.state.films.map((b, index) => {     
                      let img = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${b.backdrop_path}`;
                      let url = `/film/detail/${b.id}`;
                        return (

  <div className="col-md-6 col-lg-6 col-xl-3" key={index}>
  <div className="card m-b-30">
  <Link to={url}>
  <div className="waves-effect" onClick={() => this.props.history.push(url)}>
    <img className="card-img-top img-fluid" src={img} alt="Card image cap" />
  </div>
  </Link>
    <div className="card-body">
      <h4 className="card-title font-16 mt-0">{b.original_title}</h4>
    </div>
  </div>
</div>

)
})
}


     </div>

          </IsiBody>
    </Content>

    <Modal id="bb">
<div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header bg-primary">
        <h6 className="modal-title"><font color="white">Form Data Divisi</font></h6>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div className="modal-body">
          
          

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary mr-1" data-dismiss="modal" value="close">
            <i className="fas fa-times" />&nbsp;Keluar
          </button>
          <Button className="btn btn-primary" onClick={this.setDivisi}>
            <i className="fa fa-save" />&nbsp;Simpan
          </Button>
        </div>
    </div>
  </div>
  </Modal>


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