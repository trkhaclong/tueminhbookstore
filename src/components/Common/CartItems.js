import React, {Component} from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import API from '../../utils/api';
import { connect } from 'react-redux';
import * as SiteActions from '../../store/actions/siteActions';
import {Link} from 'react-router-dom';

class CartItems extends Component {
    render(){
        return(
            <div className="shelf-item_tm" key={this.props.product.id}>
                <ClearIcon onClick={e => this.props.removeProduct(this.props.product.id)} color="secondary" fontSize="large" className="shelf-item_del_tm"/>
                <div className="shelf-item_thumb_tm">
                    <Link to={`/product/${this.props.product.id}`} onClick={e => this.props.setProductData(this.props.product)} title={this.props.product.name}>
                        <img alt={this.props.product.name} src={API.makeFileURL(this.props.product.ProductImage[0].thumbail, null)} />
                    </Link>
                </div>
                <div className="shelf-item_details_tm">
                <Link to={`/product/${this.props.product.id}`} onClick={e => this.props.setProductData(this.props.product)} title={this.props.product.name}>
                   <p className="title_tm">{this.props.product.name}</p>
                </Link>
                   <p className="desc_tm">
                        {this.props.product.publishing}
                        <br />
                        Số lượng: {this.props.product.quantity}
                    </p>
                </div>
                <div className="shelf-item_price_tm">
                   <p>{this.props.product.newPrice} đ</p>
                   <div>
                       {this.props.product.quantity > 1 ?
                            <button onClick={e => this.props.subtractQuantity(this.props.product.id)} className="change-product-button_tm">-</button>
                       :(
                            <button className="change-product-button_tm" disabled>-</button>
                        )}
                        <button onClick={e => this.props.addQuantity(this.props.product.id)} className="change-product-button_tm">+</button>
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
    removeProduct: (id) => {
        dispatch(SiteActions.removeProduct(id));
    },
    addQuantity: (id) => {
        dispatch(SiteActions.addQuantity(id));
    },
    subtractQuantity: (id) => {
        dispatch(SiteActions.subtractQuantity(id))
    },
    setProductData: (product) => {
        dispatch(SiteActions.setProductData(product));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItems);