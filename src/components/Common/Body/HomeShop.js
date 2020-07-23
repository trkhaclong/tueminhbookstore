import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import * as SiteActions from '../../../store/actions/siteActions';
import ShopItems from '../ShopItems';

import {withStyles} from '@material-ui/core/styles';


import '../../assets/css/blog.css';
import LazyLoad from 'react-lazyload';

const Loading = () => (
    <div className="item sl-width loading">
        <h5>loading...</h5>
    </div>
)

const styles = theme => ({
    categorytab: {
        border: 'none',
        minHeight: '450px',
        display: 'inline-block',
        width: '100%',
        background: 'white',
        margin: '20px 0 0',
    },
    tabsliderHeader: {
        minHeight: '45px',
        borderBottom: '1px solid #ddd !important',
        width: '100% !important',
        position: 'relative',
    },
    tabsliderTitle: {
        display: 'flex',
        fontSize: '15px !important',
        float: 'left',
        paddingBottom: '5px',
        paddingTop: '14px',
        marginLeft: '13px',
        color: '#000',
        fontWeight: '500',
        textTransform: 'uppercase',
        fontFamily: '"Poppins", sans-serif',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '19px !important',
        },
    },
    tabContainer: {
        clear: 'both',
        paddingTop: '10px',
    },
    tabcaphsCaphs: {
        width: '100%',
        float: 'left',
        position: 'relative',
        minHeight: '1px',
        padding: '0px',
    },
    tabContent: {
        minHeight: '400px',
    },
    bxWrapper: {
        position: 'relative',
        margin: '0 auto',
        padding: '0',
        zoom: '1',
        maxWidth: '100% !important',
        [theme.breakpoints.up('md')]: {
            maxWidth: 'inherit',
        },

    },
    bxViewport: {
        width: '100%',
        overflow: 'auto',
        position: 'relative',
        minHeight: '255px !important',
        height: 'auto',
    },
    bxSlider: {
        width: '1800px',
        position: 'relative',
        transform: 'translate3d(0px, 0px, 0px)',
        paddingLeft: '0',
        transformDuration: '0s',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
        },
    },

})

class HomeShop extends Component {

    componentDidMount(){
        this.props.getHomeProducts(0);
    }

    render(){
        const {classes} = this.props;
        const homeshop = this.props.site.products.filter(product => {
            if(this.props.type === 1)
                return (product.category === this.props.cate)
            else if(this.props.type === 2)
                return(product.category1 === this.props.cate)
            else if(this.props.type === 3)
                return(product.category2 === this.props.cate)
            else if(this.props.type === 4)
                return(product.category4 === this.props.cate)
            else
                return(product.category5 === this.props.cate)
        });

        return(
            
            <div id="categorytab-caphs" className={classes.categorytab}>
                <div>
                    <div className={classes.tabsliderHeader}>
                        <div className={classes.tabsliderTitle}>
                            {this.props.name}
                        </div>
                    </div>
                    <div className={classes.tabContainer}>
                        <div id="tab" className={classes.tabcaphsCaphs}>    
                            <div className={classes.tabContent}>
                                <div className={classes.bxWrapper}>
                                <div className={classes.bxViewport} aria-live="polite" >
                                <ul className={classes.bxSlider}>
                                        {homeshop.slice(0, 10).map((product, i) => {
                                            return(
                                                <ShopItems
                                                    product={product}
                                                    key={i}
                                                />
                                            )
                                        })}
                                </ul>
                                </div>
                                </div>
                                        <div className="tabs-xem-them xem-them-item-aaa">
                                            <Link to={this.props.link}>Xem Thêm</Link>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
const mapStateToProps = state => ({
    site: state.site
})

const mapDispatchToProps = dispatch => ({
    getHomeProducts: (skip) => {
        dispatch(SiteActions.getHomeProducts(skip));
    }
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(HomeShop)));