import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import * as SiteActions from '../../../store/actions/siteActions';
import ShopItems from '../ShopItems';

import '../../assets/css/blog.css';
import LazyLoad from 'react-lazyload';

const Loading = () => {
    <div className="item sl-width loading">
        <h5>loading...</h5>
    </div>
}

class HomeShop extends Component {

    componentDidMount(){
        this.props.getHomeProducts(0);
    }

    render(){

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
            
            <div id="categorytab-caphs" className="categorytab-slider fhs-grid">
                <div>
                    <div className="tabslider-header">
                        <div className="tabslider-title girdslider-title-aaa">
                            {this.props.name}
                        </div>
                    </div>
                    <div className="tab_container">
                        <div className="col-lg-12 col-md-12 col-sm-12 fhs-full-p">    
                            <div className="tab_content_caphs" style={{minHeight: '400px'}}>
                                <div className="bx-wrapper" style={{maxWidth: 'inherit'}}>
                                <div className="bx-viewport" aria-live="polite" style={{width: '100%', overflow: 'hidden', position: 'relative'}}>
                                <ul className="bxslider">
                                        {homeshop.slice(0, 10).map((product, i) => {
                                            return(
                                                <LazyLoad
                                                    key={i}
                                                    height={100}
                                                    offset={[-100,100]}
                                                    placeholder={<Loading />}
                                                >
                                                <ShopItems
                                                    product={product}
                                                    key={i}
                                                />
                                                </LazyLoad>
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
)(HomeShop));