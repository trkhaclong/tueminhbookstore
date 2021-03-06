import React, {Component} from 'react';
import API from '../../utils/api';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as SiteActions from '../../store/actions/siteActions';

import {withStyles} from '@material-ui/core/styles';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const styles = theme => ({

});

class ShopItems extends Component {
    

    render(){
        return(
            
                    <li className="item sl-width sl-margin" aria-hidden="false" >
                        <div className="item-inner" style={{position: 'relative'}}>
                            <div className="label-pro-sale">
                                <div onClick={e => this.props.addToCart(this.props.product)} className="p-sale-label discount-1-fs" ><AddShoppingCartIcon style={{fontSize: '2em'}} /></div>
                            </div>
                            <div className="ma-box-content">
                                <div className="products clearfix">
                                    <div className="product images-container">
                                        <Link className="product-image" to={`/product/${this.props.product.id}`} onClick={e => this.props.setProductData(this.props.product)} title={this.props.product.name}>
                                            
                                            {this.props.product.ProductImage ?
                                                this.props.product.ProductImage.length > 0 ?
                                                    <img style={{width: '150px', height: '202px'}} alt={this.props.name} src={API.makeFileURL(this.props.product.ProductImage[0].thumbail, null)} />
                                                :null
                                            :null}
                                        </Link>
                                    </div>
                                </div>
                                <h2 className="product-name">
                                    <Link to={`/shop/${this.props.product.id}`} title={this.props.product.name}>
                                        {this.props.product.name}
                                    </Link>
                                </h2>
                                <div className="price-label">
                                    <p className="special-price">
                                        <span className="price-label">New Price</span>
                                        <span className="price m-price-font">{this.props.product.newPrice} đ</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                
            
            
        )
    }
}

const mapStateToProps = state => ({
    site: state.site,
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    setProductData: (product) => {
        dispatch(SiteActions.setProductData(product));
    },
    addToCart: (product) => {
        dispatch(SiteActions.addToCart(product))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ShopItems));