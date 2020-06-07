import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class IconMenu extends Component {
    render(){
        return (
            <div className="col-sms-3 col-sm-3 col-md-3">
                    <div>
                        <Link to={this.props.link}><img alt="" src={this.props.img} className="center"/></Link>
                    </div>
                <div className="cms-icon-menu-item-name">{this.props.caption}</div>
            </div>
        )
    }
}
export default IconMenu;