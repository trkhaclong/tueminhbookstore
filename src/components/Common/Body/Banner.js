import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Banner extends Component{
    render(){
        return(
                <div className="col-sm-3 col-md-3 col-xs-6 block-item no-padding hidden-xs">
                    <div className="banner-home-inner ">
                        <Link to={this.props.link}>
                            <img src={this.props.img} alt=""/>
                        </Link>
                    </div>
                </div>
        )
    }
}

export default Banner;