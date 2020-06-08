import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import logoIcon from '../assets/img/logowide.JPG';
import dathongbao from '../assets/img/dathongbao.png';
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
								<div className="f-col f-col-2 col-sm-8 col-md-12 col-sms-12">
									<div className="block-subscribe" style={{textAlign: 'center'}}>
										<div style={{display: 'inline-block'}}>
											<div className="subscribe-title">
												<em className="fa fa-envelope-o fa-inverse" style={{fontSize:'20px'}}>&nbsp;</em>
												<h3>Newsletter</h3>
												<label htmlFor="newsletter">Đăng ký nhận bản tin</label>
											</div>
											<form action="https://www.fahasa.com/newsletter/subscriber/new/" method="post" id="newsletter-validate-detail">
												<div className="subscribe-content">
													<div className="actions" style={{display: 'block'}}>
														<button type="submit" title="Đăng ký" className="button" ><span>Đăng ký</span></button>
													</div>
													<div className="input-box">
														<input type="text" name="email" id="newsletter" title="Đăng ký nhận bản tin" className="input-text required-entry validate-email" placeholder="Nhập địa chỉ email của bạn"/>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
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
											<div className="col-sm-12 col-md-12 col-xs-12 address-footer" style={{margin: '15px 0px'}}>
												<a target="_blank" to="/">
													<img src={dathongbao} style={{width: '100px', float: 'left'}} height= '40px'/>
												</a>
											</div>
										</div>
										<div align="left" style={{fontSize:'14.5px', marginBottom:'20px', marginTop:'10px', padding: '0px', textAlign: 'left', marginLeft: '10px'}}>
											<a target="_blank" href="https://www.facebook.com/1723023664478547/" title="Facebook">
												<img  alt="Facebook" src={facebookicon} />
											</a>
											<a target="_blank" href="https://www.instagram.com/deep.tried/" title="Instagram">
												<img style={{marginLeft: '24px'}} alt="Instagram" src={instaicon} />
											</a>
											<a target="_blank" href="https://www.youtube.com/channel/" title="Youtube">
												<img style={{marginLeft: '24px'}} alt="Youtube" src={youtubeicon} />
											</a>
											<a target="_blank" href="https://tumblr.com/" title="Tumblr">
												<img style={{marginLeft: '24px'}} alt="Tumblr" src={tumblricon} />
											</a>
											<a target="_blank" href="https://twitter.com/" title="Twitter">
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
													<li className="first"><Link to="/dieu-khoan-su-dung">Điều khoản sử dụng</Link></li>
													<li><Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link></li>
													<li><Link to="/gioi-thieu-fahasa">Giới thiệu Fahasa</Link></li>
													<li className="last"><Link to="/he-thong-trung-tam-nha-sach">Hệ thống trung tâm - nhà sách</Link></li>
												</ul>
											</div>
										</div>
										<div className="col-sm-6 col-md-4 col-sms-6 col-smb-12">
											<div className="footer-static-title">
												<h3>Hỗ trợ</h3>
											</div>
											<div className="footer-static-content ">
												<ul>
													<li className="first"><Link to="/doi-tra-hang">Chính sách đổi - trả - hoàn tiền</Link></li>
													<li><Link to="/chinh-sach-khach-si">Chính sách khách sỉ</Link></li>
													<li><Link to="/phuong-thuc-van-chuyen">Phương thức vận chuyển</Link></li>
													<li className="last"><Link to="/huong-dan-thanh-toan">Phương thức thanh toán</Link></li>
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
													<li><Link to="/customer/address">Thay đổi địa chỉ
															khách hàng</Link></li>
													<li><Link to="/customer/account">Chi tiết tài
															khoản</Link></li>
													<li className="last"><Link to="/sales/order/history">Lịch
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
										<li style={{color: '#adadad', paddingLeft: '14px'}}>Giấy chứng nhận Đăng ký Kinh doanh số **0355034530** do Sở Kế hoạch và Đầu tư Thành phố Hải Dương cấp ngày 28/11/2019.</li>
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