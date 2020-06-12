import React, {Component} from 'react';

import '../../assets/css/body.css';

import {Link} from 'react-router-dom';

import Banner from './Banner';
import IconMenu from './IconMenu';
import HomeShop from './HomeShop';
import PeopleAndBooks from './PeopleAndBooks';

import img1 from '../../assets/img/home/banner1-min.jpg';
import img2 from '../../assets/img/home/banner2-min.jpg';
import img3 from '../../assets/img/home/banner3-min.jpg';
import img4 from '../../assets/img/home/banner4-min.jpg';

import bannerimg from '../../assets/img/banner/banner0.png';

import storeIcon from '../../assets/img/icons/store-icon.png';
import saleIcon from '../../assets/img/icons/sale-icon.png';
import facebookIcon from '../../assets/img/icons/facebook-icon.png';
import searchIcon from '../../assets/img/icons/search-icon.png';
import toyIcon from '../../assets/img/icons/toy-icon.png';
import penIcon from '../../assets/img/icons/pen-icon.png';
import bookIcon from '../../assets/img/icons/book-icon.png';
import childIcon from '../../assets/img/icons/child-icon.png';
import simpsonIcon from '../../assets/img/icons/simpson-icon.png';
import mindIcon from '../../assets/img/icons/mind-icon.png';

import peopleimage1 from '../../assets/img/authors/paulo-coelho-min.jpg';
import peopleimage2 from '../../assets/img/authors/nguyen-nhat-anh-min.jpg';
import peopleimage3 from '../../assets/img/authors/jk-rowling-min.jpg';

import bestbook1 from '../../assets/img/bestbooks/conan-min.jpg';
import bestbook2 from '../../assets/img/bestbooks/tam-quoc-min.jpg';
import bestbook3 from '../../assets/img/bestbooks/shin-min.jpg';


const banners = [
    {img:img1, link:'/shop'},
    {img:img2, link:'/shop'},
    {img:img3, link:'/shop'},
    {img:img4, link:'/shop'}
];

const icons = [
    {img: storeIcon, caption: 'Cửa hàng', link: '/shop'},
    {img: saleIcon, caption: 'Sale', link: '/shop'},
    {img: searchIcon, caption: 'Gợi ý cho bạn', link: '/shop'},
    {img: facebookIcon, caption: 'facebuck', link: 'https://facebook.com/1723023664478547'},
    {img: toyIcon, caption: 'Đồ chơi', link: '/do-choi'},
    {img: penIcon, caption: 'Văn phòng phẩm', link: '/van-phong-pham'},
    {img: bookIcon, caption: 'Văn học', link: '/van-hoc'},
    {img: childIcon, caption: 'Thiếu nhi', link: '/thieu-nhi'},
    {img: simpsonIcon, caption: 'Tâm lý', link: '/tam-ly'},
    {img: mindIcon, caption: 'Kinh tế', link: '/kinh-te'},
];

const cates = [
    {type: 1,cate: 'Sách Trong Nước', link: '/sach-trong-nuoc'},
    {type: 1,cate: 'Truyện Tranh', link: '/truyen-tranh'},
    {type: 1,cate: 'Đồ Chơi', link: '/do-choi'},
    {type: 1,cate: 'VPP Dụng Cụ Học Sinh', link: '/van-phong-pham'},
    
];

const authors = [
    {name: 'Paulo Coelho', link: '/author/paulo-coelho', img: peopleimage1},
    {name: 'Nguyễn Nhật Ánh', link: '/author/nguyen-nhat-anh', img: peopleimage2},
    {name: 'J.K Rowling', link: '/author/jk-rowling', img: peopleimage3},
    
];

const bestbooks = [
    {name: 'Conan', link: '/truyen-tranh-nhat-ban/conan', img: bestbook1},
    {name: 'Tam quốc diễn nghĩa', link: './tam-quoc', img: bestbook2},
    {name: 'Shin - Cậu bé bút chì', link: './truyen-tranh-nhat-ban/shin', img: bestbook3},
]

class Body extends Component {
    render(){
        return (
            <div className="main-container col1-layout no-margin-top">
                <div className="main">
                    <div className="col-main">
                        <div className="container">
                            <div className="container-inner">
                                <ul id="admin_messages"></ul> 
                                <div className="std">
                                    <div>
                                        <div className=" fhs-banner-image-block " >
                                            {banners.map((banner, i) => {
                                                return <Banner {...banner} key= {i} />
                                            })}
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="row cms-icon-menu">
                                        {icons.map((icon, i) => {
                                            return <IconMenu {...icon} key={i} />
                                        })}
                                    </div>
                                    <div>
                                        <div className="page-banner">
                                            <Link to="">
                                                <img src={bannerimg} alt="" width="1920px" />
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        {cates.map((cate, i) => {
                                            return <HomeShop {...cate} key={i} />
                                        })}
                                    </div>
                                    
                                    <div className="cms-top-authors hidden-xs">
                                        <div className="cms-top-authors-title">
                                            <h3>TÁC GIẢ - TÁC PHẨM TIÊU BIỂU</h3>
                                        </div>
                                        <div className="row cms-top-authors-img">
                                            {authors.map((author, i) => {
                                                return <PeopleAndBooks {...author} key={i} />
                                            })}
                                        </div>
                                        <div className="row cms-top-authors-book">
                                            {bestbooks.map((bestbook, i) => {
                                                return <PeopleAndBooks {...bestbook} key={i} />
                                            })}
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

export default Body;