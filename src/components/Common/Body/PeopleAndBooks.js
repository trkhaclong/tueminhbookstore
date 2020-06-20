import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PeopleAndBooks extends Component {
    render(){
        return(
            <div className="col-sms-4 col-sm-4 col-md-4">
                <Link to={this.props.link}><img className="lazyloaded" style={{height: '214px'}} src={this.props.img} alt=""/></Link>
                <Link to={this.props.link}><div className="cms-top-authors-img-name">{this.props.name}</div></Link>
            </div>
        )
    }
}

export default PeopleAndBooks;