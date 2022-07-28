import React, { Component } from 'react';
import { Link, useParams } from "react-router-dom"


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          films :{},
            url : ""
        }
    }
    render() {
        const { thumb,title,times, portion, linkUrl} = this.props
        return (
          <div className="col-md-6 col-lg-6 col-xl-3">
  <div className="card m-b-30">
  <div className="waves-effect" onClick={this.props.onClick}>
  <Link to={linkUrl}>
    <img className="card-img-top img-fluid" src={thumb} height={75}  alt="Card image cap" />
    </Link>
  </div>
    <div className="card-body">
      <h4 className="card-title font-16 mt-0">{title}</h4>
      <button className="btn btn-primary btn-sm"><i className="fas fa-clock" /> {times}</button>&nbsp;
      <button className="btn btn-success btn-sm"><i className="fas fa-utensils" /> {portion}</button>&nbsp;
    </div>
  </div>
</div>
        );
    }
}

export default Card;