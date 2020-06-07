import React, {Component} from 'react';

import '../../assets/css/body.css';

import {Link} from 'react-router-dom';

import Banner from './Banner';
import IconMenu from './IconMenu';
import HomeShop from './HomeShop';
import PeopleAndBooks from './PeopleAndBooks';

import img1 from '../../assets/img/home/banner1.png';
import img2 from '../../assets/img/home/banner2.png';
import img3 from '../../assets/img/home/banner3.png';
import img4 from '../../assets/img/home/banner4.png';

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

import peopleimage1 from '../../assets/img/authors/paulo-coelho.jpg';
import peopleimage2 from '../../assets/img/authors/nguyen-nhat-anh.jpg';
import peopleimage3 from '../../assets/img/authors/jk-rowling.jpg';

import bestbook1 from '../../assets/img/bestbooks/conan.jpg';
import bestbook2 from '../../assets/img/bestbooks/tam-quoc.jpg';
import bestbook3 from '../../assets/img/bestbooks/shin.jpg';


const banners = [
    {img:img1, link:'/shop'},
    {img:img2, link:'/shop'},
    {img:img3, link:'/shop'},
    {img:img4, link:'/shop'}
];

const icons = [
    {img: storeIcon, caption: 'Cửa hàng', link: '/shop'},
    {img: saleIcon, caption: 'Sale', link: '/shop/sale'},
    {img: searchIcon, caption: 'Gợi ý cho bạn', link: '/shop'},
    {img: facebookIcon, caption: 'facebuck', link: ''},
    {img: toyIcon, caption: 'Đồ chơi', link: '/shop'},
    {img: penIcon, caption: 'Văn phòng phẩm', link: '/shop'},
    {img: bookIcon, caption: 'Văn học', link: '/shop'},
    {img: childIcon, caption: 'Thiếu nhi', link: '/shop'},
    {img: simpsonIcon, caption: 'Tâm lý kĩ năng', link: '/shop'},
    {img: mindIcon, caption: 'Kinh tế', link: '/shop'},
];

const cates = [
    {type: 1,cate: 'Sách Trong Nước', link: '/sach-trong-nuoc'},
    {type: 1,cate: 'Truyện Tranh', link: '/truyen-tranh'},
    {type: 1,cate: 'Đồ Chơi', link: '/do-choi'},
    {type: 1,cate: 'VPP Dụng Cụ Học Sinh', link: '/vpp-dung-cu-hoc-sinh'},
    {type: 1,cate: 'Bách Hóa Online Lưu Niệm',link: '/bach-hoa-online-luu-niem'},
    {type: 2,cate: 'DỤNG CỤ VẼ', link: '/dung-cu-ve'},
    {type: 2,cate: 'ĐỒ CHƠI NỔI BẬT', link: '/do-choi-noi-bat'},
    {type: 1,cate: 'anh long dep trai', link: '/anh-long-dep-trai'}
];

const authors = [
    {name: 'Paulo Coelho', link: '/authors/paulo-coelho', img: peopleimage1},
    {name: 'Nguyễn Nhật Ánh', link: '/authors/nguyen-nhat-anh', img: peopleimage2},
    {name: 'J.K Rowling', link: '/authors/jk-rowling', img: peopleimage3},
    
];

const bestbooks = [
    {name: 'Conan', link: '/shop/conans', img: bestbook1},
    {name: 'Tam quốc diễn nghĩa', link: './shop/tam-quoc', img: bestbook2},
    {name: 'Shin - Cậu bé bút chì', link: './shop/shin', img: bestbook3},
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