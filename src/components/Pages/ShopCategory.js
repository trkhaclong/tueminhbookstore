import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import * as SiteActions from '../../store/actions/siteActions';
import ShopItems from '../Common/ShopItems';

import '../assets/css/blog.css';
import '../assets/css/shop.css';


import {withStyles} from '@material-ui/core/styles';


import image from '../assets/img/banner/banner0.png';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import BlurIcon from '@material-ui/icons/BlurCircular';

import ShopSideBar from '../Common/ShopSideBar';




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
    shopdrawer: {
        width: '20%'
    },
    fab: {
        position: 'fixed',
        bottom: '50px',
        right: '50px'
    }
});


class ShopCategory extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false
        }
    }

    componentDidMount(){
        if(this.props.match.params.category3)
            this.props.getCate3Products(0, this.props.match.params.category3)
        else if (this.props.match.params.category2)
            this.props.getCate2Products(0, this.props.match.params.category2)
        else if (this.props.match.params.category1)
            this.props.getCate1Products(0, this.props.match.params.category1)
        else
            this.props.getCateProducts(0, this.props.match.params.category)
        this.props.getProductCount();
    }

    toggleDrawer = (event) => {
        if(this.state.open === true){
            this.setState({open: false})
        }else{
            this.setState({open: true})
        }
        
    };



    render(){
        const {classes} = this.props;

        return(
            <div>
                <div className="page-empty-banner col-lg-12 col-md-12 col-sm-12">
                    <div className="page-banner page-banner-tm">
                        <Link to="">
                            <img src={image} alt="" />
                        </Link>
                    </div>
                    <div className="col-main">
                        <div className="container">
                            <div className={classes.storeButton}>
                                <Button className={classes.buttonSize} onClick={this.toggleDrawer}>Cửa hàng</Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.props.site.products ?
                            this.props.site.products.length > 0 ?
                                this.props.site.products.map((product, i) => {
                                    return (
                                        <ShopItems
                                            product={product}
                                            key={i} 
                                        />
                                    )
                                })
                            :null
                        :null}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            {this.props.site.productCount > this.props.site.products.length ?
                                <div className="tabs-xem-them xem-them-item-aaa">
                                    <Link onClick={e => {
                                        if(this.props.match.params.category3)
                                            this.props.getCate3Products(this.props.site.products.length, this.props.match.params.category3);
                                        else if (this.props.match.params.category2)
                                            this.props.getCate2Products(this.props.site.products.length, this.props.match.params.category2);
                                            else if (this.props.match.params.category1)
                                                this.props.getCate1Products(this.props.site.products.length, this.props.match.params.category1);
                                                else
                                                    this.props.getCateProducts(this.props.site.products.length, this.props.match.params.category);
                                    }}>Xem Thêm</Link>
                                </div>
                            :null}
                        </div>
                    </div>
                </div>
                <Drawer classes={{paper: classes.shopdrawer}} anchor="left" open={this.state.open} onClose={this.toggleDrawer}>
                    <ShopSideBar />
                </Drawer>
                <Fab className={classes.fab} onClick={this.toggleDrawer} color="primary" aria-label="Menu">
                    <BlurIcon style={{fontSize: '69px'}} />
                </Fab>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    site: state.site
})

const mapDispatchToProps = dispatch => ({
    getCateProducts: (skip, cate) => {
        dispatch(SiteActions.getCateProducts(skip, cate));
    },
    getCate1Products: (skip, cate) => {
        dispatch(SiteActions.getCate1Products(skip, cate));
    },
    getCate2Products: (skip, cate) => {
        dispatch(SiteActions.getCate2Products(skip, cate));
    },
    getCate3Products: (skip, cate) => {
        dispatch(SiteActions.getCate3Products(skip, cate));
    },
    getProductCount: () => {
        dispatch(SiteActions.getProductCount());
    }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ShopCategory)));