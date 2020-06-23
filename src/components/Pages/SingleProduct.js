import React, {Component} from 'react';
import {connect} from 'react-redux';
import API from '../../utils/api';
import * as SiteActions from '../../store/actions/siteActions';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';

import Field from '../Common/Field';
import ProductPolicy from '../Common/ProductPolicy';
import CommentBuilder from '../Common/CommentBuilder';
import ShopItems from '../Common/ShopItems';

import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallIcon from '@material-ui/icons/LocalMallOutlined';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const fields = [
    {name: 'address', type: 'text', placeholder: 'Dia chi nhan hang'}
]



const styles = theme => ({
    FieldSpan: {
        width: '100%',
    },
    field: {
        paddingLeft:'inherit',
    },
    commonText: {
        paddingLeft:'inherit',
    },
    relateItems: {
        width: '102%',
        [theme.breakpoints.down('sm')]: {
            width: '1800px'
        },
        position: 'relative',
        transitionDuration:'0s',
        transform: 'translate3d(0px, 0px, 0px)',
        paddingLeft: 0
    }
})

class SingleProduct extends Component {
    


    componentDidMount(){
        this.props.getSingleProduct(this.props.match.params.id, this.props.auth.token);
        this.props.getCate3Products(0, this.props.site.product.category3);
        this.props.getProductCount();
    }

    render(){
        const {classes} = this.props;
        return(
            <div className="main-container col1-layout no-margin-top">
            <div className="single_product-tm">
            <div className=" col-main">
            <div className="container">
            <div className="container-inner">
            <form method="post" id="product_addtocart_form" action="">
            <div className="product-view kasitoo">
                <div className="product-essential">
                    <div className="product-essential-media">
                        <div className="product-view-image">

                            <div className="product-view-image-product">
                                {this.props.site.product.ProductImage ?
                                    this.props.site.product.ProductImage.length > 0 ?
                                        <img id="image" className="fhs-p-img" src={API.makeFileURL(this.props.site.product.ProductImage[0].url, this.props.auth.token)} alt="" />
                                    : null
                                : null}
                            </div>
                            <div className="swiper-container product-view-image-product-swiper swiper-container-horizontal">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide swiper-slide-active" style={{width:'300px'}}>
                                        <div className="swiper-wrapper-item">
                                        {this.props.site.product.ProductImage ?
                                            this.props.site.product.ProductImage.length > 0 ?
                                                <img id="image" className="fhs-p-img swiper-lazy swiper-lazy-loaded" src={API.makeFileURL(this.props.site.product.ProductImage[0].url, this.props.auth.token)} alt="" title={this.props.site.product.name} />
                                            : null
                                        : null}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>
                        
                        <div className="product_view_add_box">
                            <button onClick={e => this.props.addToCart(this.props.site.product)} type="button" title="them vao gio" className="btn-cart-to-cart">
                                <div ><LocalMallIcon fontSize="large" /></div>
                                <span>Thêm vào giỏ hàng</span>
                            </button>
                            <button onClick={e => this.props.addToCart(this.props.site.product)} type="button" title="mua ngay" className="btn-buy-now">
                                <span>Mua Ngay</span>
                            </button>
                        </div>
                    </div>

                    <div className="product-essential-detail">
                        <h1>{this.props.site.product.name}</h1>
                    
                        <div className="product-view-sa">
                            <div className="product-view-sa_one">
                                <div className="product-view-sa-supplier">
                                    <span>Nhà cung cấp:</span>
                                    <a href="" alt="">{this.props.site.product.supplier}</a>
                                </div>
                                <div className="product-view-sa-author">
                                    <span>Tác Giả:</span>
                                    <span>{this.props.site.product.author}</span>
                                </div>
                            </div>
                            <div className="product-view-sa_two">
                                <div className="product-view-sa-supplier">
                                    <span>Nhà xuất bản:</span>
                                    <a href="" alt="">{this.props.site.product.publishing}</a>
                                </div>
                                <div className="product-view-sa-author">
                                    <span>Tồn kho:</span>
                                    <span>{this.props.site.product.inventory}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 price-block">
                            <div id="catalog-product-details-price" className="col-md-6 price-block-left">
                                <div className="price-box">
                                    <p className="special-price">
                                        <span className="price-label">Special Price</span>
                                        <span className="price">
                                            {this.props.site.product.newPrice} đ
                                        </span>
                                    </p>
                                    <p className="old-price">
                                        <span className="price-label">Old Price</span>
                                        <span className="price">
                                            {this.props.site.product.oldPrice} đ
                                        </span>
                                        <span className="discount-percent">{(this.props.site.product.newPrice - this.props.site.product.oldPrice)/this.props.site.product.oldPrice*100}%</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 price-block-right">
                                <ul className="add-to-links">
                                    <li>
                                        <a href="" alt="" className="link-wishlist-icon">
                                            <FavoriteIcon fontSize="large" color="secondary" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div id="expected_delivery">
                            <div id="expected_delivery_fpoint" >
                                <div>
                                    Địa chỉ:
                                </div>
                                <div>
                                    <span id="expected_delivery_fpoint_content"> ...</span>
                                <span>
                                    <i className="fa fa-question-circle">
                                        <div id="expected_delivery_fpoint_description">.... </div>
                                    </i>
                                </span>
                                </div>
                            </div>
                            <div id="expected_delivery_address" >
                                <div>
                                    Thời gian giao hàng:	    
                                </div>
                                <div>
                                    <div>
                                        <span>
                                        Ngày Mai
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div id="expected_delivery_address" >
                                <div>
                                    Địa chỉ nhận hàng:	    
                                </div>
                                <div>
                                    <div>
                                        <span className={classes.FieldSpan}>
                                        {fields.map((f, i) =>{
                                            return (
                                                <div className={classes.field} key={i} className="col-sm-6">
                                                    <Field
                                                        {...f}
                                                    />
                                                </div>
                                            )
                                        })}</span>
                                    </div>
                                </div>
                            </div>
                            <div id="expected_return_product_policy">
                                <div>
                                    Chính sách đổi trả:
                                </div>
                                <div>
                                    <div>
                                        <div className={classes.commonText}>
                                            Đổi trả sản phẩm trong&nbsp;30&nbsp;ngày
                                        </div>
                                        <div id="expected_return_product_policy_info" >
                                            Xem thêm
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div id="catalog-product-details-discount">
                            <div className="product-view-quantity-box">
                                <label htmlFor="qty">Số lượng:</label>
                                <div className="product-view-quantity-box-block">
                                    <a href="" className="btn-subtract-qty" alt="">

                                    </a>
                                    <input readOnly type="text" name="qty" id="qty" maxLength="12" align="center" value="1"  title="SL" className="input-text qty"/>
                                    <a href="" className="btn-add-qty" alt="">
                                        
                                    </a>
                                </div>
                            </div>
						</div>
                    </div>
                </div>
            </div>
            <div className="product_view_policy">
                <ProductPolicy />
            </div>
            </form>
            <div className="product-collateral">
                <div className="fhs_tabslider_recommended">
                    <div id="categorytab-recommended-products" className="categorytab-slider fhs-grid">
                        <div>
                            <div className="tabslider-header">
                                <div className="tabslider-title girdslider-title-aaa">
                                    Sản phẩm liên quan
                                </div>
                            </div>
                            <div className="tabslider-top-content" style={{marginBottom: '10px', display: 'inline-block'}}></div>
                            <div className="tab_container">
                                <div className="col-lg-12 col-md-12 col-sm-12 fhs-full-p">
                                    <div id="tabcbs-recommendated-products" className="tab_content_recommendated-products" style={{minHeight: '400px'}}>
                                        <div className="bx-wrapper" style={{maxWidth: 'inherit'}}>
                                            <div className="bx-viewport" aria-live="polite" style={{width: '100%', overflow: 'auto', position: 'relative', height: '328px'}}>
                                                <ul className={classes.relateItems}>
                                                {this.props.site.products.map((product, i) => {
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div id="product_view_tab" className="personal">
                        <div>
                            <ul id="product-view-tab-list" className="product-view-tab">
                                <li className="product-view-tab-item product-view-tab-info-item">
                                    <a href="" alt="">Khách hàng nhận xét:</a>
                                    <hr />
                                </li>
                            </ul>
                        </div>
                        {this.props.auth.token ?
                            <CommentBuilder />
                        :
                            <div className="comment-no-token">
                                
                                    <p>
                                        Chỉ thành viên mới có thể bình luận ... 
                                    </p>
                                
                                    <Link to="/signup">Đăng kí</Link>
                                
                            </div>
                        }
                        <div id="product_view_tab_content_review" className="product_view_tab_content_review" style={{height: '605px', minHeight: '605px'}}>
                            <div className="product-view-tab-content-review-comment">
                                <div className="product-view-tab-content-review-comment-sort">
                                    <span></span>
                                </div>
                                <div className="comment_content">
                                    <ul className="comment_list">
                                        {this.props.site.product.Comment ?
                                            this.props.site.product.Comment.length > 0 ?
                                                this.props.site.product.Comment.map((comment, i) => {
                                                    return (
                                                        <div className="col-md-12 comment-tm">
                                                            <h4>{comment.Profile ? comment.Profile.name : ''}</h4>
                                                            <p>{comment.content}</p>
                                                        </div>
                                                    )
                                                })
                                            : null
                                        : null
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    auth: state.auth,
    site: state.site,
})

const mapDispatchToProps = dispatch => ({
    getSingleProduct: (id, token) => {
        dispatch(SiteActions.getProductById(id, token));
    },
    getCate3Products: (skip, cate) => {
        dispatch(SiteActions.getCate3Products(skip, cate));
    },
    addToCart: (product) => {
        dispatch(SiteActions.addToCart(product));
    },
    getProductCount: () => {
        dispatch(SiteActions.getProductCount())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)((withStyles(styles)(SingleProduct)));