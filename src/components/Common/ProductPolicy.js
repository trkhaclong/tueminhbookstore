import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Storefront from '@material-ui/icons/Storefront';
import LocalShipping from '@material-ui/icons/LocalShipping';
import CompareArrows from '@material-ui/icons/CompareArrows'
import RateReview from '@material-ui/icons/RateReview';

class ProductPolicy extends Component {
    render(){
        return(
            <div className="product-attribute">
            <div className="item">
                <div className="item-content">
                    <Storefront style={{color: 'orange', fontSize: '2.5em'}} />
                    <span>
                        <Link to="/chinh-sach-khach-si">Chính sách khách sỉ </Link>
                    </span>
                    <span>
                        <Link to="/chinh-sach-khach-si">Khách sỉ</Link>
                    </span>
                </div>
            </div>
            
            <div className="item">
                <div className="item-content">
                    <LocalShipping style={{color: 'orange', fontSize: '2.5em'}} />
                    <span>
                        <Link to="/phuong-thuc-van-chuyen">Thời gian giao hàng</Link>
                    </span>
                    <span>
                        <Link to="/chinh-sach-khach-si">Giao hàng</Link>
                    </span>
                </div>
            </div>
            
            <div className="item">
                <div className="item-content">
                    <CompareArrows style={{color: 'orange', fontSize: '2.5em'}} />
                    <span>
                        <Link to="/doi-tra-hang">Chính sách đổi trả</Link>
                    </span>
                    <span>
                        <Link to="/doi-tra-hang">Đổi trả</Link>
                    </span>
                </div>
            </div>
            
            <div className="item">
                <div className="item-content">
                    <RateReview style={{color: 'orange', fontSize: '2.5em'}} />
                    <span>
                        <Link to="/review-hay">Review sản phẩm</Link>
                    </span>
                    <span>
                        <Link to="/review-hay">Review</Link>
                    </span>
                </div>
            </div>
            </div>
        )
    }
}

export default ProductPolicy;