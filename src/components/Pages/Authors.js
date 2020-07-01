import React, {Component} from 'react';
import {connect} from 'react-redux';

import {withRouter, Link} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';


import image from '../assets/img/banner/banner0.png';

import Button from '@material-ui/core/Button';

import AuthorItems from '../Common/AuthorItems';


const authors = [
    {}
];

const styles = theme => ({
    storeButton: {
        width: '250px',
        margin: '10px auto',
        display: 'block',
        fontSize: '14px',
        marginBottom: '10px',
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#ff9800',
        borderRadius: '25px'
    },
    buttonSize: {
        fontSize: 'large',
        padding: '0',
        width: '100%'
    },
})

class Authors extends Component {

    componentDidMount() {
        
    }
    render(){
        const {classes} = this.props;
        return(
            <>
                <div className="page-empty-banner col-lg-12 col-md-12 col-sm-12">
                    <div className="page-banner page-banner-tm">
                        <Link to="/">
                            <img src={image} alt="" />
                        </Link>
                    </div>
                    <div className="col-main">
                        <div className="container">
                            <div className={classes.storeButton}>
                                <Button className={classes.buttonSize}>Tác giả</Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row tmshop">
                        <AuthorItems />
                    </div>
                </div>
                
            </>
        )
    }
}

const mapStateToProps = state => ({
    site: state.site
})

const mapDispatchToProps = dispatch => ({
    
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Authors)));