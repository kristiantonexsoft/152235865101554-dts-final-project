import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
  IsiBody,
  HeaderContent, 
  Content} 
  from "../../../component"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kuliner : [],
            update : {},
            page: 0,
            rowsPerPage: 20,
            totalRows: 0
        }
    }

    getKuliner(rowsPerPage) {
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
            kuliner: json.results
          });
  
        })
  
        .catch(() => {
          
        });
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
  

    componentDidMount() {

      fetch(`https://data.covid19.go.id/public/api/update.json`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Authorization, Content-Type",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
         
          this.setState({
            update: json
          });

        })
        .catch((e) => {
        });

      this.getKuliner()
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
    }

    render() {
      console.log(this.state.update)
        return (
            <>
    <Content>
    <HeaderContent>
    <h3 className="page-title"><b><i className="fas fa-utensils" />&nbsp; Mau masak apa hari ini ?</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Informasi Kuliner</li>
            </ol>
            <div className="state-information d-none d-sm-block">
           
            </div>
    </HeaderContent>
    <IsiBody>
    <input type="text" onChange={this.searchData} name="cari" placeholder="Masukan Kata Kunci Menu Kuliner" className="form-control"/>   
    <br/>
    <div className="row">  

    {
                    this.state.kuliner.map((b, index) => {     
                      
                        return (

  <div className="col-md-6 col-lg-6 col-xl-3" key={index}>
  <div className="card m-b-30">
  {/* <Link to={}> */}
  <div className="waves-effect">
    <img className="card-img-top img-fluid" src={b.thumb} height={75}  alt="Card image cap" />
  </div>
  {/* </Link> */}
    <div className="card-body">
      <h4 className="card-title font-16 mt-0">{b.title}</h4>
    </div>
  </div>
</div>

)
})
}
    

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