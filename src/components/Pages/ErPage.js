import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ErPage extends Component {
    render(){
        return(
            <div className="error-text-area section-padding">
                <img alt="" src="img/404-page.jpg" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="error-text text-center">
                                <h1>OPPS! PAGE NOT FOUND</h1>
                                <Link to="/">BACK TO HOME PAGE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ErPage;