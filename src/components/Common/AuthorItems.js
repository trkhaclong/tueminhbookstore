import React, {Component} from 'react';

import Slider from 'react-slick';

import API from '../../utils/api';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as SiteActions from '../../store/actions/siteActions';

class AuthorItems extends Component {

    componentDidMount
    

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return(
            <div>
            
                <Slider {...settings}>
                    <div>
                        <h5>1</h5>
                    </div>
                    <div>
                        <h5>2</h5>
                    </div>
                </Slider>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    site: state.site,
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorItems);