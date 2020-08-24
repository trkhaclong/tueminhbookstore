import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import logoIcon from '../assets/img/logowide.JPG';
import facebookicon from '../assets/img/social-icon/Facebook.png';
import youtubeicon from '../assets/img/social-icon/Youtube.png';
import instaicon from '../assets/img/social-icon/Insta.png';
import tumblricon from '../assets/img/social-icon/tumblr.png';
import twittericon from '../assets/img/social-icon/twitter.png';
class Footer extends Component {
    render(){
        return(
			<div>
			<div className="ma-block-link-follow">
				<div className="block-link-follow hidden-xs">
					<div className="container">
						<div className="container-inner">
							<div className="row">
								<div className="f-col f-col-1 col-sm-4 col-md-4 col-sms-12"></div>			
							</div>
						</div>
					</div>
				</div>
			</div>
            <div className="ma-footer-static">
				<div className="footer-static">
					<div className="container">
						<div className="container-inner">
							<div className="row hidden-xs">
								<div className="col-md-4">
									<div align="left" style={{borderRight: '1px solid #cecece'}}>
										<div>
											<div style={{marginBottom: '8px', padding: '10px 15px'}}>
												<img className="tueminh-footer" alt="TUEMINHBOOKSTORE" src={logoIcon} />
											</div>
											<div className="col-sm-12 col-md-12 col-xs-12 address-footer" style={{fontSize: '13px'}}>
												KĐT Thái Hà - Hiệp Sơn - Kinh Môn - Hải Dương
											</div>
											<div className="col-sm-12 col-md-12 col-xs-12 address-footer" style={{fontSize: '13px'}}>
												Công Ty TNHH 686
											</div>
											<div className="col-sm-12 col-md-12 col-xs-12 address-footer" style={{fontSize: '13px'}}>
												Kiot số 6 Trung tâm thương mại Đức Dương Minh Tân - Kinh Môn - Hải Dương
											</div>
											<div className="col-sm-12 col-md-12 col-xs-12 address-footer" style={{fontSize: '13px', paddingTop: '5px'}}>
												Tueminhbookstore
												nhận đặt hàng trực tuyến và giao hàng tận nơi.
											</div>
											
										</div>
										<div align="left" style={{fontSize:'14.5px', marginBottom:'20px', marginTop:'10px', padding: '0px', textAlign: 'left', marginLeft: '10px'}}>
											<a href="https://www.facebook.com/1723023664478547/" title="Facebook">
												<img  alt="Facebook" src={facebookicon} />
											</a>
											<a href="https://www.instagram.com/deep.tried/" title="Instagram">
												<img style={{marginLeft: '24px'}} alt="Instagram" src={instaicon} />
											</a>
											<a href="https://www.youtube.com/channel/" title="Youtube">
												<img style={{marginLeft: '24px'}} alt="Youtube" src={youtubeicon} />
											</a>
											<a href="https://tumblr.com/" title="Tumblr">
												<img style={{marginLeft: '24px'}} alt="Tumblr" src={tumblricon} />
											</a>
											<a href="https://twitter.com/" title="Twitter">
												<img style={{marginLeft: '24px'}} alt="Twitter" src={twittericon} />
											</a>
										</div>
										
									</div>
								</div>
								<div className="col-md-8">
									<div className="row">
										<div className="col-sm-6 col-md-4 col-sms-6 col-smb-12">
											<div className="footer-static-title">
												<h3>DỊCH VỤ</h3>
											</div>
											<div className="footer-static-content">
												<ul>
													<li className="first"><Link to="/">Điều khoản sử dụng</Link></li>
													<li><Link to="/">Chính sách bảo mật</Link></li>
													<li><Link to="/">Giới thiệu Tuệ Minh</Link></li>
													<li className="last"><Link to="/">Hệ thống trung tâm - nhà sách</Link></li>
												</ul>
											</div>
										</div>
										<div className="col-sm-6 col-md-4 col-sms-6 col-smb-12">
											<div className="footer-static-title">
												<h3>Hỗ trợ</h3>
											</div>
											<div className="footer-static-content ">
												<ul>
													<li className="first"><Link to="/">Chính sách đổi - trả - hoàn tiền</Link></li>
													<li><Link to="/">Chính sách khách sỉ</Link></li>
													<li><Link to="/">Phương thức vận chuyển</Link></li>
													<li className="last"><Link to="/">Phương thức thanh toán</Link></li>
												</ul>
											</div>
										</div>
										<div className="col-sm-6 col-md-4 col-sms-6 col-smb-12">
											<div className="footer-static-title">
												<h3>Tài khoản của tôi</h3>
											</div>
											<div className="footer-static-content">
												<ul>
													<li className="first"><Link to="/login" >Đăng
															nhập/Tạo mới tài khoản</Link></li>
													<li><Link to="/">Thay đổi địa chỉ
															khách hàng</Link></li>
													<li><Link to="/">Chi tiết tài
															khoản</Link></li>
													<li className="last"><Link to="/">Lịch
															sử mua
															hàng</Link></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="footer-static-title" style={{marginTop: '15px'}}>
										<h3>Liên hệ</h3>
									</div>
									<div className="row" style={{margin: '5px -5px'}}>
										<div className="col-md-4"><em className="fa fa-map-marker" style={{fontSize:'18px'}}>&nbsp;</em>KĐT Thái Hà, Kinh Môn, Hải Dương</div>
										<div className="col-md-4"><em className="fa fa-envelope" style={{fontSize:'18px'}}>&nbsp;</em>info@tueminh.com</div>
										<div className="col-md-4"><em className="fa fa-phone" style={{fontSize:'18px'}}>&nbsp;</em> 0220.3524.686</div>
									</div>
								</div>
							</div>
							<div className="row">
							</div>
							<div className="row hidden-xs" style={{marginTop: '15px'}}>
								<div className="col-sm-12 col-md-12 col-xs-12" style={{textAlign: 'center'}}>
									<ul>
										<li style={{color: '#adadad', paddingLeft: '14px'}}>Copyright ©2020 by Tran Khac Long.</li>
									</ul>
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
export default Footer;