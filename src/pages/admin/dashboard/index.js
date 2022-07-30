import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
  IsiBody, Button,
  HeaderContent, 
  Content, Card} 
  from "../../../component"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kuliner : [],
            update : {},
            page: 1,
            rowsPerPage: 10,
            totalRows: 100
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


    getKulinerKlikNext() {
      let pageAKtif=this.state.page+1
      this.setState({
        page : pageAKtif
      });
      let url = `https://masak-apa-tomorisakura.vercel.app/api/recipes/${pageAKtif}`;
  
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


    getKulinerKlikPrevious() {
      let pageAktif=0
      if (this.state.page === 1) {
          pageAktif = 1
          this.setState({
            page : pageAktif
          });
      }else{
          pageAktif = this.state.page-1
          this.setState({
            page : pageAktif
          });
      }
      
      let url = `https://masak-apa-tomorisakura.vercel.app/api/recipes/${pageAktif}`;
  
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
        this.getKuliner()
      }else{
        
        let url = `https://masak-apa-tomorisakura.vercel.app/api/search/?q=${keyword}`;
    
        Promise.all([
          fetch(url),
          fetch("https://masak-apa-tomorisakura.vercel.app/api/category/recipes")
        ])
          .then(([response, response2]) =>
            Promise.all([response.json(), response2.json()])
          )
          .then(([json, res]) => {
            this.setState({
              kuliner: json.results
            });
    
          })
    
          .catch(() => {
            
          });
  
      }
  
  }
  

    componentDidMount() {
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
                      let url = `/kuliner/detail/${b.key}`;
                        return (
                          <Card
                            key={index}
                            thumb={b.thumb}
                            title={b.title}
                            times={b.times}
                            portion={b.portion}
                            linkUrl={url}
                            onClick={() => this.props.history.push(url)}
                          />
)
})
}

     </div>

     <table width="100%">
<tr>
  <td><Button className="btn btn-outline-info waves-effect waves-light form-control" onClick={() => this.getKulinerKlikPrevious()}><i className="fas fa-step-backward" /> Halaman Sebelumnya</Button><br/>
</td>
  <td><center><p align="center"><br/>Halaman : {this.state.page}</p></center></td>
  <td><Button className="btn btn-outline-primary waves-effect waves-light form-control" onClick={() => this.getKulinerKlikNext()}> Halaman Selanjutnya <i className="fas fa-step-forward " /></Button>
</td>
</tr>
</table>

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